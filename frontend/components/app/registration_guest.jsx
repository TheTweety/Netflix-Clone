import React from "react"; 
import NavContainer from "../nav_container";
import Footer from "../footer";

class RegistrationGuest extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            username: "",
            cardowner:"",
            cardnumber:"",
            expirydate:"",
            usertype:"",
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this); 
        this.updateUserName = this.updateUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCardOwner = this.updateCardOwner.bind(this);
        this.updateCardNumber = this.updateCardNumber.bind(this);
        this.updateExpiryDate = this.updateExpiryDate.bind(this);
        this.updateType = this.updateType.bind(this);
        
    }

    componentWillUnmount() {
        if (this.props.errors.session[0]) this.props.clearErrors();
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    
    updateUserName(event) {
        this.setState({
            username: event.target.value
        })
    }

    updateCardOwner(event) {
        this.setState({
            cardowner: event.target.value
        })
    }

    updateCardNumber(event) {
        this.setState({
            cardnumber: event.target.value
        })
    }

    updateExpiryDate(event) {
        this.setState({
            expirydate: event.target.value
        }) 
    }

    updateType(event) {
        this.setState({
            usertype: event.target.value
        }) 
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const userInfo = Object.assign({}, this.state);
        this.props.signupUser(userInfo)
    }

    render() {
        
        let { errors } = this.props;
        let errorMessage;
        let errorBorder;

        if (errors.session[0]) {
            errorMessage= (
                <div className="login-errors">{errors.session[0]}</div>
            )

            errorBorder = "login-error-border";
        }

        return (
            <main className="login-main">
                
                <NavContainer history={this.props.history} page="register" />
                <div className="landing extended">
                    <div className="login-content-box">
                        <form  onSubmit={this.handleSubmit}>
                            
                        <h2 className="login-title">Registration</h2> 
                            <div className="registration-outline-form" > 
                            <h2 className="registration-login-subtitle">Account Details</h2> 
                                <input className={`login-input ${errorBorder} registration-email`} type="text" value={this.state.email} onChange={this.updateEmail} placeholder="Email Address"/>
                                <input className={`login-input ${errorBorder} registration-user`} type="username" value={this.state.username} onChange={this.updateUserName} placeholder="User Name" />
                                <input  className={`login-input ${errorBorder} registration-pass`} type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/> 
                                <select className={`login-input ${errorBorder} registrationDropdown`} type="text" value={this.state.usertype} onChange={this.updateType} placeholder="Type">
                                    <option value="volvo">Basic</option>
                                    <option value="saab">Gold Standard</option>
                                    <option value="opel">Director</option>
                                </select>
                              </div>      
                            <div className="registration-outline-form" > 
                            <h2 className="registration-login-subtitle">Payment Information</h2> 
                                <input className={`login-input ${errorBorder} registration-cardowner`} type="text" value={this.state.cardowner} onChange={this.updateCardOwner} placeholder="Card Owner"/>
                                <input className={`login-input ${errorBorder} registration-cardnumber`}  type="text" value={this.state.cardnumber} onChange={this.updateCardNumber} placeholder="Card number" />
                                <input className={`login-input ${errorBorder} registration-expirydate`}  value={this.state.expirydate} onChange={this.updateExpiryDate} placeholder="Expiry Date (MM/YY)"/> 
                            </div>      
                            <input className="registration-login-button" type="submit" value="Submit"/>
                                {errorMessage} 
                        </form>
                    </div>
                </div>
                <Footer />
            </main>
            
        )
    }

}

export default RegistrationGuest;
