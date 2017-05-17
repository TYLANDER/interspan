import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { Checkbox } from 'material-ui';
import './Certification.css';
class Certification extends React.Component<any, any>{
    jsonData: any;
    constructor(props: any) {
        super(props);
        this.jsonData = this.props.jsonData;
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    render() {
        const {header, content, agreed} = this.jsonData;

        return (
            <div className="certification-container">
                <label>{header}</label>
                <p className="paragraph">{content}</p>
                <div style={{maxWidth: '150px'}}>
                <Checkbox
                    label={agreed}
                />
                </div>
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Certification;