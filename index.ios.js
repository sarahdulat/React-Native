/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import LoginView from './App/Views/LoginView'
import DashboardView from './App/Views/DashboardView'
import CookieManager from 'react-native-cookies'

export default class LoginApp extends Component {
    constructor(props) {
    super(props)
    this.state = {
      initialRoute: {
        title: 'Login',
        component: LoginView
      },
      isCookieLoaded: false
    }  
  }
componentWillMount() {
    CookieManager.getAll((err, res) => {
      if (res.login_cookie) {
        this.setState({
          initialRoute: {
            title: 'Dashboard',
            component: DashboardView
          },
          isCookieLoaded: true
        })
        } else {
        this.setState({ isCookieLoaded: true })
      }
    })
  }

  render() {
    if (this.state.isCookieLoaded) {
      return (
        <NavigatorIOS
          ref='nav'
          navigationBarHidden={true}
          style={styles.container}
          tintColor='#FF6600'
          initialRoute={this.state.initialRoute}/>
      );
    } else {
      return <View/>
    }
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// Deleted some styles here to keep it clean
AppRegistry.registerComponent('LoginApp', () => LoginApp);
