import { useParams } from 'react-router-dom';

import { getModuleLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";
import { redirect } from '../utils/redirect.js';

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';
import CardListWindow from './CardListWindow.jsx';

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'

import moduleImg from '../resources/content.png'; 
import moduleImgAlt from '../resources/content_hover.png'; 


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
const topControls = [
  {
      id:1,
      label:'Модули',
      img: moduleImg,
      altimg: moduleImgAlt,
      path:'/student/modules'
  }
];

function StudentModule() {
  const { id } = useParams();
  const data = useAsyncGet(() => getModuleLesson(id));
  const component = useLoading(data, ({title, lessons}) => 
    <LeftControlsPanel controls={leftControls}>
      <TopControlsPanel title={title} controls={topControls}>
        <CardListWindow cards={lessons} path='/student/lesson?id='/>
      </TopControlsPanel>
    </LeftControlsPanel>
  );
  return (<>{component}</>)
}

export default StudentModule