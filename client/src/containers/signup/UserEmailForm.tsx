import * as React from 'react';
import { TextField } from 'material-ui';
import { SignupActionButton } from "./actionButtons";
import { Link } from 'react-router';

class UserEmailForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        //state of the component 
        this.state = {
            email_error: false,
            email_message: '',
            email_success: false,
            email_val: '',

            pass_message: '',
            pass_error: false,
            pass_success: false,
            pass_val: '',

            repeat_pass_error: false,
            repeat_pass_val: '',
            repeat_pass_success: false,
            repeat_pass_message: '',
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

    // Confirm Password Validation
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

    isConfirmPassword(value: any) {
        if (value.trim() == '') {
            this.setState({
                repeat_pass_error: true,
                repeat_pass_message: 'Password field is required',
            });
            return;
        }

        // Checking confirm password
        else if (this.state.pass_val !== value) {
            this.setState({
                repeat_pass_error: true,
                repeat_pass_message: 'Password not matched',
            });
        }
        else {
            this.setState({
                repeat_pass_error: false,
                repeat_pass_val: value,
                repeat_pass_success: true,
            });
        }
    }

    //On submit validation
    validation() {
        if (this.state.email_val.trim() == '' || this.state.pass_val.trim() == '' || this.state.repeat_pass_val.trim() == '') {
            if (this.state.email_val.trim() == '' && this.state.pass_val.trim() == '' && this.state.repeat_pass_val.trim() == '') {
                this.setState({
                    email_error: true,
                    email_message: 'Please enter email address',
                    email_success: false,

                    pass_error: true,
                    pass_message: 'Please enter password',
                    pass_success: false,

                    repeat_pass_error: true,
                    repeat_pass_message: 'Password not matched',
                    repeat_pass_success: false
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
            else if (this.state.repeat_pass_val.trim() == '') {
                this.setState({
                    repeat_pass_error: true,
                    repeat_pass_message: 'Password not matched',
                    repeat_pass_success: false
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
                <TextField
                    ref="email"
                    errorText={this.state.email_error ? this.state.email_message : ''}
                    fullWidth={true}
                    name="email"
                    onBlur={(event: any) => {
                        this.isEmailAddress(event.target.value);
                    }}
                    floatingLabelStyle={this.state.email_success ? styles.floating : styles.floatingFailure}
                    floatingLabelText="Email Address"
                />
                {this.state.email_error ? <span className="error-icon"><img src={require("../../assets/error-icon.svg")} /></span> : null}
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
                    floatingLabelStyle={this.state.pass_success ? styles.floating : styles.floatingFailure}
                />
                {this.state.pass_error ? <span className="error-icon"><img src={require("../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    hintText=""
                    errorText={this.state.repeat_pass_error ? this.state.repeat_pass_message : ''}
                    fullWidth={true}
                    type="password"
                    onBlur={(event: any) => {
                        this.isConfirmPassword(event.target.value);
                    }}
                    style={{ marginBottom: "30px" }}
                    floatingLabelText="Confirm Password"
                    floatingLabelStyle={this.state.pass_success ? styles.floating : styles.floatingFailure}
                />
                {this.state.repeat_pass_error ? <span className="error-icon"><img src={require("../../assets/error-icon.svg")} /></span> : null}
                <div className="help-button">
                    <Link to="/login" className="create-account">Already have account?</Link>
                    <Link to="/forget" className="forget-password">Forgotten password?</Link>
                </div>

                <SignupActionButton clicked={this.validation.bind(this)} />
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
export default UserEmailForm;