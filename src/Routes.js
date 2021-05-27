import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav';
import List from './Pages/List/List';
import Footer from './Pages/Main/Components/MainFooter';
import DetailDrivers from './Pages/DetailTaxiDriver/DetailTaxiDriver';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/list/:departure/:arrival/:date/:seat"
            component={List}
          />
          <Route exaxt path="/detail/:id" component={DetailDrivers} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
