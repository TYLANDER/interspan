import * as React from 'react';
import './Skills.css';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField, Checkbox } from 'material-ui';
import Styling from "../jobTheme";
import Check from "material-ui/svg-icons/av/stop";


class Skills extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            forklift: false,
            palletJack: false,
            selectedJson: this.props.jsonData,
            form: {
                lifting: "",
                lift_weight: false,
                stand_hours: false,
                walking_job: false,
                stand_bend: false,
                basic_maths: false,
                tape_mesurement: false,
                use_calculator: false,
                use_pc: false,
                operated_forklift: false,
                certified_forklift: false,
                operated_pallet_jack: false,
                steel_shoes: false,
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
            }
        };
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
        this.props.handleNext("skills-form", this.state.form);
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
                <p className="title">{questions.one}</p>
                <RadioButtonGroup style={Styling.radioButtonGroupStyling} defaultSelected={formRef.industrial_experience} name="industrial_experience" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="No experience"
                        label={noExperience}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Less than 1 year"
                        label={lessThanOneYear}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="1 to 5 years"
                        label={oneToFiveYears}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="6 to 10 years"
                        label={sixToTenYears}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="10 years or moreNo"
                        label={tenYearsOrMore}
                    />
                </RadioButtonGroup>
                <p className="title">{questions.two}</p>
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={assembly}
                    name="assembly"
                    checked={this.state.form.assembly}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={pullingOrders}
                    name="pulling_order"
                    checked={this.state.form.pulling_order}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={productionLine}
                    name="production_line"
                    checked={this.state.form.production_line}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={packingMaterials}
                    name="production_materials"
                    checked={this.state.form.production_materials}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={loadingLifter}
                    name="heavy_lift"
                    checked={this.state.form.heavy_lift}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={bandingMachine}
                    name="banding_machine"
                    checked={this.state.form.banding_machine}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={upsShippingLabels}
                    name="ups_shipping"
                    checked={this.state.form.ups_shipping}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={dataEntry}
                    name="data_entry"
                    checked={this.state.form.data_entry}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={countingMaterial}
                    name="counting_material"
                    checked={this.state.form.counting_material}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={workingFrom}
                    name="working_conveyor"
                    checked={this.state.form.working_conveyor}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={gluingBoxes}
                    name="gluing_boxes"
                    checked={this.state.form.gluing_boxes}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={stacker}
                    name="stacker"
                    checked={this.state.form.stacker}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={qualityControl}
                    name="quality_control"
                    checked={this.state.form.quality_control}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={weighingMaterial}
                    name="weight_materials"
                    checked={this.state.form.weight_materials}
                    onCheck={this.handleTargetSkills}
                />
                <Checkbox
                    checkedIcon={<Check />}
                    iconStyle={Styling.iconStyle}
                    label={noneOfAbove}
                    name="none_of_above"
                    checked={this.state.form.none_of_above}
                    onCheck={this.handleTargetSkills}
                />
                <p className="title">{questions.three}</p>
                <RadioButtonGroup name="lifting" defaultSelected={formRef.lifting} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Less than 10 lbs."
                        label={lessThanTenLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 10 lbs."
                        label={upToTenLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 20 lbs"
                        label={upToTwentyLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="Up to 60 lbs"
                        label={upToSixtyLbs}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        value="61 lbs or more"
                        label={sixtyOneOrMore}
                    />
                </RadioButtonGroup>
                <br />
                <label className="inline-fields">{questions.four}</label>
                <RadioButtonGroup name="lift_weight" defaultSelected={formRef.lift_weight} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.five}</label>
                <RadioButtonGroup name="stand_hours" defaultSelected={formRef.stand_hours} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.six}</label>
                <RadioButtonGroup name="walking_job" className="right" defaultSelected={formRef.walking_job} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.seven}?</label>
                <RadioButtonGroup name="stand_bend" className="right" defaultSelected={formRef.stand_bend} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.eight}</label>
                <RadioButtonGroup name="basic_maths" className="right" defaultSelected={formRef.basic_maths} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.nine}</label>
                <RadioButtonGroup name="tape_mesurement" className="right" defaultSelected={formRef.tape_mesurement} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.ten}</label>
                <RadioButtonGroup name="use_calculator" className="right" defaultSelected={formRef.use_calculator} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="false"
                        label={no}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.eleven}</label>
                <RadioButtonGroup name="use_pc" className="right" defaultSelected={formRef.use_pc} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        iconStyle={Styling.iconStyle}
                        className="inline-radio"
                        value="true"
                        label={yes}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.twelve}</label>
                <RadioButtonGroup name="operated_forklift" className="right" defaultSelected={formRef.operated_forklift !== "false" ? "true" : "false"} onChange={(event: any) => { this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ forklift: false }) : this.setState({ forklift: true }) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                {this.state.forklift || formRef.operated_forklift !== "false" ?
                    <TextField
                        hintText=""
                        value={formRef.operated_forklift}
                        onChange={(event: any) => {
                            formRef.operated_forklift = event.target.value
                            this.setState(formRef);
                        }
                        }
                        onBlur={(event: any) => { this.handleTargetEvents(event) }}
                        fullWidth={true}
                        floatingLabelText={experience}
                        name="operated_forklift"
                    />
                    : null}
                <br /><br />
                <label className="inline-fields">{questions.thirteen}</label>
                <RadioButtonGroup name="certified_forklift" className="right" defaultSelected={formRef.certified_forklift !== "false" ? "true" : "false"} onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        label={yes}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.fourteen}</label>
                <RadioButtonGroup name="operated_pallet_jack" className="right" defaultSelected={formRef.operated_pallet_jack !== "true" ? "false" : "true"} onChange={(event: any) => { this.handleTargetEvents(event); event.target.value === 'false' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true }) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        iconStyle={Styling.iconStyle}
                        label={yes}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        iconStyle={Styling.iconStyle}
                        label={no}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                {this.state.palletJack || formRef.operated_pallet_jack !== "true" ?
                    <TextField
                        hintText=""
                        onBlur={(event: any) => { this.handleTargetEvents(event) }}
                        fullWidth={true}
                        onChange={(event: any) => {
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
                <label className="inline-fields">{questions.fifteen}</label>
                <RadioButtonGroup name="steel_shoes" defaultSelected={formRef.steel_shoes} className="right" onChange={(event: any) => { this.handleTargetEvents(event) }}>
                    <RadioButton
                        className="inline-radio"
                        value="true"
                        iconStyle={Styling.iconStyle}
                        label={yes}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="false"
                        label={no}
                        iconStyle={Styling.iconStyle}
                        labelStyle={{ color: "gray", fontWeight: 500 }}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Skills;