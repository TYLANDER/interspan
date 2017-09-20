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
                language: "",
                level_communication: ""
            },
            error: {
                employment_history: {
                    employment_historyError: false, msg: ""
                },
                emergency_number: {
                    emergency_numberError: false, msg: ""
                },
                emergency_name: {
                    emergency_nameError: false, msg: ""
                },
                crime: {
                    crimeError: false, msg: ""
                },
                language: {
                    languageError: false, msg: ""
                },
                level_communication: {
                    level_communicationError: false, msg: ""
                }
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
    setError = (event: any) => {
        let current = this.state.error[event];
        current[event + "Error"] = true;
        current["msg"] = event + " field is required";
        this.setState(current)
    }

    //Handling next state
    handleNext = () => {
        if (this.state.form.employment_history && this.state.form.emergency_number && this.state.form.emergency_name && this.state.form.crime && this.state.form.language && this.state.form.level_communication) {
            this.props.handleNext("personal-form", this.state.form);
        }
        else {
            if (!this.state.form.employment_history) {
                this.setError('employment_history')
            }
            if (!this.state.form.emergency_number) {
                this.setError('emergency_number');
            }
            if (!this.state.form.emergency_name) {
                this.setError('emergency_name');
            }
            if (!this.state.form.crime) {
                this.setError('crime')
            }
            if (!this.state.form.language) {
                this.setError('language')
            }
            if (!this.state.form.level_communication) {
                this.setError('level_communication')
            }
        }
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

    validationCheck = (event: any, name: any) => {
        if (event.target.value === "") {
            let currentState = this.state.error[name];
            currentState[name + "Error"] = true;
            currentState["msg"] = name + " field is required";
            this.setState(currentState);
        }
        else {
            let currentState = this.state.error[name];
            currentState[name + "Error"] = false;
            currentState["msg"] = name + "";
            this.setState(currentState);

        }
    }

    render() {
        const { questions, yes, no, description } = this.state.selectedJson;
        const { fluent, billingual, ESL, levelOfCommunication, understandSpeak, understandEnglish, understandInstructions } = this.state.selectedJson1;
        let formRef = this.state.form;
        return (
            <div className="personal-applicant-container">
                <TextField
                    className="text-area long-feild"
                    floatingLabelStyle={Styling.TextLabelStyle}
                    floatingLabelText={questions.one}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.employment_history.employment_historyError ? this.state.error.employment_history.msg : null}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'employment_history')
                        this.handleTargetEvents(event);
                    }}
                    fullWidth={true}
                    multiLine={true}
                    name="employment_history"
                    value={formRef.employment_history}
                    onChange={(event: any) => {
                        this.validationCheck(event, 'employment_history')
                        formRef.employment_history = event.target.value
                        this.setState(formRef);
                    }
                    }
                />
                {this.state.error.employment_history.employment_historyError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                <br /><br />
                <p className="title">{questions.two}</p>
                <TextField
                    floatingLabelStyle={Styling.TextLabelStyle}
                    className="text-area"
                    fullWidth={true}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.emergency_name.emergency_nameError ? this.state.error.emergency_name.msg : null}
                    floatingLabelText={questions.name}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'emergency_name')
                        this.handleTargetEvents(event);
                    }}
                    value={formRef.emergency_name}
                    onChange={(event: any) => {
                        this.validationCheck(event, 'emergency_name')
                        formRef.emergency_name = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="emergency_name"
                />
                {this.state.error.emergency_name.emergency_nameError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    floatingLabelStyle={Styling.TextLabelStyle}
                    className="text-area"
                    fullWidth={true}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.emergency_number.emergency_numberError ? this.state.error.emergency_number.msg : null}
                    floatingLabelText={questions.phone}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'emergency_number')
                        this.handleTargetEvents(event);
                    }}
                    value={formRef.emergency_number}
                    onChange={(event: any) => {
                        this.validationCheck(event, 'emergency_number')
                        formRef.emergency_number = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="emergency_number"
                />
                {this.state.error.emergency_number.emergency_numberError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                <br /> <br />
                <p className="sub-title">
                    {questions.three}
                </p>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="crime" valueSelected={formRef.crime !== 'No' ? "Yes" : "No"} onChange={(event: any) => {
                    formRef.crime = event.target.value
                    this.setState(formRef);
                    event.target.value === 'Yes' ? this.setState({ convictedCrime: true }) : this.setState({ convictedCrime: false })
                }}>
                    <RadioButton
                        value="Yes"
                        label={yes}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        style={Styling.radioButtonStyle}
                    />
                    <RadioButton
                        value="No"
                        label={no} 
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        style={Styling.radioButtonStyle}
                    />
                </RadioButtonGroup>
                {this.state.convictedCrime || formRef.crime !== "No" ?
                    <div>
                        <p className="title">{questions.four}</p>
                        <TextField
                            floatingLabelStyle={Styling.TextLabelStyle}
                            className="text-area"
                            fullWidth={true}
                            errorStyle={Styling.errorMsg}
                            errorText={this.state.error.crime.crimeError ? this.state.error.crime.msg : null}
                            floatingLabelText={description}
                            onBlur={(event: any) => {
                                this.validationCheck(event, 'crime')
                                this.handleTargetEvents(event);
                            }}
                            multiLine={true}
                            onChange={(event: any) => {
                                this.validationCheck(event, 'crime')
                                formRef.crime = event.target.value
                                this.setState(formRef);
                            }
                            }
                            value={formRef.crime}
                            name="crime"
                        />
                        {this.state.error.crime.crimeError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                        <br /><br />
                    </div>
                    : null}
                <p style={this.state.error.language.languageError ? Styling.radioButtonError : Styling.radioButtonLabel} className="sub-title">
                    {fluent}</p>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="language" defaultSelected={formRef.language} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'language') }}>
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="yes"
                        label={yes}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="no"
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={no}
                    />
                </RadioButtonGroup>
                <hr />
                <label style={this.state.error.level_communication.level_communicationError ? Styling.radioButtonError : Styling.radioButtonLabel} className="sub-title">{levelOfCommunication}</label>
                <RadioButtonGroup name="level_communication" defaultSelected={formRef.level_communication} onChange={(event: any) => { this.validationCheck(event, 'level_communication'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        value="Understand/Speak no English"
                        label={understandSpeak}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Understand a few English instructions"
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={understandEnglish}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Understand most English instructions"
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={understandInstructions}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        value="Learning English as ESL"
                        label={ESL}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Bilingual English/Spanish"
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
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