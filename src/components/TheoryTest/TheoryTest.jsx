import {useCallback, useMemo, useState} from 'react'

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
  const getData = useCallback(() =>  getTheoryTest(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);
  
  const [currentTest, setCurrentTest] = useState(<StartTheoryTest/>);
  const [tests, setTests] = useState(null);
  const [answers, setAnswers] = useState();
  const addAnswer = useCallback((index, answer) => setAnswers(answer.map((el, i) => i === index ? answer : el)), [answers, setAnswers]);
  const testsComponents = useMemo(() => tests ? testBuild(tests, addAnswer) : null, [tests]);

  const chooseTest = useCallback((index) => setCurrentTest(testsComponents[index]), [setCurrentTest, testsComponents]);

  const component = useLoading(data, (tests) => {
    topControls[1].path = '/student/module?id='+moduleId;
    topControls[2].path = '/student/lesson'+search;
    setTests(tests);
    setAnswers(new Array(tests.length));
    return(
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title="Теоретический тест" controls={topControls.slice(0,3)}>
          <>{currentTest}</>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
  });
  return (<>{component}</>)
}

export default TheoryTest