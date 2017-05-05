import * as React from 'react';
import { AppBar, RaisedButton, FlatButton } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import './NavBar.css';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Subject } from 'rxjs';

class NavBar extends React.Component<any, any> {

    $authObservar: Subject<any>;
    constructor(props:any){
        super(props);
        //this.$authObservar = new Subject<any>();
    }

    state = {
        open: false,
        isAuthenticated: false
    };
    
    componentWillReceiveProps(nextProp:any){
        console.log(nextProp);
        if(this.props.authObj.isAuthenticated){
            this.setState({isAuthenticated: false})
        }
        else this.setState({isAuthenticated: true})
    }

    handleHomePage(){
        browserHistory.push('/');
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => {
        console.log(this.props);
        this.setState({ open: false });}
    
    render() {
        const menu = (
            <div className="menu-container">
                <span className="md-menu">
                    <FlatButton label="Employers" />
                    <FlatButton label="About" />
                    <RaisedButton primary label="Apply" onTouchTap={this.props.logout} />
                    <IconButton iconClassName="muidocs-icon-custom-github" />
                </span>

                {(this.state.open) ?
                    <FlatButton
                        className="hamburger-icon"
                        icon={<img src={require("../../assets/window-close.svg")} />}
                        onTouchTap={this.handleToggle}
                    />
                    :
                    <FlatButton
                        className="hamburger-icon"
                        icon={<img src={require("../../assets/menu.svg")} />}
                        onTouchTap={this.handleToggle}
                    />
                }

            </div>
        );

        const homeMenu = <div>
            <AppBar
                zDepth={1}
                iconElementLeft={
                    <img src={require("../../assets/logo.png")} className="logo" alt="logo" />
                }
                iconElementRight={menu}
                onTitleTouchTap={this.handleHomePage}
            />
            {(this.state.open) ?
                <div className="sub-menu">
                    <div onClick={this.handleClose}>Apply Now</div>
                    <div onClick={this.handleClose}>About Interspan</div>
                    <div onClick={this.handleClose}>For Employers</div>
                    <div onClick={this.handleClose}>What we hire for</div>
                </div>
                : null
            }
        </div>;

        const globalMenu = <div>
            <AppBar
                zDepth={1}
                title="Lets get started"
                style={{backgroundColor: '#2e469e'}}
                titleStyle={{color: 'white'}}
                showMenuIconButton={false}
            />
        </div>;

        return (
            <div className="navbar-container">
                {(!this.state.isAuthenticated? homeMenu : globalMenu)}
            </div>

        );
    }

}

const mapStateToProps = (state:any) => {
    return { authObj: state.AuthReducer};
};

export default connect(mapStateToProps)(NavBar)
