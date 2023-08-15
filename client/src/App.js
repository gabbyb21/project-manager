import React from 'react';
import './App.css';
import InputProject from './components/InputProject';
import ListProjects from './components/ListProjects';

function App() {
  return (
   <>
      <div className="container">
        <InputProject />
        <ListProjects />
      </div>
   </>
  );
}

export default App;
