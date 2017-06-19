import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, FlatButton } from 'material-ui';

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
            }
        };
    }

    //Getting reference form data from local storage
    componentWillMount() {
        if (localStorage.getItem('reference-form') !== null) {
            let data: any = localStorage.getItem('reference-form');
            data = JSON.parse(data)
            this.setState({
                form: data,
                family: data.friendRef.length,
                reference: data.references.length
            })
        }
    }

    //Handling next state
    handleNext = () => {
        this.props.handleNext("reference-form", this.state.form);
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
        if (action === "add") {
            formRef.push({
                name: "",
                relation: "",
                telephone: ""
            });
            this.setState({ reference: this.state.reference + 1, formRef })
        }
        else {
            formRef.pop();
            this.setState({ reference: this.state.reference - 1, formRef })
        }
    }

    //Making and managing multiple friend references list
    handleFriend = (action: string) => {
        let formRef = this.state.form["friendRef"];
        if (action === "add") {
            formRef.push({
                name: "",
                relation: ""
            });
            this.setState({ family: this.state.family + 1, formRef })
        }
        else {
            formRef.pop();
            this.setState({ family: this.state.family - 1, formRef })
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
                    value={this.state.form.references[i].name}
                    name="name"
                    style={{ marginRight: "50px" }}
                    onChange={this.handleText.bind(this, "references", i)}
                    onBlur={this.handleTargetEvents.bind(this, "references", i)}
                />
                <TextField
                    floatingLabelText={relation}
                    name="relation"
                    value={this.state.form.references[i].relation}
                    style={{ marginRight: "50px" }}
                    onChange={this.handleText.bind(this, "references", i)}
                    onBlur={this.handleTargetEvents.bind(this, "references", i)}
                />
                <TextField
                    floatingLabelText={telephone}
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
                    style={{ marginRight: "50px" }}
                    value={this.state.form.friendRef[i].name}
                    onChange={this.handleText.bind(this, "friendRef", i)}
                    onBlur={this.handleTargetEvents.bind(this, "friendRef", i)}
                />
                <TextField
                    floatingLabelText={relation}
                    name="relation"
                    onChange={this.handleText.bind(this, "friendRef", i)}
                    value={this.state.form.friendRef[i].relation}
                    onBlur={this.handleTargetEvents.bind(this, "friendRef", i)}
                />
            </div>);
        }
        return (
            <div className="transportation-container">
                <label className="title"> References </label> <br />
                {reference}
                <FlatButton label="Add" primary={true} onClick={() => this.handleReference("add")} />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.reference === 1 ? null : this.handleReference("delete")} />
                <br /><br />
                <label className="title">{friends}</label>
                {family}
                <FlatButton label="Add" primary={true} onClick={() => this.handleFriend("add")} />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.family === 1 ? null : this.handleFriend("delete")} />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default References;