import { useState, useCallback } from "react";
import TextInput from "../LoginForms/Master/TextInput";
import TestContainer from "./TestContainer";
import Styles from '../../styles/TheoryTests/input-test.module.scss';

function InputTest({test, setResult}) {
  const [answer, setAnswer] = useState('');
  const onClick = useCallback((e) => {
    setResult(answer);
  }, [answer, setResult]);
  return (
    <TestContainer question={test.question} onClick={onClick}>
        <TextInput setValue={setAnswer}/>
    </TestContainer>
  )
}

export default InputTest