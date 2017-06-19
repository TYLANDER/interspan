import * as React from 'react';
import './EmployeeInfo.css';

class EmployeeInfo extends React.Component<any, any> {

    render() {
        return (
            <div className="employeeInfo-container">
                <h1>For Employers</h1>

                <br/>

                InterSpan offers specialized workforce solutions tailored to each client’s needs.
                If you have labor needs we can help you meet them. As a family owned and operated business we are flexible and
                can meet the specific needs of you site. We take the time to screen candidates and make sure the right person
                is sent to your jobsite. We fill temporary and temp-to-permanent job assignments.
                Currently we specialize in light industrial placements including:
                <br/>
                <br/>
                <ul>
                    <li>Warehouse (picking/packing/order selectors)</li>
                    <li>Food Production</li>
                    <li>Manufacturing</li>
                    <li>Forklift Operators</li>
                    <li>Machine Operators</li>
                </ul>

                For more information on our services please contact:
                <br/>
                <a href="mailto:DummyEmail@weneedtosetthisup.com">DummyEmail@weneedtosetthisup.com</a>

            </div>

        );
    }
}

export default EmployeeInfo;
