import {useCallback} from 'react';
import {formStyles} from '../../../utils/form-styles.js';
import Styles from '../../../styles/login-text-input.module.scss';

const LoginTextInput = (props) => {
  const type = props.type ? props.type : 'text';
  const inputClasses = formStyles(['w-100', Styles['control-active-border-brush'], 'rounded-2'].concat(props.classes ? props.classes : []));
  const containerClasses = formStyles(['rounded-2', Styles['login-text-input']]);
  const onChange = useCallback((e) => {
    props.setValue(e.target.value);
  }, [props.setValue]);
  return (
    <div className='row mb-2 mt-2'>
      <div className='col-3'> {props.label} </div>
      <div className='col-9' >
        <div className={containerClasses}>
          <input type={type} className={inputClasses} onChange={onChange}/>
        </div>
      </div>
    </div>
  )
}

export default LoginTextInput;