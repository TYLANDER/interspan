import * as React from 'react';
import { TextField } from 'material-ui';
import { SignupActionButton } from './actionButtons';

class UserSSNForm extends React.Component<any, any> {
    state ={
        err_message:"",
        social_security:""
    }
    validation = () => {
        if (this.state.social_security.trim() == '') {
            this.setState({err_message:"Enter Social Security Number"});
        }
        else {
            this.setState({err_message:""},
                ()=>{
                    this.props.clickEvent({social_security: this.state.social_security})
                }
            );
            
        }
    }

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter Social Security Number</label>
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    onBlur={(event: any) => this.setState({social_security:event.target.value})}
                    errorText={this.state.err_message ? this.state.err_message : ''}
                    fullWidth={true}
                    floatingLabelText="Social Security Number"
                />
                <SignupActionButton clicked={this.validation} />
            </div>
        );
    }

}
export default UserSSNForm;