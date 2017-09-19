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

    //On submit validation
    validation() {
        if (this.state.email_val.trim() == '') {
            if (this.state.email_val.trim() == '') {
                this.setState({
                    email_error: true,
                    email_message: 'Please enter email address',
                    email_success: false,
                });
            }
            else if (this.state.email_val.trim() == '') {
                this.setState({
                    email_error: true,
                    email_message: 'Please enter email address',
                    email_success: false,
                });
            }
        }
        else if (!this.state.email_error) {
            this.props.clickEvent({ email: this.state.email_val })
        }
    }
    render() {
        return (
            <div className="fields-container">
                <label className="title">We'll email you instructions on how to reset it.</label>
                <TextField
                    ref="email"
                    errorText={this.state.email_error ? this.state.email_message : ''}
                    fullWidth={true}
                    name="email"
                    onBlur={(event: any) => {
                        this.isEmailAddress(event.target.value);
                    }}
                    style={{marginBottom:"36px"}}
                    floatingLabelStyle={this.state.email_success ? styles.floating : styles.floatingFailure}
                    floatingLabelText="Email address"
                />
                {this.state.email_error ? <span className="error-icon"><img src={require("../../assets/error-icon.svg")} /></span> : null}
                <div className="help-button">
                    <Link to="/signup" className="create-account">Dont have account yet?</Link>
                    <Link to="/forget" className="forget-password">Forgotten password?</Link>
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