import * as React from 'react';
import './HireFor.css';

class HireFor extends React.Component<any, any> {

    render() {
        return (
            <div className="hire-for-container">
                <h1>What we hire for</h1>
                <br/>
                <p>InterSpan is always looking for motivated individuals seeking employment with a company they can grow with. We hire
                    for primarily light industrial positions in warehouse and food production settings. Many of our assignments are entry level
                     positions that will provide on the job training. We also place experienced forklift drivers and machine operators.
                     Our positions are temporary and temp-to-permanent placements. We have 8 and 12 hour shifts available, both during the day
                      and at night. If you are interested in apply with InterSpan please fill out our application and a representative will
                      contact you with our current job openings. If you would like more information before applying please contact us here:
                      <br/>
                      <a href="mailto:info@interspan">info@interspan</a>

                </p>
            </div>

        );
    }
}

export default HireFor;
