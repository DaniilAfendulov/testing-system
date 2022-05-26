import {useState, useCallback} from 'react'
import PanelControl from './PanelControl'

function PanelControlList(props) {
  const [id, setId] = useState(props.controls[0].id);
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
          /*onClick={onClick}*/
          to={control.path}
          isChecked={isChecked}
          separator={props.separator}
        />)
    }
    </>
  )
}

export default PanelControlList