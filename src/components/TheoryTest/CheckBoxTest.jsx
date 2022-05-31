import { useCallback, useState } from "react";
import CheckBox from "./CheckBox";
import TestContainer from "./TestContainer";
import Styles from '../../styles/TheoryTests/table-test.module.scss';

function CheckBoxTest({question, answers, setResult}) {
  const [answerList, setAnswer] = useState([]);
  const onClick = useCallback((e) => {
    setResult(answerList);
  }, [answerList, setResult]);
  const isChecked = useCallback((val) => answerList.includes(val), [answerList]);
  const chooseValue = useCallback(val => {
    if (isChecked(val)) {
      setAnswer(answerList.filter(v => v!==val));
      return;
    }
    setAnswer([...answerList, val]);
  }, [answerList, setAnswer, isChecked]);
  return (
    <TestContainer question={question} onClick={onClick}>
      <table className={Styles.table}>
        <tbody>
          <tr>
            <td><CheckBox label={answers[0]} value={0} chooseValue={chooseValue} isChecked={isChecked}/></td>
            <td><CheckBox label={answers[1]} value={1} chooseValue={chooseValue} isChecked={isChecked}/></td>
          </tr>
          <tr>
            <td><CheckBox label={answers[2]} value={2} chooseValue={chooseValue} isChecked={isChecked}/></td>
            <td><CheckBox label={answers[3]} value={3} chooseValue={chooseValue} isChecked={isChecked}/></td>
          </tr>
        </tbody>
      </table>
    </TestContainer>
  )
}

export default CheckBoxTest