import React from "react"; 
import Nav from "../nav_container";    
class PricingContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
 
    } 

    render() {
        return(
            <div className="my-list-main">
                <Nav page="browse" onList={true} /> 
                <Nav page="moviefestival" onList={true} />
                <div className="list-container"> 
                    <div className="list-rows-container">
                     pricing
                    </div>
                </div> 
        </div>)
    }
}

export default PricingContainer;