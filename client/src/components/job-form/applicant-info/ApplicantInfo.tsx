import * as React from "react"
import { TextField } from "material-ui";

class ApplicantInfo extends React.Component<any, any>{

    render(){

        return(
            <div className="job-applicant-container">
                <label className="title">Enter your name</label>
                <TextField
                    hintText=""
                    fullWidth={true}
                    onFocus={() => { }}

                    floatingLabelText="First Name"
                />

                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Last Name"
                />
            </div>
        )
    }
}

export default ApplicantInfo;