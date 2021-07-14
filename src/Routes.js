import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './Pages/main';
import { Login } from './Pages/login';
import { List } from './Pages/list';
import { DriverDetail } from './Pages/driver-detail';
import { BookingHistory } from './Pages/booking-history';

class Routes extends React.Component {
  render() {
    return (
      <Router>
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
