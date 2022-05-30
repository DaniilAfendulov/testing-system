import { getModules } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";
import { redirect } from '../utils/redirect.js';

import LeftControlsPanel from "../components/ControlsPanel/LeftControlsPanel"
import TopControlsPanel from '../components/ControlsPanel/TopControlsPanel'
import CardListWindow from './CardListWindow';

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'
const leftControls= [
  {
    id:1,
    label:'Контент',
    img: leftContent,
    altimg: leftContentAlt,
    path:'/student/modules'
  },
  {
    id:2,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt,
    path:'/student/statistics'
  }
];
const chooseModule = (id) => {
  redirect('student/module?id='+id);
}
const getPath = ({id}) => {
  return '/student/module?id='+id;
}

function StudentModuleList() {
  const modules = useAsyncGet(getModules);
  const component = useLoading(modules, (modules) => 
    <LeftControlsPanel controls={leftControls}>
      <TopControlsPanel title='Список модулей'>
        <CardListWindow cards={modules} getPath={getPath}/>
      </TopControlsPanel>
    </LeftControlsPanel>  
  );
  return (
    <>{component}</>
  )
}

export default StudentModuleList