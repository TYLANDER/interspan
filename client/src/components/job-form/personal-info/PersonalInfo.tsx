import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons";
import { TextField, RadioButtonGroup, RadioButton } from "material-ui";

class PersonalInfo extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            convictedCrime: false
        }
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render(){

        return(
            <div className="job-applicant-container">
                
                <label> Personal Information</label>
                <TextField
                    floatingLabelText="Please explain any gaps in your employment history"
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    />

                <TextField
                    floatingLabelText="In case of emergency, please contact: (name & phone #)"
                    onFocus={() => { }}
                    fullWidth={true}
                    />

                  <br/>
                  <br/>  
                  <p>
                      Have you been convicted of a crime in the past 10 years, excluding misdemeanors, 
                      minor traffic violations, and summary offenses which has not been annulled, expunged or sealed by the court?
                  </p>

                <RadioButtonGroup  name="location" defaultSelected={"No"}
                    onChange={(event: any) => event.target.value === 'Yes' ? this.setState({convictedCrime: true }) : this.setState({convictedCrime: false })}>

                    <RadioButton
                        value="Yes"
                        label="Yes"
                    />
                     <RadioButton
                        value="No"
                        label="No"
                    />
                </RadioButtonGroup>
                {this.state.convictedCrime ? 
                <div>
                <p>If “Yes”, describe in full. (A conviction will not necessarily disqualify you from employment but will be considered in relation to specific job requirements)</p>
                <TextField
                    floatingLabelText="Description"
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    />
                    </div>
                    :null}
                  

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default PersonalInfo;