import * as React from 'react';
import { TextField } from 'material-ui';
import { SignupActionButton } from './actionButtons';
import {Link} from "react-router";

class UserSSNForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        //satte of component
        this.state = {
            err_message: "",
            social_security: ""
        }
    }

    //Validation for social security number
    validation = () => {
        if (this.state.social_security.trim() == '') {
            this.setState({ err_message: "Enter Social Security Number" });
        }
        else {
            this.setState({ err_message: "" },
                () => this.props.clickEvent({ social_security: this.state.social_security })
            );
        }
    }

    render() {
        return (
            <div className="fields-container">
                <TextField
                    hintText=""
                    onBlur={(event: any) => this.setState({ social_security: event.target.value })}
                    errorText={this.state.err_message ? this.state.err_message : ''}
                    fullWidth={true}
                    style={{marginBottom:"30px"}}
                    floatingLabelText="Social Security Number"
                />
                {this.state.err_message ? <span className="error-icon"><img src={require("../../assets/error-icon.svg")} /></span> : null}
                <div className="help-button">
                    <Link to="/login" className="create-account">Already have account?</Link>
                    <Link to="/forget" className="forget-password">Forgotten password?</Link>
                </div>
                <SignupActionButton clicked={this.validation} />
            </div>
        );
    }

}
export default UserSSNForm;