import React from "react";  
import NavGuest from "../nav_guest";     

class Submission extends React.Component {

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
    render() {    
        return(<div className="my-list-main"> 
               <NavGuest page="moviefestivalguest" onList="moviefestival" />  
                <div className="list-container">
                    <div className="movie-festival-container">
                    <div className="content-1">  
                         <div className="custom-headings">Submission</div>
                    </div>
 
                   </div>
                </div>   
            </div>)
    }
} 
export default Submission;