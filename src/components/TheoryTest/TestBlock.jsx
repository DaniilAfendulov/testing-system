import { useCallback, useMemo, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import StartTheoryTest from './StartTheoryTest.jsx';
import InputTest from './InputTest.jsx';
import RadioTest from './RadioTest.jsx';
import CheckBoxTest from './CheckBoxTest.jsx';
import ComboBoxTest from './ComboBoxTest.jsx';
import BottomPanel from './BottomPanel.jsx';
import FinishTheoryTest from './FinishTheoryTest.jsx';

const testFactory = (tests, onSubmitTestHandler, lastTestHandler) => {  
    return tests.map((test, i) => 
      i === tests.length-1
      ? mapTest(test, (ans) => lastTestHandler(i, ans))
      : mapTest(test, (ans) => onSubmitTestHandler(i, ans))
    );
  }
  
  const mapTest = (test, setResult) => {
    if(!test) return null;
    const setAnswer = (answer) => {
      let res = Array.isArray(answer) ? answer : [answer];
      res = {ID:test.id, answers:res};
      setResult(res);
    }
    switch (test.type) {
      case 0:
        return <InputTest test={test} setResult={setAnswer}/>
      case 1:
        return <RadioTest test={test} setResult={setAnswer}/>
      case 2:
        return <CheckBoxTest test={test} setResult={setAnswer}/>
      case 3:
        return <ComboBoxTest test={test} setResult={setAnswer}/> 
    }
  }
  


function TestBlock({data}) {
  const navigate = useNavigate();
  const answersRef = useRef(Array(data.length).fill(null));
  const setAnswers = useCallback((val) => answersRef.current = val, [answersRef]);

  const addAnswer = useCallback((index, answer) => {
    setAnswers(answersRef.current.map((el, i) => i === index ? answer : el));
  }, [setAnswers, answersRef.current]);

  const timer = useRef();
  const setTimer = useCallback((val) => timer.current = val, [timer]);
  const time = useRef(0);
  const [t, setT] = useState(0);
  const setTime = useCallback((val) => {
    time.current = val;
    setT(val);
  }, [time]);
  const stopTimer = useCallback(() => {
    clearInterval(timer.current);
  }, [timer]);

  const testsComponents = useRef();
  const [currentTest, setCurrentTest] = useState(null);

  const chooseTest = useCallback((index) => {
    if(testsComponents.current) setCurrentTest(testsComponents.current[index]);
  }, [setCurrentTest, testsComponents.current]);

  const testSubmit = useCallback((index, answer) => {
    addAnswer(index, answer);
    chooseTest(index+1);
  }, [addAnswer, chooseTest]);
  
  const finishClick = useCallback((e) => {
    navigate('/student/lesson/'+window.location.search);
  }, []);

  const lastTestSubmit = useCallback((index, answer) => {
    addAnswer(index, answer);
    stopTimer();
    setCurrentTest(<FinishTheoryTest answers={answersRef.current} onClick={finishClick}/>);
  }, [addAnswer, setCurrentTest, answersRef.current]);

  testsComponents.current = useMemo(() => 
    data ? testFactory(data, testSubmit, lastTestSubmit) : null
  , [data, addAnswer, testSubmit, lastTestSubmit]);

  const buttonsCallbacks = useMemo(() => 
    data ? data.map((_, i) => (e)=>chooseTest(i)) : null
  , [data, chooseTest]);

  const addSecond = useCallback(() => {
    setTime(time.current+1);
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