import HorizontalSeparator from "./HorizontalSeparator";
import PanelControlList from "./PanelControlList";

const LeftControlsPanel = (props) => {
  return (
    <div className='d-flex flex-column  min-vh-100 left-panel'>
      <PanelControlList controls={props.controls} separator={<HorizontalSeparator/>}/>
    </div>
  )
}

export default LeftControlsPanel