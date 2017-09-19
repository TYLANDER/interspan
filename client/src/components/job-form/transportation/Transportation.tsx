import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import './Transportation.css';
import { RadioButton, RadioButtonGroup, TextField } from 'material-ui';
import Styling from "../jobTheme";

class Transportation extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            employee: false,
            selectedJson: this.props.jsonData,
            form: {
                reliable_transportation: "",
                employment_bus: "",
                another_employee: ""
            },
            error: {
                reliable_transportation: {
                    reliable_transportationError: false, msg: ""
                },
                employment_bus: {
                    employment_busError: false, msg: ""
                },
                another_employee: {
                    another_employeeError: false, msg: ""
                }
            }
        };
    }

    //Getting transportation form data from local storage
    componentWillMount() {
        if (localStorage.getItem('transportation-form') !== null) {
            let data: any = localStorage.getItem('transportation-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
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

    //Handling next state
    handleNext = () => {
        if (this.state.form.reliable_transportation && this.state.form.employment_bus && this.state.form.another_employee) {
            this.props.handleNext('transportation-form', this.state.form);
        }
        else {
            if (!this.state.form.reliable_transportation) {
                this.setError('reliable_transportation');
            }
            if (!this.state.form.employment_bus) {
                this.setError('employment_bus');
            }
            if (!this.state.form.another_employee) {
                this.setError('another_employee');
            }
        }
    }

    //Handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    //Handling input form state of the component
    handleTargetEvents = (event: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    render() {
        const { accessReliableTransportation, employmentBusLine, rideWithAnotherEmployment, name, yes, no } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="transportation-container">
                <br />
                <label style={this.state.error.reliable_transportation.reliable_transportationError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{accessReliableTransportation}</label>
                <RadioButtonGroup name="reliable_transportation" defaultSelected={formRef.reliable_transportation} className="right" onChange={(event: any) => { this.validationCheck(event, 'reliable_transportation'); this.handleTargetEvents(event) }}>
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
                <br /> <br />
                <label style={this.state.error.employment_bus.employment_busError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{employmentBusLine}</label>
                <RadioButtonGroup name="employment_bus" defaultSelected={formRef.employment_bus} className="right" onChange={(event: any) => { this.validationCheck(event, 'employment_bus'); this.handleTargetEvents(event) }}>
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
                <br /> <br />
                <label style={this.state.error.another_employee.another_employeeError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{rideWithAnotherEmployment}</label>
                <RadioButtonGroup name="another_employee" className="right" defaultSelected={formRef.another_employee !== "No" ? "Yes" : formRef.another_employee} onChange={(event: any) => { this.validationCheck(event,'another_employee'); this.handleTargetEvents(event); event.target.value === 'Yes' ? this.setState({ employee: true }) : this.setState({ employee: false }); }}>
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
                <br /> <br />
                {this.state.employee || formRef.another_employee !== "No" ?
                    <div><TextField
                        value={this.state.form.another_employee}
                        className="text-area"
                        floatingLabelText={name}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.another_employee.another_employeeError ? this.state.error.another_employee.msg : null}
                        name="another_employee"
                        onBlur={(event: any) => {
                            this.validationCheck(event, 'another_employee')
                            this.handleTargetEvents(event);
                        }}
                        onChange={(event: any) => {
                            this.validationCheck(event, 'another_employee')
                            formRef.another_employee = event.target.value
                            this.setState(formRef);
                        }
                        }
                    />
                        {this.state.error.another_employee.another_employeeError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    </div> :
                    null
                }
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div >
        );
    }
}

export default Transportation;