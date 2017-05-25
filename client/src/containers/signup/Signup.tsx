import * as React from 'react';
import './Signup.css';
import { Paper, FlatButton ,CircularProgress} from 'material-ui';
import { indigo900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UsernameForm from './UsernameForm';
import UserEmailForm from './UserEmailForm';
import UserSSNForm from './UserSSNForm';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AuthActions from "../../store/action/auth";

class Signup extends React.Component<any, any> {

    muiTheme: any = getMuiTheme({
        palette: {
            textColor: indigo900
        },
        appBar: {
            height: 50,
        },
        textField: {
            focusColor: '#2e469e',
            textColor: '#2e469e'
        }
    });

    state: any = {
        currentScreen: 'UsernameForm',
        isAuthenticated: false,
        userObj: {},
        loading:false
    };

    componentWillMount() {
        if (!this.props.authObj.isAuthenticated)
            this.props.authLogin({ username: 'Zeeshan Hanif' });
    }
    handleHomePage() {
        browserHistory.push('/');
    }
    componentWillReceiveProps(newProps:any){
        newProps.authObj.isProcessing?this.setState({loading:true}):this.setState({loading:false});
        newProps.authObj.isRegistered ? browserHistory.push('/job') : null;

    }
    handleJobPage = () => {
        this.props.signUp(this.state.userObj);
        
    }
    collectFormData = (user: any, error: any) => {
        let users = Object.assign(this.state.userObj, user);
        this.setState({ userObj: users });
    }
    swapScreen(screenName: any) {
        let changedScreen = '';
        /*
        if (screenName == "back" && this.state.currentScreen == "UsernameForm"){
            changedScreen = "UsernameForm";
            this.handleHomePage();
        }
        else if (screenName == "back" && this.state.currentScreen == "UserEmailForm")
            changedScreen = "UsernameForm";
        else if (screenName == "back" && this.state.currentScreen == "UserSSNForm")
            changedScreen = "UserEmailForm";
             */

        if (screenName === 'continue' && this.state.currentScreen === 'UsernameForm')
            changedScreen = 'UserEmailForm';
        else if (screenName === 'continue' && this.state.currentScreen === 'UserEmailForm')
            changedScreen = 'UserSSNForm';
        else if (screenName === 'continue' && this.state.currentScreen === 'UserSSNForm') {
            changedScreen = 'UserSSNForm';
            this.handleJobPage();
        }

        this.setState({ currentScreen: changedScreen });
    }

    render() {

        let formElement: any = (
            <div>
                {(this.state.currentScreen == 'UsernameForm') ? <UsernameForm collection={this.collectFormData} /> :
                    (this.state.currentScreen == 'UserEmailForm') ? <UserEmailForm collection={this.collectFormData} /> : <UserSSNForm collection={this.collectFormData} />}

                <div className="footer-container">
                    {/*<FlatButton label="Back"
                        className="back-btn"
                        secondary={true}
                        labelStyle={{color: '#2e469e',fontSize:"16px"}}
                        icon={<img src={require("../../assets/angle-left.svg")} className="btn-icon back" alt="logo" />}
                        onClick={this.swapScreen.bind(this, "back")}/>*/}

                    <FlatButton label="Continue"
                        className="continue-btn"
                        labelPosition="before"
                        primary={true}
                        labelStyle={{ color: '#2e469e', fontSize: '16px' }}
                        icon={<img src={require('../../assets/angle-right.svg')} className="btn-icon continue" alt="logo" />}
                        onClick={this.swapScreen.bind(this, 'continue')} />
                </div>
            </div>
        );
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.state.loading?<CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)" style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} />:<div className="signup-container">
                    <div className="paper-container">
                        <Paper zDepth={2} className="md-screen">
                            {formElement}
                        </Paper>
                        <div className="sm-screen">
                            {formElement}
                        </div>
                    </div>
                </div>}
                
            </MuiThemeProvider>
        );
    }

}
const mapStateToProps = (state: any) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        authLogin: (userObj: any) => dispatch({
            type: 'LOGIN_SUCCESS',
            payload: userObj
        }),
        signUp: (userObj: any) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
