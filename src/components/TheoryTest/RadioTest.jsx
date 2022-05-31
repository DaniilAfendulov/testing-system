import {useState, useCallback} from 'react'

import Styles from '../../styles/TheoryTests/table-test.module.scss';

import RadioInput from "./RadioInput";
import TestContainer from "./TestContainer";

function RadioTest({test, setResult}) {
  const [answer, setAnswer] = useState('');
  const onClick = useCallback((e) => {
    setResult(answer);
  }, [answer, setResult]);
  const isChecked = useCallback((val) => val===answer, [answer]);
  return (
    <TestContainer question={test.question} onSubmit={onClick}>
      <table className={Styles.table}>
        <tbody>
          <tr>
            <td><RadioInput label={test.answers[0]} value={test.answers[0]} chooseValue={setAnswer} isChecked={isChecked}/></td>
            <td><RadioInput label={test.answers[1]} value={test.answers[1]} chooseValue={setAnswer} isChecked={isChecked}/></td>
          </tr>
          <tr>
            <td><RadioInput label={test.answers[2]} value={test.answers[2]} chooseValue={setAnswer} isChecked={isChecked}/></td>
            <td><RadioInput label={test.answers[3]} value={test.answers[3]} chooseValue={setAnswer} isChecked={isChecked}/></td>
          </tr>
        </tbody>
      </table>
    </TestContainer>
  )
}

export default RadioTest