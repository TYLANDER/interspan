import * as React from 'react';
import { TextField } from 'material-ui';
import LoginActionButton from "./actionButtons";
import { Link } from "react-router";

class Forms extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            email_error: false,
            email_message: '',
            email_success: false,
            email_val: '',

            pass_message: '',
            pass_error: false,
            pass_success: false,
            pass_val: '',
        };
    }

    // Email validation handler
    isEmailAddress(value: any) {
        if (value.trim() == '') {
            this.setState({
                email_error: true,
                email_message: 'Email field is required',
                email_success: false
            });
            return;
        }
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValidEmail = pattern.test(value);
        if (!isValidEmail) {
            this.setState({
                email_error: true,
                email_message: 'Please enter valid email address',
                email_success: false
            });
            return;
        }
        this.setState({
            email_error: false,
            email_success: true,
            email_val: value.toLowerCase()
        });
    }

    // Password validation handler
    isPassword(value: any) {
        if (value.trim() == '') {
            this.setState({
                pass_error: true,
                pass_message: 'Password field is required',
            });
        }
        else {
            this.setState({
                pass_error: false,
                pass_success: true,
                pass_val: value
            });
        }
    }

    //On submit validation
    validation() {
        if (this.state.email_val.trim() == '' || this.state.pass_val.trim() == '') {
            if (this.state.email_val.trim() == '' && this.state.pass_val.trim() == '') {
                this.setState({
                    email_error: true,
                    email_message: 'Please enter email address',
                    email_success: false,

                    pass_error: true,
                    pass_message: 'Please enter password',
                    pass_success: false,
                });
            }
            else if (this.state.email_val.trim() == '') {
                this.setState({
                    email_error: true,
                    email_message: 'Please enter email address',
                    email_success: false,
                });
            }
            else if (this.state.pass_val.trim() == '') {
                this.setState({
                    pass_error: true,
                    pass_message: 'Please enter password',
                    pass_success: false,
                });
            }
        }
        else if (!this.state.email_error && !this.state.pass_error) {
            this.props.clickEvent({ email: this.state.email_val, password: this.state.pass_val })
        }
    }
    render() {
        return (
            <div className="fields-container">
                <label className="title">Sign into your account here:</label>
                <TextField
                    ref="email"
                    errorText={this.state.email_error ? this.state.email_message : ''}
                    fullWidth={true}
                    name="email"
                    onBlur={(event: any) => {
                        this.isEmailAddress(event.target.value);
                    }}
                    floatingLabelStyle={this.state.email_success ? styles.floating : styles.floatingFailure}
                    floatingLabelText="Email address"
                />
                {this.state.email_error ? <span className="error-icon"><img src={require("../../assets/error-icon.png")} /></span> : null}
                <TextField
                    hintText=""
                    errorText={this.state.pass_error ? this.state.pass_message : ''}
                    fullWidth={true}
                    ref="password"
                    type="password"
                    onBlur={(event: any) => {
                        this.isPassword(event.target.value);
                    }}
                    floatingLabelText="Password"
                    style={{ marginBottom: "50px" }}
                    floatingLabelStyle={this.state.pass_success ? styles.floating : styles.floatingFailure}
                />
                {this.state.password_error ? <span className="error-icon"><img src={require("../../assets/error-icon.png")} /></span> : null}
               <div className="help-button">
                <Link to="/signup" className="create-account">Already have account?</Link>
                <Link to="#" className="forget-password">Forgotten password?</Link>
                </div>
                <LoginActionButton clicked={this.validation.bind(this)} />
            </div>
        );
    }

}

let styles = {
    floating: {
        color: 'green'
    },
    floatingFailure: {
    }
};
export default Forms;