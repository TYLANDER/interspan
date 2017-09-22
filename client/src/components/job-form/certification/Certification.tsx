import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { Checkbox } from 'material-ui';
import './Certification.css';
import Styling from "../jobTheme";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Certification extends React.PureComponent<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            selectedJson: this.props.jsonData,
            form: {
                agreed: false,
            },
            open: false
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
    openModal = () => {
        this.setState({
            open: true
        })
    }
    parsingLocalStorage = (value: any) => {
        let data: any = localStorage.getItem(value);
        data = JSON.parse(data);
        let user: any = localStorage.getItem('user-info');
        let job_id: any = localStorage.getItem('job-id');
        data = Object.assign({ user_id: JSON.parse(user)[0].id, job_id: parseInt(job_id) }, data);
        return data;
    }
    modalClose() {
        this.setState({ open: false })
    }
    handleClose = () => {
        // Saving Form Data
        let formData = {
            "application_form": this.parsingLocalStorage('application-form'),
            "job_location": this.parsingLocalStorage('job-location'),
            "education_form": this.parsingLocalStorage('education-form'),
            "certification_form": this.parsingLocalStorage('certification-form'),
            "employment_form": this.parsingLocalStorage('employment-form'),
            "equal_form": this.parsingLocalStorage('equal-form'),
            "media_form": this.parsingLocalStorage('media-form'),
            "personal_form": this.parsingLocalStorage('personal-form'),
            "reference_form": this.parsingLocalStorage('reference-form'),
            "skills_form": this.parsingLocalStorage('skills-form'),
            "transportation_form": this.parsingLocalStorage('transportation-form'),
        }
        this.setState({ open: false, finished: false });
        //dispatch action and send data to server
        this.props.applyJob(formData);
    };
    render() {
        const { header, content, agreed } = this.state.selectedJson;
        const actions = [
            <FlatButton
                label="Done"
                className="hovered-class"
                labelStyle={Styling.labelDialogButton}
                style={Styling.dialogButton}
                onTouchTap={this.props.handleClose}
            />,
        ];

        return (
            <div className="certification-container">
                <Dialog
                    title={<div><h3 className="title-cong">Congratulations!</h3><span className="close-icon"><img onClick={()=>this.modalClose()} src={require('../../../assets/closed.svg')}/></span></div>}
                    actions={actions}
                    modal={false}
                    className="dialog-box"
                    contentStyle={{ maxWidth: '430px' }}
                    open={this.state.open}
                    onRequestClose={this.modalClose.bind(this)}
                >
                    You're all set! We will be in touch
        </Dialog>

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
                <ActiveButtons disabled={this.state.form.agreed ? false : true} openModal={this.openModal} finished={true} handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default Certification;