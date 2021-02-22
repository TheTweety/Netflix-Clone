import React from "react"; 
import NavContainer from "../nav_container";  
import PricingGuestContainer from "./pricing_guest_container"
class Pricing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        return (<div>
            <NavContainer history={this.props.history} page="pricing" />
            <PricingGuestContainer/> 
        </div>)
         }

}


export default Pricing;