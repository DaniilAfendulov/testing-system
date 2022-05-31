import Styles from '../../styles/TheoryTests/test-container.module.scss';
import SubmitBtn from './SubmitBtn';

function TestContainer({question, children, onSubmit}) {
  return (
    <form className={Styles.container}>
        <div className={Styles.question}>
            <span>{question}</span>
        </div>
        <div className={Styles['answers-container']}>
          <div className={Styles.answers}>{children}</div>
          <SubmitBtn onClick={onSubmit}/>
        </div>
    </form>
  )
}

export default TestContainer