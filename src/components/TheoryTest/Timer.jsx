import {useMemo} from 'react'
import Styles from '../../styles/TheoryTests/timer.module.scss';  

const parseTime = (time) => {
  let min = parseInt(time/60);
  let sec = time%60;
  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;
  return min + ':' + sec;
}
function Timer({time}) {
  const t = useMemo(() => parseTime(time), [time])
  return (
    <div className={Styles.container}>
        <span>{t}</span>
    </div>
  )
}

export default Timer