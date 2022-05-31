const API_URL = "https://localhost:5001/api/";

async function apiFetch(search, params, options){
  const url = API_URL+search + (params?'?':'') + new URLSearchParams(params).toString();
  const response = await fetch(url, {...options, mode: 'cors',credentials: 'include'})
  .catch(err => failedRequestHandler(err));
  if(response.status === 401){
    unauthorizedResultHandler(response);
    return;
  }
  if(response.status === 404 || response.status === 204){
    notFoundResultHandler(response);
    return;
  }
  return response;
}

async function apiPost(search, params){
  return apiFetch(search, params, {method: 'POST'});
}

async function apiGet(search, params){
  return apiFetch(search, params, {method: 'GET'});
}

async function failedRequestHandler(response){
  alert(response);
  window.location.href = "/error";  
}

async function unauthorizedResultHandler(response){
  alert('unauthorized');
  window.location.href = "/MasterLoginPage";  
}

async function notFoundResultHandler(response){
  alert('notFound');
  window.location.href = "/error";  
}

export async function getModules(){
  const response = await apiGet("modules");
  if(response.ok){
    const jsres = await response.json();
    const modules = jsres.map(m => {
      const {name, ...other} = m;
      return {...other, title: name}
    });
    return modules;
  }
}

export async function getModuleLesson(moduleId){
  const response = await apiGet("module/get", {id:moduleId});
  if(response.status === 200){
    const {lessons, module} = await response.json();
    const cards = lessons.map(l => ({id: l.id, title: l.name, description:l.description}));
    return {title: module.name, cards: cards}
  };
  return null;
}

export async function getLesson(moduleId, lessonId){
  const response = await apiGet("module/getlessoninfo", {moduleId:moduleId, id:lessonId});
  if(response.status === 200){
    const lessonInfo = await response.json();
    return lessonInfo;
  };  
  return null;
}

export async function getTheoryTest(moduleId, lessonId){
  const response = await apiGet("module/gettests", {moduleId:moduleId, id:lessonId});
  if(response.status === 200){
    const tests = await response.json();
    return tests.map(test => parseTest(test));
  };  
  return null;
}

function parseTest(test){
  // InputTest
  if (test.type === 0) {
    const {answers, ...rest} = test;
    return rest;
  }
  return test;
}

export async function auth(login, password){
   const response = await apiPost("auth", {login:login, password:password});
   console.log(response)
  if(response.status === 400){
    alert(response);
    return;
  }
  if(response.ok){
    window.location.href = '/';
  }
}