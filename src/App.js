import React from 'react';

import './App.css';

function App() {
  return (
    <div className="athelas">
  <div className="vh-100 dt w-100 tc bg-white blue cover">
    <div className="dtc v-mid">
      <header className="blue-70">
        <h2 className="f6 fw1 ttu tracked mb2 lh-title">Andela</h2>
        <h3 className="f6 fw1 lh-title">Developer</h3>
      </header>
      <h1 className="f1 f-headline-l fw1 i blue-60">Pulse</h1>
      <blockquote className="ph0 mh0 measure f4 lh-copy center">
        <p className="fw1 blue-70">
        A tool to capture Developer Framework ratings; the Developer Framework is a 6-attribute framework for evaluating a person’s performance based on the competency expectations for their current level
        </p>
        <cite className="f6 ttu tracked fs-normal">Black Ninjas Team</cite>
      </blockquote>
    </div>
  </div>
    </div>
  );
}

export default App;
