import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav';
import List from './Pages/List/List';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list/:id" component={List} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
