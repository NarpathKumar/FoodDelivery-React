import React from 'react';

import MainContainer from './MainContainer/MainContainer';
import Sidebar from './Sidebar/Sidebar';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <section className={classes.LandingSection}>
        <MainContainer />
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
