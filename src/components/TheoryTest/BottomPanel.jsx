import Timer from './Timer';
import NumericButton from './NumericButton';
import Styles from '../../styles/TheoryTests/bottom-panel.module.scss';
import { useMemo } from 'react';

function BottomPanel({buttonsCallbacks, timeRef}) {
  return (
    <div className={Styles.container}>
      <div>{ buttonsCallbacks.map((bc,i) => <NumericButton key={i} text={1+i} onClick={bc}/>)}</div>
      <div><Timer timeRef={timeRef}/></div>
    </div>
  )
}

export default BottomPanel