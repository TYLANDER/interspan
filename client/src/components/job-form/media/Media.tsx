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

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //Handling next state
    handleNext = () => {
        let formRef = this.state.form;
        switch (this.state.form.about_interspan) {
            case "Referred from job site":
                formRef.employee_description = "";
                formRef.friend_description = "";
                this.setState(formRef);
                break;
            case "Referred by InterSpan, Inc. employee":
                formRef.job_description = "";
                formRef.friend_description = "";
                this.setState(formRef);
                break;
            case "Referred by friend":
                formRef.employee_description = "";
                formRef.job_description = "";
                this.setState(formRef);
                break;
            default:
                console.log("not valid");
        }
        this.props.handleNext('media-form', this.state.form);
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
                <p className="title">{questions}</p>
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
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Richmond Times Newspaper"
                        label={richMond}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Job search on Internet"
                        label={jobSearch}
                        iconStyle={Styling.iconStyle}
                    />

                    <RadioButton
                        value="Referred from job site"
                        iconStyle={Styling.iconStyle}
                        label={referredJob}
                    />
                    <RadioButton
                        value="Referred by InterSpan, Inc. employee"
                        label={referredInterSpan}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        value="Referred by friend"
                        label={referredFriend}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                {this.state.position || this.state.form.about_interspan === "Referred from job site" ?
                    <TextField
                        name="job_description"
                        hintText=""
                        className="text-area"
                        value={formRef.job_description}
                        onBlur={this.handleTargetEvents}
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
                        name="employee_description"
                        className="text-area"
                        onChange={(event: any) => {
                            formRef.employee_description = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={this.handleTargetEvents}
                        fullWidth={true}
                        floatingLabelText={name}
                    /> : null}
                {this.state.friend || this.state.form.about_interspan === "Referred by friend" ?
                    <TextField
                        hintText=""
                        value={formRef.friend_description}
                        name="friend_description"
                        className="text-area"
                        onChange={(event: any) => {
                            formRef.friend_description = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={this.handleTargetEvents}
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