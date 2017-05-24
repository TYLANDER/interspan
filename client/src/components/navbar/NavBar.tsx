import * as React from 'react';
import { AppBar, RaisedButton, FlatButton, SelectField, MenuItem } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import './NavBar.css';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Subject } from 'rxjs';
import JobActions from "../../store/action/jobs";
import {withRouter} from "react-router";

class NavBar extends React.Component<any, any> {

    $authObservar: Subject<any>;
    constructor(props: any){
        super(props);
    }


    state = {
        open: false,
        isAuthenticated: false,
        language: 'en',
    };

    handleLanguage = (event:any, index:any, value:any) => {
        this.props.changeLanguage(value)
        this.setState({language:value})   
    };

    componentWillReceiveProps(nextProp: any){
        window.location.pathname === "/" ?
            this.setState({isAuthenticated: false}) : this.setState({isAuthenticated: true})
    }

    componentWillMount(nextProp: any){
        window.location.pathname === "/" ?
            this.setState({isAuthenticated: false}) : this.setState({isAuthenticated: true})
    }

    handleHomePage(){
        browserHistory.push('/');
    }
    handleStaticUrl(url: any, closeNav: boolean){
        if (closeNav){
            this.setState({ open: false });
            this.props.menuAction();
        }
        browserHistory.push('/' + url);
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open });
        this.props.menuAction();
    };
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const languageSelect = (
            this.props.router.location.pathname==="/job"? 
            <SelectField
                className="lang-select"
                labelStyle={{color:"white",textOverflow:"none",paddingLeft: "30px"}}
                value={this.state.language}
               underlineStyle={{display: 'none'}}
                onChange={this.handleLanguage}
                >
                <MenuItem value="en" primaryText="English" />
                <MenuItem value="sp" primaryText="Spanish" />
            </SelectField>
            :<p></p>
        )
        const title=(this.props.router.location.pathname === "/job"?this.props.title:"Let's get started")
        const menu = (
            <div className="menu-container">
                <span className="md-menu">
                    <FlatButton label="Employers" className="app-box-shadow" labelStyle={{textTransform: 'capitalize'}}
                        onTouchTap={this.handleStaticUrl.bind(null, 'employee', false)}/>
                    <FlatButton label="About" className="app-box-shadow" labelStyle={{textTransform: 'capitalize'}}
                        onTouchTap={this.handleStaticUrl.bind(null, 'about', false)}/>
                    <RaisedButton primary label="Apply" onTouchTap={this.props.logout} className="app-box-shadow"
                    labelStyle={{textTransform: 'capitalize'}}
                        onClick={this.handleStaticUrl.bind(null, 'signup', false)}/>
                    <IconButton iconClassName="muidocs-icon-custom-github" />
                </span>

                {(this.state.open) ?
                    <FlatButton
                        className="hamburger-icon"
                        icon={<img src={require('../../assets/window-close.svg')} />}
                        disableFocusRipple={true}
                        hoverColor="#fbfef9"
                        disableTouchRipple={true}
                        onTouchTap={this.handleToggle}
                    />
                    :
                    <FlatButton
                        className="hamburger-icon"
                        hoverColor="#fbfef9"
                        disableFocusRipple={true}
                        disableTouchRipple={true}
                        icon={<img src={require('../../assets/menu.svg')} />}
                        onTouchTap={this.handleToggle}
                    />
                }

            </div>
        );

        const homeMenu = <div>
            <AppBar
                zDepth={1}
                style={{backgroundColor: '#fbfef9',transition:"none"}}
                iconElementLeft={
                    <img src={require('../../assets/logo.png')} className="logo" alt="logo" />
                }
                iconElementRight={menu}
                onTitleTouchTap={this.handleHomePage}
            />
            {(this.state.open) ?
                <div className="sub-menu">
                    <div onClick={this.handleStaticUrl.bind(this, 'signup', true)}>Apply Now</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'about', true)}>About Interspan</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'employee', true)}>For Employers</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'hire', true)}>What we hire for</div>

                    <div className="menu-info contact-info">
                        <p className="title">Office Hours</p>
                        <p>Mon-Fri</p>
                        <p>8AM-5PM EST</p>
                    </div>

                    <div className="contact-info">
                        <p className="title">Contact</p>
                        <p>Office: 804-519-7677</p>
                        <p>Fax: 804-595-9999</p>
                        <p>Email: work@Interspan.com</p>
                    </div>

                    <div>
                        <h2>English | Spanish</h2>
                    </div>
                </div>
                : null
            }
        </div>;

        const globalMenu = <div>
            <AppBar
                zDepth={1}
                title={title}
                iconElementRight={languageSelect}
                style={{backgroundColor: '#2e469e',transition:"none"}}
                titleStyle={{color: 'white', fontFamily: 'SFUI Display'}}
                showMenuIconButton={false}
            />
        </div>;

        return (
            <div className={`navbar-container ${!this.state.isAuthenticated?`navbar-container-color`:`navbar-global-container-color`}`}>
                {(!this.state.isAuthenticated ? homeMenu : globalMenu)}
            </div>

        );
    }

}

const mapStateToProps = (state: any) => {
    return { authObj: state.AuthReducer,
        language: state.jobReducer.language  
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {changeLanguage: (language: any) => dispatch(JobActions.changeLanguage(language))};
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NavBar));
