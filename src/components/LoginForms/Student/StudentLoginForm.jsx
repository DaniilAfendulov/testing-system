import LoginForm from '../LoginForm/LoginForm';
import LoginComboBox from './LoginComboBox';
import icon from '../../../resources/training_icon.png'

var getChoosenGroup, getChoosenStudent;

const StudentLoginForm = (props) => {
  const groups = [20190,20290,20490];
  const students = ['Афендулов', 'Андрейчинкова', 'Смелков', 'Соколов'];
  const onClick = (e) => {
    if (getChoosenGroup && getChoosenStudent) {
      props.autorization(getChoosenGroup(), getChoosenStudent())
    }
  }
  return (
    <LoginForm onClick={onClick} icon={icon}>
      <LoginComboBox label='Группа' options={groups} getValueCallback={(c) => {getChoosenGroup = c}}/>
      <LoginComboBox label='Студент' options={students} getValueCallback={(c) => {getChoosenStudent = c}}/>
    </LoginForm>
  )
}

export default StudentLoginForm;