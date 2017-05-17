import * as React from 'react';
import { RadioButton, RadioButtonGroup, FlatButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class Education extends React.Component<any, any>{
    jsonData: any;
    constructor(props: any) {
        super(props);
        this.state = {
            school: 1,
            skills: 1
        };
        this.jsonData = this.props.jsonData;
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }

    render() {
        console.log(this.jsonData);
        var school = [];
        var skills = [];
        for (var i = 0; i < this.state.school; i++) {
            school.push(
                <div key={i}>
                    <TextField
                        hintText="Like Saint School USA"
                        onFocus={() => { }}
                        floatingLabelText="High School / College"
                    />
                </div>);
        }
        for (var i = 0; i < this.state.skills; i++) {
            skills.push(
                <div key={i}>
                    <TextField
                        hintText="Like Saint School USA"
                        onFocus={() => { }}
                        floatingLabelText="High School / College"
                    />
                </div>);
        }
        const {question, values, skillsAndExperience} = this.jsonData;
        return (
            <div className="job-applicant-container">
                <label>{question.one}</label>
                <RadioButtonGroup name="education">
                    <RadioButton
                        value="Elementary"
                        label={values.elementary}
                    />
                    <RadioButton
                        value="Trade/Business/ Technical School"
                        label={values.trade}
                    />
                    <RadioButton
                        value="High School"
                        label={values.highSchool}
                    />
                    <RadioButton
                        value="Attended some College"
                        label={values.attendedCollege}
                    />
                    <RadioButton
                        value="GED"
                        label={values.ged}
                    />
                    <RadioButton
                        value="College Degree"
                        label={values.collegeDegree}
                    />
                </RadioButtonGroup>
                <br />
                <br />
                <div>
                    <label>{question.two}</label><br />
                    {school}
                    <FlatButton label="+" onClick={() => this.setState({ school: this.state.school + 1 })} />
                    <FlatButton label="-" onClick={() => this.state.school === 1 ? '' : this.setState({ school: this.state.school - 1 })} />
                </div>
                <div>
                    <label>{skillsAndExperience.heading}</label>
                    <p>{skillsAndExperience.content}</p>
                    {skills}
                    <FlatButton label="+" onClick={() => this.setState({ skills: this.state.skills + 1 })} />
                    <FlatButton label="-" onClick={() => this.state.skills === 1 ? '' : this.setState({ skills: this.state.skills - 1 })} />
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Education;