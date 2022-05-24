import React from 'react'

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
    }
];
function StudentModule({id, title, chooseLesson}) {
    const lessons = useAsyncGet(() => getModuleLesson(id));
    const loadedComponent = (
      <LeftControlsPanel controls={leftControls}>
        <TopControlsPanel title={title} controls={topControls}>
          <CardListWindow cards={lessons}  onCardClick={chooseLesson}></CardListWindow>
        </TopControlsPanel>
      </LeftControlsPanel>
    );
    const component = useLoading(lessons, loadedComponent);
    return (
      <>{component}</>
    )
}

export default StudentModule