import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, DatePicker, FlatButton } from 'material-ui';
import Styling from "../jobTheme";
import "./EmployeementHistory.css";
import DateRange from "material-ui/svg-icons/action/date-range";

class EmploymentHistory extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            employed: 1,
            selectedJson: this.props.jsonData,
            form: {
                EmploymentHistory: [{
                    company_name: "",
                    city: "",
                    supervisor_name: "",
                    job_title: "",
                    telephone: "",
                    employment_start: new Date().toISOString(),
                    employment_end: new Date().toISOString(),
                    pay_rate_start: "",
                    pay_rate_end: "",
                    leaving_reason: ""
                }],
                no_contact_num: "",
                no_contact_reason: ""
            }
        };
    }

    //getting employment history form data from local storage
    componentWillMount() {
        if (localStorage.getItem('employment-form') !== null) {
            let data: any = localStorage.getItem('employment-form');
            data = JSON.parse(data)
            this.setState({
                form: data,
                employed: data.EmploymentHistory.length
            })
        }
    }

    //selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        this.props.handleNext("employment-form", this.state.form);
    }

    //handling previous state
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }

    //handling input form state of the component
    handleTargetEvents = (arrayRef: string, ind: number, event: any, date?: any) => {
        console.log(event);
        let formRef = this.state.form;
        if (arrayRef && Array.isArray(formRef[arrayRef]))
            formRef[arrayRef][ind][event.target.name] = event.target.value;
        else formRef[event.target.name] = event.target.value;
        this.setState(formRef);
    }

    //making and manage multiple employee list
    handleHistoryDetails = (action: string) => {
        let formRef = this.state.form["EmploymentHistory"];
        if (action === "add") {
            formRef.push({
                company_name: "",
                city: "",
                state: "",
                supervisor_name: "",
                job_title: "",
                telephone: "",
                employment_start: {},
                employment_end: {},
                pay_rate_start: "",
                pay_rate_end: "",
                leaving_reason: ""
            });
            this.setState({ employed: this.state.employed + 1, formRef })
        }
        else {
            formRef.pop();
            this.setState({ employed: this.state.employed - 1, formRef })
        }
    }

    //handling date state of the component
    handleTargetDate = (arrayRef: string, ind: number, name: string, event?: any, date?: any) => {
        let formRef = this.state.form;
        console.log("asasdsdasd", name);
        formRef[arrayRef][ind][name] = date.toISOString();
        this.setState(formRef);
    }

    //handling input form state of the component
    handleText = (arrRef: string, ind: number, event?: any) => {
        let formRef = this.state.form;
        formRef[arrRef][ind][event.target.name] = event.target.value;
        this.setState(formRef)
    }

    render() {
        const { companyName, city, state, nameOfSupervisor, stateJobTitle, telephone, employed, from,
            to, payRate, start, end, reasonForleaving, doNotContact, employeeNumber, note, reason } = this.state.selectedJson;
        let history = [];
        let formRef = this.state.form;
        for (var i = 0; i < this.state.employed; i++) {
            history.push(
                <div key={i}>
                    {this.state.employed > 1 ? <h3> {i + 1} - Employment History </h3> : ""}
                    <TextField
                        className="text-area"
                        value={formRef.EmploymentHistory[i].company_name}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        hintText={companyName}
                        floatingLabelText={companyName}
                        fullWidth={true}
                        name="company_name"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <TextField
                        hintText={state}
                        className="text-area"
                        value={formRef.EmploymentHistory[i].city}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={state}
                        fullWidth={true}
                        name="state"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <TextField
                        hintText={city}
                        className="text-area"
                        value={formRef.EmploymentHistory[i].city}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={city}
                        fullWidth={true}
                        name="city"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <TextField
                        hintText={nameOfSupervisor}
                        className="text-area"
                        value={formRef.EmploymentHistory[i].supervisor_name}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={nameOfSupervisor}
                        fullWidth={true}
                        name="supervisor_name"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <TextField
                        className="text-area"
                        hintText={stateJobTitle}
                        value={formRef.EmploymentHistory[i].job_title}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={stateJobTitle}
                        multiLine={true}
                        fullWidth={true}
                        name="job_title"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <TextField
                        className="text-area"
                        hintText={telephone}
                        value={formRef.EmploymentHistory[i].telephone}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={telephone}
                        multiLine={true}
                        fullWidth={true}
                        name="telephone"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                    <p className="title">{employed}</p>
                    <DatePicker className="dateTextFeild" style={Styling.dateTextFeild} textFieldStyle={Styling.date} floatingLabelText={from} defaultDate={new Date(formRef.EmploymentHistory[i].employment_start)} name="employment_start" onChange={this.handleTargetDate.bind(this, "EmploymentHistory", i, "employment_start")}
                    />
                    <span><DateRange style={Styling.dateIcon} color={"#bec2c9"} /></span>
                    <p style={Styling.dateNoteStyle}><b>Type or choose from calendar by clicking on the icon</b></p>
                    <DatePicker className="dateTextFeild" style={Styling.dateTextFeild} textFieldStyle={Styling.date} floatingLabelText={to} defaultDate={new Date(formRef.EmploymentHistory[i].employment_end)} name="employment_end" onChange={this.handleTargetDate.bind(this, "EmploymentHistory", i, "employment_end")} />
                    <span><DateRange style={Styling.dateIcon} color={"#bec2c9"} /></span>
                    <p style={Styling.dateNoteStyle}><b>Type or choose from calendar by clicking on the icon</b></p>
                    <p className="title">{payRate} </p>
                    <TextField
                        className="text-area"
                        type="number"
                        floatingLabelText={start}
                        name="pay_rate_start"
                        onChange={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                        value={formRef.EmploymentHistory[i].pay_rate_start}

                    />
                    <TextField
                        className="text-area"
                        type="number"
                        floatingLabelText={end}
                        name="pay_rate_end"
                        value={formRef.EmploymentHistory[i].pay_rate_end}
                        onChange={this.handleTargetEvents.bind(this, "EmploymentHistory", i)} />
                    <TextField
                        className="text-area"
                        hintText={reasonForleaving}
                        floatingLabelText={reasonForleaving}
                        multiLine={true}
                        fullWidth={true}
                        value={formRef.EmploymentHistory[i].leaving_reason}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        name="leaving_reason"
                        onBlur={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                    />
                </div>);
        }
        return (
            <div className="employement-applicant-container">
                {history}
                <br />
                <FlatButton style={Styling.addButton} label={<b>Add</b>} labelStyle={Styling.buttonLabel} primary={true} onTouchTap={() => this.handleHistoryDetails("add")} />
                <FlatButton style={Styling.deleteButton} label={<b>Remove</b>} labelStyle={Styling.buttonLabel} onTouchTap={() => this.state.employed === 1 ? null : this.handleHistoryDetails("delete")} />
                <br />
                <br />
                <p className='subTitle'>{note}</p>
                <br />
                <br />
                <label className="doNot">{doNotContact}</label>
                <br />
                <TextField
                    className="text-area"
                    floatingLabelText={employeeNumber}
                    fullWidth={true}
                    name="no_contact_num"
                    value={formRef.no_contact_num}
                    onChange={(event: any) => {
                        formRef.no_contact_num = event.target.value
                        this.setState(formRef);
                    }
                    } onBlur={this.handleTargetEvents.bind(this, null, i)}
                />
                <TextField
                    className="text-area"
                    floatingLabelText={reason}
                    fullWidth={true}
                    multiLine={true}
                    value={formRef.no_contact_reason}
                    onChange={(event: any) => {
                        formRef.no_contact_reason = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="no_contact_reason"
                    onBlur={this.handleTargetEvents.bind(this, null, i)}
                />
                <br /><br />
                <FlatButton style={Styling.addButton} label={<b>Add</b>} labelStyle={Styling.buttonLabel} primary={true} onTouchTap={() => this.handleHistoryDetails("add")} />
                <FlatButton style={Styling.deleteButton} label={<b>Remove</b>} labelStyle={Styling.buttonLabel} onTouchTap={() => this.state.employed === 1 ? null : this.handleHistoryDetails("delete")} />
                <div className="content-space"></div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default EmploymentHistory;

