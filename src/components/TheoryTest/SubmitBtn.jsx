import Styles from '../../styles/TheoryTests/submit-btn.module.scss';

function SubmitBtn({onClick}) {
  return (
    <div className={Styles.container} onClick={onClick}>
      <div className={Styles.img}></div>
      <span>Подтвердить</span>
    </div>
  )
}

export default SubmitBtn