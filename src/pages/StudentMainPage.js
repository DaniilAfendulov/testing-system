import { useState, useCallback } from 'react';
import StudentModuleList from '../components/StudentModuleList';


const PageTypes = {
  moduleList: 'moduleList',
  module: 'module',
  lesson: 'lesson'
}

const loadModuleList = (setPage) => {
  const chooseModule = (id) => setPage({type: PageTypes.module, id: id});
  return(<StudentModuleList chooseModule={chooseModule}/>);
}

const loadModule = (id, setPage) => {
  const chooseLesson = (id) => setPage({type:PageTypes.lesson, id:id});
  return(<div>module {id}</div>);
}

const loadLesson = (id) => {
  //todo: lesson
  return(<div>lesson {id}</div>);
}

function StudentMainPage() {
  const [page, setPage] = useState({type: PageTypes.moduleList});
  const showPage = useCallback(() => {
    switch(page.type){
      case PageTypes.moduleList: 
        return loadModuleList(setPage);
      case PageTypes.module:
        return loadModule(page.id);
      case PageTypes.lesson:
        return loadModule(page.id);
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