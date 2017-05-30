import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, FlatButton } from 'material-ui';

class References extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            reference: 1,
            family: 1,
            selectedJson: this.props.jsonData,
            form:{
                references: [{
                    name: "",
                    relation: "",
                    telephone: ""
                }],
                friendRef:  [{
                    name: "",
                    relation: ""
                }]
            }
        };
    }
    handleNext = () => {
        this.props.handleNext(this.state.form);
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    handleTargetEvents = (arrayRef:string, ind:number, event: any) =>{
        let formRef= this.state.form;
        // let lastInd = formRef[arrayRef].length - 1;
        //if()
        formRef[arrayRef][ind][event.target.name] = event.target.value;

        // formRef.push(lastEntry);
         this.setState(formRef);
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }   
    handleReferenceAdd = ()=>{
        let formRef = this.state.form["references"];
        formRef.push({
                name: "",
                relation: "",
                telephone: ""
            }); 
        this.setState({ reference: this.state.reference + 1,formRef })
    }
    handleFriendAdd = ()=>{
        let formRef = this.state.form["friendRef"]
        formRef.push({
                name: "",
                relation: ""
            }); 
        this.setState({ family: this.state.family + 1,formRef })
    }
    render() {
        const { name, relation, telephone, friends } = this.state.selectedJson;
        var reference = [];
        var family = [];

        for (let i = 0; i < this.state.reference; i++) {
            reference.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                    name="name"
                    onBlur={this.handleTargetEvents.bind(this,"references",i)}
                />
                <TextField
                    floatingLabelText={relation}
                    name="relation"
                    onBlur={this.handleTargetEvents.bind(this,"references",i)}
                />
                <TextField
                    floatingLabelText={telephone}
                    name="telephone"
                    onBlur={this.handleTargetEvents.bind(this,"references",i)}
                />
            </div>);
        }
        for (let i = 0; i < this.state.family; i++) {
            family.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                    name="name"
                    onBlur={this.handleTargetEvents.bind(this,"references",i)}
                />
                <TextField
                    floatingLabelText={relation}
                    name="relation"
                    onBlur={this.handleTargetEvents.bind(this,"references",i)}
                />
            </div>);
        }
        return (
            <div className="transportation-container">
                <label> References </label> <br /><br />
                {reference}
                <FlatButton label="Add" primary={true} onTouchTap={this.handleReferenceAdd} />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.reference === 1 ? null : this.setState({ reference: this.state.reference - 1 })} />
                <br /><br />
                <label>{friends}</label>
                {family}
                <FlatButton label="Add" primary={true} onTouchTap={this.handleFriendAdd} />
                <FlatButton label="Delete" secondary={true} onTouchTap={() => this.state.family === 1 ? null : this.setState({ family: this.state.family - 1 })} />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default References;