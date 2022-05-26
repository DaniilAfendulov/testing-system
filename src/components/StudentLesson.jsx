import { useMemo } from 'react'
import { useParams } from 'react-router-dom';

import { getLesson } from '../utils/api.js';
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

import lessonImg from '../resources/module.png'; 
import lessonImgAlt from '../resources/module_hover.png'; 


const leftControls= [
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
const topControls = [
    {
        id:1,
        label:'Модули',
        img: moduleImg,
        altimg: moduleImgAlt
    },
    {
        id:2,
        label:'Уроки',
        img: lessonImg,
        altimg: lessonImgAlt
    },
];
function StudentLesson() {
  const { id } = useParams();
  const data = useAsyncGet(() => getLesson(id));
  const component = useLoading(data, ({title, video, practice, theory}) => {
    const cards = [
      {
          id: 1,
          title: 'видео',
          description: video ? null : 'Видео недоступно'
      },
      {
          id: 2,
          title: 'Практический тест',
          description: practice ? null : 'Практический тест недоступен'
      },
      {
          id: 3,
          title: 'Теоретический тест',
          description: theory ? null : 'Теоретический тест недоступен'
      }
    ];
    return(
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title={title} controls={topControls}>
          <CardListWindow cards={cards}></CardListWindow>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
  });
  return (<>{component}</>)
}

export default StudentLesson