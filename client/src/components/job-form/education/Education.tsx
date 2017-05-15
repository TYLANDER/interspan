import * as React from "react";
import { RadioButton, RadioButtonGroup, FlatButton, TextField } from 'material-ui';
import ActiveButtons from "../active-buttons/ActiveButtons"

class Education extends React.Component<any, any>{
    state = {
        school: 1,
        skills:1
    }
    fields(): any {

    }
    constructor(){
        super();
    }
    handleNext = ()=>{
        this.props.handleNext({name:123, idx : 0})
    }
    handlePrev = ()=>{
        this.props.handlePrev({name:123, idx : 1})
    }

    render() {
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
        return (
            <div className="job-applicant-container">
                <label>What is the highest level of education you have completed?</label>
                <RadioButtonGroup name="education">
                    <RadioButton
                        value="Elementary"
                        label="Elementary"
                    />
                    <RadioButton
                        value="Trade/Business/ Technical School"
                        label="Trade/Business/ Technical School"
                    />
                    <RadioButton
                        value="High School"
                        label="High School"
                    />
                    <RadioButton
                        value="Attended some College"
                        label="Attended some College"
                    />
                    <RadioButton
                        value="GED"
                        label="GED"
                    />
                    <RadioButton
                        value="College Degree"
                        label="College Degree"
                    />
                </RadioButtonGroup>
                <br />
                <br />
                <div>
                    <label>Name and Location of High School / College</label><br />
                    {school}
                    <FlatButton label="+" onClick={()=>this.setState({school:this.state.school+1})} />
                    <FlatButton label="-" onClick={()=>this.state.school===1?"":this.setState({school:this.state.school-1})} />
                        </div>
                        <div>
                    <label>List any special training skills, and experience.</label>
                    <p>(Include  factory and/or office  equipment you can  operate  and any certifications, machine operation, forklift, first aid, safety training, etc.)</p>
                    {skills}
                    <FlatButton label="+" onClick={()=>this.setState({skills:this.state.skills+1})} />
                    <FlatButton label="-" onClick={()=>this.state.skills===1?"":this.setState({skills:this.state.skills-1})} />
                </div>
                <ActiveButtons handleNext={()=>this.handleNext()} handlePrev={()=>this.handlePrev()}/>
            </div>
        )
    }
}

export default Education;