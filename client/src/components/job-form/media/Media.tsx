import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';
import "./Media.css";
import Styling from "../jobTheme";

class Media extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            position: false,
            interspan: false,
            friend: false,
            selectedJson: this.props.jsonData,
            form: {
                about_interspan: "",
                job_description: "",
                employee_description: "",
                friend_description: ""
            },
            error: {
                about_interspan: {
                    about_interspanError: false, msg: ""
                },
                job_description: {
                    job_descriptionError: false, msg: ""
                },
                friend_description: {
                    friend_descriptionError: false, msg: ""
                },
                employee_description: {
                    employee_descriptionError: false, msg: ""
                }
            }
        };
    }

    //Getting media form data from local storage
    componentWillMount() {
        if (localStorage.getItem('media-form') !== null) {
            let data: any = localStorage.getItem('media-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })

            console.log(data);
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
    //Handling next state
    handleNext = () => {
        let formRef = this.state.form;
        if (this.state.form.about_interspan) {
            switch (this.state.form.about_interspan) {
                case "Referred from job site":
                    formRef.employee_description = "";
                    if (!this.state.form.job_description) {
                        this.setError('job_description')
                    }
                    formRef.friend_description = "";
                    this.setState(formRef);
                    break;
                case "Referred by InterSpan, Inc. employee":
                    formRef.job_description = "";
                    if (!this.state.form.friend_description) {
                        this.setError('friend_description')
                    }
                    formRef.friend_description = "";
                    this.setState(formRef);
                    break;
                case "Referred by friend":
                    formRef.employee_description = "";
                    if (!this.state.form.employee_description) {
                        this.setError('employee_description')
                    }
                    formRef.job_description = "";
                    this.setState(formRef);
                    break;
                default:
                    let forming = this.state.error;
                    forming.job_description.job_descriptionError = false;
                    forming.friend_description.friend_descriptionError = false;
                    forming.employee_description.employee_descriptionError = false;
                    this.setState(forming);
                    console.log("not valid");
            }
        }
        if (this.state.form.about_interspan && !this.state.error.job_description.job_descriptionError && !this.state.error.friend_description.friend_descriptionError && !this.state.error.employee_description.employee_descriptionError) {
            this.props.handleNext('media-form', this.state.form);
        }
        else {
            if (!this.state.form.about_interspan) {
                this.setError('about_interspan')
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
        let formRef = this.state.form;
        const { questions, radio, richMond, site, name, friend, jobSearch, referredJob, referredInterSpan, referredFriend } = this.state.selectedJson;
        return (
            <div className="media-applicant-container">
                <p style={this.state.error.about_interspan.about_interspanError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{questions}</p>
                <RadioButtonGroup name="about_interspan"
                    defaultSelected={formRef.about_interspan}
                    onChange={(event: any) => {
                        if (event.target.value === 'Referred from job site') {
                            this.setState({ position: true, interspan: false, friend: false });
                        }
                        else if (event.target.value === 'Referred by InterSpan, Inc. employee') {
                            this.setState({ interspan: true, position: false, friend: false });
                        }
                        else if (event.target.value === 'Referred by friend') {
                            this.setState({ friend: true, interspan: false, position: false });
                        }
                        else {
                            this.setState({ position: false, interspan: false, friend: false });
                        }
                        this.handleTargetEvents(event);
                    }}>
                    <RadioButton
                        value="Radio Station"
                        label={radio}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Richmond Times Newspaper"
                        label={richMond}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Job search on Internet"
                        label={jobSearch}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />

                    <RadioButton
                        value="Referred from job site"
                        iconStyle={Styling.iconStyle}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={referredJob}
                    />
                    <RadioButton
                        value="Referred by InterSpan, Inc. employee"
                        label={referredInterSpan}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Referred by friend"
                        label={referredFriend}
                                                uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                {this.state.position || this.state.form.about_interspan === "Referred from job site" ?
                    <TextField
                        name="job_description"
                        hintText=""
                        className="text-area"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.job_description.job_descriptionError ? this.state.error.job_description.msg : null}
                        value={formRef.job_description}
                        onBlur={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'job_description') }}
                        fullWidth={true}
                        onChange={(event: any) => {
                            formRef.job_description = event.target.value
                            this.setState(formRef);
                        }
                        }
                        floatingLabelText={site}
                    /> : null}
                {this.state.interspan || this.state.form.about_interspan === "Referred by InterSpan, Inc. employee" ?
                    <TextField
                        hintText=""
                        value={formRef.employee_description}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.employee_description.employee_descriptionError ? this.state.error.employee_description.msg : null}
                        name="employee_description"
                        className="text-area"
                        onChange={(event: any) => {
                            this.validationCheck(event, 'employee_description')
                            formRef.employee_description = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'employee_description') }}
                        fullWidth={true}
                        floatingLabelText={name}
                    /> : null}
                {this.state.friend || this.state.form.about_interspan === "Referred by friend" ?
                    <TextField
                        hintText=""
                        value={formRef.friend_description}
                        name="friend_description"
                        className="text-area"
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.friend_description.friend_descriptionError ? this.state.error.friend_description.msg : null}
                        onChange={(event: any) => {
                            formRef.friend_description = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'friend_description') }}
                        fullWidth={true}
                        floatingLabelText={friend}
                    /> : null}
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Media;