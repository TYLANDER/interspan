import * as React from 'react';
import { AppBar, Card, RaisedButton, FlatButton, SelectField, MenuItem} from 'material-ui';
// import Done from 'material-ui/svg-icons/action/done';
// import Arrow from 'material-ui/svg-icons/av/play-arrow';
// import NotIntrested from 'material-ui/svg-icons/av/not-interested';
import Done from 'material-ui/svg-icons/action/check-circle';
import './NavBar.css';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import JobActions from "../../store/action/jobs";
import { withRouter, Link } from "react-router";
// import Carrot from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import StateManager from "../../service/stateManage";
class NavBar extends React.Component<any, any> {

    stateData: any;
    state: any;
    constructor(props: any) {
        super(props);
        //Observable to detect stepper state of job form
        StateManager.stepperObserver.subscribe((data: any) => {
            this.stateData = data;
        });
        this.state = {
            open: false,
            isAuthenticated: false,
            language: 'en',
            isLogin: false,
            anchorEl: {},
            opens: false,
            openDrawer: false,
            headings: {},
            jobMenuOpen: false
        };

    }

    //Handling dropown event to change language
    handleLanguage = (event: any, index: any, value: any) => {
        this.props.changeLanguage(value)
        this.setState({ language: value })
    };

    //Handling global and application nav bar view
    componentWillReceiveProps(nextProp: any) {
        window.location.pathname === "/" || this.props.router.location.pathname === "/about" ||
            this.props.router.location.pathname === "/employee" || this.props.router.location.pathname === "/hire" ?
            this.setState({ isAuthenticated: false }) : this.setState({ isAuthenticated: true })
        if (Object.keys(nextProp.authObj.activeUser).length !== 0) {
            console.log("USER LOGGED IN", nextProp.authObj.activeUser)
            this.setState({ isLogin: true })
            localStorage.setItem("user-info", JSON.stringify(nextProp.authObj.activeUser));
        }
        else if (localStorage.getItem('user-info') !== null) {
            this.setState({ isLogin: true })
        }
        else
            console.log("User not logged in");
    }

    //Handling global and application nav bar view on app start
    componentWillMount(nextProp: any) {
        window.location.pathname === "/" || this.props.router.location.pathname === "/about" || this.props.router.location.pathname === "/employee" || this.props.router.location.pathname === "/hire" ?
            this.setState({ isAuthenticated: false }) : this.setState({ isAuthenticated: true })
        if (localStorage.getItem('user-info') !== null) {
            this.setState({ isLogin: true })
        }
        else {
            console.log("User not logged in");
        }
        this.props.router.location.pathname === '/job' ? StateManager.stepperObserver.subscribe((data: any) => {
            this.stateData = data;
        }) : null;
    }

    //For navigation to home page
    handleHomePage() {
        browserHistory.push('/');
    }

    // Handling static url navigation (Employee-info, About etc.)
    handleStaticUrl(url: any, closeNav: boolean) {
        if (closeNav) {
            this.setState({ open: false });
            this.props.menuAction();
        }
        browserHistory.push('/' + url);
    }

    //Maintaining hamburger state
    handleToggle = () => {
        this.setState({ open: !this.state.open });
        this.props.menuAction();
    };

    //Mainting drawer opening/closing state
    drawerToggle = () => this.setState({ openDrawer: !this.state.openDrawer });

    logOut = () => {
        console.log("FUNCTION TESTED")
        localStorage.removeItem('user-info');
        localStorage.clear();
        this.setState({ isLogin: false })
        browserHistory.push('/')
    }

    render() {
        let username: any = localStorage.getItem('user-info');
        username = JSON.parse(username);
        const languageSelect = (
            this.props.router.location.pathname === "/job" ?
                <div className="navbar-right-icon" style={{ marginTop: "-13px", display: "inline-block" }}>
                    <SelectField
                        className="lang-select"
                        labelStyle={{ color: "black", textOverflow: "none", lineHeight: "40px", paddingLeft: "15px" }}
                        value={this.state.language}
                        underlineStyle={{ display: 'none' }}
                        onChange={this.handleLanguage}
                        iconStyle={{ display: "block", marginTop: "-7px" }}
                        menuStyle={{ width: "70px" }}
                    >
                        <MenuItem value="en" primaryText="EN" />
                        <MenuItem value="sp" primaryText="SP" />
                    </SelectField>
                    {this.state.jobMenuOpen ? <img onClick={() => { this.props.menuAction(); this.setState({ jobMenuOpen: false }) }} className="close-icon" src={require("../../assets/close.png")} /> : <img onClick={() => { this.props.menuAction(); this.setState({ jobMenuOpen: true }) }} className="dashboard-icon" src={require("../../assets/dash-icon.png")} />
                    }
                </div>
                : <p></p>
        )
        // const title = (this.props.router.location.pathname === "/job" ? this.props.title : "Let's get started")
        const menu = (
            <div className="menu-container">
                <span>
                    <Link className={this.props.router.location.pathname==='/about'?"navigation-button":"navigation-button-about"} to="/about">About</Link>
                    {/*<FlatButton label="About" className="navigation-button-about" labelStyle={{ textTransform: 'capitalize' }}
                        onTouchTap={this.handleStaticUrl.bind(null, 'about', false)} />*/}
                    {/*<FlatButton label="Employers" className="navigation-button" labelStyle={{ textTransform: 'capitalize' }}
                        onTouchTap={this.handleStaticUrl.bind(null, 'employee', false)} />*/}
                    <Link className={this.props.router.location.pathname==='/employee'?"navigation-button":"navigation-button-about"} to="/employee">Employers</Link>
                    <RaisedButton label="Apply" onTouchTap={this.props.logout} className="apply-button hovered-class"
                        labelStyle={{ textTransform: 'capitalize' ,color:"rgb(74, 118, 253)",fontSize:'17px'}}
                        onClick={this.handleStaticUrl.bind(null, 'signup', false)} />
                    {/*{this.state.isLogin ? <div style={{ display: "inline" }}>  <IconMenu
                        iconStyle={{ height: "15px", marginLeft: "-10px", display: "inline", marginTop: "0px" }}
                        iconButtonElement={<IconButton style={{ height: "0px" }}><Carrot style={{ height: "10px" }} /></IconButton>}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    >
                        <Menu>
                            <MenuItem primaryText={username[0].first_name} />
                            <MenuItem primaryText="Logout" onClick={this.logOut} />
                        </Menu>
                    </IconMenu>
                    </div>
                        :
                        null
                    }*/}
                </span>

                {(this.state.open) ?
                    <FlatButton
                        className="hamburger-icon close"
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
                style={{ backgroundColor: 'transparent', transition: "none"}}
                iconElementLeft={
                    <img src={require('../../assets/logos.png')} className="logo" alt="logo" />
                }
                iconElementRight={menu}
                onLeftIconButtonTouchTap={this.handleHomePage}
            />
            {/*{(this.state.open) ?
                <div className="sub-menu slide-in">
                    <div onClick={this.handleStaticUrl.bind(this, 'signup', true)}>Apply Now</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'about', true)}>About Interspan</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'employee', true)}>For Employers</div>
                    <div onClick={this.handleStaticUrl.bind(this, 'hire', true)}>What we hire for</div>
                    {this.state.isLogin ? <div onClick={this.logOut.bind(this, 'logOut', true)}>Logout</div> : <div onClick={this.handleStaticUrl.bind(this, 'login', true)}>Login</div>}

                    <div className="menu-info contact-info">
                        <p className="title">Office Hours</p>
                        <p>Mon-Fri</p>
                        <p>8AM-5PM EST</p>
                    </div>

                    <div className="contact-info">
                        <p className="title">Contact</p>
                        <p>Address: <a style={{ textDecoration: "none" }} href="https://www.google.com/maps/place/United+States/@36.2152546,-113.6923823,4z/data=!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d39.7747695!4d-101.4038086" target="_blank"> XYZ City, USA </a></p>
                        <p>Office: 804-519-7677</p>
                        <p>Fax: 804-595-9999</p>
                        <p>Email: work@Interspan.com</p>
                    </div>

                    <div>
                        <h2>
                            <span onClick={this.handleLanguage.bind(this, event, 1, 'en')}>  English </span> |
                            <span onClick={this.handleLanguage.bind(this, event, 1, 'sp')}> Spanish </span>
                        </h2>
                    </div>
                </div>
                : null
            }*/}
        </div>;

        const globalMenu = <div>
            <AppBar
                zDepth={1}
                className={this.props.router.location.pathname === "/login" || this.props.router.location.pathname === "/signup" || this.props.router.location.pathname === "/forget"?"navbar-login-items":"icon-menu-hamburger"}
                iconElementLeft={<img className="logo-navbar" src={require("../../assets/logos.png")} />}
                iconElementRight={this.props.router.location.pathname === "/login" || this.props.router.location.pathname === "/signup" || this.props.router.location.pathname === "/forget"?<div className="sm-screen"><img className="dash-icon" src={require("../../assets/dash-icon.png")} />{menu}</div>:languageSelect}
                title={this.props.router.location.pathname === "/login" || this.props.router.location.pathname === "/signup" || this.props.router.location.pathname === "/forget"?<div className="title-bar"><p className="title">Let's get started</p><img src={require('../../assets/logos.png')} /></div>:null}
                style={{ zIndex: 1, backgroundColor: "white", transition: "none" }}
                titleStyle={{ color: '#2e2e2e', fontFamily: "'Roboto',sans-serif" }}
                showMenuIconButton={this.props.router.location.pathname === "/job" ? true : false}
            />
        </div>;
        return (
            <div>
                {/*{this.stateData ?
                    <Drawer
                        docked={false}
                        width={270}
                        open={this.state.openDrawer}
                        onRequestChange={(openDrawer) => this.setState({ openDrawer: openDrawer })}
                    >
                        <AppBar
                            zDepth={1}
                            style={{ backgroundColor: '#2e469e', transition: "none" }}
                            titleStyle={{ color: 'white', fontFamily: 'SFUI Display' }}
                            showMenuIconButton={false}
                        />
                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 0 ? <Arrow /> : this.stateData.visited.indexOf(0) !== -1 ? <Done /> : <NotIntrested />}>{this.stateData.selectedJson.headings.applicationInformation}</MenuItem>
                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 1 ? <Arrow /> : this.stateData.visited.indexOf(1) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(0) === -1}>{this.stateData.selectedJson.headings.jobLocation}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 2 ? <Arrow /> : this.stateData.visited.indexOf(2) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(1) === -1}>{this.stateData.selectedJson.headings.educationTraining}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 3 ? <Arrow /> : this.stateData.visited.indexOf(3) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(2) === -1}>{this.stateData.selectedJson.headings.employementHistory}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 4 ? <Arrow /> : this.stateData.visited.indexOf(4) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(3) === -1}>{this.stateData.selectedJson.headings.personalInformation}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 5 ? <Arrow /> : this.stateData.visited.indexOf(5) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(4) === -1}>{this.stateData.selectedJson.headings.lightIndustrialSkills}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 6 ? <Arrow /> : this.stateData.visited.indexOf(6) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(5) === -1}>{this.stateData.selectedJson.headings.media}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 7 ? <Arrow /> : this.stateData.visited.indexOf(7) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(6) === -1}>{this.stateData.selectedJson.headings.equalOpportunity}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} rightIcon={this.stateData.stepIndex === 8 ? <Arrow /> : this.stateData.visited.indexOf(8) !== -1 ? <Done /> : <NotIntrested />} disabled={this.stateData.visited.indexOf(7) === -1}>{this.stateData.selectedJson.headings.transportation}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} disabled={this.stateData.visited.indexOf(8) === -1} rightIcon={this.stateData.stepIndex === 9 ? <Arrow /> : this.stateData.visited.indexOf(9) !== -1 ? <Done /> : <NotIntrested />}>{this.stateData.selectedJson.headings.references}</MenuItem>

                        <MenuItem style={{ color: "#373e9b", fontFamily: "SFUI_Text" }} onTouchTap={() => { this.setState({ openDrawer: false }) }} disabled={this.stateData.visited.indexOf(9) === -1} rightIcon={this.stateData.stepIndex === 10 ? <Arrow /> : this.stateData.visited.indexOf(10) !== -1 ? <Done /> : <NotIntrested />}>{this.stateData.selectedJson.headings.certification}</MenuItem>

                        <MenuItem>
                            <h3>
                                <span
                                    style={{ color: this.state.language === 'en' ? "#373e9b" : "black" }}
                                    onClick={this.handleLanguage.bind(this, event, 1, 'en')}>  English
                                    </span> |
                                    <span
                                    style={{ color: this.state.language === 'sp' ? "#373e9b" : "black" }}
                                    onClick={this.handleLanguage.bind(this, event, 1, 'sp')}> Spanish
                                    </span>
                            </h3>
                        </MenuItem>

                    </Drawer>
                    : null}*/}

                <div className={`navbar-container ${!this.state.isAuthenticated ? `navbar-container-color` : `navbar-defaults`}`}>
                    {(!this.state.isAuthenticated ? homeMenu : globalMenu)}
                    {(this.state.jobMenuOpen) ?
                        <div className="job-sub-menu slide-in-job">
                            <Card className={this.stateData.visited.indexOf(0) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.applicationInformation}</span>{this.stateData.visited.indexOf(0) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(1) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.jobLocation}</span>{this.stateData.visited.indexOf(1) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(2) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.educationTraining}</span>{this.stateData.visited.indexOf(2) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(3) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.employementHistory}</span>{this.stateData.visited.indexOf(3) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(4) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.personalInformation}</span>{this.stateData.visited.indexOf(4) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(5) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.lightIndustrialSkills}</span>{this.stateData.visited.indexOf(5) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(6) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.media}</span>{this.stateData.visited.indexOf(6) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(7) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.equalOpportunity}</span>{this.stateData.visited.indexOf(7) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(8) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.transportation}</span>{this.stateData.visited.indexOf(8) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(9) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.references}</span>{this.stateData.visited.indexOf(9) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                            <Card className={this.stateData.visited.indexOf(10) !== -1 ? "categories" : "categories categories-disabled"}>
                                <li><span>{this.stateData.selectedJson.headings.certification}</span>{this.stateData.visited.indexOf(10) !== -1 ? <span><Done className="card-icon" color="#00ca02" /></span> : <span><img src={require('../../assets/close.svg')} className="card-icon" /></span>}</li>
                            </Card>
                        </div>
                        : null}
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        authObj: state.AuthReducer,
        language: state.jobReducer.language
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return { changeLanguage: (language: any) => dispatch(JobActions.changeLanguage(language)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
