import React from "react";
import Nav from "../nav_container";

class Rent extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {

        $(function() {

          });
    }


    handleSubmit(e) {
        e.preventDefault();

        const submission = Object.assign({}, this.state);
        this.props.submitSubmission(submission);
    }

    render() {
        return(<div className="my-list-main">
               <Nav page="browse" onList="moviefestival" />
                <div className="list-container">
                    <div className="movie-festival-container">

                <div className="content-1">

                                <div  className="banner-content banner-content-centered" >Rent </div>
                                <div className="custom-headings banner-content-centered">Movie Details</div>

                                <div className="content-4">
                                    movie details aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </div>

                              <div className="custom-headings banner-content-centered">Rent Details</div>
                              <div className="content-4">
                                      <ul>
                                        <li> 2 days - $5 </li>
                                        <li> 5 days - $10 </li>
                                        <li> 10 days - $10 </li>
                                        <li> 15 days - $10 </li>
                                      </ul>
                              </div>

                                <div className="custom-headings banner-content-centered">Payment Details</div>
                                <div className="content-3">
                                    <div className="form-panel">
                                            <div className="form-row form-name">
                                                <input className="formfields" type="text" name="cardholderName" placeholder="Card Holder's Name (As written on card)"/>
                                                <input className="formfields" type="text" name="cardNumber" placeholder="Card Number"/>
                                                <br/>
                                            </div>
                                            <div className="form-row form-name">
                                                <input className="formfields" type="text" name="expirationDate" placeholder="Expiration Date"/>
                                                <input className="formfields"type="text" name="cvv" placeholder="CVV"/>
                                            </div>
                                        </div>
                                </div>

                                <a href="#" className="mybutton-rent">Rent</a>
                         </div>
                    </div>
                </div>
            </div>)
    }
}
export default Rent;
