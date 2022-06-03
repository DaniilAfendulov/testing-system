import { getModules } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';

import LeftControlsPanel from "../components/ControlsPanel/LeftControlsPanel"
import TopControlsPanel from '../components/ControlsPanel/TopControlsPanel'
import CardListWindow from './CardListWindow';

import {leftControls} from './ControlsPanel/controls.js';
import LoadingBlock from './DataBlock.jsx';

const getPath = ({id}) => {
  return '/student/module?id='+id;
}

function StudentModuleList() {
  const data = useAsyncGet(getModules);

  return (
    <LeftControlsPanel controls={leftControls}>
      <TopControlsPanel title='Список модулей'>
        <LoadingBlock data={data}>
          { data && 
            <CardListWindow cards={data} getPath={getPath}/>
          }
        </LoadingBlock>
      </TopControlsPanel>
    </LeftControlsPanel>  
  )
}

export default StudentModuleList