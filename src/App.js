import React from 'react'; 
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    //BEM
   
    <Router>
    <div className="app">
    <Header/>
      <Routes >
        <Route path="/checkout" element={  <Checkout/> }>
         
        </Route>

        <Route path="/" element={ <Home/> }>
         
        </Route>
     
      </Routes>
       
       
    </div>
    </Router>
  );
}

export default App;
