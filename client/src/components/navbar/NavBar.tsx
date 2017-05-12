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
    handleStaticUrl(url:any, closeNav:boolean){
        if(closeNav)
            this.setState({ open: false });
        browserHistory.push('/'+url);
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => {
        this.setState({ open: false });
    }
    
    render() {
        const menu = (
            <div className="menu-container">
                <span className="md-menu">
                    <FlatButton label="Employers" className="app-box-shadow" labelStyle={{textTransform: "capitalize"}}     
                        onTouchTap={this.handleStaticUrl.bind(null,"employee",false)}/>
                    <FlatButton label="About" className="app-box-shadow" labelStyle={{textTransform: "capitalize"}}
                        onTouchTap={this.handleStaticUrl.bind(null,"about",false)}/>
                    <RaisedButton primary label="Apply" onTouchTap={this.props.logout} className="app-box-shadow" 
                    labelStyle={{textTransform: "capitalize"}}
                        onClick={this.handleStaticUrl.bind(null,"signup",false)}/>
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
                style={{backgroundColor: "#fbfef9"}}
                iconElementLeft={
                    <img src={require("../../assets/logo.png")} className="logo" alt="logo" />
                }
                iconElementRight={menu}
                onTitleTouchTap={this.handleHomePage}
            />
            {(this.state.open) ?
                <div className="sub-menu">
                    <div onClick={this.handleStaticUrl.bind(this,"signup",true)}>Apply Now</div>
                    <div onClick={this.handleStaticUrl.bind(this,"about",true)}>About Interspan</div>
                    <div onClick={this.handleStaticUrl.bind(this,"employee",true)}>For Employers</div>
                    <div onClick={this.handleStaticUrl.bind(this,"hire",true)}>What we hire for</div>
                </div>
                : null
            }
        </div>;

        const globalMenu = <div>
            <AppBar
                zDepth={1}
                title="Let's get started"
                style={{backgroundColor: '#2e469e'}}
                titleStyle={{color: 'white',fontFamily:"SFUI Display"}}
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
