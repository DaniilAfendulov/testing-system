import {useCallback, useMemo} from 'react'
import Styles from '../../styles/TheoryTests/radio-input.module.scss';
import { formStyles } from '../../utils/form-styles';

function RadioInput({label, value, chooseValue, isChecked}) {
  const onChange = useCallback((e) => {
    chooseValue(value);
  }, [value, chooseValue]);
  const radioStyles = useMemo(() => 
    formStyles([Styles.radio].concat([isChecked(value)?Styles.checked:'']))
  ,[value, isChecked]);
  return (
      <div className={Styles.container} onClick={onChange}>
        <div className={radioStyles}></div>
        <span>{label}</span>
      </div>
  )
}

export default RadioInput