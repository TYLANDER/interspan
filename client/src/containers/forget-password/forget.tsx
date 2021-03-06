import * as React from 'react';
import './forget.css';
import { CircularProgress } from 'material-ui';
import { indigo900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Forms from './Forms';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AuthActions from "../../store/action/auth";

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isAuthenticated: false,
            userObj: {},
            loading: false,
            error: false
        };
    }

    //customize theme
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

    handleHomePage() {
        browserHistory.push('/');
    }

    componentWillReceiveProps(newProps: any) {
        //check processing state
        newProps.authObj.isProcessing ? this.setState({ loading: true }) : this.setState({ loading: false });

        //handling api errors
        newProps.authObj.isError.status ? this.setState({ error: true }) : this.setState({ error: false })

        //Navigateto apply job if email successfully login
        newProps.authObj.isAuthenticated ? browserHistory.push('/job') : null;
    }

    handleNext = (values: any) => {
        let users = Object.assign(this.state.userObj, values);
        /**
         * returning form value
         * action dispatch
         * send form login data to epic
         */
        this.props.login(users);
    }

    //calling login form component
    formCard = () => {
        return <Forms clickEvent={this.handleNext} />;
    }

    render() {
        { this.state.error ? alert(this.props.authObj.isError.msg) : null }
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.state.loading ? <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)"
                    style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} /> : <div className="forget-password-container">
                        <div className="paper-container">
                            {/* <div className="forget-header">
                                <div className="shadow-image"></div>
                                <p>Forget your password?</p>
                                <img className="image" src={require("../../assets/login-header.png")} />
                            </div> */}
                            <div className="md-screen forget-view">
                                {this.formCard()}
                            </div>
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
        login: (userObj: any) => dispatch(AuthActions.login(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
