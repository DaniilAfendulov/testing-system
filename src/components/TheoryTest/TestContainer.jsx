import Styles from '../../styles/TheoryTests/test-container.module.scss';
import SubmitBtn from './SubmitBtn';

const onClick = () => {

}
function TestContainer({question, children}) {
  return (
    <form className={Styles.container}>
        <div className={Styles.question}>
            <span>{question}</span>
        </div>
        <div className={Styles['answers-container']}>
          <div className={Styles.answers}>{children}</div>
          <SubmitBtn onClick={onClick}/>
        </div>
    </form>
  )
}

export default TestContainer