import { getModules } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from "../components/ControlsPanel/LeftControlsPanel"
import TopControlsPanel from '../components/ControlsPanel/TopControlsPanel'
import CardListWindow from './CardListWindow';

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'
import LoadingSpinner from './LoadingSpinner.jsx';
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
function StudentModuleList({chooseModule}) {
  const modules = useAsyncGet(getModules);
  const loadedComponent = (
    <LeftControlsPanel controls={controls}>
      <TopControlsPanel title='Список модулей'>
        <CardListWindow cards={modules} onCardClick={chooseModule}></CardListWindow>
      </TopControlsPanel>
    </LeftControlsPanel>
  );
  const component = useLoading(modules, loadedComponent);
  return (
    <>{component}</>
  )
}

export default StudentModuleList