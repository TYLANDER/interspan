import * as React from 'react';
import { TextField, SelectField, MenuItem, TimePicker } from 'material-ui';
import { SubmitActionButton } from "./Submit";

class Forms extends React.Component<any, any> {
    state: any = {
        title_error: false,
        title_message: '',
        title_success: false,
        title_val: '',
        value: 1,

        location_message: '',
        location_error: false,
        location_success: false,
        location_val: '',

        description_message: '',
        description_error: false,
        description_success: false,
        description_val: ''

    };
    // title Validation
    istitleAddress(value: any) {
        if (value.trim() == '') {
            this.setState({
                title_error: true,
                title_message: 'title field is required',
                title_success: false
            });
            return;
        }
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValidtitle = pattern.test(value);
        if (!isValidtitle) {
            this.setState({
                title_error: true,
                title_message: 'Please enter valid title',
                title_success: false
            });
            return;
        }
        this.setState({
            title_error: false,
            title_success: true,
            title_val: value.toLowerCase()
        });
        // this.props.collection({ title: value });
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

    handleChange = (event: any, index: any, value: any) => this.setState({ value });


    validation() {
        if (this.state.title_val.trim() == '' || this.state.location_val.trim() == '' || this.state.description_val.trim()== '') {
            if (this.state.title_val.trim() == '' && this.state.location_val.trim() == '' && this.state.description_val.trim()== '') {
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
        }
        else if (!this.state.title_error && !this.state.location_error && !this.state.description_error) {
            this.props.clickEvent({ title: this.state.title_val, location: this.state.location_val , description: this.state.description_val })
        }

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
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="part-time" />
                    <MenuItem value={2} primaryText="half-time" />
                    <MenuItem value={3} primaryText="full-time" />

                </SelectField>
                <br /><br />
                <label> Hours </label>
                <TimePicker
                    hintText="From"
                />
                <TimePicker
                    hintText="To"
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