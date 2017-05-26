import * as React from 'react';
import './Signup.css';
import { Paper, CircularProgress } from 'material-ui';
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
        isAuthenticated: false,
        userObj: {},
        loading: false,
        step: 2
    };

    componentWillMount() {
        if (!this.props.authObj.isAuthenticated)
            this.props.authLogin({ username: 'Zeeshan Hanif' });
    }
    handleHomePage() {
        browserHistory.push('/');
    }
    componentWillReceiveProps(newProps: any) {
        newProps.authObj.isProcessing ? this.setState({ loading: true }) : this.setState({ loading: false });
        newProps.authObj.isRegistered ? browserHistory.push('/job') : null;
    }
    
    handleJobPage = () => {
        this.props.signUp(this.state.userObj);

    }

    handleNext = (values:any) => {
        let users = Object.assign(this.state.userObj, values);
        //returning form value
        console.log(users);
        if(this.state.step == 2 )
            // call db
            alert("You are done");

        else
            this.setState({
                step: this.state.step + 1
            })
    }

    formCard = () => {
        switch (this.state.step) {
            case 0: return <UsernameForm  clickEvent={this.handleNext} />;
            case 1: return <UserEmailForm  clickEvent={this.handleNext} />
            case 2: return <UserSSNForm clickEvent={this.handleNext} />
            default: return <UsernameForm  clickEvent={this.handleNext} />;
        }
    }
    render() {

        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.state.loading ? <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)"
                    style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} /> : <div className="signup-container">
                        <div className="paper-container">
                            <Paper zDepth={2} className="md-screen">
                                {this.formCard()}
                            </Paper>
                            <div className="sm-screen">
                                {this.formCard()}
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
