import * as React from 'react';
import {TextField} from "material-ui";

class UsernameForm extends React.Component<any, any> {
 isFullName(value:any) {
        if(value.trim()==""){
            this.setState({
                email_error:true,
                err_message:"Email field is required",
                email_success:false
            })
            return;
        }
       let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       let isValidEmail = pattern.test(value);
       if(!isValidEmail)
       {
           this.setState({
                email_error:true,
                err_message:"Please enter valid email address",
                email_success:false
            })
            return;
       }
        this.setState({
            email_error:false,
            email_success:true
        })
    }
    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter your name</label>
                <TextField
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="First Name"
                />

                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    floatingLabelText="Last Name"
                />
            </div>
        );
    }

}
export default UsernameForm;