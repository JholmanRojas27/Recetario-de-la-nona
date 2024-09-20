import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import HomePage from './view/HomePage';
import CompSearch from './component/CompSearch';
import CompInsert from './component/CompInsert';
import './index.css'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <HomePage/>}
          />
        <Route path='/insert/' element ={<CompInsert/>}/>
      </Routes>
    </Router>
  );
};

export default App;