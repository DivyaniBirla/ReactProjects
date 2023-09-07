import './App.css';
import React from 'react';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
     <MainRoutes/>
     <button type="button" onClick={() => window.location.href = "/Login"} style={{border:'none'}}>Create New Account</button>
    </div>
  );
}

export default App;

