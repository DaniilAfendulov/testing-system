import {useCallback} from 'react';
import Styles from '../../styles/TheoryTests/combo-box.module.scss';

function ComboBox({options, chooseValue}) {
    const onChange = useCallback((e) => {
        chooseValue(e.target.value);
    }, [chooseValue]);
  return (
      <div className={Styles.container}>
        <select className={Styles.input} onChange={onChange}>
            <option disabled></option>
            {options.map(option => <option value={option}>{option}</option>)}
        </select>
      </div>
  )
}

export default ComboBox