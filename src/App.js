import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import StudentLoginPage from './pages/StudentLoginPage';
import MasterLoginPage from './pages/MasterLoginPage';
import LeftPanelControlPage from './pages/LeftPanelControlPage';
import StudentMainPage from './pages/StudentMainPage.js';
import Home from './pages/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/StudentLoginPage' element={<StudentLoginPage/>} />
        <Route exact path='/MasterLoginPage' element={<MasterLoginPage/>} />
        <Route exact path='/LeftPanelControlPage' element={<LeftPanelControlPage/>} />
        <Route exact path='/StudentMainPage' element={<StudentMainPage/>} />
      </Routes>
    );
  }

}
