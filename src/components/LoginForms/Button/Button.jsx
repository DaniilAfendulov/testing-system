import { useMemo } from "react";
import BtnStyles from "../../../styles/button.module.scss";

const Button = (props) => {
  const styles = useMemo(
    () =>  ['button', 'rounded-1', BtnStyles.button]
      .concat(props.classes ? props.classes : []).join(' ')
      ,[props.classes])

  return (
    <button className={styles} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  )
}

export default Button;
