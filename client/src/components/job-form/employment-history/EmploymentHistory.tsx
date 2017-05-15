import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"
import { TextField, DatePicker, FlatButton} from 'material-ui';

class EmploymentHistory extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            employed: 1
        }
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render() {
        var history = [];
        for (var i = 0; i < this.state.employed; i++) {
            history.push(
                <div key={i}>
                    <h3> {i+1} - Employment History </h3><br />
                    <TextField
                        hintText="Company Name"
                        floatingLabelText="Company Name"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="City , State"
                        floatingLabelText="City, State"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="Name Of Supervisor"
                        floatingLabelText="Name Of Supervisor"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="State Job Title and Describe your Work"
                        floatingLabelText="State Job Title and Describe your Work"
                        multiLine={true}
                        fullWidth={true}
                    />
                    <TextField
                        hintText="Telephone"
                        floatingLabelText="Telephone"
                        multiLine={true}
                        fullWidth={true}
                    />
                    <b>Employed</b><DatePicker floatingLabelText="From" /><DatePicker floatingLabelText="To" />
                    <b>Pay Rate </b><TextField type="number" floatingLabelText="Start" /><TextField type="number" floatingLabelText="End" />
                    <TextField
                        hintText="Reason For Leaving"
                        floatingLabelText="Reason For Leaving"
                        multiLine={true}
                        fullWidth={true}
                    />

                </div>);
        }
        return (
            <div className="job-applicant-container">
                {history}
                <br/>
                <FlatButton label="Add" secondary={true} onTouchTap={() => this.setState({ employed: this.state.employed + 1 })} />
                <FlatButton label="Delete" primary={true} onTouchTap={() => this.state.employed < 1 ? null : this.setState({ employed: this.state.employed - 1 })} />

                <br/>
                <br/>
                <label>
                    We may contact the employers listed above unless you indicate those you do not want us to contact.
                </label>
                <br/>
                <br/>
                <label>
                    DO NOT CONTACT
                </label>
                <br/>

                <TextField
                        floatingLabelText="Employee Number(s)"
                        fullWidth={true}
                    />
                <TextField
                        floatingLabelText="Reason"
                        fullWidth={true}
                        multiLine={true}
                    />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default EmploymentHistory;