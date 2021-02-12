import React from "react";
import Footer from "../footer";
import NavContainer from "../nav_container"; 
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <main className="splash-main">
                <NavContainer history={this.props.history} page="splash" />
                <section className="landing">
                    <div className="splash-main-content">
                        <div className="slogan-container">
                            <h2 className="slogan-big">Unlimited movies, TV</h2>
                            <h2 className="slogan-big">shows, and more.</h2>
                            <h3 className="slogan-small">Watch anywhere. Cancel anytime.</h3>
                        </div>
                        
                    </div>     
                </section>

                <section className="story-container">  

                    <div className="story-card">
                        <div className="story-text-container moveRight">
                            <h2 className="story-title">Watch films in the Movie Festival.</h2>
                            <h3 className="story-subtitle">Upload a movie for a chance to win awards, prizes, and oppurtunities</h3>
                            <Button 
                                fullWidth
                                variant="contained" 
                                component={Link}
                                 to="/moviefestivalGuest" 
                                className="festivalbtn" >  
                                    Go To Festival
                                </Button> 
                        </div>
                        <div className="story-media-container">
                            <div className="story-0-img">
                                <div className="story-0-gif"/>    
                            </div>
                        </div>
                    </div> 
                    <div className="story-card">
                        <div className="story-media-container">
                            <div className="story-2-img">
                                <div className="story-2-info-box">
                                    <div className="story-2-img-2"></div>
                                    <div className="story-2-text-box">
                                        <p className="unselectable-text">Stranger Things</p>
                                        <p className="story-2-subtext unselectable-text">Downloading...</p>
                                    </div>
                                    <div className="story-2-gif"></div>
                                </div>
                            </div>
                        </div>
                        <div className="story-text-container">
                            <div className="story-title">Download your shows to watch offline.</div>
                            <div className="story-subtitle">Save your favorites easily and always have something to watch.</div>
                        </div>
                    </div>

                    <div className="story-card">
                        <div className="story-text-container story-last">
                            <div className="story-title">Watch everywhere.</div>
                            <div className="story-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</div>
                        </div>
                        <div className="story-media-container">
                            <div className="story-3-gif">
                                <div className="story-3-img"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

}

export default Splash;