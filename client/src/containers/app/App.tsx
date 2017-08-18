import * as React from 'react';
import { NavBar } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppTheme from '../../app-theme';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMenuOpened: false,
            isMenuActive: false,
            // titleStatus: ""
        };
    }

    //Drawer menu open state
    menuOpened = () => {
        this.setState({ isMenuOpened: !this.state.isMenuOpened, isMenuActive: !this.state.isMenuActive });
    }

    // //Title state changed
    // titleChanged = (title: any) => {
    //     this.setState({ titleStatus: title });
    // }

    render() {
        const menuClass = this.state.isMenuActive ? "child-page-active" : "child-page";
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <div>
                    <NavBar {...this.props} menuAction={this.menuOpened} title={this.state.titleStatus} />
                    <div className={menuClass}>
                        {React.cloneElement(this.props.children)}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
