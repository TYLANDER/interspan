import * as React from 'react';
import './Signup.css';
import { CircularProgress } from 'material-ui';
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
    constructor(props: any) {
        super(props);

        //State of component
        this.state = {
            isAuthenticated: false,
            userObj: {},
            loading: false,
            step: 0,
            width: 33.33,
            title: "Enter your first & last name"
        };
    }

    //Customize theme
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

    //Navigate to home page
    handleHomePage() {
        browserHistory.push('/');
    }

    componentWillReceiveProps(newProps: any) {
        //Check processing state 
        newProps.authObj.isProcessing ? this.setState({ loading: true }) : this.setState({ loading: false });
        newProps.authObj.isRegistered ? browserHistory.push('/job') : null;

        //Handling api error state
        newProps.authObj.isError.status ? this.setState({ step: 0 }, () => {
            alert("Email Already Exist");
        }) : null;
    }

    //Action dispatch and send form data to epic
    handleJobPage = () => {
        this.props.signUp(this.state.userObj);
    }

    //Handling next state
    handleNext = (values: any) => {
        let users = Object.assign(this.state.userObj, values);
        //returning form value
        if (this.state.step + 1 === 1) {
            this.refs.admin['className'] = "signup-header-second"
            this.setState({
                step: this.state.step + 1,
                width: this.state.width + 33.33,
                title: "Email & password details"
            })
        }
        else if (this.state.step + 1 === 2) {
            this.refs.admin['className'] = "signup-header-third"
            this.setState({
                step: this.state.step + 1,
                width: this.state.width + 33.33,
                title: "Enter social security number"
            })
        }

        else if (this.state.step == 2)
            this.props.signUp(users);
        // else
        //     this.setState({
        //         step: this.state.step + 1,
        //         width: this.state.width + 33.33
        //     })
    }

    //Signup form stepper state
    formCard = () => {
        switch (this.state.step) {
            case 0: return <UsernameForm clickEvent={this.handleNext} />;
            case 1: return <UserEmailForm clickEvent={this.handleNext} />
            case 2: return <UserSSNForm clickEvent={this.handleNext} />
            default: return <UsernameForm clickEvent={this.handleNext} />;
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                {this.state.loading ? <CircularProgress size={80} thickness={5} color="rgb(45, 69, 158)"
                    style={{ position: 'absolute', textAlign: 'center', margin: '0 auto', left: 0, right: 0 }} /> : <div className="signup-container">
                        <div className="paper-container">
                            <div className="loader">
                                <div style={{ width: this.state.width + "%" }} className="progress">
                                </div>
                            </div>
                            <div ref="admin" className="signup-header">
                                <div className="shadow-image"></div>
                                <p>{this.state.title}</p>
                                {/*<img className="image" src={require("../../assets/login-header.png")} />*/}
                            </div>
                            <div className="md-screen signup-view">
                                {/*<button onClick={()=>this.refs.admin['className']='notnot'}>CLICK</button>*/}
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
        signUp: (userObj: any) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
