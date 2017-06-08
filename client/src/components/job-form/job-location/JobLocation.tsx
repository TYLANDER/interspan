import * as React from 'react';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import ActiveButtons from '../active-buttons/ActiveButtons';

class JobLocation extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            position: false,
            location: false,
            selectedJson: this.props.jsonData,
            form: {
                position_desired: "",
                location_preference: "",
                pay_rate: ""
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
            selectedJson: nextProp.jsonData
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
        const formRef = this.state.form;

        return (
            <div className="job-applicant-container">
                <label className="title">{positionDesired} </label>
                <RadioButtonGroup defaultSelected={
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
                {this.state.position && this.state.form.position_desired !== "Any available position" && this.state.form.position_desired !== "Clerical / Office" && this.state.form.position_desired !== "Industrial / Factory / Warehouse" ?
                    <TextField
                        name="position_desired"
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

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default JobLocation;