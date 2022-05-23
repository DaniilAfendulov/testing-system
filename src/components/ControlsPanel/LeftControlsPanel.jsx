import HorizontalSeparator from "./HorizontalSeparator";
import PanelControlList from "./PanelControlList";
import {formStyles} from '../../utils/form-styles.js';
import Styles from '../../styles/ControlsPanel/left-panel.module.scss';

const LeftControlsPanel = (props) => {
  return (
    <div className='d-flex flex-row flex-grow-1'>
      <div className={formStyles(['d-flex', 'flex-column', Styles['left-panel']])}>
        <PanelControlList controls={props.controls} separator={<HorizontalSeparator/>}/>
      </div>
      {props.children}
    </div>
  )
}

export default LeftControlsPanel