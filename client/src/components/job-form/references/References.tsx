import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, FlatButton } from 'material-ui';
import "./References.css";
import Styling from "../jobTheme";

class References extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        //state of component
        this.state = {
            reference: 1,
            family: 1,
            selectedJson: this.props.jsonData,
            form: {
                references: [{
                    name: "",
                    relation: "",
                    telephone: ""
                }],
                friendRef: [{
                    name: "",
                    relation: ""
                }]
            },
            error: {
                references: [{
                    name: { nameError: false, msg: "" },
                    relation: { relationError: false, msg: "" },
                    telephone: { telephoneError: false, msg: "" }
                }],
                friendRef: [{
                    name: { nameError: false, msg: "" },
                    relation: { relationError: false, msg: "" },
                }]

            }
        };
    }

    //Getting reference form data from local storage
    componentWillMount() {
        if (localStorage.getItem('reference-form') !== null) {
            let data: any = localStorage.getItem('reference-form');
            data = JSON.parse(data);
            let dataArray = this.state.error;
            let errorHistory: any = [];
            let friendHistory: any = [];
            data.references.map((arr: any) => {
                errorHistory.push({
                    name: { nameError: false, msg: "" },
                    relation: { relationError: false, msg: "" },
                    telephone: { telephoneError: false, msg: "" }
                })
            });
            data.friendRef.map((arr: any) => {
                friendHistory.push({
                    name: { nameError: false, msg: "" },
                    relation: { relationError: false, msg: "" },
                })
            })
            dataArray.references = errorHistory;
            dataArray.friendRef = friendHistory;
            this.setState({
                form: data,
                family: data.friendRef.length,
                reference: data.references.length,
                dataArray
            })
        }
    }
    setError = (event: any, name: any, index: any) => {
        let current = this.state.error[event][index][name];
        current[name + "Error"] = true;
        current["msg"] = name + " field is required";
        console.log(current);
        this.setState(current)
    }

    referenceValidationCheck = (event: any, name: any, index: any) => {
        console.log()
    }
    //Handling next state
    handleNext = () => {
        var relationDone = false;
        var friendDone = false;

        this.state.form.references.map((arr: any, index: any) => {
            if (arr.name && arr.relation && arr.telephone) {
                relationDone = true;
            }
            else {
                if (!arr.name) {
                    this.setError('references', 'name', index);
                }
                if (!arr.relation) {
                    this.setError('references', 'relation', index);
                }
                if (!arr.telephone) {
                    this.setError('references', 'telephone', index);
                }
            }
        })
        this.state.form.friendRef.map((arr: any, index: any) => {
            if (arr.name && arr.relation) {
                friendDone = true;
            }
            else {
                if (!arr.name) {
                    this.setError('friendRef', 'name', index);
                }
                if (!arr.relation) {
                    this.setError('friendRef', 'relation', index);
                }
            }
        })
        if (relationDone && friendDone) {
            this.props.handleNext("reference-form", this.state.form);
        }

        // if (this.state.form.street_address) {
        // }
        // else {
        //     if (!this.state.form.street_address) {
        //         this.setError('address')
        //     }
        // }
    }

    //Handling previous state
    handlePrev = () => {
        this.props.handlePrev();
    }

    //Handling input form state of the component
    handleTargetEvents = (arrayRef: string, ind: number, event?: any) => {
        let formRef = this.state.form;
        formRef[arrayRef][ind][event.target.name] = event.target.value;
        this.setState(formRef);
    }

    //Selecting json according to selected lanugage 
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }

    //Making and managing multiple references lists
    handleReference = (action: string) => {
        let formRef = this.state.form["references"];
        let formRefError = this.state.error['references'];
        if (action === "add") {
            formRef.push({
                name: "",
                relation: "",
                telephone: ""
            });
            formRefError.push({
                name: { nameError: false, msg: "" },
                relation: { relationError: false, msg: "" },
                telephone: { telephoneError: false, msg: "" }
            })
            this.setState({ reference: this.state.reference + 1, formRef, formRefError })
        }
        else {
            formRef.pop();
            formRefError.pop();
            this.setState({ reference: this.state.reference - 1, formRef, formRefError })
        }
    }

    //Making and managing multiple friend references list
    handleFriend = (action: string) => {
        let formRef = this.state.form["friendRef"];
        let formRefError = this.state.error['friendRef'];

        if (action === "add") {
            formRef.push({
                name: "",
                relation: ""
            });
            formRefError.push({
                name: { nameError: false, msg: "" },
                relation: { relationError: false, msg: "" },
            })
            this.setState({ family: this.state.family + 1, formRef, formRefError })
        }
        else {
            formRef.pop();
            formRefError.pop();
            this.setState({ family: this.state.family - 1, formRef, formRefError })
        }
    }

    //Handling input state of component
    handleText = (arrRef: string, ind: number, event?: any) => {
        let formRef = this.state.form;
        formRef[arrRef][ind][event.target.name] = event.target.value;
        this.setState(formRef)
    }

    render() {
        const { name, relation, telephone, friends } = this.state.selectedJson;
        var reference = [];
        var family = [];
        for (let i = 0; i < this.state.reference; i++) {
            reference.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                    fullWidth
                    className="text-area"
                    value={this.state.form.references[i].name}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.references[i].name.nameError ? this.state.error.references[i].name.msg : null}
                    name="name"
                    style={{ marginRight: "50px" }}
                    onChange={this.handleText.bind(this, "references", i)}
                    onBlur={this.handleTargetEvents.bind(this, "references", i)}
                />
                <TextField
                    fullWidth
                    className="text-area"
                    floatingLabelText={relation}
                    name="relation"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.references[i].relation.relationError ? this.state.error.references[i].relation.msg : null}
                    value={this.state.form.references[i].relation}
                    style={{ marginRight: "50px" }}
                    onChange={this.handleText.bind(this, "references", i)}
                    onBlur={this.handleTargetEvents.bind(this, "references", i)}
                />
                <TextField
                    fullWidth
                    className="text-area"
                    floatingLabelText={telephone}
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.references[i].telephone.telephoneError ? this.state.error.references[i].telephone.msg : null}
                    name="telephone"
                    value={this.state.form.references[i].telephone}
                    onChange={this.handleText.bind(this, "references", i)}
                    onBlur={this.handleTargetEvents.bind(this, "references", i)}
                />
            </div>);
        }
        for (let i = 0; i < this.state.family; i++) {
            family.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                    name="name"
                    fullWidth
                    className="text-area"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.friendRef[i].name.nameError ? this.state.error.friendRef[i].name.msg : null}
                    style={{ marginRight: "50px" }}
                    value={this.state.form.friendRef[i].name}
                    onChange={this.handleText.bind(this, "friendRef", i)}
                    onBlur={this.handleTargetEvents.bind(this, "friendRef", i)}
                />
                <TextField
                    floatingLabelText={relation}
                    name="relation"
                    fullWidth
                    className="text-area"
                    errorStyle={Styling.errorMsg}
                    errorText={this.state.error.friendRef[i].relation.relationError ? this.state.error.friendRef[i].relation.msg : null}
                    onChange={this.handleText.bind(this, "friendRef", i)}
                    value={this.state.form.friendRef[i].relation}
                    onBlur={this.handleTargetEvents.bind(this, "friendRef", i)}
                />
            </div>);
        }
        return (
            <div className="transportation-container">
                <p className="title"> References </p>
                {reference}<br />
                <div className="button-group">
                    <FlatButton className="hovered-class" style={Styling.addButton} labelStyle={Styling.addButtonLabel} label="Add" onClick={() => this.handleReference("add")} />
                    <FlatButton className="hovered-class" style={Styling.deleteButton} labelStyle={Styling.addButtonLabel} label="Remove" onTouchTap={() => this.state.reference === 1 ? null : this.handleReference("delete")} />
                </div>
                <br /><br /><br />
                <p className="title">{friends}</p>
                {family}<br />
                <div className="button-group">
                    <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.addButton} label="Add" onClick={() => this.handleFriend("add")} />
                    <FlatButton className="hovered-class" labelStyle={Styling.addButtonLabel} style={Styling.deleteButton} label="Remove" onTouchTap={() => this.state.family === 1 ? null : this.handleFriend("delete")} />
                </div>
                <br /><br /><br /><br />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default References;