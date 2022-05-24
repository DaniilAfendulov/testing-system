import React from 'react'
import Styles from '../../src/styles/student-module-list.module.scss';
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
const modules = [
    {
      id: 1,
      title: 'тестовый модуль 1',
      description: 'описание тестовог модуля 1'
    },
    {
      id: 2,
      title: 'тестовый модуль 2',
      description: 'описание тестовог модуля 2'
    },
    {
      id: 3,
      title: 'тестовый модуль 3',
      description: 'описание тестовог модуля 3'
    }
];
function StudentModuleList() {
  return (
    <LeftControlsPanel controls={controls}>
        <TopControlsPanel title='Список модулей'>
          <CardListWindow cards={modules}></CardListWindow>
        </TopControlsPanel>
    </LeftControlsPanel>
  )
}

export default StudentModuleList