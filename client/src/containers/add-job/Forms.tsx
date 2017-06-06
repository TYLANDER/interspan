import * as React from 'react';
import { TextField, SelectField, MenuItem, TimePicker } from 'material-ui';
import { SubmitActionButton } from "./Submit";

class Forms extends React.Component<any, any> {
    state: any = {
        title_error: false,
        title_message: '',
        title_success: false,
        title_val: '',

        location_message: '',
        location_error: false,
        location_success: false,
        location_val: '',

        description_message: '',
        description_error: false,
        description_success: false,
        description_val: '',

        compensation_message: '',
        compensation_error: false,
        compensation_success: false,
        compensation_val: '',

        duration: 'part-time',

        toTime:"4:00PM",
        fromTime:"8:00AM"

    };
    // title Validation
    istitleAddress(value: any) {
        if (value.trim() == '') {
            this.setState({
                title_error: true,
                title_message: 'title field is required',
            });
        }
        else {
            this.setState({
                title_error: false,
                title_success: true,
                title_val: value
            });
        }
    }
    // Confirm location Validation
    islocation(value: any) {
        if (value.trim() == '') {
            this.setState({
                location_error: true,
                location_message: 'location field is required',
            });
        }
        else {
            this.setState({
                location_error: false,
                location_success: true,
                location_val: value
            });
        }
    }

    isCompensation(value: any) {
        if (value.trim() == '') {
            this.setState({
                compensation_error: true,
                compensation_message: 'compensation is required',
            });
        }
        else {
            this.setState({
                compensation_error: false,
                compensation_success: true,
                compensation_val: value
            });
        }
    }

    isDescription(value: any) {
        if (value.trim() == '') {
            this.setState({
                description_error: true,
                description_message: 'Description is required',
            });
        }
        else {
            this.setState({
                description_error: false,
                description_success: true,
                description_val: value
            });
        }
    }

    handleChange = (event: any, index: any, duration: any) => this.setState({ duration });


    validation() {
        if (this.state.title_val.trim() == '' || this.state.location_val.trim() == '' || this.state.description_val.trim() == '' || this.state.compensation_val.trim() == '') {
            if (this.state.title_val.trim() == '' && this.state.location_val.trim() == '' && this.state.description_val.trim() == '' && this.state.compensation_val.trim() == '') {
                this.setState({
                    title_error: true,
                    title_message: 'Please enter title',
                    title_success: false,

                    location_error: true,
                    location_message: 'Please enter location',
                    location_success: false,

                    description_error: true,
                    description_message: 'Please enter description',
                    description_success: false,

                    compensation_error: true,
                    compensation_message: 'Please enter compensation',
                    compensation_success: false,

                });
            }
            else if (this.state.title_val.trim() == '') {
                this.setState({
                    title_error: true,
                    title_message: 'Please enter title',
                    title_success: false,
                });
            }
            else if (this.state.location_val.trim() == '') {
                this.setState({
                    location_error: true,
                    location_message: 'Please enter location',
                    location_success: false,
                });
            }
            else if (this.state.description_val.trim() == '') {
                this.setState({
                    description_error: true,
                    description_message: 'Please enter description',
                    description_success: false,
                });
            }
            else if (this.state.compensation_val.trim() == '') {
                this.setState({
                    compensation_error: true,
                    compensation_message: 'Please enter compensation',
                    compensation_success: false,
                });
            }
        }
        else if (!this.state.title_error && !this.state.location_error && !this.state.description_error && !this.state.compensation_error) {
            this.props.clickEvent({ title: this.state.title_val, location: this.state.location_val, description: this.state.description_val, compensation: this.state.compensation_val, duration:this.state.duration , hours:this.state.toTime + "-" + this.state.fromTime})
        }

    }
    handleChangeToTime = (event:any,date:any) => {
        interface toTime{
            hour:string,
            minute: string
        }
        let options:toTime= {
            hour: "numeric",
            minute: "numeric"
        }
        this.setState({toTime:new Date(date).toLocaleString("en-US",options).replace(" ","")})
        

    }

    handleChangeFromTime = (event:any, date:any)=>{
        interface fromTime{
            hour: string,
            minute: string
        }

        let options:fromTime = {
            hour: 'numeric',
            minute: 'numeric'
        }
        this.setState({fromTime: new Date(date).toLocaleString('en-Us',options).replace(" ","")})
    }
    render() {
        return (
            <div className="fields-container">
                <label className="title">Add Job</label>
                <TextField
                    ref="title"
                    errorText={this.state.title_error ? this.state.title_message : ''}
                    fullWidth={true}
                    name="title"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.istitleAddress(event.target.value);
                    }}
                    floatingLabelStyle={this.state.title_success ? styles.floating : styles.floatingFailure}
                    floatingLabelText="Job Title"
                />

                <TextField
                    hintText=""
                    errorText={this.state.location_error ? this.state.location_message : ''}
                    fullWidth={true}
                    ref="location"
                    type="location"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.islocation(event.target.value);
                    }}
                    floatingLabelText="Job Location"
                    floatingLabelStyle={this.state.location_success ? styles.floating : styles.floatingFailure}
                />
                <SelectField
                    floatingLabelText="Duration"
                    value={this.state.duration}
                    onChange={this.handleChange}
                >
                    <MenuItem value={'part-time'} primaryText="part-time" />
                    <MenuItem value={'half-time'} primaryText="half-time" />
                    <MenuItem value={'full-time'} primaryText="full-time" />

                </SelectField>
                <br /><br />
                <label> Hours </label>
                <TimePicker
                    hintText="From"
                    defaultTime={new Date(2017, 12,12 , 8, 0, 0)}
                    onChange={this.handleChangeFromTime}
                />
                <TimePicker
                    hintText="To"
                    defaultTime={new Date(2017, 12,12 , 16, 0, 0)}
                    onChange={this.handleChangeToTime}
                />
                <TextField
                    hintText=""
                    errorText={this.state.description_error ? this.state.description_message : ''}
                    fullWidth={true}
                    ref="description"
                    type="description"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.isDescription(event.target.value);
                    }}
                    floatingLabelText="Job Description"
                    floatingLabelStyle={this.state.description_success ? styles.floating : styles.floatingFailure}
                />
                <TextField
                    hintText=""
                    errorText={this.state.compensation_error ? this.state.compensation_message : ''}
                    fullWidth={true}
                    ref="compensation"
                    type="compensation"
                    onFocus={() => console.log('FOCUS')}
                    onBlur={(event: any) => {
                        this.isCompensation(event.target.value);
                    }}
                    floatingLabelText="Compensation"
                    floatingLabelStyle={this.state.description_success ? styles.floating : styles.floatingFailure}
                />
                <SubmitActionButton clicked={this.validation.bind(this)} />
            </div>
        );
    }

}

let styles = {
    floating: {
        color: 'green'
    },
    floatingFailure: {
    }
};
export default Forms;