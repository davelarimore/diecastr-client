import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// layouts
import DefaultLayout from './common/components/defaultLayout';
import HomeLayout from './screens/home/components/homeLayout';
// screens
import Home from './screens/home';
import Login from './screens/login';
import SignUp from './screens/signUp';
import Collection from './screens/collection';
import ModelDetail from './screens/modelDetail';
import Community from './screens/community';
import Account from './screens/account';

import { refreshAuthToken } from './modules/auth';

export class App extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <React.Fragment>
        <HomeLayout exact path="/" component={Home}/>
        <DefaultLayout exact path="/login" component={Login} />
        <DefaultLayout exact path="/sign-up" component={SignUp} />
        <DefaultLayout exact path="/collection" component={Collection} addModelButton={true} />
        <DefaultLayout exact path="/collection/:id" component={Collection} />
        <DefaultLayout exact path="/model/:id" component={ModelDetail} />
        <DefaultLayout exact path="/community" component={Community} />
        <DefaultLayout exact path="/account" component={Account} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUserId !== null
});

// export default App;
export default withRouter(connect(mapStateToProps)(App));