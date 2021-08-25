import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Login, List, DriverDetail, BookingHistory } from './pages';

class Routes extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/list" component={List} />
          <Route exaxt path="/detail/:id" component={DriverDetail} />
          <Route exact path="/reserve" component={BookingHistory} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
