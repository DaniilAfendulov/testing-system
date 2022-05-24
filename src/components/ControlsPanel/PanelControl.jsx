import {useState, useMemo, useCallback} from 'react';
import {formStyles} from '../../utils/form-styles.js';
import Styles from '../../styles/ControlsPanel/panel-control.module.scss';

const PanelControl = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isChecked = useMemo(() => props.isChecked(props.id), [props.isChecked, props.id]);
  const classes = formStyles([Styles['panel'], Styles['control'], 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center']);
  const containerClasses = formStyles([Styles['panel'], Styles['container'], 'd-flex']);
  const img = useMemo(() => isChecked || isMouseOver ? props.altimg : props.img, [isChecked, isMouseOver]);
  const onClick = useCallback(
    (e) => {
      props.onClick(props.id);
      setIsMouseOver(false);
    }, [props.id]);
  const onMouseOver = () => {
    if (!(isChecked || isMouseOver)) {
      setIsMouseOver(true);
    }
  };
  const onMouseLeave = () => {
    if (!(isChecked || !isMouseOver)) {
      setIsMouseOver(false);
    }
  };
  
  return (
    <>
    <div className={containerClasses}>
      <div className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <div className={Styles.img}>
          <img src={img} alt='img' className=''></img>
        </div>
        <div className={Styles.title}><span>{props.label}</span></div>
      </div>
    </div>
    {props.separator}
    </>
  )
}

export default PanelControl