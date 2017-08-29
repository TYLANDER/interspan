import * as React from 'react';
import { NavBar } from '../../components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppTheme from '../../app-theme';
// import { findDOMNode } from "react-dom";
var Scroll = require('react-scroll'); // Imports all Mixins
let scroll     = Scroll.animateScroll;

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
    scrollDown = () => {
            scroll.scrollToBottom();
    }

    render() {
        const menuClass = this.state.isMenuActive ? "child-page-active" : "child-page";
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <div>
                    <NavBar {...this.props} menuAction={this.menuOpened} title={this.state.titleStatus} />
                    <div className={menuClass}>
                        {React.cloneElement(this.props.children, { scrolling: this.scrollDown })}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
