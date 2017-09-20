import * as React from 'react';
import { RadioButton, RadioButtonGroup, FlatButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
import "./Education.css";
import Styling from "../jobTheme";

class Education extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            school: 1,
            skills: 1,
            selectedJson: this.props.jsonData,
            form: {
                highestEducation: "",
                schoolLocationList: [{
                    name: "",
                    location: ""
                }],
                specialTrainingList: [{
                    skill: ""
                }],
            },
            error: {
                highestEducation: {
                    highestEducationError: false, msg: ""
                },
                schoolLocationName: {
                    schoolLocationNameError: false, msg: ""
                },
                schoolLocationLocation: {
                    schoolLocationLocationError: false, msg: ""
                },
                specialTraining: {
                    specialTrainingError: false, msg: ""
                }
            }
        };
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
    setError = (event: any) => {
        let current = this.state.error[event];
        current[event + "Error"] = true;
        current["msg"] = event + " field is required";
        this.setState(current)
    }

    //selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        if (this.state.form.highestEducation && this.state.form.schoolLocationList[0].name && this.state.form.schoolLocationList[0].location && this.state.form.specialTrainingList[0].skill) {
            localStorage.removeItem("education-form");
            this.props.handleNext("education-form", this.state.form);
        }
        else {
            if (!this.state.form.highestEducation) {
                this.setError('highestEducation')
            }
            if (!this.state.form.schoolLocationList[0].name) {
                this.setError('schoolLocationName')
            }
            if (!this.state.form.schoolLocationList[0].location) {
                this.setError('schoolLocationLocation')
            }
            if (!this.state.form.specialTrainingList[0].skill) {
                this.setError('specialTraining')
            }
        }

    }

    //handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    //getting education form data from local storage
    componentWillMount() {
        if (localStorage.getItem('education-form') !== null) {
            let data: any = localStorage.getItem('education-form');
            data = JSON.parse(data)
            this.setState({
                form: data,
                school: data.schoolLocationList.length,
                skills: data.specialTrainingList.length
            })
        }
    }

    //handling input form state of the component
    handleTargetEvents = (arrayRef: string, ind: number, event?: any) => {
        let formRef = this.state.form;
        if (arrayRef && Array.isArray(formRef[arrayRef]))
            formRef[arrayRef][ind][event.target.name] = event.target.value;
        else formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    //making and manage high schools list
    handleSchoolLocationList = (action: string) => {
        let formRef = this.state.form["schoolLocationList"];
        if (action === "add") {
            formRef.push({
                name: "",
                location: ""
            });
            this.setState({ formRef, school: this.state.school + 1 })
        }
        else {
            formRef.pop();
            this.setState({ formRef, school: this.state.school - 1 })
        }
    }

    //handling input form state of the component
    handleText = (arrRef: string, ind: number, event?: any) => {
        let formRef = this.state.form;
        formRef[arrRef][ind][event.target.name] = event.target.value;
        this.setState(formRef)
    }

    //making and manage skills list
    handleSpecialTrainingList = (action: string) => {
        let formRef = this.state.form["specialTrainingList"]
        if (action === "add") {
            formRef.push({
                skill: ""
            });
            this.setState({ formRef, skills: this.state.skills + 1 })
        }
        else {
            formRef.pop();
            this.setState({ formRef, skills: this.state.skills - 1 })
        }
    }

    render() {
        let school = [];
        let skills = [];
        for (var i = 0; i < this.state.school; i++) {
            school.push(
                <div key={i}>
                    <TextField
                        key={i}
                        hintText=""
                        name="name"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.schoolLocationName.schoolLocationNameError ? this.state.error.schoolLocationName.msg : null}
                        className="text-area"
                        value={this.state.form.schoolLocationList[i].name}
                        onBlur={(event: any) => {
                            this.validationCheck(event, 'schoolLocationName');
                            this.handleTargetEvents.bind(this, "schoolLocationList", i)
                        }}
                        onChange={this.handleText.bind(this, "schoolLocationList", i)}
                        floatingLabelText="Name of High School / College"
                    />
                    {this.state.error.schoolLocationName.schoolLocationNameError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    <TextField
                        hintText=""
                        className="text-area"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.schoolLocationLocation.schoolLocationLocationError ? this.state.error.schoolLocationLocation.msg : null}
                        value={this.state.form.schoolLocationList[i].location}
                        name="location"
                        onChange={this.handleText.bind(this, "schoolLocationList", i)}
                        onBlur={(event: any) => { this.validationCheck(event, 'schoolLocationLocation'); this.handleTargetEvents.bind(this, "schoolLocationList", i) }}
                        floatingLabelText="Location of High School / College"
                    />
                    {this.state.error.schoolLocationLocation.schoolLocationLocationError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                </div>);
        }
        for (var i = 0; i < this.state.skills; i++) {
            skills.push(
                <div key={i}>
                    <TextField
                        hintText=""
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.specialTraining.specialTrainingError ? this.state.error.specialTraining.msg : null}
                        value={this.state.form.specialTrainingList[i].skill}
                        onChange={this.handleText.bind(this, "specialTrainingList", i)}
                        name="skill"
                        onBlur={(event: any) => {
                            this.validationCheck(event, 'specialTraining');
                            this.handleTargetEvents.bind(this, "specialTrainingList", i);
                        }
                        }
                        floatingLabelText="Special Training / Skills"
                    />
                    {this.state.error.specialTraining.specialTrainingError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                </div>);
        }
        const { question, values, skillsAndExperience } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="education-applicant-container">
                <p style={this.state.error.highestEducation.highestEducationError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{question.one}</p>
                <RadioButtonGroup valueSelected={formRef.highestEducation} name="highestEducation" onChange={(event: any) => {
                    this.validationCheck(event, 'highestEducation');
                    this.handleTargetEvents(event, 0, event)
                }
                }>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Elementary"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={values.elementary}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Trade/Business/ Technical School"
                        label={values.trade}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                    />
                    <RadioButton
                        value="High School"
                        iconStyle={Styling.iconStyle}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={values.highSchool}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Attended some College"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={values.attendedCollege}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="GED"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={values.ged}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="College Degree"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={values.collegeDegree}
                    />
                </RadioButtonGroup>
                <br />
                <div>
                    <p className="sub-title">{question.two}</p>
                    {school}
                    <div className="button-group">
                        <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.addButton} label={'Add'} onClick={() => this.handleSchoolLocationList("add")} />
                        <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.deleteButton} label={"Remove"} onClick={() => this.state.school === 1 ? '' : this.handleSchoolLocationList("delete")} />
                    </div>
                </div>
                <div>
                    <p className="sub-title">{skillsAndExperience.heading}</p>
                    <label className="title">{skillsAndExperience.content}</label>
                    {skills}
                    <div className="button-group">
                        <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.addButton} label={'Add'} onClick={() => this.handleSpecialTrainingList("add")} />
                        <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.deleteButton} label={"Remove"} onClick={() => this.state.skills === 1 ? '' : this.handleSpecialTrainingList("delete")} />
                    </div>
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div >
        );
    }
}
export default Education;
