import { Link } from 'react-router-dom';
import Styles from '../../src/styles/link.module.scss';

function LinkComponent({path, children}) {
  return (
    <Link to={path} className={Styles.link}>
        {children}
    </Link>
  )
}

export default LinkComponent