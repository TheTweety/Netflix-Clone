import React from "react"; 
import Nav from "../nav_container";    

class Festival extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
        }
 
    }  
    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i; 
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
        
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
    }
    render() {   
       
        return(<div className="my-list-main"> 
                <Nav page="browse" onList={true} /> 
                <Nav page="my-list" onList={true} />
                <Nav page="moviefestival" onList={true} />
                <Nav page="pricing" onList={true} />
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
                                    <ol>
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
                                <a href="#" className="mybutton">Submit</a>
                                <div className="custom-headings">
                                    Awards & Prizes
                                </div>

                                <div className="content-2">

                                <button className="accordion">Best Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>

                                    <button className="accordion">Best Short Foreign</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>

                                    <button className="accordion">Best Documentary Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Animation Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Experimental Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Student Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                 
                                    <button className="accordion">Best First Time Filmmaker Short</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Music Video</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Web Series</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Producer</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Female Director</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Male Director</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Female Student Director</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Male Student Director</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Actress</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Actor</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best New Actress / Actor</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Acting Ensemble</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Cinematography</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Editing</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Production Design</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Sound Design</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Original Score</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                    <button className="accordion">Best Screenwriting</button>
                                    <div className="panel">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </div>
                         </div>
                    </div>   
                </div>   
            </div>)
    }
} 
export default Festival;