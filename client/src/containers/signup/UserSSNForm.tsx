import * as React from 'react';
import {TextField} from 'material-ui';

class UserSSNForm extends React.Component<any, any> {

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter Social Security Number</label>
                <TextField
                    hintText=""
                    errorText=""
                    fullWidth={true}
                    floatingLabelText="Social Security Number"
                />

            </div>
        );
    }

}
export default UserSSNForm;