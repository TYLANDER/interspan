import * as React from 'react';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
import "./JobLocation.css"
class JobLocation extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            position: false,
            location: false,
            selectedJson: this.props.jsonData,
            selectedJson1:this.props.jsonData1,
            form: {
                position_desired: "",
                location_preference: "",
                pay_rate: "",
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
    componentWillMount() {
        if (localStorage.getItem('job-location') !== null) {
            let data: any = localStorage.getItem('job-location');
            data = JSON.parse(data)
            this.setState({
                form: data
            })

            console.log(data);
        }
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData,
            selectedJson1:nextProp.jsonData1
        })
    }
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }
    handleNext = () => {
        this.props.handleNext('job-location', this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const { positionDesired, avalaiblePosition, clericalOffice, industrialFactory, other, locationPreference, anyAvailableSite, site, payRateExpected, perHour } = this.state.selectedJson;
        const { title, questions, yes, no } = this.state.selectedJson1;
        const formRef = this.state.form;

        return (
            <div className="work-hours-container">
                <label className="title">{positionDesired} </label>
                <RadioButtonGroup valueSelected={
                    this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ? "other" : this.state.form.position_desired
                } name="position_desired" onChange={(event: any) => {
                    this.handleTargetEvents(event);
                    event.target.value === 'other' ? this.setState({ position: true }) : this.setState({ position: false })
                }}>

                    <RadioButton
                        value="Any available position"
                        label={avalaiblePosition}
                    />
                    <RadioButton
                        value="Clerical / Office"
                        label={clericalOffice}
                    />
                    <RadioButton
                        value="Industrial / Factory / Warehouse"
                        label={industrialFactory}
                    />
                    <RadioButton
                        value="other"
                        label={other}
                    />
                </RadioButtonGroup>
                {this.state.position || this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ?
                    <TextField
                        name="position_desired"
                        value={this.state.form.position_desired}
                        onChange={(event: any) => {
                            formRef.location_preference = event.target.value
                            this.setState(formRef);
                        }
                        }
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={other}
                        onBlur={this.handleTargetEvents}
                    /> : ''}
                <label className="title">{locationPreference} </label>
                <RadioButtonGroup name="location_preference" defaultSelected={this.state.form.location_preference !== "Any available site" ? "site" : this.state.form.location_preference} onChange={(event: any) => {
                    this.handleTargetEvents(event);
                    event.target.value === 'site' ? this.setState({ location: true }) : this.setState({ location: false })
                }}>

                    <RadioButton
                        value="Any available site"
                        label={anyAvailableSite}
                    />
                    <RadioButton
                        value="site"
                        label={site}
                    />
                </RadioButtonGroup>
                {this.state.location || this.state.form.location_preference !== "Any available site" ?
                    <TextField
                        name="location_preference"
                        hintText=""
                        value={this.state.form.location_preference}
                        onFocus={() => { }}
                        fullWidth={true}
                        onChange={(event: any) => {
                            formRef.location_preference = event.target.value
                            this.setState(formRef);
                        }
                        }
                        floatingLabelText={site}
                        onBlur={this.handleTargetEvents}
                    /> : ''}
                <TextField
                    name="pay_rate"
                    hintText={perHour}
                    onChange={(event: any) => {
                        formRef.pay_rate = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.pay_rate}
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={payRateExpected}
                    onBlur={this.handleTargetEvents}
                />
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

export default JobLocation;