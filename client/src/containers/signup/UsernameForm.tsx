import * as React from 'react';
import { TextField } from "material-ui";

class UsernameForm extends React.Component<any, any> {
    state= {
        first_name_error: false,
        first_name_messages: "",
        first_name_success: false,
        last_name_error: false,
        last_name_messages: "",
        last_name_success: false,
    }
    isFirstName(value: any) {
        if (value.trim() == "") {
            this.setState({
                first_name_error: true,
                first_name_messages: "Please enter first name",
                first_name_success: false
            })
            return;
        }
        let pattern = /^[a-zA-Z ]{2,30}$/;
        let isValidName = pattern.test(value);
        console.log(isValidName);
        if (!isValidName){
            this.setState({
                first_name_error: true,
                first_name_messages: "Please enter valid first name",
                first_name_success: false
            })
            return
        } 
        
        console.log(value);
        this.setState({
            first_name_error: false,
            first_name_success: true
        })
    }
    //Last Name Validation
     isLastName(value: any) {
        if (value.trim() == "") {
            this.setState({
                last_name_error: true,
                last_name_messages: "Please enter last name",
                last_name_success: false
            })
            return;
        }
        let pattern = /^[a-zA-Z ]{2,30}$/;
        let isValidName = pattern.test(value);
        console.log(isValidName);
        if (!isValidName){
            this.setState({
                last_name_error: true,
                last_name_messages: "Please enter valid last name",
                last_name_success: false
            })
            return
        } 
        
        console.log(value);
        this.setState({
            last_name_error: false,
            last_name_success: true
        })
    }
    render() {
        return (
            <div className="fields-container">
                <label className="title">Enter your name</label>
                <TextField
                    hintText=""
                    errorText={this.state.first_name_error?this.state.first_name_messages:""}
                    fullWidth={true}
                    onFocus={() => { }}
                    onBlur={(event: any) => {
                        this.isFirstName(event.target.value);
                    }}
                    floatingLabelStyle={this.state.first_name_success?styles.floating:styles.floatingFailure}

                    floatingLabelText="First Name"
                />

                <TextField
                    hintText=""
                    errorText={this.state.last_name_error?this.state.last_name_messages:""}
                    onFocus={() => { }}
                    onBlur={(event: any) => {
                        this.isLastName(event.target.value);
                    }}
                    floatingLabelStyle={this.state.last_name_success?styles.floating:styles.floatingFailure}
                    fullWidth={true}
                    floatingLabelText="Last Name"
                />
            </div>
        );
    }

}
let styles = {
    floating: {
        color: "green"
    },
    floatingFailure: {
    }
}
export default UsernameForm;