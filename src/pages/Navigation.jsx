import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Notes from './Notes';
import Create from './Create';

import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  menuLink: {
    backgroundColor: '#ccc',
    paddingLeft: 5,
    paddingRight: 5,
    margin: 2
  }
}));

function Navigation() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Link to="/" className={classes.menuLink}>
          Home
        </Link>
        <Link to="/create" className={classes.menuLink}>
          Create
        </Link>
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
    </>
  );
}

export default Navigation;
