import { useState, useCallback } from "react";
import TextInput from "../LoginForms/Master/TextInput";
import TestContainer from "./TestContainer";

function InputTest({test, setResult}) {
  const [answer, setAnswer] = useState('');
  const onSubmit = useCallback((e) => {
    setResult(answer);
    console.log('click')
  }, [answer, setResult]);
  return (
    <TestContainer question={test.question} onSubmit={onSubmit}>
      <TextInput setValue={setAnswer}/>
    </TestContainer>
  )
}

export default InputTest