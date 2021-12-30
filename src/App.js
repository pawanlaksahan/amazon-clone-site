import React from 'react'; 
import './App.css';
import Header from './header';
import Home from './home'

function App() {
  return (
    //BEM
    <div className="app">
       <Header/>
       <Home/>
       
    </div>
  );
}

export default App;
