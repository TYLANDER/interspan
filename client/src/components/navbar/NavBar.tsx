import * as React from 'react';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';
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
            <div className="menu-container">
                <span className="md-menu">
                <FlatButton label="Employers" />
                <FlatButton label="About" />
                <RaisedButton primary label="Apply" onTouchTap={this.props.logout} />
                <IconButton iconClassName="muidocs-icon-custom-github" />
                    </span>

                {(this.state.open)?
                    <FlatButton
                        className="hamburger-icon"
                        icon={<img src={require("../../assets/window-close.svg")}/>}
                        onTouchTap={this.handleToggle}
                    />
                    :
                    <FlatButton
                        className="hamburger-icon"
                        icon={<img src={require("../../assets/menu.svg")}/>}
                        onTouchTap={this.handleToggle}
                    />
                }

            </div>
        );

        return (
            <div className="navbar-container">
                <AppBar
                    zDepth={3}
                    iconElementLeft={
                        <img src={require("../../assets/logo.png")} className="logo" alt="logo"/>
                    }
                    iconElementRight={menu}
                />
                {(this.state.open)?
                    <div className="sub-menu">
                        <div onClick={this.handleClose}>Apply Now</div>
                        <div onClick={this.handleClose}>About Interspan</div>
                        <div onClick={this.handleClose}>For Employers</div>
                        <div onClick={this.handleClose}>What we hire for</div>
                    </div>
                    : null
                }

            </div>

        );
    }

}
export default NavBar;