import * as React from 'react';
import ActiveButtons from '../active-buttons/ActiveButtons';
import { TextField, FlatButton } from 'material-ui';

class References extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            reference: 1,
            family: 1,
            selectedJson: this.props.jsonData
        };
    }
    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 });
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 });
    }
    componentWillReceiveProps(nextProp: any) {
        this.setState({
            selectedJson: nextProp.jsonData
        })
    }   
    render() {
        const { name, relation, telephone, friends } = this.state.selectedJson;
        var reference = [];
        var family = [];

        for (let i = 0; i < this.state.reference; i++) {
            reference.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                />
                <TextField
                    floatingLabelText={relation}
                />
                <TextField
                    floatingLabelText={telephone}
                />
            </div>);
        }
        for (let i = 0; i < this.state.family; i++) {
            family.push(<div key={i}>
                <TextField
                    floatingLabelText={name}
                />
                <TextField
                    floatingLabelText={relation}
                />
            </div>);
        }
        return (
            <div className="transportation-container">
                <label> References </label> <br /><br />
                {reference}
                <FlatButton label="Add" secondary={true} onTouchTap={() => this.setState({ reference: this.state.reference + 1 })} />
                <FlatButton label="Delete" primary={true} onTouchTap={() => this.state.reference === 1 ? null : this.setState({ reference: this.state.reference - 1 })} />
                <br /><br />
                <label>{friends}</label>
                {family}
                <FlatButton label="Add" secondary={true} onTouchTap={() => this.setState({ family: this.state.family + 1 })} />
                <FlatButton label="Delete" primary={true} onTouchTap={() => this.state.family === 1 ? null : this.setState({ family: this.state.family - 1 })} />
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        );
    }
}

export default References;