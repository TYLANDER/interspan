import * as React from 'react';
import { FlatButton } from 'material-ui'; 

export class SignupActionButton extends React.Component <any,any>{
    render(){

        return (
           <div className="footer-container">

                <FlatButton label="Continue"
                    className="continue-btn"
                    labelPosition="before"
                    primary={true}
                    labelStyle={{ color: '#2e469e', fontSize: '16px' }}
                    icon={<img src={require('../../assets/angle-right.svg')} className="btn-icon continue" alt="logo" />}
                    onClick={this.props.clicked} />
            </div>
        )
    }
}