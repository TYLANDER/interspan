import * as React from 'react';
import { TextField } from 'material-ui';

class UserEmailForm extends React.Component<any, any> {
    state: any = {
            email_error: false,
            err_message: '',
            email_success: false,
            pass_match: false,
            password: '',
            pass_message: '',
            pass_error: false,
            pass_success: false
    };
// Email Validation
    isEmailAddress(value: any) {
        if (value.trim() == ''){
            this.setState({
                email_error: true,
                err_message: 'Email field is required',
                email_success: false
            });
            return;
        }
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValidEmail = pattern.test(value);
        if (!isValidEmail)
       {
           this.setState({
                email_error: true,
                err_message: 'Please enter valid email address',
                email_success: false
            });
           return;
       }
        this.setState({
            email_error: false,
            email_success: true
        });
    }
// Confirm Password Validation
    isPassword(value: any) {
        if (this.state.password.trim() == '')
        {
            this.setState({
                pass_error: true,
                pass_message: 'Password field is required',
            });
            return;
        }
        if (this.state.password !== value)
        {
            this.setState({
                pass_error: true,
                pass_message: 'Password not matched',
            });
            return;
        }
        this.setState({
            pass_error: false,
            pass_success: true
        });
    }

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter Email Address</label>
                <TextField
                    ref="email"
                    errorText={this.state.email_error ? this.state.err_message : ''}
                    fullWidth={true}
                    name="email"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.isEmailAddress(event.target.value);
                    }}
                    floatingLabelStyle={this.state.email_success ? styles.floating : styles.floatingFailure}
                    floatingLabelText="Email Address"
                />

                <TextField
                    hintText=""
                    errorText={this.state.pass_error ? this.state.pass_message : ''}
                    fullWidth={true}
                    ref="password"
                    type="password"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => this.setState({password: event.target.value})}
                    floatingLabelText="Password"
                    floatingLabelStyle={this.state.pass_success ? styles.floating : styles.floatingFailure}

                />

                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    type="password"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.isPassword(event.target.value);
                    }}
                    floatingLabelText="Confirm Password"
                    floatingLabelStyle={this.state.pass_success ? styles.floating : styles.floatingFailure}

                />
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