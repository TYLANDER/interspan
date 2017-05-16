import * as React from "react"
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from "material-ui";
import ActiveButtons from "../active-buttons/ActiveButtons"

class ApplicantInfo extends React.Component<any, any>{

    jsonData:any;

    constructor(props:any){
        super(props);
        this.jsonData = this.props.jsonData;
    }
    state = {
        employee: false
    }
    handleNext = ()=>{
        this.props.handleNext({name:123, idx : 0})
    }
    handlePrev = ()=>{
        this.props.handlePrev({name:123, idx : 1})
    }
    render() {
        console.log(this.jsonData)
        const {lastName, firstName, middle, streetAddress, city, state, zip, socialSecurity, email, homeTelephone, cellularTelephone, alternateTelephone, areYou18, employment, employementYes, legallyEligible, workStatus} = this.jsonData
        return (
            <div className="job-applicant-container">
                <label className="title">Applicant Information</label>
                <TextField
                    hintText=""
                    fullWidth={true}
                    floatingLabelText={firstName}
                />

                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={middle}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={lastName}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    floatingLabelText={streetAddress}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={city}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={state}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={zip}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={homeTelephone}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={alternateTelephone}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={cellularTelephone}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={socialSecurity}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={email}
                />
                <br />
                <b>{areYou18} </b>
                <RadioButtonGroup name="age">

                    <RadioButton
                        value="yes"
                        label={employementYes}
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                <b>{employment} </b>
                <RadioButtonGroup name="employement" onChange={(event: any) => event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })}>
                    <RadioButton
                        value={employementYes}
                        label="Yes"
                    />
                    <RadioButton
                        value="no"
                        label="No"
                    />
                </RadioButtonGroup>
                {this.state.employee ? <DatePicker floatingLabelText={legallyEligible} /> : ""}
                <b>Are you legally eligible for employment in the United States? </b>
                <RadioButtonGroup name="age">

                    <RadioButton
                        value={employementYes}
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
                    floatingLabelText={workStatus}
                />
                
                <ActiveButtons handleNext={()=>this.handleNext()} handlePrev={()=>this.handlePrev()}/>
            </div>
        )
    }
}

export default ApplicantInfo;