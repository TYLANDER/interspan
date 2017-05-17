import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, DatePicker, FlatButton} from 'material-ui';

class EmploymentHistory extends React.Component<any, any>{
    jsonData: any;
    constructor(props: any) {
        super(props);
        this.jsonData = this.props.jsonData;
        this.state = {
            employed: 1
        };
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const {companyName, city, state, nameOfSupervisor, stateJobTitle, telephone, employed, from, to, payRate, start, end, reasonForleaving, doNotContact, employeeNumber, note, reason} = this.jsonData;
        var history = [];
        for (var i = 0; i < this.state.employed; i++) {
            history.push(
                <div key={i}>
                    <h3> {i + 1} - Employment History </h3><br />
                    <TextField
                        hintText={companyName}
                        floatingLabelText={companyName}
                        fullWidth={true}
                    />
                    <TextField
                        hintText={city + ' ' + state}
                        floatingLabelText={city + ' ' + state}
                        fullWidth={true}
                    />
                    <TextField
                        hintText={nameOfSupervisor}
                        floatingLabelText={nameOfSupervisor}
                        fullWidth={true}
                    />
                    <TextField
                        hintText={stateJobTitle}
                        floatingLabelText={stateJobTitle}
                        multiLine={true}
                        fullWidth={true}
                    />
                    <TextField
                        hintText={telephone}
                        floatingLabelText={telephone}
                        multiLine={true}
                        fullWidth={true}
                    />
                    <b>{employed}</b><DatePicker floatingLabelText={from} /><DatePicker floatingLabelText={to} />
                    <b>{payRate} </b><TextField type="number" floatingLabelText={start} /><TextField type="number" floatingLabelText={end} />
                    <TextField
                        hintText={reasonForleaving}
                        floatingLabelText={reasonForleaving}
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
                <FlatButton label="Delete" primary={true} onTouchTap={() => this.state.employed === 1 ? null : this.setState({ employed: this.state.employed - 1 })} />
                <br/>
                <br/>
                <label>
                   {note}
                </label>
                <br/>
                <br/>
                <label>
                    {doNotContact}
                </label>
                <br/>

                <TextField
                        floatingLabelText={employeeNumber}
                        fullWidth={true}
                    />
                <TextField
                        floatingLabelText={reason}
                        fullWidth={true}
                        multiLine={true}
                    />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default EmploymentHistory;