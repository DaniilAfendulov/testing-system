import Styles from '../../styles/TheoryTests/start-test.module.scss';
import Button from '../LoginForms/Button/Button';

function SubmitForm({title, btnText, onClick}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.question}>
          <span>{title}</span>
      </div>
      <div className={Styles['answers-container']}>
        <div className={Styles.answers}>
          <Button text={btnText} onClick={onClick} classes={[Styles.button]}/>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm