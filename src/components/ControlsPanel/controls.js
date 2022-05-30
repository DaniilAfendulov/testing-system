import leftContent from '../../resources/leftContent.png'
import leftContentAlt from '../../resources/leftContent_hover.png'
import leftStat from '../../resources/leftStat.png'
import leftStatAlt from '../../resources/leftStat_hover.png'

import moduleImg from '../../resources/content.png'; 
import moduleImgAlt from '../../resources/content_hover.png'; 

import lessonImg from '../../resources/module.png'; 
import lessonImgAlt from '../../resources/module_hover.png';

import lessonInfoImg from '../../resources/lesson.png';
import lessonInfoImgAlt from '../../resources/lesson_hover.png';

export const leftControls = [
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

export const topControls = [
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
        img: lessonInfoImg,
        altimg: lessonInfoImgAlt,
        path:'/student/lesson'
    },
];