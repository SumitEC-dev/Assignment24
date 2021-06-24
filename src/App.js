import logo from './logo.svg';
import './App.css';
import BackgroundChange from './Components/BackgroundChange';
import Calculator from './Components/Calculator';
import React from 'react';

function App() {
  return (
           <React.Fragment>
              <BackgroundChange/> 
              {/* <Calculator/> */}
           </React.Fragment>
  );
}

export default App;
