import {useState, useCallback} from 'react'

import Styles from '../../styles/TheoryTests/table-test.module.scss';

import RadioInput from "./RadioInput";
import TestContainer from "./TestContainer";

function RadioTest({question, answers, setResult}) {
  const [answer, setAnswer] = useState('');
  const onClick = useCallback((e) => {
    setResult(answer);
  }, [answer, setResult]);
  const isChecked = useCallback((val) => val===answer, [answer]);
  return (
    <TestContainer question={question} onSubmit={onClick}>
      <table className={Styles.table}>
        <tbody>
          <tr>
            <td><RadioInput label={answers[0]} value={0} chooseValue={setAnswer} isChecked={isChecked}/></td>
            <td><RadioInput label={answers[1]} value={1} chooseValue={setAnswer} isChecked={isChecked}/></td>
          </tr>
          <tr>
            <td><RadioInput label={answers[2]} value={2} chooseValue={setAnswer} isChecked={isChecked}/></td>
            <td><RadioInput label={answers[3]} value={3} chooseValue={setAnswer} isChecked={isChecked}/></td>
          </tr>
        </tbody>
      </table>
    </TestContainer>
  )
}

export default RadioTest