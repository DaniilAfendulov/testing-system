export async function getModules(){
    const modules = [
        {
          id: 1,
          title: 'тестовый урок 1',
          description: 'описание тестового модуля 1'
        },
        {
          id: 2,
          title: 'тестовый урок 2',
          description: 'описание тестового модуля 2'
        },
        {
          id: 3,
          title: 'тестовый урок 3',
          description: 'описание тестового модуля 3'
        },
        {
          id: 4,
          title: 'тестовый урок 3',
          description: 'описание тестового модуля 3'
        }
    ];    
    return modules;
}

export async function getModuleLesson(moduleId){
    const lessons = [
        {
          id: 1,
          title: 'тестовый урок 1',
          description: 'описание тестового урока 1'
        },
        {
          id: 2,
          title: 'тестовый урок 2',
          description: 'описание тестового урока 2'
        },
        {
          id: 3,
          title: 'тестовый урок 3',
          description: 'описание тестового урока 3'
        },
        {
          id: 4,
          title: 'тестовый урок 3',
          description: 'описание тестового урока 3'
        }
    ];
    return lessons;
}