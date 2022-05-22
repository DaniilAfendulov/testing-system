import {useState, useMemo, useCallback} from 'react'
import HorizontalSeparator from './HorizontalSeparator'

const PanelControl = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isChecked = useMemo(() => props.isChecked(props.id), [props.isChecked, props.id]);
  const classes = useMemo(() => ['panel-control', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'].join(' '), []);

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
    <div className='d-flex panel-control-conteiner'>
      <div className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <div className='p-2'>
          <img src={img} alt='img' className='img-fluid'></img>
        </div>
        <div className=''>{props.label}</div>
        {props.separator}
      </div>
    </div>
  )
}

export default PanelControl