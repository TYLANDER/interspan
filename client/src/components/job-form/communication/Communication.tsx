import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { RadioButton, RadioButtonGroup } from 'material-ui';

class Communication extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedJson:this.props.jsonData,
            form:{
                language: false,
                level_communication: ""
            }
        }
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
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
        const {fluent, yes, no, billingual, ESL, levelOfCommunication, understandSpeak, understandEnglish, understandInstructions} = this.state.selectedJson;
        return (
            <div className="job-applicant-container">
                <label className="title">{fluent}</label>
                <RadioButtonGroup name="language" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        value="yes"
                        label={yes}
                    />
                    <RadioButton
                        value="no"
                        label={no}
                    />
                </RadioButtonGroup>
                <label className="title">{levelOfCommunication}</label>
                <RadioButtonGroup name="level_communication" onChange={(event: any) => {this.handleTargetEvents(event)}}>
                    <RadioButton
                        value="Understand/Speak no English"
                        label={understandSpeak}
                    />
                    <RadioButton
                        value="Understand a few English instructions"
                        label={understandEnglish}
                    />
                    <RadioButton
                        value="Understand most English instructions"
                        label={understandInstructions}
                    />
                    <RadioButton
                        value="Learning English as ESL"
                        label={ESL}
                    />
                    <RadioButton
                        value="Bilingual English/Spanish"
                        label={billingual}
                    />
                </RadioButtonGroup>
                <br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Communication;