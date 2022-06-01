import { useCallback, useMemo, useState } from 'react'

import { getTheoryTest } from '../../utils/api.js';
import { useAsyncGet } from '../../utils/useAsyncGet.js';
import { useLoading } from "../../utils/useLoading.js";

import LeftControlsPanel from '../ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from '../ControlsPanel/TopControlsPanel.jsx';

import { leftControls, topControls} from '../ControlsPanel/controls.js';
import StartTheoryTest from './StartTheoryTest.jsx';
import InputTest from './InputTest.jsx';
import RadioTest from './RadioTest.jsx';
import CheckBoxTest from './CheckBoxTest.jsx';
import ComboBoxTest from './ComboBoxTest.jsx';
import BottomPanel from './BottomPanel.jsx';

const testBuild = (tests, addAnswer) => {  
  return tests.map((test, i) => mapTest(test, (ans => addAnswer(i, ans))));
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

function TheoryTest() {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const lessonId = searchParams.get("id");
  const moduleId = searchParams.get("moduleId");

  topControls[1].path = useMemo(() => '/student/module?id='+moduleId, [moduleId]);
  topControls[2].path = useMemo(() => '/student/lesson'+search, [search]);

  const getData = useCallback(() =>  getTheoryTest(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);

  const [answers, setAnswers] = useState();
  const addAnswer = useCallback((index, answer) => setAnswers(answer.map((el, i) => i === index ? answer : el)), [setAnswers]);

  const testsComponents = useMemo(() => data ? testBuild(data, addAnswer) : null, [data, addAnswer]);
  const [currentTest, setCurrentTest] = useState(null);
  const chooseTest = useCallback((index) => {
    if(testsComponents) setCurrentTest(testsComponents[index]);
  }, [setCurrentTest, testsComponents]);
  const buttonsCallbacks = useMemo(() => data ? data.map((_, i) => (e)=>chooseTest(i)) : null, [data, chooseTest]);

  const [timer, setTimer] = useState({timer:null, time:0});
  const addSecond = useCallback(() => {
    setTimer({timer: timer.timer, time: timer.time+1});
    console.log(timer)
  }, [timer, setTimer]);

  const start = useCallback((e) => {
    setTimer({timer:setInterval(addSecond, 1000), time:0});
    chooseTest(0);
  }, [setTimer, addSecond, chooseTest]);


  if(!currentTest){
    setCurrentTest(<StartTheoryTest onClick={start}/>);
  }

  const [isLoading, LoadComponent] = useLoading(data);
  return (
    <>
      { isLoading 
      ? <>{LoadComponent}</>
      : <LeftControlsPanel controls={leftControls}>
          <TopControlsPanel title="Теоретический тест" controls={topControls.slice(0,3)}>
            <>{currentTest}</>
            <BottomPanel buttonsCallbacks={buttonsCallbacks} time={timer.time}/>
          </TopControlsPanel>
        </LeftControlsPanel>
      }
    </>
  )
}

export default TheoryTest