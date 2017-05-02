import * as React from 'react';
import {TextField} from "material-ui";

class UserEmailForm extends React.Component<any, any> {

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter Email Address</label>
                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    floatingLabelText="Email Address"
                />

                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Password"
                />

                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    type="password"
                    floatingLabelText="Confirm Password"
                />
            </div>
        );
    }

}
export default UserEmailForm;