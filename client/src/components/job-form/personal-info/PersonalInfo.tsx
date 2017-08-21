import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, RadioButtonGroup, RadioButton } from 'material-ui';
import Styling from "../jobTheme";
import "./PersonalInfo.css";

class PersonalInfo extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            convictedCrime: false,
            selectedJson: this.props.jsonData,
            selectedJson1: this.props.jsonData1,
            form: {
                employment_history: "",
                emergency_number: "",
                emergency_name: "",
                crime: "",
                language: false,
                level_communication: ""

            }
        };
    }

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData,
            selectedJson1: nextProp.jsonData1
        })
    }

    //Getting personal form data from local storage
    componentWillMount() {
        if (localStorage.getItem('personal-form') !== null) {
            let data: any = localStorage.getItem('personal-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    //Handling next state
    handleNext = () => {
        this.props.handleNext("personal-form", this.state.form);
    }

    //Handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    //Handling input form state of the component
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }
    render() {
        const { questions, yes, no, description } = this.state.selectedJson;
        const { fluent, billingual, ESL, levelOfCommunication, understandSpeak, understandEnglish, understandInstructions } = this.state.selectedJson1;
        let formRef = this.state.form;
        return (
            <div className="personal-applicant-container">
                <TextField
                    className="text-area"
                    floatingLabelStyle={Styling.TextLabelStyle}
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
                <p className="title">{questions.two}</p>
                <TextField
                    floatingLabelStyle={Styling.TextLabelStyle}
                    className="text-area"
                    fullWidth={true}
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
                    floatingLabelStyle={Styling.TextLabelStyle}
                    className="text-area"
                    fullWidth={true}
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
                <label className="sub-title">
                    {questions.three}
                </label>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="crime" valueSelected={formRef.crime !== 'No' ? "Yes" : "No"} onChange={(event: any) => {
                    formRef.crime = event.target.value
                    this.setState(formRef);
                    event.target.value === 'Yes' ? this.setState({ convictedCrime: true }) : this.setState({ convictedCrime: false })
                }}>
                    <RadioButton
                        value="Yes"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        style={Styling.radioButtonStyle}
                    />
                    <RadioButton
                        value="No"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        style={Styling.radioButtonStyle}
                    />
                </RadioButtonGroup>
                {this.state.convictedCrime || formRef.crime !== "No" ?
                    <div>
                        <p className="question">{questions.four}</p>
                        <TextField
                            floatingLabelStyle={Styling.TextLabelStyle}
                            className="text-area"
                            fullWidth={true}
                            floatingLabelText={description}
                            onBlur={this.handleTargetEvents}
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
                <label className="sub-title">
                    {fluent}</label>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="language" defaultSelected={formRef.language} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="yes"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="no"
                        iconStyle={Styling.iconStyle}
                        label={no}
                    />
                </RadioButtonGroup>
                <hr />
                <label className="sub-title">{levelOfCommunication}</label>
                <RadioButtonGroup name="level_communication" defaultSelected={formRef.level_communication} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="Understand/Speak no English"
                        label={understandSpeak}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Understand a few English instructions"
                        label={understandEnglish}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Understand most English instructions"
                        label={understandInstructions}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Learning English as ESL"
                        label={ESL}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Bilingual English/Spanish"
                        label={billingual}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default PersonalInfo;