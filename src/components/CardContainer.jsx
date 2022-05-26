import Styles from '../../src/styles/card-list-window.module.scss'

function CardContainer(props) {
  return (
    <div className={Styles.container}>
        {props.children}
    </div>
  )
}

export default CardContainer