import * as React from 'react';
import { FlatButton } from 'material-ui';
import Styling  from "../../components/job-form/jobTheme";

export default class FotgetActionButton extends React.Component<any, any>{
    render() {
        return (
            <div className="footer-container">
                <FlatButton label="Send"
                    className="continue-btn hovered-class"
                    labelPosition="before"
                    primary={true}
                    fullWidth
                    style={Styling.defaultButton}
                    labelStyle={Styling.defaultLabelButton}
                    onClick={this.props.clicked} />
            </div>
        )
    }
}