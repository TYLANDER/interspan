import * as React from "react"
import ActiveButtons from "../active-buttons/ActiveButtons"

class lightIndustrialSkills extends React.Component<any, any>{

    handleNext = ()=>{
        this.props.handleNext({name:123, idx : 0})
    }
    handlePrev = ()=>{
        this.props.handlePrev({name:123, idx : 1})
    }

    render(){

        return(
            <div className="job-applicant-container">
                
                <ActiveButtons handleNext={()=>this.handleNext()} handlePrev={()=>this.handlePrev()}/>
            </div>
        )
    }
}

export default lightIndustrialSkills;