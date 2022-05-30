import { useCallback } from 'react'

import { getLesson } from '../utils/api.js';
import { useAsyncGet } from '../utils/useAsyncGet.js';
import { useLoading } from "../utils/useLoading.js";

import LeftControlsPanel from './ControlsPanel/LeftControlsPanel.jsx';
import TopControlsPanel from './ControlsPanel/TopControlsPanel.jsx';

import leftContent from '../resources/leftContent.png'
import leftContentAlt from '../resources/leftContent_hover.png'
import leftStat from '../resources/leftStat.png'
import leftStatAlt from '../resources/leftStat_hover.png'

import moduleImg from '../resources/content.png'; 
import moduleImgAlt from '../resources/content_hover.png'; 

import lessonImg from '../resources/module.png'; 
import lessonImgAlt from '../resources/module_hover.png';

import CardContainer from './CardContainer.jsx';
import Card from './Card.jsx';
import LinkCard from './LinkCard.jsx';

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
  },
  {
      id:2,
      label:'Уроки',
      img: lessonImg,
      altimg: lessonImgAlt,
      path:'/student/module'
  },
];

const cardBuilder = (isDisabled, title, disabledDescription, path) => {
  if (isDisabled) {
    return <Card title={title} description={disabledDescription}/>
  }
  return <LinkCard path={path} cardProps={{title: title}} />
}

function StudentLesson() {
  const search = window.location.search;
  const lessonId = new URLSearchParams(search).get("id");
  const moduleId = new URLSearchParams(search).get("moduleId");
  const url = window.location.pathname;
  const getData = useCallback(() =>  getLesson(moduleId, lessonId), [moduleId, lessonId]);
  const data = useAsyncGet(getData);
  const component = useLoading(data, ({title, isVideoDisabled, isPracticeDisabled, isTheoryDisabled}) => {
    topControls[1].path = '/student/module?id='+moduleId;
    const VideoCard = cardBuilder(isVideoDisabled, 'видео', 'Видео недоступно', url+'/video'+search);
    const PracticeCard = cardBuilder(isPracticeDisabled, 'Практический тест', 'Практический тест недоступен', url+'/practice'+search);
    const TheoryCard = cardBuilder(isTheoryDisabled, 'Теоретический тест', 'Теоретический тест недоступен', url+'/theory'+search);
    return(
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title={title} controls={topControls}>        
          <CardContainer>
            <>{VideoCard}</>
            <>{PracticeCard}</>
            <>{TheoryCard}</>
          </CardContainer>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
  });
  return (<>{component}</>)
}

export default StudentLesson