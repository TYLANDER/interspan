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
                    company_name: "",
                    city: "",
                    supervisor_name: "",
                    job_title: "",
                    telephone: "",
                    employment_start: "",
                    employment_end: "",
                    pay_rate_start: "",
                    pay_rate_end: "",
                    leaving_reason: ""
                }],
                no_contact_num: "",
                no_contact_reason: ""
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
   handleTargetEvents = (arrayRef:string, ind:number, event?: any) =>{
        let formRef= this.state.form;
        if(arrayRef && Array.isArray(formRef[arrayRef]))
            formRef[arrayRef][ind][event.target.name] = event.target.value;
        else formRef[event.target.name]= event.target.value;
        this.setState(formRef);
    }
    handleHistoryDetails = (action: string)=>{
        let formRef = this.state.form["EmploymentHistory"];
        if(action === "add"){
            formRef.push({
                    company_name: "",
                    city: "",
                    supervisor_name: "",
                    job_title: "",
                    telephone: "",
                    employment_start: "",
                    employment_end: "",
                    pay_rate_start: "",
                    pay_rate_end: "",
                    leaving_reason: ""
                }); 
            this.setState({ employed: this.state.employed + 1,formRef })
        }
        else{
            formRef.pop();
            this.setState({ employed: this.state.employed - 1,formRef })
        }
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
                        name="company_name"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />
                    <TextField
                        hintText={city + ' ' + state}
                        floatingLabelText={city + ' ' + state}
                        fullWidth={true}
                        name="city"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />
                    <TextField
                        hintText={nameOfSupervisor}
                        floatingLabelText={nameOfSupervisor}
                        fullWidth={true}
                        name="supervisor_name"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />
                    <TextField
                        hintText={stateJobTitle}
                        floatingLabelText={stateJobTitle}
                        multiLine={true}
                        fullWidth={true}
                        name="job_title"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />
                    <TextField
                        hintText={telephone}
                        floatingLabelText={telephone}
                        multiLine={true}
                        fullWidth={true}
                        name="telephone"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />
                    <b>{employed}</b>
                        <DatePicker floatingLabelText={from} name="employment_start" onChange={(val)=>
                            this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                            />
                        <DatePicker floatingLabelText={to} name="employment_end" onChange={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}/>
                    <b>{payRate} </b>
                        <TextField type="number" floatingLabelText={start} name="pay_rate_start" onChange={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}/>
                        <TextField type="number" floatingLabelText={end} name="pay_rate_end" onChange={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}/>
                    <TextField
                        hintText={reasonForleaving}
                        floatingLabelText={reasonForleaving}
                        multiLine={true}
                        fullWidth={true}
                        name="leaving_reason"
                        onBlur={this.handleTargetEvents.bind(this,"EmploymentHistory",i)}
                    />

                </div>);
        }
        return (
            <div className="job-applicant-container">
                {history}
                <br />
                <FlatButton label="Add" primary={true} onTouchTap={() => this.handleHistoryDetails("add") } />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.employed === 1 ? null : this.handleHistoryDetails("delete") } />
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
                    name="no_contact_num"
                    onBlur={this.handleTargetEvents.bind(this,null,i)}
                />
                <TextField
                    floatingLabelText={reason}
                    fullWidth={true}
                    multiLine={true}
                    name="no_contact_reason"
                    onBlur={this.handleTargetEvents.bind(this,null,i)}
                />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default EmploymentHistory;