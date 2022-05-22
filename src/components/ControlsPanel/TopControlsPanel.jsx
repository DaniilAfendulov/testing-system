import PanelControlList from "./PanelControlList";

function TopControlsPanel(props) {
  return (
    <div className='d-flex min-vw-100 top-panel'>
      <PanelControlList controls={props.controls}/>
    </div>
  )
}

export default TopControlsPanel