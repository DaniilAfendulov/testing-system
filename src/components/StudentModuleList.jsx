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
const controls= [
  {
    id:1,
    label:'Контент',
    img: leftContent,
    altimg: leftContentAlt
  },
  {
    id:2,
    label:'Статистика',
    img: leftStat,
    altimg: leftStatAlt
  }
];
const chooseModule = (id) => {
  redirect('student/module?id='+id);
}
function StudentModuleList() {
  const modules = useAsyncGet(getModules);
  const component = useLoading(modules, (modules) => 
    <LeftControlsPanel controls={controls}>
      <TopControlsPanel title='Список модулей'>
        <CardListWindow cards={modules} onCardClick={chooseModule}></CardListWindow>
      </TopControlsPanel>
    </LeftControlsPanel>  
  );
  return (
    <>{component}</>
  )
}

export default StudentModuleList