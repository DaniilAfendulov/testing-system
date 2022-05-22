import Button from '../Button/Button';
import LoginFormStyles from "../../../styles/login-form.module.scss";

export const LoginForm = (props) => {
  return (
    <div className='d-flex justify-content-center m-3'>
      <div className={[LoginFormStyles.form, 'd-block justify-content-center border border-2 border-dark'].join(' ')}  >
        <div className={[LoginFormStyles['title-bar'], 'row m-0'].join(' ')} >
          <div className='col-4'>
            <img src={props.icon} className='float-start align-top m-0' height='50px' alt=''></img>
          </div>
          <header className='col-4 d-flex justify-content-center'>
            <span className='m-auto'>Авторизация</span>
          </header>
          <div className='col-4'></div>
        </div>
        <div className='m-2'>
          {props.children}
        </div>
        <div className='d-flex justify-content-end m-2'>
          <Button onClick={props.onClick} text='ОК'/>
        </div>
      </div>
    </div>

  )
}

export default LoginForm;
