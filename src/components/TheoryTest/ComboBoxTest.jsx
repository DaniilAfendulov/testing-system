import { useState, useCallback } from "react";
import TestContainer from "./TestContainer";
import ComboBox from "./ComboBox";

function ComboBoxTest({question, setResult, answers}) {
    const [answer, setAnswer] = useState('');
    const onClick = useCallback((e) => {
      setResult(answer);
    }, [answer, setResult]);
    return (
      <TestContainer question={question} onSubmit={onClick}>
        <ComboBox chooseValue={setAnswer} options={answers}/>
      </TestContainer>
    )
}

export default ComboBoxTest