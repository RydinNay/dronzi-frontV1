import './App.css';
import Header from './components/HeaderFile/Header';
import AppRouter from './components/AppRouter';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';


function App() {
  //var cors = require('cors')
  
  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
    </BrowserRouter>
    
  );
}

export default App;
