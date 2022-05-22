import {useState} from 'react'

export const LoginComboBox = (props) => {
  const [value, setValue] = useState(props.options[0] ? props.options[0].toString() : '');
  props.getValueCallback(() => value);  
  const onSelected = (e) => {
    setValue(e.target.value);
    console.log(value);
  }
  
  return (
    <div className='row mb-2 mt-2'>
      <div className='col-3'> {props.label} </div>
      <div className='col-9'>
        <select className='w-100' onChange={onSelected}>
            {props.options.map((option, index) => {
              return <option key={index} value={option}>{option}</option>;
            })}
        </select>
      </div>
    </div>
  )
}

export default LoginComboBox;
