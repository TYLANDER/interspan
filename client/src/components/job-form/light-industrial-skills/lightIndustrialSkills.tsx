import * as React from 'react';
import './lightIndustrialSkills.css';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButtonGroup, RadioButton, TextField } from 'material-ui';

class lightIndustrialSkills extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            forklift: false,
            palletJack: false,
            selectedJson:this.props.jsonData,
            form: {
                
            }
        };
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
     handleTargetEvents = (event: any) =>{
        let formRef= this.state.form;
        formRef[event.target.name]= event.target.value;
         this.setState(formRef);
    }
    render() {
        const { questions, yes, no, noExperience, lessThanOneYear, oneToFiveYears, sixToTenYears, tenYearsOrMore, assembly, pullingOrders, productionLine, packingMaterials,
            loadingLifter, bandingMachine, upsShippingLabels, dataEntry, countingMaterial, workingFrom, gluingBoxes, stacker, qualityControl, weighingMaterial, noneOfAbove,
            lessThanTenLbs, upToTenLbs, experience, upToTwentyLbs, upToSixtyLbs, sixtyOneOrMore } = this.state.selectedJson;
        return (
            <div className="job-applicant-container">
                <label>LIGHT INDUSTRIAL  WAREHOUSE POSITIONS</label>
                <p>{questions.one}</p>
                <RadioButtonGroup name="experience" >
                    <RadioButton
                        value="No experience"
                        label={noExperience}
                    />
                    <RadioButton
                        value="Less than 1 year"
                        label={lessThanOneYear}
                    />
                    <RadioButton
                        value="1 to 5 years"
                        label={oneToFiveYears}
                    />
                    <RadioButton
                        value="6 to 10 years"
                        label={sixToTenYears}
                    />
                    <RadioButton
                        value="10 years or moreNo"
                        label={tenYearsOrMore}
                    />
                </RadioButtonGroup>

                <p>{questions.two}</p>
                <RadioButtonGroup name="experience " >
                    <RadioButton
                        value="Assembly"
                        label={assembly}
                    />
                    <RadioButton
                        value="Production Line"
                        label={productionLine}
                    />
                    <RadioButton
                        value="Packing materials"
                        label={packingMaterials}
                    />
                    <RadioButton
                        value="Loading/Heavy Lifter"
                        label={loadingLifter}
                    />
                    <RadioButton
                        value="Banding machine"
                        label={bandingMachine}
                    />
                    <RadioButton
                        value="Pulling Orders"
                        label={pullingOrders}
                    />
                    <RadioButton
                        value="UPS shipping labels"
                        label={upsShippingLabels}
                    />
                    <RadioButton
                        value="Data entry to a personal computer"
                        label={dataEntry}
                    />
                    <RadioButton
                        value="Counting materials/inventory"
                        label={countingMaterial}
                    />
                    <RadioButton
                        value="Working from a conveyor belt"
                        label={workingFrom}
                    />
                    <RadioButton
                        value="Gluing boxes"
                        label={gluingBoxes}
                    />
                    <RadioButton
                        value="Stacker"
                        label={stacker}
                    />
                    <RadioButton
                        value="Quality Control"
                        label={qualityControl}
                    />
                    <RadioButton
                        value="Weighing materials"
                        label={weighingMaterial}
                    />
                    <RadioButton
                        value="None of the above"
                        label={noneOfAbove}
                    />

                </RadioButtonGroup>
                <p>{questions.three}</p>
                <RadioButtonGroup name="capable" >
                    <RadioButton
                        value="Less than 10 lbs."
                        label={lessThanTenLbs}
                    />
                    <RadioButton
                        value="Up to 10 lbs."
                        label={upToTenLbs}
                    />
                    <RadioButton
                        value="Up to 20 lbs"
                        label={upToTwentyLbs}
                    />
                    <RadioButton
                        value="Up to 60 lbs"
                        label={upToSixtyLbs}
                    />
                    <RadioButton
                        value="61 lbs or more"
                        label={sixtyOneOrMore}
                    />
                </RadioButtonGroup>

                <br />
                <label className="inline-fields">{questions.four}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.five}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.six}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.seven}?</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.eight}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.nine}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.ten}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />
                <label className="inline-fields">{questions.eleven}</label>
                <RadioButtonGroup name="capable" className="right" >
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.twelve}</label>
                <RadioButtonGroup name="capable" className="right" onChange={(event: any) => event.target.value === 'No' ? this.setState({ forklift: false }) : this.setState({ forklift: true })}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>

                {this.state.forklift ?
                    <TextField
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={experience}
                    />
                    : null}
                <br /><br />

                <label className="inline-fields">{questions.thirteen}</label>
                <RadioButtonGroup name="capable" className="right">
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <label className="inline-fields">{questions.fourteen}</label>
                <RadioButtonGroup name="capable" className="right" onChange={(event: any) => event.target.value === 'No' ? this.setState({ palletJack: false }) : this.setState({ palletJack: true })}>
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>

                {this.state.palletJack ?
                    <TextField
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText="Enter years of experience "
                    />
                    : null}
                <br /><br />

                <label className="inline-fields">{questions.fifteen}</label>
                <RadioButtonGroup name="capable" className="right">
                    <RadioButton
                        className="inline-radio"
                        value="Yes"
                        label={yes}
                    />
                    <RadioButton
                        className="inline-radio"
                        value="No"
                        label={no}
                    />
                </RadioButtonGroup>
                <br /><br />

                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default lightIndustrialSkills;