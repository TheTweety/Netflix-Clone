import React from "react";
import { Link } from "react-router-dom";

class NavGuest extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

        this.scrollValue = document.getElementsByTagName("html")[0].scrollTop; 
        this.handleScroll = this.handleScroll.bind(this);  
    }

    componentDidMount() { 
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const root = document.getElementsByTagName("html")[0];

        if (this.scrollValue < 30 && root.scrollTop >= 30) {
            const nav = document.getElementsByTagName("nav")[0];
            nav.classList.add("nav-scrolled")
            this.scrollValue = root.scrollTop;

        } else if (this.scrollValue >= 30 && root.scrollTop <= 30 ) {
            const nav = document.getElementsByTagName("nav")[0];
            nav.classList.remove("nav-scrolled")
            this.scrollValue = root.scrollTop;
        }
    } 

    render() {
        const { page } = this.props;
        let navClasses;
        let navLeft;
        let navRight;

        if (page === "moviefestivalguest") { 
            navClasses = "nav-fixed nav-scrolled";
 
            let movieFestivalLink = (<Link to="/moviefestivalGuest" className="browse-link unselectable-text">Festival</Link>);
            let pricingLink = (<Link to="/pricingGuest" className="browse-link unselectable-text">Pricing</Link>)

            if (this.props.onList === "pricing"){
                pricingLink = (<Link to="/pricingGuest" className="browse-link browse-link-active unselectable-text">Pricing</Link>) 
            }
            else {
                movieFestivalLink = (<Link to="/moviefestivalGuest" className="browse-link browse-link-active unselectable-text">Festival</Link>) 
            }  

            navLeft=(
                <div className="nav-left">
                    <Link className="logo-box" to="/browse">
                        <div className="logo-small"></div>
                    </Link>
                    <div className="browse-links-container">
                        {movieFestivalLink}
                         {pricingLink}
                    </div>
                </div>
            )

            navRight=(
                <div className="nav-right">
                </div>
            )
        }

        return (
            <nav className={`nav-main ${navClasses}`}>
                {navLeft}
                {navRight}
            </nav>
        )
    }

}

export default NavGuest;