import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layouts/Layout';
import { Route, Switch } from 'react-router-dom';
import Today from './Components/Partial/Today';
import Hour from './Components/Partial/Hour';
import Days from './Components/Partial/Daily';
import Weekend from './Components/Complete/Weekend';
import Month from './Components/Complete/Month';
import Home from './Components/Home/Home';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/today' exact component={Today}></Route>
        <Route path='/byhour' exact component={Hour}></Route>
        <Route path='/bydays' exact component={Days}></Route>
        <Route path='/weekend' exact component={Weekend}></Route>
        <Route path='/byMonth' exact component={Month}></Route>
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