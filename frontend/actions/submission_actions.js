import * as submissionAPIUtil from "../util/submission_api_util"; 

// Action Constants
export const RECEIVE_CURRENT_SUBMISSION = "RECEIVE_CURRENT_SUBMISSION";
export const LOGOUT_CURRENT_SUBMISSION = "LOGOUT_CURRENT_SUBMISSION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// Action Creators
const receiveCurrentSubmission = submission => {
    return {
        type: RECEIVE_CURRENT_SUBMISSION,
        submission
    }
} 

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

const clearErrs = () => {
    return {
        type: CLEAR_ERRORS
    }
}
 
export const submitASubmission = submission => dispatch => submissionAPIUtil.createASubmission(submission)
    .then(submission => dispatch(receiveCurrentSubmission(submission)), err => dispatch(receiveErrors(err.responseJSON))) 

export const clearErrors = () => dispatch => dispatch(clearErrs());