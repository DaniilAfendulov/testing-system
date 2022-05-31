import TextInput from './TextInput.jsx';

const LoginTextInput = (props) => {
  return (
    <div className='row mb-2 mt-2'>
      <div className='col-3'> {props.label} </div>
      <div className='col-9' >
        <TextInput type={props.type} classes={props.classes} setValue={props.setValue}/>
      </div>
    </div>
  )
}

export default LoginTextInput;