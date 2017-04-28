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
                    title="Interspan"
                    zDepth={3}
                    iconElementRight={
                        menu
                    }
                    showMenuIconButton={false}
                    onRightIconButtonTouchTap={() => console.log("Item clicked")}
                />
            </div>
        );
    }

}
export default NavBar;