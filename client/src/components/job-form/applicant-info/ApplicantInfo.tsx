import * as React from 'react';
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';
// import * as Colors from 'material-ui/styles/colors';

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
            appliedBefore: ""
        };
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
        this.props.handleNext("application-form", this.state.form);
    }
    //Decrement in state of the stepper
    handlePrev = () => {
        this.props.handlePrev();
    }

    render() {
        const { streetAddress, city, state, zip, homeTelephone, areYou18, employment, employementYes, legallyEligible, workStatus, yes, no } = this.state.selectedJson;
        const formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <TextField
                    hintText=""
                    underlineStyle={{ bottom: "4px" }}
                    style={Styling.textField}
                    value={this.state.form.street_address}
                    multiLine={true}
                    onChange={(event: any) => {
                        formRef.street_address = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={streetAddress}
                    onBlur={(event: any) => {
                        formRef.street_address = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    style={Styling.textField}
                    value={this.state.form.city}
                    underlineStyle={{ bottom: "4px" }}
                    onChange={(event: any) => {
                        formRef.city = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={city}
                    onBlur={(event: any) => {

                        formRef.city = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    style={Styling.textField}
                    underlineStyle={{ bottom: "4px" }}
                    onChange={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.state}
                    floatingLabelText={state}
                    onBlur={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    underlineStyle={{ bottom: "4px" }}
                    style={Styling.textField}
                    value={this.state.form.zip}
                    onChange={(event: any) => {
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={zip}
                    onBlur={(event: any) => {
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    underlineStyle={{ bottom: "4px" }}
                    style={Styling.textField}
                    value={this.state.form.home_telephone}
                    onChange={(event: any) => {
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={homeTelephone}
                    onBlur={(event: any) => {
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <br />
                <br />
                <b style={Styling.radioButtonLabel}>{areYou18} </b>
                <RadioButtonGroup className="radio-label" style={Styling.radioButtonGroupStyling} name="age" defaultSelected={this.state.form.years_old} onChange={(event: any) => {
                    formRef.years_old = event.target.value;
                    this.setState(formRef)
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
                <b style={Styling.radioButtonLabel}>{employment} </b>
                <RadioButtonGroup className="radio-label" name="employement" valueSelected={this.state.form.employement !== '' ? this.state.form.employement !== 'no' ? "yes" : "no" : ""} onChange={(event: any) => {
                    this.state.appliedBefore = event.target.value
                    formRef.employement = event.target.value
                    this.setState(formRef);
                    event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })
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
                {this.state.employee || this.state.form.employement !== 'no' ?
                    <div style={Styling.radioButtonGroupStyling} ><DatePicker textFieldStyle={Styling.textField} floatingLabelText={employementYes}
                        onChange={(event: any, date: any) => {
                            formRef.employement = date.toISOString()
                            this.setState(formRef);
                        }}
                    /><p style={Styling.dateNoteStyle}><b>Type or choose from calendar by clicking on the icon</b></p></div>
                    : ''}
                <b style={Styling.radioButtonLabel}>{legallyEligible}</b>
                <RadioButtonGroup className="radio-label" name="eligible" valueSelected={this.state.form.eligible} onChange={(event: any) => {
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
                    style={Styling.LastLine}
                    value={this.state.form.begin_work}
                    floatingLabelText={workStatus}
                    onChange={(event: any) => {
                        formRef.begin_work = event.target.value
                        this.setState(formRef);
                    }
                    }
                    onBlur={(event: any) => {
                        formRef.begin_work = event.target.value
                        this.setState(formRef);
                    }}
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default ApplicantInfo;

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
        marginRight: "7px"
    },
    radioButtonGroupStyling: {
        marginBottom: "36px"
    },
    dateNoteStyle: {
        color: "#293fa3",
        fontSize: "12px",
    },
    LastLine: {
        display: "block",
        width: "55%",
        marginBottom: "36px"

    }
}