import * as React from 'react';
import {TextField} from "material-ui";

class UsernameForm extends React.Component<any, any> {

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter your name</label>
                <TextField
                    hintText=""
                    errorText=""
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