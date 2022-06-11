import { Component, StrictMode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import StudentLoginPage from './pages/StudentLoginPage';
import MasterLoginPage from './pages/MasterLoginPage';
import StudentModuleList from './components/StudentModuleList';
import StudentModule from './components/StudentModule';
import StudentLesson from './components/StudentLesson';
import ErrorPage from './pages/ErrorPage';
import TheoryTest from './components/TheoryTest/TheoryTest';
import Logout from './components/Logout';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <StrictMode>
        <Routes>
          <Route exact path='/' element={<Navigate to="/student"/>} />
          <Route exact path='/MasterLoginPage' element={<MasterLoginPage/>} />
          <Route exact path='/student/*'>
            <Route exact path='modules' element={<StudentModuleList/>} />
            <Route exact path='login' element={<StudentLoginPage/>} />
            <Route exact path='module' element={<StudentModule/>} />
            <Route exact path='logout' element={<Logout/>} />
            <Route exact path='lesson/*'>
              <Route exact path='' element={<StudentLesson/>} />
              <Route exact path='theory' element={<TheoryTest/>} />
            </Route>
            <Route path="*" element={<Navigate to="modules"/>} />
          </Route>
          <Route exact path='/error' element={<ErrorPage/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </StrictMode>      
    );
  }

}
