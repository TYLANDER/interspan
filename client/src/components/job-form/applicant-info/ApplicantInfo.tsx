import * as React from "react"
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from "material-ui";

class ApplicantInfo extends React.Component<any, any>{
    state = {
        employee: false
    }
    render() {

        return (
            <div className="job-applicant-container">
                <label className="title">Applicant Information</label>
                <TextField
                    hintText=""
                    fullWidth={true}
                    floatingLabelText="First Name"
                />

                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Middle Name"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Last Name"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    floatingLabelText="Street Address"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="City"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="State"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Zip"
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Home Telephone"
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Alternate Telephone"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Social Security #"
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="Email"
                />
                <br />
                <b>Are you at least 18 year old? </b>
                <RadioButtonGroup name="age">

                    <RadioButton
                        value="yes"
                        label="Yes"
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                <b>Have you ever applied for employment with us? </b>
                <RadioButtonGroup name="employement" onChange={(event: any) => event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })}>
                    <RadioButton
                        value="yes"
                        label="Yes"
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                {this.state.employee ? <DatePicker floatingLabelText="Month and Year" /> : ""}
                <b>Are you legally eligible for employment in the United States? </b>
                <RadioButtonGroup name="age">

                    <RadioButton
                        value="yes"
                        label="Yes"
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText="When would you be able to begin work? "
                />
            </div>
        )
    }
}

export default ApplicantInfo;