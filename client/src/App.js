import React,{ Fragment } from 'react';
import './App.css';
import InputProject from './components/InputProject';
import ListProjects from './components/ListProjects';

function App() {
  return (
   <Fragment>
      <div className="container">
        <InputProject />
        <ListProjects />
      </div>
   </Fragment>
  );
}

export default App;
