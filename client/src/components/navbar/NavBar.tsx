import * as React from 'react';
import { AppBar, RaisedButton, FlatButton } from 'material-ui'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import './NavBar.css';

class NavBar extends React.Component<any, any> {

    state = {
        open: false
    };
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        const menu = (
            <div>
                <span className="md-menu">
                <FlatButton label="Employers" />
                <FlatButton label="About" />
                <RaisedButton primary label="Apply" onTouchTap={this.props.logout} />
                <IconButton iconClassName="muidocs-icon-custom-github" />
                    </span>
                <FlatButton
                    className="hamburger-icon"
                    icon={<img src={require("../../assets/menu.svg")}/>}
                    onTouchTap={this.handleToggle}
                />

            </div>
        );

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
                <Drawer width={300} openSecondary={true} open={this.state.open}>
                    <MenuItem onTouchTap={this.handleClose}>Employers</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Apply</MenuItem>

                </Drawer>
            </div>

        );
    }

}
export default NavBar;