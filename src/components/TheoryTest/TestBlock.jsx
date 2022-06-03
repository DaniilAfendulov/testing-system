import { useCallback, useMemo, useState, useRef } from 'react'

import StartTheoryTest from './StartTheoryTest.jsx';
import InputTest from './InputTest.jsx';
import RadioTest from './RadioTest.jsx';
import CheckBoxTest from './CheckBoxTest.jsx';
import ComboBoxTest from './ComboBoxTest.jsx';
import BottomPanel from './BottomPanel.jsx';
import FinishTheoryTest from './FinishTheoryTest.jsx';

const testFactory = (tests, onSubmitTestHandler, lastTestHandler) => {  
    return tests.map((test, i) => 
      i === tests.length 
      ? mapTest(test, (ans) => lastTestHandler(i, ans))
      : mapTest(test, (ans) => onSubmitTestHandler(i, ans))
    );
  }
  
  const mapTest = (test, setResult) => {
    if(!test) return null;
    switch (test.type) {
      case 0:
        return <InputTest test={test} setResult={setResult}/>
      case 1:
        return <RadioTest test={test} setResult={setResult}/>
      case 2:
        return <CheckBoxTest test={test} setResult={setResult}/>
      case 3:
        return <ComboBoxTest test={test} setResult={setResult}/> 
    }
  }
  


function TestBlock({data}) {
  const answersRef = useRef(Array(data.length).fill(null));
  const setAnswers = useCallback((val) => answersRef.current = val, [answersRef]);

  const addAnswer = useCallback((index, answer) => {
    setAnswers(answersRef.current.map((el, i) => i === index ? answer : el));
  }, [setAnswers, answersRef.current]);

  const timer = useRef();
  const setTimer = useCallback((val) => timer.current = val, [timer]);
  const time = useRef(0);
  const setTime = useCallback((val) => time.current = val, [time]);

  const testsComponents = useRef();
  const [currentTest, setCurrentTest] = useState(null);

  const chooseTest = useCallback((index) => {
    if(testsComponents.current) setCurrentTest(testsComponents.current[index]);
  }, [setCurrentTest, testsComponents.current]);

  const testSubmit = useCallback((index, answer) => {
    addAnswer(index, answer);
    chooseTest(index+1);
  }, [addAnswer, chooseTest]);
  
  const lastTestSubmit = useCallback((index, answer) => {
    addAnswer(index, answer);
    setCurrentTest(<FinishTheoryTest onClick={(e) => console.log(e)}/>)
  }, [addAnswer, setCurrentTest]);

  testsComponents.current = useMemo(() => 
    data ? testFactory(data, testSubmit, lastTestSubmit) : null
  , [data, addAnswer, testSubmit, lastTestSubmit]);

  const buttonsCallbacks = useMemo(() => 
    data ? data.map((_, i) => (e)=>chooseTest(i)) : null
  , [data, chooseTest]);

  const addSecond = useCallback(() => {
    setTime(time.current+1);
    console.log(time.current)
  }, [timer, setTimer]);

  const start = useCallback((e) => {
    setTimer(setInterval(addSecond, 1000));
    chooseTest(0);
  }, [setTimer, addSecond, chooseTest]);


  if(!currentTest){
    setCurrentTest(<StartTheoryTest onClick={start}/>);
  }

  return (
    <>    
      <>{currentTest}</>
      <BottomPanel buttonsCallbacks={buttonsCallbacks} timeRef={time}/>
    </>
  )
}

export default TestBlock