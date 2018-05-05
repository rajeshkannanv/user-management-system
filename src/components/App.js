import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../theme';
import ResponsiveDrawer from '../containers/ResponsiveDrawer';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </MuiThemeProvider>
    );
  }
}

export default App;
