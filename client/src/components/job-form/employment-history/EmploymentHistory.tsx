import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, DatePicker, FlatButton } from 'material-ui';

class EmploymentHistory extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            employed: 1,
            selectedJson:this.props.jsonData,
            form:{
                EmploymentHistory: [{
                    companyName: "",
                    city: "",
                    nameOfSupervisor: "",
                    stateJobTitle: "",
                    telephone: "",
                    EmploymentStart: "",
                    EmploymentEnd: "",
                    payRateStart: "",
                    payRateEnd: "",
                    reasonForleaving: ""
                }],
                doNotContactNumber: "",
                doNotContactReason: ""
            }
        };
    }
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
    handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    render() {
        const { companyName, city, state, nameOfSupervisor, stateJobTitle, telephone, employed, from, 
            to, payRate, start, end, reasonForleaving, doNotContact, employeeNumber, note, reason } = this.state.selectedJson;
        let history = [];
        for (var i = 0; i < this.state.employed; i++) {
            history.push(
                <div key={i}>
                    { this.state.employed > 1? <h3> {i + 1} - Employment History </h3> : ""}
                    
                    <TextField
                        hintText={companyName}
                        floatingLabelText={companyName}
                        fullWidth={true}
                        name="companyName"
                        onBlur={this.handleTargetEvents}
                    />
                    <TextField
                        hintText={city + ' ' + state}
                        floatingLabelText={city + ' ' + state}
                        fullWidth={true}
                        name="city"
                        onBlur={this.handleTargetEvents}
                    />
                    <TextField
                        hintText={nameOfSupervisor}
                        floatingLabelText={nameOfSupervisor}
                        fullWidth={true}
                        name="nameOfSupervisor"
                        onBlur={this.handleTargetEvents}
                    />
                    <TextField
                        hintText={stateJobTitle}
                        floatingLabelText={stateJobTitle}
                        multiLine={true}
                        fullWidth={true}
                        name="stateJobTitle"
                        onBlur={this.handleTargetEvents}
                    />
                    <TextField
                        hintText={telephone}
                        floatingLabelText={telephone}
                        multiLine={true}
                        fullWidth={true}
                        name="telephone"
                        onBlur={this.handleTargetEvents}
                    />
                    <b>{employed}</b>
                        <DatePicker floatingLabelText={from} name="EmploymentStart"/>
                        <DatePicker floatingLabelText={to} name="EmploymentEnd"/>
                    <b>{payRate} </b>
                        <TextField type="number" floatingLabelText={start} name="payRateStart"/>
                        <TextField type="number" floatingLabelText={end} name="payRateEnd"/>
                    <TextField
                        hintText={reasonForleaving}
                        floatingLabelText={reasonForleaving}
                        multiLine={true}
                        fullWidth={true}
                        name="reasonForleaving"
                        onBlur={this.handleTargetEvents}
                    />

                </div>);
        }
        return (
            <div className="job-applicant-container">
                {history}
                <br />
                <FlatButton label="Add" primary={true} onTouchTap={() => this.setState({ employed: this.state.employed + 1 })} />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.employed === 1 ? null : this.setState({ employed: this.state.employed - 1 })} />
                <br />
                <br />
                <label className="title">{note}</label>
                <br />
                <br />
                <label className="title">{doNotContact}</label>
                <br />

                <TextField
                    floatingLabelText={employeeNumber}
                    fullWidth={true}
                    name="doNotContactNumber"
                    onBlur={this.handleTargetEvents}
                />
                <TextField
                    floatingLabelText={reason}
                    fullWidth={true}
                    multiLine={true}
                    name="doNotContactReason"
                    onBlur={this.handleTargetEvents}
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default EmploymentHistory;