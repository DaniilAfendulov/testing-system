import Styles from '../styles/loading.module.scss';

function LoadingSpinner() {
  return (
    <div className={Styles.container}>
        <div className={['spinner-border', Styles.spinner].join(' ')}></div>
    </div>
  )
}

export default LoadingSpinner