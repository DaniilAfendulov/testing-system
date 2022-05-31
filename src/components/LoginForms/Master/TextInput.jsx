import {useCallback} from 'react';
import {formStyles} from '../../../utils/form-styles.js';
import Styles from '../../../styles/login-text-input.module.scss';

function TextInput(props) {
    const type = props.type ? props.type : 'text';
    const inputClasses = formStyles(['w-100', Styles['control-active-border-brush'], 'rounded-2'].concat(props.classes ? props.classes : []));
    const containerClasses = formStyles(['rounded-2', Styles['login-text-input']].concat(props.containerClasses ? props.containerClasses : []));
    const onChange = useCallback((e) => {
        props.setValue(e.target.value);
    }, [props.setValue]);
  return (
    <div className={containerClasses}>
        <input type={type} className={inputClasses} onChange={onChange}/>
    </div>
  )
}

export default TextInput