import TopPanelControlList from "./TopPanelControlList";
import VerticalSeparator from "./VerticalSeparator";
import Styles from '../../styles/ControlsPanel/top-panel.module.scss';
import {formStyles} from '../../utils/form-styles.js';
import { useMemo } from "react";

function TopControlsPanel(props) {
  const classes = formStyles(['d-flex', Styles['top-panel']]);
  const title = useMemo(() =>{
    if(props.title){
      return( 
        <div className={Styles['title-bar']}>
          <span>{props.title}</span>
        </div>
      )
    }
    return(<div></div>)
  },[props.title])
  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className={classes}>
        <TopPanelControlList controls={props.controls} separator={<VerticalSeparator/>}/>
        {title}
      </div>
      {props.children}
    </div>

  )
}

export default TopControlsPanel