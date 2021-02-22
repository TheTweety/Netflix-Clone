import React from "react";   
import NavContainer from "../nav_container"; 
class FestivalGuest extends React.Component {

    constructor(props) {
        super(props);    
    }  
    componentDidMount() { 

        $(function() {
            // (Optional) Active an item if it has the class "is-active"
            $(".accordion > .accordion-item.is-active")
              .children(".accordion-panel")
              .slideDown();
          
            $(".accordion > .accordion-item").click(function() {
              // Cancel the siblings
              $(this)
                .siblings(".accordion-item")
                .removeClass("is-active")
                .children(".accordion-panel")
                .slideUp();
              // Toggle the item
              $(this)
                .toggleClass("is-active")
                .children(".accordion-panel")
                .slideToggle("ease-out");
            });
          });
          
    } 

    
    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }



    render() {    
        return(<div className="my-list-main"> 
               <NavContainer history={this.props.history} page="splash" />
                <div className="list-container">
                    <div className="movie-festival-container">
                        
                <div className="content-1">
                                <div className="content-images"> 
                                 <div  className="banner-content" >Welcome <br/>To The<br/> Festival  </div></div>
                                <div className="custom-headings">History</div>
                                
                                <div className="content-2">
                                     Karawood Film Festival is a festival dedicated to international short films of all genres, aiming to find new voices and perspectives to celebrate the power of a good story. We are committed to bring the best of worldwide cinema.Once a year, the Best Short of the Year will be announced and will receive a USD 3500 cash prize. No other city in Europe honors the cinema as Cannes does, living and breathing throughout the year under the lights of cinema. It is a unique and picturesque historic location along the French Riviera where you can experience the entirety of the fantastic film world. Since 1939, it has been “the” city of cinema, where you can find as much talent as the stars that it welcomes and without any doubt is the number-one international market for filmmakers. We are willing to screen your film in different markets amongst diverse audiences, in order to support you in developing your uprising career 
                                </div>

                                <div className="custom-headings">
                                     Rules & Terms
                                </div>
                                
                                <div className="content-3">
                                    <ol className="rules">
                                        <li>
                                             In order to submit a film, you must own the rights or have permission from the owner.
                                        </li>
                                        <li>
                                             The Festival relationship will exclusively be related to the film submitter
                                        </li>
                                        <li>
                                          Any Foreign film that is not in English must have English subtitles
                                        </li>
                                        <li>
                                         All fees are non-refundable
                                        </li>
                                        <li>
                                          Kawarood will not be responsible for damaged copies
                                        </li>
                                        <li>
                                         Students must present a valid Student ID in order to receive our student discount
                                        </li>
                                        <li>
                                          Not all the submissions are selected for the official competition. Our Judges are free to make their own choices and no answers will be given about not selected films
                                        </li>
                                        <li>
                                        Filmmakers can submit the film in multiple categories in order to become a multi-award film
                                         </li>
                                        <li>
                                         Our Team may suggest the categories that are more suitable for the film to apply. Still, the decision about the selection is strictly determined by our judges' team and no selection is guaranteed.
                                        </li>
                                        <li>
                                         A fee is required for the main category submission and also fees for additional categories. For payment structure visit (FilmFreeway website)
                                        </li>
                                        <li>
                                         All submissions in personal categories required the name of the person and the category. You can easily send us this information in the cover letter at FilmFreeway website
                                        </li>
                                        <li>
                                         Submitting your movie, you authorize Kawarood to use, distribute and share the film poster, trailer, synopsis and movie stills in our social media
                                        </li>
                                        <li>
                                         Maximum length allowed is 40 minutes
                                        </li>
                                        <li>
                                         The annual prize of usd 3500 will be given once a year to the Best Short of the Year
                                        </li>  
                                    </ol> 
                                </div> 
                                <div className="custom-headings">
                                    Awards & Prizes
                                </div>

                               <div className="content-2">
                               <ul className="accordion"> 

                               <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Short</h3>
                                    <p className="accordion-panel"> asd <br/> asd </p>
                                </li>
                                
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Foreign Short</h3>
                                    <p className="accordion-panel">2222222222<br/>3333333333<br/>3333333333		</p>
                                </li>
	
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Documentary Short</h3>
                                    <p className="accordion-panel">3333333333<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Animation Short</h3>
                                    <p className="accordion-panel">4444444444<br/>3333333333<br/>3333333333		</p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Experimental Short</h3>
                                    <p className="accordion-panel">5555555555<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Student Short</h3>
                                    <p className="accordion-panel">6666666666<br/>3333333333<br/>3333333333		</p>
                                </li>
                                
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best First Time Filmmaker Short</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Music Video</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Web Series</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Producer</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Female Director</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                
                            <li className="column-break"></li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Male Director</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Female Student Director</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Actress</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Actor</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best New Actress / Actor</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Acting Ensemble</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Cinematography</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Editing</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Production Design</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Original Score</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>           
                                
                                <li className="accordion-item">
                                    <h3 className="accordion-thumb">Best Screenwriting</h3>
                                    <p className="accordion-panel">7777777777<br/>3333333333<br/>3333333333
                                    </p>
                                </li>

                               </ul>
                                    
                                </div>
 
                            <div className="custom-headings">Submission</div>

                            <div className="content-3">
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>   
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>    
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                                    <input className={`login-input  registration-email`} type="text" value="" onChange={this.updateEmail}  placeholder="Email Address"/>     
                            </div> 
                         
                            <a href="#" className="mybutton">Submit</a>
                         </div>
                    </div>   
 
                </div>   
            </div>)
    }
} 
export default FestivalGuest;