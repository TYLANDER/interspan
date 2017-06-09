import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, RadioButtonGroup, RadioButton } from 'material-ui';

class PersonalInfo extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            convictedCrime: false,
            selectedJson: this.props.jsonData,
            form: {
                employment_history: "",
                emergency_number: "",
                emergency_name: "",
                crime: ""
            }
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    componentWillMount() {
        if (localStorage.getItem('personal-form') !== null) {
            let data: any = localStorage.getItem('personal-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }
    handleNext = () => {
        this.props.handleNext("personal-form", this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }
    render() {
        const { questions, yes, no, description } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <TextField
                    floatingLabelText={questions.one}
                    onBlur={this.handleTargetEvents}
                    fullWidth={true}
                    multiLine={true}
                    name="employment_history"
                    value={formRef.employment_history}
                    onChange={(event: any) => {
                        formRef.employment_history = event.target.value
                        this.setState(formRef);
                    }
                    }
                />
                <br />
                <label className="title">{questions.two}</label>
                <br />
                <TextField
                    floatingLabelText={questions.name}
                    onBlur={this.handleTargetEvents}
                    value={formRef.emergency_name}
                    onChange={(event: any) => {
                        formRef.emergency_name = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="emergency_name"
                />
                <TextField
                    floatingLabelText={questions.phone}
                    onBlur={this.handleTargetEvents}
                    value={formRef.emergency_number}
                    onChange={(event: any) => {
                        formRef.emergency_number = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="emergency_number"
                />

                <br />
                <br />
                <label className="title">
                    {questions.three}
                </label>

                <RadioButtonGroup name="crime" valueSelected={formRef.crime !== 'No' ? "Yes" : "No"} onChange={(event: any) => {
                    formRef.crime = event.target.value
                    this.setState(formRef);
                    event.target.value === 'Yes' ? this.setState({ convictedCrime: true }) : this.setState({ convictedCrime: false })
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
                {this.state.convictedCrime || formRef.crime !== "No" ?
                    <div>
                        <p>{questions.four}</p>
                        <TextField
                            floatingLabelText={description}
                            onBlur={this.handleTargetEvents}
                            fullWidth={true}
                            multiLine={true}
                            onChange={(event: any) => {
                                formRef.crime = event.target.value
                                this.setState(formRef);
                            }
                            }
                            value={formRef.crime}
                            name="crime"
                        />
                    </div>
                    : null}

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default PersonalInfo;