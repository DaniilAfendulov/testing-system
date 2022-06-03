import {useCallback, useMemo} from 'react';
import {formStyles} from '../../../utils/form-styles.js';
import Styles from '../../../styles/TheoryTests/input-test.module.scss';

function TextInput(props) {
    const type = useMemo(() => props.type ? props.type : 'text', [props.type]);
    const inputClasses = useMemo(() => formStyles([Styles.input].concat(props.classes?props.classes:[])), [props.classes]);
    const onChange = useCallback((e) => {
      props.setValue(e.target.value);
    }, [props.setValue]);
  return (
    <div className={Styles.container}>
      <input type={type} className={inputClasses} onChange={onChange}/>
    </div>
  )
}

export default TextInput