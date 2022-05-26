export async function getModules(){
    const modules = [];
    for (let index = 1; index < 4; index++) {
      modules.push({
        id: index,
        title: 'тестовый модуль ' + index,
        description: 'описание тестового модуля ' + index
      })      
    }
    return modules;
}

export async function getModuleLesson(moduleId){
    const lessons = [];
    for (let index = 0; index < 4; index++) {
      lessons.push({
        id: index,
        title: 'тестовый урок ' + index + ' модуля ' + moduleId,
        description: 'описание тестового урока ' + index + ' модуля ' + moduleId
      })      
    }
    return {lessons: lessons, id: moduleId, title: "Имя модуля"};
}

export async function getLesson(lessonId){
  const lesson = {
    id: lessonId,
    moduleId: 1,
    title: 'тестовый урок',
    isVideoDisabled: true,
    isPracticeDisabled: true,
    isTheoryDisabled: false
  };
  return lesson;
}