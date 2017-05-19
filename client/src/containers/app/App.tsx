import * as React from 'react';
import { NavBar } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppTheme from '../../app-theme';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }
    state = {
        isMenuOpened: false,
        isMenuActive: false
    };

    menuOpened = () => {
        this.setState({ isMenuOpened: !this.state.isMenuOpened, isMenuActive: !this.state.isMenuActive });
    }
    render() {
        const menuClass = this.state.isMenuActive?"child-page-active":"child-page";
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <div>
                    <NavBar {...this.props} menuAction={this.menuOpened} />
                    <div className={menuClass}>
                        {this.props.children}
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
