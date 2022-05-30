import { getModuleLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';
import CardListWindow from './CardListWindow.jsx';

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'

import moduleImg from '../resources/content.png'; 
import moduleImgAlt from '../resources/content_hover.png'; 
import { useCallback } from 'react';


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
  const search = window.location.search;
  const moduleId = new URLSearchParams(search).get("id");
  const getPath = useCallback(({id}) => 
    '/student/lesson?' + new URLSearchParams({moduleId:moduleId, id:id}).toString(),
  [moduleId]);
  const getData = useCallback(() => getModuleLesson(moduleId), [moduleId]);
  const data = useAsyncGet(getData);

  const component = useLoading(data, ({title, cards}) => {
    return(
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title={title} controls={topControls}>
          <CardListWindow cards={cards} getPath={getPath}/>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
  });
    
  return (<>{component}</>)
}

export default StudentModule