import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, RadioButtonGroup, RadioButton } from 'material-ui';

class PersonalInfo extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            convictedCrime: false,
            selectedJson: this.props.jsonData,
            form:{
                employmentGap: "",
                emergencyContact: "",
                comittedCrime: false,
                crimeDesc: ""
            }
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    render(){
        const {questions, yes, no, description} = this.state.selectedJson;
        return(
            <div className="job-applicant-container">
                <label> Personal Information</label>
                <TextField
                    floatingLabelText={questions.one}
                    onBlur={this.handleTargetEvents}
                    fullWidth={true}
                    multiLine={true}
                    name="employmentGap"
                    />

                <TextField
                    floatingLabelText={questions.two}
                    onBlur={this.handleTargetEvents}
                    fullWidth={true}
                    name="emergencyContact"
                    />

                  <br/>
                  <br/>
                  <p>
                      {questions.three}
                  </p>

                <RadioButtonGroup  name="comittedCrime" defaultSelected={'No'}
                    onChange={(event: any) =>{ 
                        (event.target.value === 'Yes' ? this.setState({convictedCrime: true }) : this.setState({convictedCrime: false })) 
                        let formRef = this.state.form;
                        formRef.comittedCrime = this.state.convictedCrime;
                        this.setState(formRef)
                        }}>

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
                    onBlur={this.handleTargetEvents}
                    fullWidth={true}
                    multiLine={true}
                    name="crimeDesc"
                    />
                    </div>
                    : null}

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default PersonalInfo;