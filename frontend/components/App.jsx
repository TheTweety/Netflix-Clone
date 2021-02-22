import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashContainer from "./auth/splash_container";
import LoginFormContainer from "./auth/login_form_container";
import BrowseContainer from "./app/browse_container";
import Watch from "./app/watch";
import ProfilesContainer from "./app/profiles_container";
import MyListContainer from "./app/my_list_container";
import MovieContainer from "./app/festival_container"; 
import MovieGuestContainer from "./app/festival_guest_container"; 
import PricingGuestContainer from "./app/pricing_container"; 
import RegistrationContainer from "./app/registration_container";
import SubmissionContainer from "./app/submissions_container";



// AuthRoutes are for non-logged in users, ProtectedRoutes are for logged-in users.

const App = () => (
    <main id="app-main">
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Switch>
            <ProtectedRoute path="/profiles" component={ProfilesContainer} />
            <ProtectedRoute exact path="/browse/:id/watch" component={Watch} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />
        </Switch>
        <ProtectedRoute path="/my-list" component={MyListContainer} />
        <ProtectedRoute exact path="/moviefestival" component={MovieContainer} /> 
        <AuthRoute exact path="/moviefestivalGuest" component={MovieGuestContainer} />
        <AuthRoute exact path="/pricing" component={PricingGuestContainer} /> 
        <AuthRoute exact path="/register" component={RegistrationContainer} />
        <AuthRoute exact path="/submissions" component={SubmissionContainer} />
    </main>
)

export default App;