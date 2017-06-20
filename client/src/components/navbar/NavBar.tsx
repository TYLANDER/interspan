import * as React from 'react';
import { AppBar, RaisedButton, FlatButton, Drawer, SelectField, MenuItem, Chip, Menu, IconButton, IconMenu } from 'material-ui';
import Done from 'material-ui/svg-icons/action/done';
import Arrow from 'material-ui/svg-icons/av/play-arrow';
import NotIntrested from 'material-ui/svg-icons/av/not-interested';
import './NavBar.css';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import JobActions from "../../store/action/jobs";
import { withRouter } from "react-router";
import Carrot from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
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
            headings: {}
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
                <div style={{ marginTop: "-6px", display: "inline" }}>
                    {this.state.isLogin ? <Chip style={{ display: "inline-flex", backgroundColor: "transparent", margin: "-22px" }} labelColor="white" labelStyle={{ fontWeight: 500, fontSize: "16px" }}>
                        {username[0].first_naisLoggedInme}
                    </Chip>
                        : <Chip style={{ display: "inline-flex", backgroundColor: "transparent", margin: "-22px" }} labelColor="white" labelStyle={{ fontWeight: 500, fontSize: "16px" }}>
                            N/A
                            </Chip>}
                    <SelectField
                        className="lang-select"
                        labelStyle={{ color: "white", textOverflow: "none", paddingLeft: "30px" }}
                        value={this.state.language}
                        underlineStyle={{ display: 'none' }}
                        onChange={this.handleLanguage}
                    >
                        <MenuItem value="en" primaryText="English" />
                        <MenuItem value="sp" primaryText="Spanish" />
                    </SelectField>

                </div>
                : <p></p>
        )
        const title = (this.props.router.location.pathname === "/job" ? this.props.title : "Let's get started")
        const menu = (
            <div className="menu-container">
                <span className="md-menu">
                    <FlatButton label="Employers" className="app-box-shadow" labelStyle={{ textTransform: 'capitalize' }}
                        onTouchTap={this.handleStaticUrl.bind(null, 'employee', false)} />
                    <FlatButton label="About" className="app-box-shadow" labelStyle={{ textTransform: 'capitalize' }}
                        onTouchTap={this.handleStaticUrl.bind(null, 'about', false)} />
                    <RaisedButton primary label="Apply" onTouchTap={this.props.logout} className="app-box-shadow"
                        labelStyle={{ textTransform: 'capitalize' }}
                        onClick={this.handleStaticUrl.bind(null, 'signup', false)} />
                    {this.state.isLogin ? <div style={{ display: "inline" }}>  <IconMenu
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
                    }
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
                style={{ backgroundColor: 'rgb(255,255,255)', transition: "none" }}
                iconElementLeft={
                    <img src={require('../../assets/logo.png')} className="logo" alt="logo" />
                }
                iconElementRight={menu}
                onTitleTouchTap={this.handleHomePage}
            />
            {(this.state.open) ?
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
            }
        </div>;

        const globalMenu = <div>
            <AppBar
                zDepth={1}
                title={title}
                className="icon-menu-hamburger"
                onLeftIconButtonTouchTap={
                    this.drawerToggle.bind(this)
                }
                iconElementRight={languageSelect}
                style={{ backgroundColor: '#2e469e', transition: "none" }}
                titleStyle={{ color: 'white', fontFamily: 'SFUI Display' }}
                showMenuIconButton={this.props.router.location.pathname === "/job" ? true : false}
            />

        </div>;
        return (
            <div>
                {this.stateData ?
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
                    : null}

                <div className={`navbar-container ${!this.state.isAuthenticated ? `navbar-container-color` : `navbar-global-container-color`}`}>
                    {(!this.state.isAuthenticated ? homeMenu : globalMenu)}
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
