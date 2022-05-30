import {} from 'react'

import { getTheoryTest } from '../utils/api.js';
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

const leftControls = [
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
    {
        id:3,
        label:'Содержание',
        img: lessonImg,
        altimg: lessonImgAlt,
        path:'/student/lesson'
    },
];

function TheoryTest() {
    const search = window.location.search;
    const searchParams = new URLSearchParams(search);
    const lessonId = searchParams.get("id");
    const moduleId = searchParams.get("moduleId");
    const url = window.location.pathname;
    const getData = useCallback(() =>  getTheoryTest(moduleId, lessonId), [moduleId, lessonId]);
    const data = useAsyncGet(getData);

    const component = useLoading(data, ({title}) => {
        topControls[1].path = '/student/module?id='+moduleId;
        topControls[2].path = '/student/lesson?id='+lessonId;
        return(
          <LeftControlsPanel controls={leftControls}>
            <TopControlsPanel title="Теоретический тест" controls={topControls}>
                <StartTheoryTest/>
            </TopControlsPanel>
          </LeftControlsPanel>
        );
      });
      return (<>{component}</>)
}

export default TheoryTest