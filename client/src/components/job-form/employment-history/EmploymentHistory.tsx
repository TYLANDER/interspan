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
            },
            error: {
                company_name: { company_nameError: false, msg: "" },
                city: { cityError: false, msg: "" },
                supervisor_name: { supervisor_nameError: false, msg: "" },
                job_title: { job_titleError: false, msg: "" },
                telephone: { telephoneError: false, msg: "" },
                pay_rate_start: { pay_rate_startError: false, msg: "" },
                pay_rate_end: { pay_rate_endError: false, msg: "" },
                leaving_reason: { leaving_reasonError: false, msg: "" },
                no_contact_num: {
                    no_contact_numError: false, msg: ""
                },
                no_contact_reason: {
                    no_contact_reason: false, msg: ""
                }
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

    //selecting json according to selected lanugage 
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

    //handling next state
    handleNext = () => {
        var done: boolean = false
        this.state.form.EmploymentHistory.map((arr: any, index: any) => {
            if (arr.company_name && arr.city && arr.supervisor_name && arr.job_title && arr.telephone && arr.pay_rate_end && arr.pay_rate_start && arr.leaving_reason) {
                done = true;
            }
            else {
                if (!arr.company_name) {
                    this.setError('company_name')
                }
                if (!arr.city) {
                    this.setError('city')
                }
                if (!arr.supervisor_name) {
                    this.setError('supervisor_name')
                }
                if (!arr.job_title) {
                    this.setError('job_title')
                }

                if (!arr.telephone) {
                    this.setError('telephone')
                }
                if (!arr.pay_rate_start) {
                    this.setError('pay_rate_start')
                }

                if (!arr.pay_rate_end) {
                    this.setError('pay_rate_end')
                }
                if (!arr.leaving_reason) {
                    this.setError('leaving_reason')
                }

            }
        })
        if (this.state.form.no_contact_num && done && this.state.form.no_contact_reason) {
            this.props.handleNext("employment-form", this.state.form);
        }
        else {
            if (!this.state.form.no_contact_num) {
                this.setError('no_contact_num');
            }
            if (!this.state.form.no_contact_reason) {
                this.setError('no_contact_reason')
            }
        }
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
                supervisor_name: "",
                job_title: "",
                telephone: "",
                employment_start: new Date().toISOString(),
                employment_end: new Date().toISOString(),
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
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.company_name.company_nameError ? this.state.error.company_name.msg : null}
                        value={formRef.EmploymentHistory[i].company_name}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        hintText={companyName}
                        floatingLabelText={companyName}
                        fullWidth={true}
                        name="company_name"
                        onBlur={(event: any) => {
                            this.validationCheck(event, 'company_name');
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i);
                        }}
                    />
                    {this.state.error.company_name.company_nameError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
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
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.city.cityError ? this.state.error.city.msg : null}
                        value={formRef.EmploymentHistory[i].city}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={city}
                        fullWidth={true}
                        name="city"
                        onBlur={(event) => {
                            this.validationCheck(event, 'city')
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i)
                        }
                        }
                    />
                    {this.state.error.city.cityError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    <TextField
                        hintText={nameOfSupervisor}
                        className="text-area"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.supervisor_name.supervisor_nameError ? this.state.error.supervisor_name.msg : null}
                        value={formRef.EmploymentHistory[i].supervisor_name}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={nameOfSupervisor}
                        fullWidth={true}
                        name="supervisor_name"
                        onBlur={(event) => {
                            this.validationCheck(event, 'supervisor_name')
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i)
                        }
                        }
                    />
                    {this.state.error.supervisor_name.supervisor_nameError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                    <TextField
                        className="text-area"
                        hintText={stateJobTitle}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.job_title.job_titleError ? this.state.error.job_title.msg : null}
                        value={formRef.EmploymentHistory[i].job_title}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={stateJobTitle}
                        multiLine={true}
                        fullWidth={true}
                        name="job_title"
                        onBlur={(event) => {
                            this.validationCheck(event, 'job_title')
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i)
                        }
                        }
                    />
                    {this.state.error.job_title.job_titleError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    <TextField
                        className="text-area"
                        hintText={telephone}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.telephone.telephoneError ? this.state.error.telephone.msg : null}
                        value={formRef.EmploymentHistory[i].telephone}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        floatingLabelText={telephone}
                        multiLine={true}
                        fullWidth={true}
                        name="telephone"
                        onBlur={(event) => {
                            this.validationCheck(event, 'telephone')
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i)
                        }
                        }
                    />
                    {this.state.error.telephone.telephoneError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
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
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.pay_rate_start.pay_rate_startError ? this.state.error.pay_rate_start.msg : null}
                        floatingLabelText={start}
                        name="pay_rate_start"
                        onBlur={(event) => {
                            this.validationCheck(event, 'pay_rate_start')
                            this.handleTargetEvents.bind(this, null, i)
                        }
                        }
                        onChange={this.handleTargetEvents.bind(this, "EmploymentHistory", i)}
                        value={formRef.EmploymentHistory[i].pay_rate_start}
                    />
                    {this.state.error.pay_rate_start.pay_rate_startError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    <TextField
                        className="text-area"
                        type="number"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.pay_rate_end.pay_rate_endError ? this.state.error.pay_rate_end.msg : null}
                        floatingLabelText={end}
                        name="pay_rate_end"
                        onBlur={(event) => {
                            this.validationCheck(event, 'pay_rate_end')
                            this.handleTargetEvents.bind(this, null, i)
                        }
                        }
                        value={formRef.EmploymentHistory[i].pay_rate_end}
                        onChange={this.handleTargetEvents.bind(this, "EmploymentHistory", i)} />
                    {this.state.error.pay_rate_end.pay_rate_endError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                    <TextField
                        className="text-area"
                        hintText={reasonForleaving}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.leaving_reason.leaving_reasonError ? this.state.error.leaving_reason.msg : null}
                        floatingLabelText={reasonForleaving}
                        multiLine={true}
                        fullWidth={true}
                        value={formRef.EmploymentHistory[i].leaving_reason}
                        onChange={this.handleText.bind(this, "EmploymentHistory", i)}
                        name="leaving_reason"
                        onBlur={(event) => {
                            this.validationCheck(event, 'leaving_reason')
                            this.handleTargetEvents.bind(this, "EmploymentHistory", i)
                        }
                        }
                    />
                    {this.state.error.leaving_reason.leaving_reasonError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}
                </div>);
        }
        return (
            <div className="employement-applicant-container">
                {history}
                <br />
                <div className="button-group">
                <FlatButton className="hovered-class" style={Styling.addButton} label={'Add'} labelStyle={Styling.addButtonLabel} onTouchTap={() => this.handleHistoryDetails("add")} />
                <FlatButton className="hovered-class" style={Styling.deleteButton} label={'Remove'} labelStyle={Styling.addButtonLabel} onTouchTap={() => this.state.employed === 1 ? null : this.handleHistoryDetails("delete")} />
                </div>
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
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.no_contact_num.no_contact_numError ? this.state.error.no_contact_num.msg : null}
                    value={formRef.no_contact_num}
                    onChange={(event: any) => {
                        formRef.no_contact_num = event.target.value
                        this.setState(formRef);
                    }
                    }
                    onBlur={(event) => {
                        this.validationCheck(event, 'no_contact_num')
                        this.handleTargetEvents.bind(this, null, i)
                    }
                    }
                />
                {this.state.error.no_contact_num.no_contact_numError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                <TextField
                    className="text-area"
                    floatingLabelText={reason}
                    fullWidth={true}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.no_contact_reason.no_contact_reasonError ? this.state.error.no_contact_reason.msg : null}
                    multiLine={true}
                    value={formRef.no_contact_reason}
                    onChange={(event: any) => {
                        formRef.no_contact_reason = event.target.value
                        this.setState(formRef);
                    }
                    }
                    name="no_contact_reason"
                    onBlur={(event) => {
                        this.validationCheck(event, 'no_contact_reason')
                        this.handleTargetEvents.bind(this, null, i)
                    }
                    }
                />
                {this.state.error.no_contact_reason.no_contact_reasonError ? <span className="error-icon"><img src={require("../../../assets/error-icon.svg")} /></span> : null}

                <br /><br />
                {/*<FlatButton style={Styling.addButton} label={<b>Add</b>} labelStyle={Styling.buttonLabel} primary={true}  />
                <FlatButton style={Styling.deleteButton} label={<b>Remove</b>} labelStyle={Styling.buttonLabel}  />*/}
                <div className="content-space"></div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}
export default EmploymentHistory;

