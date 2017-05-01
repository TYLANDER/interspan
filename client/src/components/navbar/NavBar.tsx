import * as React from 'react';
import { AppBar, RaisedButton, FlatButton } from 'material-ui'
import './NavBar.css';

class NavBar extends React.Component<any, any> {

    render() {

        const menu = (
            <div>
                <FlatButton label="Employers" />
                <FlatButton label="About" />
                <RaisedButton primary label="Apply" onTouchTap={this.props.logout} />
            </div>
        )

        return (
            <div className="navbar-container">
                <AppBar
                    zDepth={3}
                    iconElementLeft={
                        <img src={require("../../assets/logo.png")} className="logo" alt="logo"/>
                    }
                    iconElementRight={
                        menu
                    }
                    onRightIconButtonTouchTap={() => console.log("Item clicked")}
                />
            </div>
        );
    }

}
export default NavBar;