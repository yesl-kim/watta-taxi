import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import List from './Pages/List/List';
import DetailDrivers from './Pages/DetailTaxiDriver/DetailTaxiDriver';
import Reserve from './Pages/Reserve/Reserve';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
          <Route exaxt path="/detail/:id" component={DetailDrivers} />
          <Route exact path="/reserve" component={Reserve} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
