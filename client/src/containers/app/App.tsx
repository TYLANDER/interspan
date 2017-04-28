import * as React from 'react';
import { NavBar } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppTheme from '../../app-theme';

class App extends React.Component<any, any> {

    render() {

        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <div>
                    <NavBar />
                    <div className="child-page">
                        {this.props.children}
                    </div>
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
