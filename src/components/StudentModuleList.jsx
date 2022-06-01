import { getModules } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";
import { redirect } from '../utils/redirect.js';

import LeftControlsPanel from "../components/ControlsPanel/LeftControlsPanel"
import TopControlsPanel from '../components/ControlsPanel/TopControlsPanel'
import CardListWindow from './CardListWindow';

import {leftControls} from './ControlsPanel/controls.js';

const getPath = ({id}) => {
  return '/student/module?id='+id;
}

function StudentModuleList() {
  const modules = useAsyncGet(getModules);

  const [isLoading, LoadComponent] = useLoading(modules);  
  return (
    <>
      { isLoading 
      ? <>{LoadComponent}</>
      : <LeftControlsPanel controls={leftControls}>
          <TopControlsPanel title='Список модулей'>
            <CardListWindow cards={modules} getPath={getPath}/>
          </TopControlsPanel>
        </LeftControlsPanel>  
      }
    </>
  )
}

export default StudentModuleList