import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from './pages/Navigation';

import './style.css';

export default function App() {
  return (
    <div>
      <h3>Hello StackBlitz! React Mat UI Workspace</h3>
      <p>Start editing from Net Ninja tut</p>
      <Navigation />

      {/* <Notes />
      <Create /> */}
    </div>
  );
}
