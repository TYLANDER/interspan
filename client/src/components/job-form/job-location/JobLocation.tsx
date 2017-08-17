import * as React from 'react';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
import "./JobLocation.css"
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
                available_fulltime: true,
                any_shift: true,
                day_7_4: true,
                evening_4_12: false,
                night_11_7: false,
                day_12_6_6: false,
                night_12_6_6: false,
                do_overtime: false,
                work_on_weekends: true,
                unavailability: null
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

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData,
            selectedJson1: nextProp.jsonData1
        })
    }

    //Handling input form state of the component
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    //Handling input form state of the component
    handleNext = () => {
        this.props.handleNext('job-location', this.state.form);
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
                <label className="title">{positionDesired} </label>
                <RadioButtonGroup className="radio-label" valueSelected={
                    this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ? "other" : this.state.form.position_desired
                } name="position_desired" onChange={(event: any) => {
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
                        style={Styling.textField}
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
                        onBlur={this.handleTargetEvents}
                    /> : ''}
                <label className="title">{locationPreference} </label>
                <RadioButtonGroup className="radio-label" name="location_preference" defaultSelected={this.state.form.location_preference !== "Any available site" ? "site" : this.state.form.location_preference} onChange={(event: any) => {
                    this.handleTargetEvents(event);
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
                        style={Styling.textField}
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
                    style={Styling.textField}
                    hintText={perHour}
                    onChange={(event: any) => {
                        formRef.pay_rate = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.pay_rate}
                    fullWidth={true}
                    floatingLabelText={payRateExpected}
                    onBlur={this.handleTargetEvents}
                />

                <p style={Styling.prefered} className="title">{title}</p>
                <label className="inline-fields">{questions.one}</label>
                <RadioButtonGroup name="available_fulltime" defaultSelected={formRef.available_fulltime} className="radio-label right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <p className="inline-fields title">{questions.three}</p><br />
                <div className="box-container">
                    <div className="box-child">
                        <p className="inline-fields">{questions.four}</p>
                        <RadioButtonGroup name="any_shift" defaultSelected={formRef.any_shift} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                        <p className="inline-fields">{questions.five}</p>
                        <RadioButtonGroup name="day_7_4" defaultSelected={formRef.day_7_4} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                        <p className="inline-fields">{questions.six}</p>
                        <RadioButtonGroup name="evening_4_12" className="right" defaultSelected={formRef.evening_4_12} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                        <p className="inline-fields">{questions.seven}</p>
                        <RadioButtonGroup name="night_11_7" className="right" defaultSelected={formRef.night_11_7} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                        <p className="inline-fields">{questions.eight}</p>
                        <RadioButtonGroup name="day_12_6_6" defaultSelected={formRef.day_12_6_6} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                        <p className="inline-fields">{questions.nine}</p>
                        <RadioButtonGroup name="night_12_6_6" defaultSelected={formRef.night_12_6_6} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <p className="inline-fields">{questions.ten}</p>
                <RadioButtonGroup name="do_overtime" defaultSelected={formRef.do_overtime} onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                <p className="inline-fields">{questions.eleven}</p>
                <RadioButtonGroup name="work_on_weekends" defaultSelected={formRef.work_on_weekends} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
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
                    onBlur={this.handleTargetEvents}
                    value={formRef.unavailability}
                    onChange={(event: any) => {
                        formRef.unavailability = event.target.value
                        this.setState(formRef);
                    }
                    }
                    className="textArea" placeholder="Please type here" />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default JobLocation;

const Styling = {
    textField: {
        display: "block",
        width: "55%"
    },
    radioButtonLabel: {
        fontSize: "16px",
        marginBottom: "13px",
        display: "block"
    },
    radioButtonStyle: {
        display: "inline-block",
        width: "65px"
    },
    iconStyle: {
        width: "17px",
        marginRight: "5px"
    },
    prefered: {
        marginTop: "36px",
        fontSize: "16px",
        marginLeft:"0px"
    }
    
}