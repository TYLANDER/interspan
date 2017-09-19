import * as React from 'react';
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
// import * as Colors from 'material-ui/styles/colors';
// import DateRange from "material-ui/svg-icons/action/date-range";
import Styling from "../jobTheme";

class ApplicantInfo extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //State of component
        let userEmail = "N/A";
        if (localStorage.getItem("user-info")) {
            let temp: any = localStorage.getItem("user-info");
            temp = JSON.parse(temp);
            userEmail = temp.email;
        }
        this.state = {
            employee: false,
            selectedJson: this.props.jsonData,
            form: {
                street_address: "",
                city: "",
                state: "",
                zip: "",
                home_telephone: "",
                email: userEmail,
                years_old: "",
                employement: '',
                eligible: "",
                begin_work: ""
            },
            error: {
                address: { addressError: false, msg: "" },
                city: { cityError: false, msg: "" },
                state: { stateError: false, msg: "" },
                zip: { zipError: false, msg: "" },
                home: { homeError: false, msg: "" },
                years: { yearsError: false, msg: "" },
                employement: { employementError: false, msg: "" },
                eligible: { eligibleError: false, msg: "" },
                begin_work: { begin_workError: false, msg: "" }
            },
            appliedBefore: ""
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
    //getting application form data from local storage
    componentWillMount() {
        if (localStorage.getItem('application-form') !== null) {
            let data: any = localStorage.getItem('application-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    componentWillReceiveProps(nextProp: any) {
        //Selected language of the form;
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    //Increment in state of the stepper
    handleNext = () => {
        // let obj = this.state.form;
        // let Obj:any = new Map(Object.entries(obj));
        // console.log(Obj)
        // Obj.forEach((val:any,key:any) => {
        //     if(!val){
        //         console.log(key)
        //     }
        // });
        if (this.state.form.street_address && this.state.form.city && this.state.form.state && this.state.form.zip && this.state.form.home_telephone && this.state.form.years_old && this.state.form.employement && this.state.form.eligible && this.state.form.begin_work) {
            this.props.handleNext("application-form", this.state.form);
        }
        else {
            if (!this.state.form.street_address) {
                this.setError('address')
            }
            if (!this.state.form.city) {
                this.setError('city')
            }
            if (!this.state.form.state) {
                this.setError('state')
            }
            if (!this.state.form.zip) {
                this.setError('zip')
            }
            if (!this.state.home_telephone) {
                this.setError('home')
            }
            if (!this.state.form.years_old) {
                this.setError('years')
            }
            if (!this.state.form.employement) {
                this.setError('employement')
            }
            if (!this.state.form.eligible) {
                this.setError('eligible')
            }
            if (!this.state.form.begin_work) {
                this.setError('begin_work')
            }
        }
    }
    //Decrement in state of the stepper
    handlePrev = () => {
        this.props.handlePrev();
    }

    render() {
        console.log(this.state);
        const { streetAddress, city, state, zip, homeTelephone, areYou18, employment, employementYes, legallyEligible, workStatus, yes, no } = this.state.selectedJson;
        const formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <TextField
                    hintText=""
                    className="text-area"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.address.addressError ? this.state.error.address.msg : null}
                    underlineStyle={{ bottom: "4px" }}
                    value={this.state.form.street_address}
                    multiLine={true}
                    onChange={(event: any) => {
                        formRef.street_address = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={streetAddress}
                    onBlur={(event: any) => {
                        this.validationCheck(event, "address");
                        formRef.street_address = event.target.value
                        this.setState(formRef);
                    }}
                />
                {this.state.error.address.addressError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    hintText=""
                    className="text-area"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.city.cityError ? this.state.error.city.msg : null}
                    value={this.state.form.city}
                    underlineStyle={{ bottom: "4px" }}
                    onChange={(event: any) => {
                        formRef.city = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={city}
                    onBlur={(event: any) => {
                        this.validationCheck(event, "city");
                        formRef.city = event.target.value
                        this.setState(formRef);
                    }}
                />
                {this.state.error.city.cityError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    hintText=""
                    className="text-area"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.state.stateError ? this.state.error.state.msg : null}
                    underlineStyle={{ bottom: "4px" }}
                    onChange={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.state}
                    floatingLabelText={state}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'state');
                        formRef.state = event.target.value;
                        this.setState(formRef);
                    }}
                />
                {this.state.error.state.stateError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    hintText=""
                    underlineStyle={{ bottom: "4px" }}
                    className="text-area"
                    value={this.state.form.zip}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.zip.zipError ? this.state.error.zip.msg : null}
                    onChange={(event: any) => {
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={zip}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'zip')
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }}
                />
                {this.state.error.zip.zipError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <TextField
                    hintText=""
                    type="tel"
                    underlineStyle={{ bottom: "4px" }}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.home.homeError ? this.state.error.home.msg : null}
                    className="text-area"
                    value={this.state.form.home_telephone}
                    onChange={(event: any) => {
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={homeTelephone}
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'home')
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                {this.state.error.home.homeError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <br />
                <br />
                <p style={this.state.error.years.yearsError ? Styling.radioButtonError : Styling.radioButtonLabel}>{areYou18} </p>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="age" defaultSelected={this.state.form.years_old} onChange={(event: any) => {
                    this.validationCheck(event, 'years')
                    formRef.years_old = event.target.value;
                    this.setState(formRef)
                }}>

                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="yes"
                        iconStyle={Styling.iconStyle}
                        label={yes}
                        labelStyle={{ transform: "lower-case" }}
                    />
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="no"
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <p style={this.state.error.employement.employementError ? Styling.radioButtonError : Styling.radioButtonLabel}>{employment} </p>
                <RadioButtonGroup className="radio-label" name="employement" valueSelected={this.state.form.employement !== '' ? this.state.form.employement !== 'no' ? "yes" : "no" : ""} onChange={(event: any) => {
                    this.state.appliedBefore = event.target.value
                    this.validationCheck(event, 'employement')
                    formRef.employement = event.target.value
                    this.setState(formRef);
                    event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })
                }}>
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="yes"
                        iconStyle={Styling.iconStyle}
                        label={yes}
                    />
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="no"
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                {this.state.employee || this.state.form.employement !== 'no' ?
                    <div style={Styling.radioButtonGroupStyling} ><DatePicker className="dateTextFeild" textFieldStyle={Styling.date} floatingLabelText={employementYes}
                        onChange={(event: any, date: any) => {
                            formRef.employement = date.toISOString()
                            this.setState(formRef);
                        }}
                    /><span><img src={require("../../../assets/Date.png")} style={Styling.dateIcon} /></span><p style={Styling.dateNoteStyle}>Type or choose from calendar by clicking on the icon</p></div>
                    : ''}
                <p style={this.state.error.eligible.eligibleError ? Styling.radioButtonError : Styling.radioButtonLabel}>{legallyEligible}</p>
                <RadioButtonGroup className="radio-label" name="eligible" valueSelected={this.state.form.eligible} onChange={(event: any) => {
                    this.validationCheck(event, 'eligible')
                    formRef.eligible = event.target.value
                    this.setState(formRef)
                }}>

                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="yes"
                        label={yes}
                        iconStyle={Styling.iconStyle}

                    />
                    <RadioButton
                        style={Styling.radioButtonStyle}
                        value="no"
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <TextField
                    hintText=""
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.begin_work.begin_workError ? this.state.error.begin_work.msg : null}
                    className="text-area"
                    style={Styling.LastLine}
                    value={this.state.form.begin_work}
                    floatingLabelText={workStatus}
                    onChange={(event: any) => {
                        formRef.begin_work = event.target.value
                        this.setState(formRef);
                    }
                    }
                    onBlur={(event: any) => {
                        this.validationCheck(event, 'begin_work')
                        formRef.begin_work = event.target.value
                        this.setState(formRef);
                    }}
                />
                {this.state.error.begin_work.begin_workError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default ApplicantInfo;

