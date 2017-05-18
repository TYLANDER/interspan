import * as React from 'react';
import { TextField, RadioButton, RadioButtonGroup, DatePicker } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class ApplicantInfo extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }
    state = {
        employee: false,
        selectedJson:this.props.jsonData
    };

    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const { lastName, firstName, middle, streetAddress, city, state, zip, socialSecurity, email, homeTelephone, cellularTelephone, alternateTelephone, areYou18, employment, employementYes, legallyEligible, workStatus, yes, no } = this.state.selectedJson;
        return (
            <div className="job-applicant-container">
                <label className="title">Applicant Information</label>
                <TextField
                    hintText=""
                    fullWidth={true}
                    floatingLabelText={firstName}
                />

                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={middle}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={lastName}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    multiLine={true}
                    floatingLabelText={streetAddress}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={city}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={state}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={zip}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={homeTelephone}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={alternateTelephone}
                />
                <TextField
                    hintText=""
                    type="tel"
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={cellularTelephone}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={socialSecurity}
                />
                <TextField
                    hintText=""
                    onFocus={() => { }}
                    fullWidth={true}
                    floatingLabelText={email}
                />
                <br />
                <b>{areYou18} </b>
                <RadioButtonGroup name="age">

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
                <RadioButtonGroup name="employement" onChange={(event: any) => event.target.value === 'yes' ? this.setState({ employee: true }) : this.setState({ employee: false })}>
                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                {this.state.employee ? <DatePicker floatingLabelText={employementYes} /> : ''}
                <b>{legallyEligible}</b>
                <RadioButtonGroup name="age">

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
                />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default ApplicantInfo;