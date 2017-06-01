import * as React from 'react';
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class ApplicantInfo extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }
    state = {
        employee: false,
        selectedJson:this.props.jsonData,
        form: {
            address: "",
            city: "",
            state:"",
            zip: "",
            homeTelephone: "",
            alternateTelephone: "",
            cellularTelephone: "",
            email: "",
            areYou18: "",
            appliedBefore: "",
            appliedDate: "",
            legallyEligible: "",
            beginWork: ""
        }

    };

    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const {streetAddress, city, state, zip, email, homeTelephone, cellularTelephone, alternateTelephone, areYou18, employment, employementYes, legallyEligible, workStatus, yes, no } = this.state.selectedJson;
        const formRef = this.state.form;
        return (
            <div className="job-applicant-container">
                <TextField
                    hintText=""
                    fullWidth={true}
                    multiLine={true}
                    floatingLabelText={streetAddress}
                    onBlur={(event: any) => {
                        formRef.address = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={city}
                    onBlur={(event: any) => {
                       
                        formRef.city = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={state}
                    onBlur={(event: any) => {
                        formRef.state = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
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
                    fullWidth={true}
                    floatingLabelText={homeTelephone}
                    onBlur={(event: any) => {
                        formRef.homeTelephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={alternateTelephone}
                    onBlur={(event: any) => {
                        formRef.alternateTelephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={cellularTelephone}
                    onBlur={(event: any) => {
                        formRef.cellularTelephone = event.target.value
                        this.setState(formRef);
                    }}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={email}
                    onBlur={(event: any) => {
                        formRef.email = event.target.value
                        this.setState(formRef);
                    }}
                />
                <br />
                <b>{areYou18} </b>
                <RadioButtonGroup name="age"  onChange={(event: any) => {
                        formRef.areYou18 = event.target.value
                        this.setState(formRef)}}>

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
                <RadioButtonGroup name="employement" onChange={(event: any) => {
                        formRef.appliedBefore = event.target.value
                        this.setState(formRef);
                        event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })}}>
                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                {this.state.employee ? 
                    <DatePicker floatingLabelText={employementYes} 
                        onChange={(event: any,date:any) => {
                            formRef.appliedDate = date.toISOString()
                            this.setState(formRef);
                        }}
                    /> 
                    : ''}
                <b>{legallyEligible}</b>
                <RadioButtonGroup name="eligible" onChange={(event: any) => {
                        formRef.legallyEligible = event.target.value
                        this.setState(formRef)}}>

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
                    floatingLabelText={workStatus}
                    onBlur={(event: any) => {
                        formRef.beginWork = event.target.value
                        this.setState(formRef);
                    }}
                />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default ApplicantInfo;