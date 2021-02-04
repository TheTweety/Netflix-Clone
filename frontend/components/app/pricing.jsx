import React from "react"; 
import Nav from "../nav_container"; 
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table'; 

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
                     <div className="pricing-container"> 
                            <PricingTable  highlightColor='#dc1a27'>
                                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                                    <PricingDetail> <b>15</b> projects</PricingDetail>
                                    <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>5</b> users</PricingDetail>
                                    <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                                    <PricingDetail> <b>35</b> projects</PricingDetail>
                                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot> 
                            </PricingTable> 

                            <PricingTable  highlightColor='#dc1a27'> 
                                <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                                    <PricingDetail> <b>100</b> projects</PricingDetail>
                                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                                    <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                                    <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                            </PricingTable> 
                         </div>
                         
                    </div>
                </div> 
        </div>)
    }
}

export default PricingContainer;