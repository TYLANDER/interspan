import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons";
import { TextField, RadioButtonGroup, RadioButton } from "material-ui";

class PersonalInfo extends React.Component<any, any>{
    jsonData:any;
    constructor(props:any) {
        super();
        this.jsonData = this.props.jsonData;
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
        const {questions,yes,no,description} = this.jsonData;
        return(
            <div className="job-applicant-container">
                <label> Personal Information</label>
                <TextField
                    floatingLabelText={questions.one}
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    />

                <TextField
                    floatingLabelText={questions.two}
                    onFocus={() => { }}
                    fullWidth={true}
                    />

                  <br/>
                  <br/>  
                  <p>
                      {questions.three}
                  </p>

                <RadioButtonGroup  name="location" defaultSelected={"No"}
                    onChange={(event: any) => event.target.value === 'Yes' ? this.setState({convictedCrime: true }) : this.setState({convictedCrime: false })}>

                    <RadioButton
                        value="Yes"
                        label={yes}
                    />
                     <RadioButton
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                {this.state.convictedCrime ? 
                <div>
                <p>{questions.four}</p>
                <TextField
                    floatingLabelText={description}
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