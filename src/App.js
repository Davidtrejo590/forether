import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layouts/Layout';
import { Route, Switch } from 'react-router-dom';
import Hour from './Components/Complete/Hour';
import Daily from './Components/Complete/Daily';
import Weekend from './Components/Complete/Weekend';
import Month from './Components/Complete/Month';
import Home from './Components/Home/Home';
import AirQuality from './Components/Partial/AirQuality';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/today' exact component={Home}></Route>
        <Route path='/byhour' exact component={Hour}></Route>
        <Route path='/bydays' exact component={Daily}></Route>
        <Route path='/weekend' exact component={Weekend}></Route>
        <Route path='/byMonth' exact component={Month}></Route>
        <Route path="/airCondition" exact component={AirQuality}></Route>
      </Switch>
    );

    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

export default App;