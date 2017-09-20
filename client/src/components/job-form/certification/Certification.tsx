import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { Checkbox } from 'material-ui';
import './Certification.css';
import Styling from "../jobTheme";

class Certification extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            selectedJson: this.props.jsonData,
            form: {
                agreed: false
            }
        }
    }

    //set state according to selected lanugage
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //handling next state
    handleNext = () => {
        this.props.handleNext('certification-form', this.state.form);
    }

    //handling previous state
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }

    render() {
        const { header, content, agreed } = this.state.selectedJson;
        return (
            <div className="certification-container">
                <label className="title">{header}</label>
                <p className="paragraph">{content}</p>
                <div style={{ maxWidth: '150px' }}>
                    <Checkbox
                        onCheck={(event: any, value: any) => {
                            let formRef = this.state.form;
                            formRef.agreed = value;
                            this.setState(formRef);
                        }}
                        iconStyle={Styling.iconStyle}
                        uncheckedIcon={<img src={require('../../../assets/check.svg')} />}
                        checkedIcon={<img src={require('../../../assets/check-1.svg')} />}
                        name="agreed"
                        label={agreed}
                    />
                </div>
                <br />
                <br />
                <ActiveButtons disabled={this.state.form.agreed ? false : true} finished={true} handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Certification;