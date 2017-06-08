import * as React from 'react';
import './WorkHours.css';
import { RadioButton, RadioButtonGroup, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class WorkHours extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            other: false,
            selectedJson:this.props.jsonData,
            form: {
                available_fulltime: true,
                any_shift: true,
                day_7_4: true,
                evening_4_12: false,
                night_11_7: false,
                day_12_6_6: false,
                night_12_6_6: false,
                do_overtime: false,
                work_on_weekends: true,
                unavailability: "none"

            }
        };
    }
    componentWillMount(){
        if(localStorage.getItem('work-hour') !== null)
        {
            let data:any = localStorage.getItem('work-hour');
            data = JSON.parse(data)
            this.setState({
                form:data
            })

            console.log(data);
        }
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext('work-hour',this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    render() {
        const { title, questions, yes, no } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="work-hours-container">
                <label className="title">{title}</label><br /><br />
                <p className="inline-fields">{questions.one}</p>
                <RadioButtonGroup name="available_fulltime" defaultSelected={formRef.available_fulltime} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields title">{questions.three}</label><br /><br />
                <ul>
                    <li>
                        <p className="inline-fields">{questions.four}</p>
                        <RadioButtonGroup name="any_shift" defaultSelected={formRef.any_shift} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.five}</p>
                        <RadioButtonGroup name="day_7_4" defaultSelected={formRef.day_7_4} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.six}</p>
                        <RadioButtonGroup name="evening_4_12" className="right"  defaultSelected={formRef.evening_4_12} onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.seven}</p>
                        <RadioButtonGroup name="night_11_7" className="right"  defaultSelected={formRef.night_11_7} onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.eight}</p>
                        <RadioButtonGroup name="day_12_6_6" defaultSelected={formRef.day_12_6_6} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                    <li>
                        <p className="inline-fields">{questions.nine}</p>
                        <RadioButtonGroup name="night_12_6_6" defaultSelected={formRef.night_12_6_6} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                            <RadioButton
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </li>
                </ul>
                <p className="inline-fields">{questions.ten}</p>
                <RadioButtonGroup name="do_overtime" defaultSelected={formRef.do_overtime} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <p className="inline-fields">{questions.eleven}</p>
                <RadioButtonGroup name="work_on_weekends" defaultSelected={formRef.work_on_weekends} className="right" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <TextField
                    fullWidth={true}
                    value= {formRef.unavailability}
                    onChange={(event:any)=>{
                    formRef.unavailability=event.target.value 
                    this.setState(formRef);
                    }
                    }
                    floatingLabelText={questions.twelve}
                    onBlur={this.handleTargetEvents}
                    name="unavailability"
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />

            </div>
        );
    }
}

export default WorkHours;