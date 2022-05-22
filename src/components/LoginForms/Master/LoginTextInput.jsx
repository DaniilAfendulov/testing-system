import { useCallback} from 'react';


const LoginTextInput = (props) => {
  const type = props.type ? props.type : 'text';
  const classes = ['w-100', 'ControlActiveBorderBrush', 'rounded-2'].concat(props.classes ? props.classes : []).join(' '); 
  const onChange = useCallback((e) => {
    props.setValue(e.target.value);
  }, [props.setValue]);
  return (
    <div className='row mb-2 mt-2'>
      <div className='col-3'> {props.label} </div>
      <div className='col-9' >
        <div className='LoginTextInput rounded-2'>
          <input type={type} className={classes} onChange={onChange}/>
        </div>
      </div>
    </div>
  )
}

export default LoginTextInput;