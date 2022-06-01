import Timer from './Timer';
import NumericButton from './NumericButton';
import Styles from '../../styles/TheoryTests/bottom-panel.module.scss';

function BottomPanel({buttonsCallbacks, time}) {
  return (
    <div className={Styles.container}>
      <div>{ buttonsCallbacks.map((bc,i) => <NumericButton key={i} text={1+i} onClick={bc}/>)}</div>
      <div><Timer time={time}/></div>
    </div>
  )
}

export default BottomPanel