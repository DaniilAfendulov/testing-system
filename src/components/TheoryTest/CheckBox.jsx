import { useCallback, useMemo } from 'react'
import Styles from '../../styles/TheoryTests/check-box.module.scss';
import { formStyles } from '../../utils/form-styles';

function CheckBox({label, value, chooseValue, isChecked}) {
    const onChange = useCallback((e) => {
        chooseValue(value);
    }, [value, chooseValue]);
    const checkBoxStyles = useMemo(() => 
        formStyles([Styles['check-box']].concat([isChecked(value)?Styles.checked:'']))
    ,[isChecked, value]);
    return (
        <div className={Styles.container} onClick={onChange}>
        <div className={checkBoxStyles}></div>
        <span>{label}</span>
        </div>
    )
}

export default CheckBox