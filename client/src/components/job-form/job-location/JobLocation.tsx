import * as React from 'react';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
import "./JobLocation.css";
import Styling from "../jobTheme";

class JobLocation extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            position: false,
            location: false,
            selectedJson: this.props.jsonData,
            selectedJson1: this.props.jsonData1,
            form: {
                position_desired: "",
                location_preference: "",
                pay_rate: "",
                available_fulltime: null,
                any_shift: null,
                day_7_4: null,
                evening_4_12: null,
                night_11_7: "",
                day_12_6_6: "",
                night_12_6_6: "",
                do_overtime: "",
                work_on_weekends: "",
                unavailability: ""
            },
            error: {
                position: { positionError: false, msg: "" },
                location: { locationError: false, msg: "" },
                pay_rate: { pay_rate: false, msg: "" },
                available: { availableError: false, msg: "" },
                any_shift: { any_shiftError: false, msg: "" },
                day_7_4: { day_7_4Error: false, msg: "" },
                evening_4_12: { evening_4_12Error: false, msg: "" },
                night_11_7: { night_11_7Error: false, msg: "" },
                day_12_6_6: { day_12_6_6Error: false, msg: "" },
                night_12_6_6: { night_12_6_6Error: false, msg: "" },
                do_overtime: { do_overtimeError: false, msg: "" },
                work_on_weekends: { work_on_weekendsError: false, msg: "" },
                unavailability: { unavailabilityError: false, msg: "" }
            }
        };
    }

    //Getting job location form data from local storage
    componentWillMount() {
        if (localStorage.getItem('job-location') !== null) {
            let data: any = localStorage.getItem('job-location');
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

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData,
            selectedJson1: nextProp.jsonData1
        })
    }

    //Handling input form state of the component
    handleTargetEvents = (event: any) => {
        // this.validationCheck(event, event.target.name)
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    //Handling input form state of the component
    handleNext = () => {
        if (this.state.form.position_desired && this.state.form.location_preference && this.state.form.pay_rate && this.state.form.available_fulltime && this.state.form.any_shift && this.state.form.day_7_4 && this.state.form.evening_4_12 && this.state.form.night_11_7 && this.state.form.day_12_6_6 && this.state.form.night_12_6_6 && this.state.form.do_overtime && this.state.form.work_on_weekends && this.state.form.unavailability) {
            this.props.handleNext('job-location', this.state.form);
        }
        else {
            if (!this.state.form.position_desired) {
                this.setError('position')
            }
            if (!this.state.form.location_preference) {
                this.setError('location')
            }
            if (!this.state.form.pay_rate) {
                this.setError('pay_rate')
            }
            if (!this.state.form.available_fulltime) {
                this.setError('available')
            }
            if (!this.state.form.any_shift) {
                console.log("ASdasdasdas")
                this.setError('any_shift')
            }
            if (!this.state.form.day_7_4) {
                this.setError('day_7_4')
            }
            if (!this.state.form.evening_4_12) {
                this.setError('evening_4_12')
            }
            if (!this.state.form.night_11_7) {
                this.setError('night_11_7')
            }
            if (!this.state.form.day_12_6_6) {
                this.setError('day_12_6_6')
            }
            if (!this.state.form.night_12_6_6) {
                this.setError('night_12_6_6');
            }
            if (!this.state.form.do_overtime) {
                this.setError('do_overtime');
            }
            if (!this.state.work_on_weekends) {
                this.setError('work_on_weekends');
            }
            if (!this.state.unavailability) {
                this.setError('unavailability')
            }
        }

    }

    //Handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    render() {
        const { positionDesired, avalaiblePosition, clericalOffice, industrialFactory, other, locationPreference, anyAvailableSite, site, payRateExpected, perHour } = this.state.selectedJson;
        const { title, questions, yes, no } = this.state.selectedJson1;
        const formRef = this.state.form;
        return (
            <div className="job-location-container">
                <p style={this.state.error.position.positionError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{positionDesired} </p>
                <RadioButtonGroup className="radio-label" valueSelected={
                    this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ? "other" : this.state.form.position_desired
                } name="position_desired" onChange={(event: any) => {
                    this.validationCheck(event, 'position')
                    this.handleTargetEvents(event);
                    event.target.value === 'other' ? this.setState({ position: true }) : this.setState({ position: false })
                }}>
                    <RadioButton
                        value="Any available position"
                        label={avalaiblePosition}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Clerical / Office"
                        label={clericalOffice}
                        iconStyle={Styling.iconStyle}

                    />
                    <RadioButton
                        value="Industrial / Factory / Warehouse"
                        label={industrialFactory}
                        iconStyle={Styling.iconStyle}

                    />
                    <RadioButton
                        value="other"
                        label={other}
                        iconStyle={Styling.iconStyle}

                    />
                </RadioButtonGroup>
                {this.state.position || this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ?
                    <TextField
                        className="text-area"
                        name="position_desired"
                        value={this.state.form.position_desired}
                        onChange={(event: any) => {
                            formRef.position_desired = event.target.value
                            this.setState(formRef);
                        }
                        }
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={other}
                        onBlur={() => { this.handleTargetEvents }}
                    /> : ''}
                <p style={this.state.error.location.locationError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{locationPreference} </p>
                <RadioButtonGroup className="radio-label" name="location_preference" defaultSelected={this.state.form.location_preference !== "Any available site" ? "site" : this.state.form.location_preference} onChange={(event: any) => {
                    this.handleTargetEvents(event);
                    this.validationCheck(event, "location")
                    event.target.value === 'site' ? this.setState({ location: true }) : this.setState({ location: false })
                }}>
                    <RadioButton
                        value="Any available site"
                        label={anyAvailableSite}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="site"
                        label={site}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                {this.state.location || this.state.form.location_preference !== "Any available site" ?
                    <TextField
                        name="location_preference"
                        hintText=""
                        className="text-area"
                        value={this.state.form.location_preference}
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
                    className="text-area"
                    errorText={this.state.error.pay_rate.pay_rateError ? this.state.error.pay_rate.msg : null}
                    errorStyle={Styling.errorMsg}
                    hintText={perHour}
                    onChange={(event: any) => {
                        formRef.pay_rate = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.pay_rate}
                    fullWidth={true}
                    floatingLabelText={payRateExpected}
                    onBlur={() => { this.handleTargetEvents; this.validationCheck(event, 'pay_rate') }}
                />
                {this.state.error.pay_rate.pay_rateError ? <span className="error-icon"><img src={require("../../../assets/error-icon.png")} /></span> : null}
                <p style={Styling.prefered} className="title">{title}</p>
                <p style={this.state.error.available.availableError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.one}</p>
                <RadioButtonGroup name="available_fulltime" defaultSelected={formRef.available_fulltime} className="radio-label right" onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'available') }}>
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br />
                <p className="inline-fields">{questions.three}</p><br />
                <div className="box-container">
                    <div className="box-child">
                        <p style={this.state.error.any_shift.any_shiftError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.four}</p>
                        <RadioButtonGroup name="any_shift" className="right" onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "any_shift") }}>
                            <RadioButton
                                className="inline-radio"
                                iconStyle={Styling.iconStyle}
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br />
                    </div>
                    <div className="box-child">
                        <p style={this.state.error.day_7_4.day_7_4Error ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.five}</p>
                        <RadioButtonGroup name="day_7_4" defaultSelected={formRef.day_7_4} className="right" onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "day_7_4") }}>
                            <RadioButton
                                className="inline-radio"
                                iconStyle={Styling.iconStyle}
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                className="inline-radio"
                                value="No"
                                iconStyle={Styling.iconStyle}
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </div>
                    <div className="box-child">
                        <p style={this.state.error.evening_4_12.evening_4_12Error ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.six}</p>
                        <RadioButtonGroup name="evening_4_12" className="right" defaultSelected={formRef.evening_4_12} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "evening_4_12") }}>
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </div>
                    <div className="box-child">
                        <p style={this.state.error.night_11_7.night_11_7Error ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.seven}</p>
                        <RadioButtonGroup name="night_11_7" className="right" defaultSelected={formRef.night_11_7} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "night_11_7") }}>
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </div>
                    <div className="box-child">
                        <p style={this.state.error.day_12_6_6.day_12_6_6Error ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.eight}</p>
                        <RadioButtonGroup name="day_12_6_6" defaultSelected={formRef.day_12_6_6} className="right" onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "day_12_6_6") }}>
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </div>
                    <div className="box-child">
                        <p style={this.state.error.night_12_6_6.night_12_6_6Error ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.nine}</p>
                        <RadioButtonGroup name="night_12_6_6" defaultSelected={formRef.night_12_6_6} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "night_12_6_6") }}>
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="Yes"
                                label={yes}
                            />
                            <RadioButton
                                iconStyle={Styling.iconStyle}
                                className="inline-radio"
                                value="No"
                                label={no}
                            />
                        </RadioButtonGroup>
                        <br /><br />
                    </div>
                </div>
                <p style={this.state.error.do_overtime.do_overtimeError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.ten}</p>
                <RadioButtonGroup name="do_overtime" defaultSelected={formRef.do_overtime} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "do_overtime") }}>
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <hr />
                <p style={this.state.error.work_on_weekends.work_on_weekendsError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.eleven}</p>
                <RadioButtonGroup name="work_on_weekends" defaultSelected={formRef.work_on_weekends} className="right" onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "work_on_weekends") }}>
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        iconStyle={Styling.iconStyle}
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br />
                <p className="note">{questions.twelve}</p>
                {/*<TextField
                    fullWidth={true}
                    style={Styling.textField}
                    onChange={(event: any) => {
                        formRef.unavailability = event.target.value
                        this.setState(formRef);
                    }
                    }
                    multiLine={true}
                    onBlur={this.handleTargetEvents}
                    name="unavailability"
                    hintText="Please, type here"
                />*/}
                <textarea name="unavailability"
                    onBlur={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, "unavailability") }}
                    value={formRef.unavailability}
                    style={this.state.error.unavailability.unavailabilityError ? { borderColor: 'red' } : { borderColor: "none" }}
                    onChange={(event: any) => {
                        formRef.unavailability = event.target.value
                        this.setState(formRef);
                    }
                    }
                    className="textArea" placeholder="Please type here" />
                {/*{this.state.error.unavailability.unavailabilityError ? <p>{this.state.error.unavailability.msg}</p> : null}*/}

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default JobLocation;