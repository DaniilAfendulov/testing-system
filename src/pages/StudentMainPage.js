import { useState, useCallback } from 'react';
import StudentModuleList from '../components/StudentModuleList';
import StudentModule from '../components/StudentModule';
import StudentLesson from '../components/StudentLesson';

const PageTypes = {
  moduleList: 'moduleList',
  module: 'module',
  lesson: 'lesson',
  contentType : {
    video: 'video',
    practice: 'practice',
    teory: 'teory'
  }
}

const loadModuleList = (setPage) => {
  const chooseModule = (id, title) => setPage({type: PageTypes.module, id: id, title: title});
  return(<StudentModuleList chooseModule={chooseModule}/>);
}

const loadModule = (id, title, setPage) => {
  const chooseLesson = (id, title) => setPage({type:PageTypes.lesson, id:id, title: title });
  return(<StudentModule id={id} title={title} chooseLesson={chooseLesson}/>);
}

const loadLesson = (id, title) => {
  return(<StudentLesson id={id} title={title}/>);
}

function StudentMainPage() {
  const [page, setPage] = useState({type: PageTypes.moduleList});
  const showPage = useCallback(() => {
    switch(page.type){
      case PageTypes.moduleList: 
        return loadModuleList(setPage);
      case PageTypes.module:
        return loadModule(page.id, page.title, setPage);
      case PageTypes.lesson:
        return loadLesson(page.id, page.title, setPage);      
      default:
        <div>page not found</div>
    }
  }, [page])
  
  return (
    <>
      {showPage()}
    </>
  )
}

export default StudentMainPage