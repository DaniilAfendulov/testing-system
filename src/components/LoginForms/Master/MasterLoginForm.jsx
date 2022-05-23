import { useState ,useCallback } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import LoginTextInput from './LoginTextInput'
import icon from '../../../resources/master_icon.png'
import Styles from '../../../styles/master-login-form.module.scss';

const MasterLoginForm = (props) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const onClick = useCallback((e) => {
    if (login && password) {
      props.autorization(login, password)
    }
  }, [props.autorization, login, password]);
  return (
    <LoginForm onClick={onClick} icon={icon}>
      <LoginTextInput label='Логин' classes={['text-white']} setValue={setLogin}/>
      <LoginTextInput label='Пароль' classes={[Styles['blue-color']]} type='password' setValue={setPassword}/>
    </LoginForm>
  )
}

export default MasterLoginForm