import * as React from "react";
import ActiveButtons from "../active-buttons/ActiveButtons";
import { RadioButtonGroup, RadioButton, TextField } from "material-ui";

class Media extends React.Component<any, any>{
    jsonData: any
    constructor(props: any) {
        super(props);
        this.jsonData = this.props.jsonData;
        this.state = {
            position: false,
            interspan: false,
            friend: false
        };
    }

    handleNext = () => {
        this.props.handleNext({ name: 123, idx: 0 })
    }
    handlePrev = () => {
        this.props.handlePrev({ name: 123, idx: 1 })
    }
    render() {
        const {questions,radio,richMond,site,name,friend,jobSearch,referredJob,referredInterSpan,referredFriend} = this.jsonData;
        return (
            <div className="job-applicant-container">
                <label>Media</label>
                <p>{questions}</p>
                <RadioButtonGroup name="experience"
                    onChange={(event: any) => {
                        if (event.target.value === "Referred from job site") {
                            this.setState({ position: true, interspan: false, friend: false })
                        }
                        else if (event.target.value === "Referred by InterSpan, Inc. employee") {
                            this.setState({ interspan: true, position: false, friend: false })
                        }
                        else if (event.target.value === "Referred by friend") {
                            this.setState({ friend: true, interspan: false, position: false })
                        }
                        else {
                            this.setState({ position: false, interspan: false, friend: false })
                        }
                    }}>
                    <RadioButton
                        value="Radio Station"
                        label={radio}
                    />
                    <RadioButton
                        value="Richmond Times Newspaper"
                        label={richMond}
                    />
                    <RadioButton
                        value="Job search on Internet"
                        label={jobSearch}
                    />

                    <RadioButton
                        value="Referred from job site"
                        label={referredJob}
                    />
                    <RadioButton
                        value="Referred by InterSpan, Inc. employee"
                        label={referredInterSpan}
                    />
                    <RadioButton
                        value="Referred by friend"
                        label={referredFriend}
                    />

                </RadioButtonGroup>
                {this.state.position ?
                    <TextField
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={site}
                    /> : null}
                {this.state.interspan ?
                    <TextField
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={name}
                    /> : null}
                {this.state.friend ?
                    <TextField
                        hintText=""
                        onFocus={() => { }}
                        fullWidth={true}
                        floatingLabelText={friend}
                    /> : null}
                <ActiveButtons handleNext={() => this.handleNext()} handlePrev={() => this.handlePrev()} />
            </div>
        )
    }
}

export default Media;