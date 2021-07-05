import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz! React Mat UI Workspace</h1>
      <p>Start editing from Net Ninja tut</p>
      <Router>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/create" component={Create} />

          {/* This is an alternate for point the component to Route */}

          {/* <Route exact path="/">
            <Notes />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route> */}
        </Switch>
      </Router>
      {/* <Notes />
      <Create /> */}
    </div>
  );
}
