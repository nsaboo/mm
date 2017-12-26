import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Header, Main } from '../styled/Template'
import Routes from '../routes';
import Footer from './Footer';
import NavDrawer from './NavDrawer';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  // userAgent: req.headers['user-agent'],
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavDrawer />
        <Routes />
      </MuiThemeProvider>
    );
  }
};

export default App;
