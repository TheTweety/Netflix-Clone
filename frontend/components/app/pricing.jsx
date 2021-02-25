import React from "react"; 
import NavContainer from "../nav_container";  
import PricingGuestContainer from "./pricing_guest_container" 
class Pricing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        return (<div className="splash-main">
            <main className="splash-main">
            <NavContainer history={this.props.history} page="pricing" />
                <section className="landingPricing">
                    <div className="splash-main-content">
                        <div className="slogan-container">
                        <PricingGuestContainer/>
                        </div>
                        
                    </div>     
                </section>
            </main>
        </div>)
         }

}


export default Pricing;