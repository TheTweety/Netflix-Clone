import { connect } from "react-redux";   
import PricingContainer from "./pricing"
const msp = (state, ownProps) => ({
    errors: state.errors,
    history: ownProps.history
})

const mdp = dispatch => ({ 
})

export default connect(msp, mdp)(PricingContainer);