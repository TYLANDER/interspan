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
            }
        };
    }

    //selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        localStorage.removeItem("education-form");
        this.props.handleNext("education-form", this.state.form);
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
                        style={Styling.textField}
                        value={this.state.form.schoolLocationList[i].name}
                        onBlur={this.handleTargetEvents.bind(this, "schoolLocationList", i)}
                        onChange={this.handleText.bind(this, "schoolLocationList", i)}
                        floatingLabelText="Name of High School / College"
                    />
                    <TextField
                        hintText=""
                        style={Styling.textField}
                        value={this.state.form.schoolLocationList[i].location}
                        name="location"
                        onChange={this.handleText.bind(this, "schoolLocationList", i)}
                        onBlur={this.handleTargetEvents.bind(this, "schoolLocationList", i)}
                        floatingLabelText="Location of High School / College"
                    />
                </div>);
        }
        for (var i = 0; i < this.state.skills; i++) {
            skills.push(
                <div key={i}>
                    <TextField
                        hintText=""
                        value={this.state.form.specialTrainingList[i].skill}
                        onChange={this.handleText.bind(this, "specialTrainingList", i)}
                        name="skill"
                        onBlur={this.handleTargetEvents.bind(this, "specialTrainingList", i)}
                        floatingLabelText="Special Training / Skills"
                    />
                </div>);
        }
        const { question, values, skillsAndExperience } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="education-applicant-container">
                <label className="title">{question.one}</label>
                <RadioButtonGroup valueSelected={formRef.highestEducation} name="highestEducation" onChange={(event: any) =>
                    this.handleTargetEvents(event, 0, event)
                }>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Elementary"
                        label={values.elementary}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Trade/Business/ Technical School"
                        label={values.trade}
                    />
                    <RadioButton
                        value="High School"
                        iconStyle={Styling.iconStyle}

                        label={values.highSchool}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Attended some College"
                        label={values.attendedCollege}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="GED"
                        label={values.ged}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="College Degree"
                        label={values.collegeDegree}
                    />
                </RadioButtonGroup>
                <br />
                <div>
                    <p className="sub-title">{question.two}</p><br />
                    {school}
                    <div className="button-group">
                        <FlatButton labelStyle={Styling.buttonLabel} style={Styling.addButton} label={<b>Add</b>} onClick={() => this.handleSchoolLocationList("add")} />
                        <FlatButton labelStyle={Styling.buttonLabel} style={Styling.deleteButton} label={<b>Remove</b>} onClick={() => this.state.school === 1 ? '' : this.handleSchoolLocationList("delete")} />
                    </div>
                </div>
                <div>
                    <p className="sub-title">{skillsAndExperience.heading}</p>
                    <label className="title">{skillsAndExperience.content}</label>
                    {skills}
                    <div className="button-group">
                        <FlatButton labelStyle={Styling.buttonLabel} style={Styling.addButton} label={<b>Add</b>} primary={true} onClick={() => this.handleSpecialTrainingList("add")} />
                        <FlatButton labelStyle={Styling.buttonLabel} style={Styling.deleteButton} label={<b>Remove</b>} secondary={true} onClick={() => this.state.skills === 1 ? '' : this.handleSpecialTrainingList("delete")} />
                    </div>
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default Education;
