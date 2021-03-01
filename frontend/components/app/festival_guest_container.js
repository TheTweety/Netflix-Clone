import { connect } from "react-redux";   
import FestivalGuest from "./festival_guest" 
import { submitASubmission } from "../../actions/submission_actions";

const msp = (state, ownProps) => ({ 
})

const mdp = dispatch => ({ 
    submitSubmission: submission => dispatch(submitASubmission(submission)),
})

export default connect(msp, mdp)(FestivalGuest);