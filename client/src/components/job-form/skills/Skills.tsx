import * as React from 'react';
import './Skills.css';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField, Checkbox } from 'material-ui';
import Styling from "../jobTheme";

class Skills extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            forklift: false,
            palletJack: false,
            selectedJson: this.props.jsonData,
            form: {
                industrial_experience: "",
                lifting: "",
                lift_weight: "",
                stand_hours: "",
                walking_job: "",
                stand_bend: false,
                basic_maths: "",
                tape_mesurement: false,
                use_calculator: false,
                use_pc: "",
                operated_forklift: "",
                certified_forklift: "",
                operated_pallet_jack: "",
                steel_shoes: "",
                assembly: false,
                production_line: false,
                production_materials: false,
                heavy_lift: false,
                banding_machine: false,
                pulling_order: false,
                ups_shipping: false,
                data_entry: false,
                counting_material: false,
                working_conveyor: false,
                gluing_boxes: false,
                stacker: false,
                quality_control: false,
                weight_materials: false,
                none_of_above: false
            },
            error: {
                industrial_experience: {
                    industrial_experienceError: false, msg: ""
                },
                lifting: {
                    liftingError: false, msg: ""
                },
                stand_hours: {
                    stand_hoursError: false, msg: ""
                },
                lift_weight: {
                    lift_weightError: false, msg: ""
                },
                walking_job: {
                    walking_jobError: false, msg: ""
                },
                stand_bend: {
                    stand_bendError: false, msg: ""
                },
                basic_maths: {
                    basic_mathsError: false, msg: ""
                },
                tape_mesurement: {
                    tape_mesurementError: false, msg: ""
                },
                use_calculator: {
                    use_calculatorError: false, msg: ""
                },
                use_pc: {
                    use_pcError: false, msg: ""
                },
                operated_forklift: {
                    operated_forkliftError: false, msg: ""
                },
                certified_forklift: {
                    certified_forkliftError: false, msg: ""
                },
                operated_pallet_jack: {
                    operated_pallet_jackError: false, msg: ""
                },
                steel_shoes: {
                    steel_shoesError: false, msg: ""
                },
                // experience:{
                //     experienceError:false , msg :""
                // }
            }
        };
    }

    setError = (event: any) => {
        let current = this.state.error[event];
        current[event + "Error"] = true;
        current["msg"] = event + " field is required";
        this.setState(current)
    }

    //Getting skills form data from local storage
    componentWillMount() {
        if (localStorage.getItem('skills-form') !== null) {
            let data: any = localStorage.getItem('skills-form');
            data = JSON.parse(data)
            this.setState({
                form: data
            })
        }
    }

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        if (this.state.form.industrial_experience && this.state.form.steel_shoes && this.state.form.operated_pallet_jack && this.state.form.certified_forklift && this.state.form.operated_forklift && this.state.form.use_pc && this.state.form.use_calculator && this.state.form.tape_mesurement && this.state.form.basic_maths && this.state.form.stand_bend && this.state.form.walking_job && this.state.form.lift_weight && this.state.form.lifting && this.state.form.stand_hours) {
            this.props.handleNext("skills-form", this.state.form);
        }
        else {
            if (!this.state.form.industrial_experience) {
                this.setError('industrial_experience');
            }
            if (!this.state.form.lifting) {
                this.setError('lifting');
            }
            if (!this.state.form.stand_hours) {
                this.setError('stand_hours');
            }
            if (!this.state.form.lift_weight) {
                this.setError('lift_weight');
            }
            if (!this.state.form.walking_job) {
                this.setError('walking_job')
            }
            if (!this.state.form.stand_bend) {
                this.setError('stand_bend')
            }
            if (!this.state.form.basic_maths) {
                this.setError('basic_maths')
            }
            if (!this.state.form.tape_mesurement) {
                this.setError('tape_mesurement')
            }
            if (!this.state.form.use_calculator) {
                this.setError('use_calculator')
            }
            if (!this.state.form.use_pc) {
                this.setError('use_pc')
            }
            if (!this.state.form.operated_forklift) {
                this.setError('operated_forklift')
            }
            if (!this.state.form.certified_forklift) {
                this.setError('certified_forklift')
            }
            if (!this.state.form.operated_pallet_jack) {
                this.setError('operated_pallet_jack')
            }
            if (!this.state.form.steel_shoes) {
                this.setError('steel_shoes')
            }
            // if(!this.state.form.assembly || !this.state.form.pulling_order || !this.state.form.production_line || !this.state.form.production_materials || !this.state.form.loadingLifter || !this.state.form.banding_machine || !this.state.form.ups_shipping || !this.state.form.data_entry || !this.state.form.counting_material || !this.state.form.working_conveyor || !this.state.form.gluing_boxes || !this.state.form.stacker || !this.state.form.quality_control || !this.state.form.weight_materials || !this.state.form.none_of_above)
            // {
            //     this.setError('experience')
            // }
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

    //handle multiple skills list
    handleTargetSkills = (event: any, value: any) => {
        let formRef = this.state.form;
        formRef[event.target.name] = value;
        this.setState({ formRef });
    }
    render() {
        const { questions, yes, no, noExperience, lessThanOneYear, oneToFiveYears, sixToTenYears, tenYearsOrMore, assembly, pullingOrders, productionLine, packingMaterials,
            loadingLifter, bandingMachine, upsShippingLabels, dataEntry, countingMaterial, workingFrom, gluingBoxes, stacker, qualityControl, weighingMaterial, noneOfAbove,
            lessThanTenLbs, upToTenLbs, experience, upToTwentyLbs, upToSixtyLbs, sixtyOneOrMore } = this.state.selectedJson;
        let formRef = this.state.form;
        return (
            <div className="skills-applicant-container">
                <p style={this.state.error.industrial_experience.industrial_experienceError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{questions.one}</p>
                <RadioButtonGroup style={Styling.radioButtonGroupStyling} defaultSelected={formRef.industrial_experience} name="industrial_experience" onChange={(event: any) => { this.validationCheck(event, 'industrial_experience'); this.handleTargetEvents(event); }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="No experience"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={noExperience}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Less than 1 year"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={lessThanOneYear}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="1 to 5 years"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={oneToFiveYears}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="6 to 10 years"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={sixToTenYears}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="10 years or moreNo"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={tenYearsOrMore}
                    />
                </RadioButtonGroup>
                <p className="title">{questions.two}</p>
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={assembly}
                    name="assembly"
                    checked={this.state.form.assembly}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    iconStyle={Styling.iconStyle}
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    label={pullingOrders}
                    name="pulling_order"
                    checked={this.state.form.pulling_order}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={productionLine}
                    name="production_line"
                    checked={this.state.form.production_line}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={packingMaterials}
                    name="production_materials"
                    checked={this.state.form.production_materials}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={loadingLifter}
                    name="heavy_lift"
                    checked={this.state.form.heavy_lift}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={bandingMachine}
                    name="banding_machine"
                    checked={this.state.form.banding_machine}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={upsShippingLabels}
                    name="ups_shipping"
                    checked={this.state.form.ups_shipping}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={dataEntry}
                    name="data_entry"
                    checked={this.state.form.data_entry}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={countingMaterial}
                    name="counting_material"
                    checked={this.state.form.counting_material}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={workingFrom}
                    name="working_conveyor"
                    checked={this.state.form.working_conveyor}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={gluingBoxes}
                    name="gluing_boxes"
                    checked={this.state.form.gluing_boxes}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={stacker}
                    name="stacker"
                    checked={this.state.form.stacker}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={qualityControl}
                    name="quality_control"
                    checked={this.state.form.quality_control}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={weighingMaterial}
                    name="weight_materials"
                    checked={this.state.form.weight_materials}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                    checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                    iconStyle={Styling.iconStyle}
                    label={noneOfAbove}
                    name="none_of_above"
                    checked={this.state.form.none_of_above}
                    onCheck={this.handleTargetSkills}
                />
                <p style={this.state.error.lifting.liftingError ? Styling.radioButtonError : Styling.radioButtonLabel} className="title">{questions.three}</p>
                <RadioButtonGroup name="lifting" defaultSelected={formRef.lifting} onChange={(event: any) => { this.handleTargetEvents(event); this.validationCheck(event, 'lifting') }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Less than 10 lbs."
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={lessThanTenLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 10 lbs."
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={upToTenLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 20 lbs"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={upToTwentyLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 60 lbs"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={upToSixtyLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="61 lbs or more"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={sixtyOneOrMore}
                    />
                </RadioButtonGroup>
                <br />
                <label style={this.state.error.lift_weight.lift_weightError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.four}</label>
                <RadioButtonGroup name="lift_weight" defaultSelected={formRef.lift_weight} className="right" onChange={(event: any) => { this.validationCheck(event, 'lift_weight'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.stand_hours.stand_hoursError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.five}</label>
                <RadioButtonGroup name="stand_hours" defaultSelected={formRef.stand_hours} className="right" onChange={(event: any) => { this.validationCheck(event, 'stand_hours'); this.handleTargetEvents(event); }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.walking_job.walking_jobError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.six}</label>
                <RadioButtonGroup name="walking_job" className="right" defaultSelected={formRef.walking_job} onChange={(event: any) => { this.validationCheck(event, 'walking_job'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.stand_bend.stand_bendError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.seven}?</label>
                <RadioButtonGroup name="stand_bend" className="right" defaultSelected={formRef.stand_bend} onChange={(event: any) => { this.validationCheck(event, 'stand_bend'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.basic_maths.basic_mathsError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.eight}</label>
                <RadioButtonGroup name="basic_maths" className="right" defaultSelected={formRef.basic_maths} onChange={(event: any) => { this.validationCheck(event, 'basic_maths'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.tape_mesurement.tape_mesurementError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.nine}</label>
                <RadioButtonGroup name="tape_mesurement" className="right" defaultSelected={formRef.tape_mesurement} onChange={(event: any) => { this.validationCheck(event, 'tape_mesurement'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.use_calculator.use_calculatorError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.ten}</label>
                <RadioButtonGroup name="use_calculator" className="right" defaultSelected={formRef.use_calculator} onChange={(event: any) => { this.validationCheck(event, 'use_calculator'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.use_pc.use_pcError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.eleven}</label>
                <RadioButtonGroup name="use_pc" className="right" defaultSelected={formRef.use_pc} onChange={(event: any) => { this.validationCheck(event, 'use_pc'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.operated_forklift.operated_forkliftError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.twelve}</label>
                <RadioButtonGroup name="operated_forklift" className="right" defaultSelected={formRef.operated_forklift !== "false" ? "true" : "false"} onChange={(event: any) => { this.validationCheck(event, 'operated_forklift'); this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ forklift: false }) : this.setState({ forklift: true }) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                {this.state.forklift || formRef.operated_forklift !== "false" ?
                    <TextField
                        hintText=""
                        value={formRef.operated_forklift}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.operated_forklift.operated_forkliftError ? this.state.error.operated_forklift.msg : null}
                        onChange={(event: any) => {
                            this.validationCheck(event, 'operated_forklift')
                            formRef.operated_forklift = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={(event: any) => { this.validationCheck(event, 'operated_forklift'); this.handleTargetEvents(event) }}
                        fullWidth={true}
                        floatingLabelText={experience}
                        name="operated_forklift"
                    />
                    : null}
                <br /><br />
                <label style={this.state.error.certified_forklift.certified_forkliftError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.thirteen}</label>
                <RadioButtonGroup name="certified_forklift" className="right" defaultSelected={formRef.certified_forklift} onChange={(event: any) => { this.validationCheck(event, 'certified_forklift'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        label={no}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label style={this.state.error.operated_pallet_jack.operated_pallet_jackError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.fourteen}</label>
                <RadioButtonGroup name="operated_pallet_jack" className="right" defaultSelected={formRef.operated_pallet_jack ? 'false' : 'true'} onChange={(event: any) => { this.validationCheck(event, 'operated_pallet_jack'); this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true }) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={no}
                    />
                </RadioButtonGroup>
                {this.state.palletJack || formRef.operated_pallet_jack !== "false" ?
                    <TextField
                        hintText=""
                        onBlur={(event: any) => { this.validationCheck(event, 'operated_pallet_jack'); this.handleTargetEvents(event) }}
                        fullWidth={true}
                        errorStyle={Styling.errorMsg}
                        errorText={this.state.error.operated_pallet_jack.operated_pallet_jackError ? this.state.error.operated_pallet_jack.msg : null}
                        onChange={(event: any) => {
                            this.validationCheck(event, 'operated_pallet_jack')
                            formRef.operated_pallet_jack = event.target.value
                            this.setState(formRef);
                        }
                        }
                        value={formRef.operated_pallet_jack}
                        floatingLabelText="Enter years of experience"
                        name="operated_pallet_jack"
                    />
                    : null}
                <br /><br />
                <label style={this.state.error.steel_shoes.steel_shoesError ? Styling.radioButtonError : Styling.radioButtonLabel} className="inline-fields">{questions.fifteen}</label>
                <RadioButtonGroup name="steel_shoes" defaultSelected={formRef.steel_shoes} className="right" onChange={(event: any) => { this.validationCheck(event, 'steel_shoes'); this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        uncheckedIcon={<img src={require('../../../assets/radio-1.svg')} />}
                        checkedIcon={<img src={require('../../../assets/radio.svg')} />}
                        iconStyle={Styling.iconStyle}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Skills;