import Styles from '../../styles/TheoryTests/numeric-button.module.scss'; 

function NumericButton({onClick, text}) {
  return (
    <div onClick={onClick} className={Styles.container}>
      <div>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default NumericButton