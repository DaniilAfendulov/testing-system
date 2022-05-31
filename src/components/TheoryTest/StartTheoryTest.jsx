import Styles from '../../styles/TheoryTests/start-test.module.scss';
import Button from '../LoginForms/Button/Button';
function StartTheoryTest({onClick}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.question}>
          <span>Вас приветсвует модуль тестирования. Для начала теста нажмите "Начать тест". Успехов!</span>
      </div>
      <div className={Styles['answers-container']}>
        <div className={Styles.answers}>
          <Button text='начать тест' onClick={onClick} classes={[Styles.button]}/>
        </div>
      </div>
    </div>
  )
}

export default StartTheoryTest