import {useState, useCallback} from 'react'
import PanelControl from './PanelControl'

function TopPanelControlList(props) {
  const [id, setId] = useState(null);
  const onClick = useCallback((key) => {
    setId(key);
  }, []);
  const isChecked = useCallback((key) => key===id, [id]);

  return (
    <>
    {
      props.controls.map((control) => 
        <PanelControl 
          key={control.id}
          id={control.id} 
          label={control.label} 
          img={control.img}  
          altimg={control.altimg}
          to={control.path}
          /*onClick={onClick}*/
          isChecked={isChecked}
          separator={props.separator}
        />)
    }
    </>
  )
}

export default TopPanelControlList