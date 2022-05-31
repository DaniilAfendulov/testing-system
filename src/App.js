import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import StudentLoginPage from './pages/StudentLoginPage';
import MasterLoginPage from './pages/MasterLoginPage';
import StudentModuleList from './components/StudentModuleList';
import StudentModule from './components/StudentModule';
import Home from './pages/Home';
import StudentLesson from './components/StudentLesson';
import ErrorPage from './pages/ErrorPage';
import Test from './components/Test';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/MasterLoginPage' element={<MasterLoginPage/>} />
        <Route exact path='/test' element={<Test/>} />
        <Route exact path='/student/*'>
          <Route exact path='modules' element={<StudentModuleList/>} />
          <Route exact path='login' element={<StudentLoginPage/>} />
          <Route exact path='module' element={<StudentModule/>} />
          <Route exact path='lesson' element={<StudentLesson/>} />
          <Route path="*" element={<Navigate to="modules"/>} />
        </Route>
        <Route exact path='/error' element={<ErrorPage/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    );
  }

}
