import React, { Component } from 'react';
import DefaultLayout from './common/components/defaultLayout';
import Home from './home';
import Login from './login';
import SignUp from './signUp';
import Collection from './collection';
import ModelDetail from './modelDetail';
import Community from './community';
import Account from './account';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/login" component={Login} />
        <DefaultLayout exact path="/sign-up" component={SignUp} />
        <DefaultLayout exact path="/collection" component={Collection} />
        <DefaultLayout exact path="/model" component={ModelDetail} />
        <DefaultLayout exact path="/community" component={Community} />
        <DefaultLayout exact path="/account" component={Account} />
      </React.Fragment>
    )
  }
}

export default App;