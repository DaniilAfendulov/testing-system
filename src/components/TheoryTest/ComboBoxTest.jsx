import { useState, useCallback } from "react";
import TestContainer from "./TestContainer";
import ComboBox from "./ComboBox";

function ComboBoxTest({test, setResult}) {
    const [answer, setAnswer] = useState('');
    const onClick = useCallback((e) => {
      setResult(answer);
    }, [answer, setResult]);
    return (
      <TestContainer question={test.question} onSubmit={onClick}>
        <ComboBox chooseValue={setAnswer} options={test.answers}/>
      </TestContainer>
    )
}

export default ComboBoxTest