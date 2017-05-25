import * as React from 'react';
import {TextField} from 'material-ui';

class UserSSNForm extends React.Component<any, any> {

    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter Social Security Number</label>
                <TextField
                    hintText=""
                    onFocus={()=>{}}
                    onBlur={(event:any)=>this.props.collection({social_security:event.target.value})}
                    errorText=""
                    fullWidth={true}
                    floatingLabelText="Social Security Number"
                />

            </div>
        );
    }

}
export default UserSSNForm;