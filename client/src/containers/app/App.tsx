import * as React from 'react';
import { NavBar } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppTheme from '../../app-theme';

class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <div className="app">
          <NavBar />
          <div className="app-childs">
              {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
