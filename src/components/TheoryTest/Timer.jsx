import {useMemo} from 'react'
import Styles from '../../styles/TheoryTests/timer.module.scss';  

const parseTime = (time) => {
  if(time === undefined || time === null) return parseTime(0);
  let min = parseInt(time/60);
  let sec = time%60;
  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;
  return min + ':' + sec;
}
function Timer({timeRef}) {
  const ptime = useMemo(() => parseTime(timeRef.current), [timeRef.current])
  return (
    <div className={Styles.container}>
        <span>{ptime}</span>
    </div>
  )
}

export default Timer