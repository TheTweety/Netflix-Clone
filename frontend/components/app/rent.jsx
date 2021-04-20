import React from "react";
import Nav from "../nav_container";

class Rent extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
      const labels = document.querySelectorAll('.label');
      labels.forEach(label => {
        const chars = label.textContent.split('');
        label.innerHTML = '';
        chars.forEach(char => {
          label.innerHTML += `<span>${char === ' ' ? '&nbsp' : char}</span>`;
        });
      })
    }


    handleSubmit(e) {
        e.preventDefault();

        const submission = Object.assign({}, this.state);
        this.props.submitSubmission(submission);
    }

    render() {
        return(<div className="my-list-main">
               <Nav page="browse" onList="browse" />
                <div className="list-container">
                    <div className="movie-festival-container">

                <div className="content-6">
                  <div className="banner-content banner-content-centered" >Rent </div>
                      <div className="custom-headings banner-content-centered">Movie Details</div>
                      <div className="content-4">
                          movie details aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br/>
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br/>
                          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </div>
                      <div className="content-5">
                            <div className="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
                                  <h2 id="bulgy-radios-label"></h2>
                                      <label>
                                      <input type="radio" name="options" />
                                      <span className="radio"></span>
                                      <span className="label">1 Day - $5</span>
                                      </label>
                                      <label>
                                      <input type="radio" name="options" />
                                      <span className="radio"></span>
                                      <span className="label">2 Days - $10</span>
                                      </label>
                                      <label>
                                      <input type="radio" name="options" />
                                      <span className="radio"></span>
                                      <span className="label">3 Days - $15</span>
                                      </label>
                                      <label>
                                      <input type="radio" name="options" />
                                      <span className="radio"></span>
                                      <span className="label">4 Days - $20</span>
                                      </label>
                                      <label>
                                      <input type="radio" name="options" />
                                      <span className="radio"></span>
                                      <span className="label">5 Days - $25</span>
                                      </label>
                                  </div>
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
