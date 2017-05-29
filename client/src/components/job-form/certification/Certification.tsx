import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { Checkbox } from 'material-ui';
import './Certification.css';
class Certification extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedJson:this.props.jsonData,
            form:{
                agreed: false
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
    render() {
        const {header, content, agreed} = this.state.selectedJson;

        return (
            <div className="certification-container">
                <label>{header}</label>
                <p className="paragraph">{content}</p>
                <div style={{maxWidth: '150px'}}>
                <Checkbox
                    onCheck={(event: any,value:any) => {
                        let formRef = this.state.form;
                        formRef.agreed = value;
                        this.setState(formRef);
                        }}
                    name="agreed"
                    label={agreed}
                />
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Certification;