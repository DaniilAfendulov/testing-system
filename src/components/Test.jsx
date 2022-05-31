import {useState} from 'react'
import CheckBoxTest from './TheoryTest/CheckBoxTest';
import InputTest from './TheoryTest/InputTest'
import RadioTest from './TheoryTest/RadioTest';


const question = "тестовый вопрос";

function Test() {
  const [first, setfirst] = useState();
  return (
    <CheckBoxTest 
    question={question} 
    answers={['ответ 0', 'ответ 1', 'ответ 2', 'ответ 3']} 
    setResult={setfirst}/>
  )
}

export default Test