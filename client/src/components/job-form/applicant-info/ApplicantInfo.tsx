import * as React from 'react';
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class ApplicantInfo extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }
    state = {
        employee: false,
        selectedJson: this.props.jsonData,
        form: {
            street_address: "",
            city: "",
            state: "",
            zip: "",
            home_telephone: "",
            alternate_telephone: "",
            cellular_telephone: "",
            email: "",
            years_old: "",
            employement: '',
            eligible: "",
            begin_work: ""
        },
        appliedBefore: ""
    };
    componentWillMount() {
        if (localStorage.getItem('application-form') !== null) {
            let data: any = localStorage.getItem('application-form');
            data = JSON.parse(data)
            this.setState({
                form: data
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
        this.props.handleNext("application-form", this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const { streetAddress, city, state, zip, email, homeTelephone, cellularTelephone, alternateTelephone, areYou18, employment, employementYes, legallyEligible, workStatus, yes, no } = this.state.selectedJson;
        const formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <TextField
                    hintText=""
                    value={this.state.form.street_address}
                    fullWidth={true}
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
                    value={this.state.form.city}
                    onFocus={() => { }}
                    fullWidth={true}
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
                    onFocus={() => { }}
                    onChange={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }
                    }
                    fullWidth={true}
                    value={this.state.form.state}
                    floatingLabelText={state}
                    onBlur={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    value={this.state.form.zip}
                    onChange={(event: any) => {
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }
                    }
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={zip}
                    onBlur={(event: any) => {
                        formRef.zip = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    value={this.state.form.home_telephone}
                    onChange={(event: any) => {
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }
                    }
                    fullWidth={true}
                    floatingLabelText={homeTelephone}
                    onBlur={(event: any) => {
                        formRef.home_telephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    onChange={(event: any) => {
                        formRef.alternate_telephone = event.target.value
                        this.setState(formRef);
                    }
                    }
                    fullWidth={true}
                    value={this.state.form.alternate_telephone}
                    floatingLabelText={alternateTelephone}
                    onBlur={(event: any) => {
                        formRef.alternate_telephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    onChange={(event: any) => {
                        formRef.cellular_telephone = event.target.value
                        this.setState(formRef);
                    }
                    }
                    value={this.state.form.cellular_telephone}
                    floatingLabelText={cellularTelephone}
                    onBlur={(event: any) => {
                        formRef.cellular_telephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    onChange={(event: any) => {
                        formRef.email = event.target.value
                        this.setState(formRef);
                    }
                    }
                    floatingLabelText={email}
                    value={this.state.form.email}
                    onBlur={(event: any) => {
                        formRef.email = event.target.value
                        this.setState(formRef);
                    }}
                />
                <br />
                <b>{areYou18} </b>

                <RadioButtonGroup name="age" valueSelected={this.state.form.years_old} onChange={(event: any) => {
                    formRef.years_old = event.target.value
                    this.setState(formRef)
                }}>

                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                <b>{employment} </b>
                <RadioButtonGroup name="employement" valueSelected={this.state.form.employement !== '' ? this.state.form.employement !== 'no' ? "yes" : "no" : ""} onChange={(event: any) => {
                    this.state.appliedBefore = event.target.value
                    formRef.employement = event.target.value
                    this.setState(formRef);
                    event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })
                }}>
                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                {this.state.employee || this.state.form.employement !== 'no' ?
                    <DatePicker floatingLabelText={employementYes}
                        onChange={(event: any, date: any) => {
                            formRef.employement = date.toISOString()
                            this.setState(formRef);
                        }}
                    />
                    : ''}
                <b>{legallyEligible}</b>
                <RadioButtonGroup name="eligible" valueSelected={this.state.form.eligible} onChange={(event: any) => {
                    formRef.eligible = event.target.value
                    this.setState(formRef)
                }}>

                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    value={this.state.form.begin_work}
                    floatingLabelText={workStatus}
                    onChange={(event:any)=>{
                    formRef.begin_work=event.target.value 
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