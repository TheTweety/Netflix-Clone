import React from "react"; 
import Nav from "../nav_container";    
class PricingContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
 
    } 

    render() {
        return(
            <div className="my-list-main">
                <Nav page="browse" onList={true} /> 
                <Nav page="moviefestival" onList={true} />
                <div className="list-container"> 
                    <div className="list-rows-container">
                    <section className="m-profile">
                        <div className="container">
                            <h4 className="main-title mb-4">Pricing Plan</h4>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="sign-user_card">
                                        <div className="table-responsive pricing pt-2">
                                            <table id="my-table" className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center prc-wrap"></th>
                                                        <th className="text-center prc-wrap">
                                                            <div className="prc-box">
                                                                <div className="h3 pt-4 text-white">$19<small> / Per month</small></div>
                                                                <span className="type">Basic</span>
                                                            </div>
                                                        </th>
                                                        <th className="text-center prc-wrap">
                                                            <div className="prc-box active">
                                                                <div className="h3 pt-4 text-white">$39<small> / Per month</small></div>
                                                                <span className="type">Standard</span>
                                                            </div>
                                                        </th>
                                                        <th className="text-center prc-wrap">
                                                            <div className="prc-box">
                                                                <div className="h3 pt-4 text-white">$119<small> / Per month</small></div>
                                                                <span className="type">Platinum</span>
                                                            </div>
                                                        </th>
                                                        <th className="text-center prc-wrap">
                                                            <div className="prc-box">
                                                                <div className="h3 pt-4 text-white">$219<small> / Per month</small></div>
                                                                <span className="type">Premium</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className="text-center" scope="row">New Movies</th>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell active"><i className="ri-check-line ri-2x"></i>
                                                        </td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center" scope="row">Streamit Special</th>
                                                        <td className="text-center child-cell"><i className="ri-close-line i_close"></i></td>
                                                        <td className="text-center child-cell active"><i className="ri-check-line ri-2x"></i>
                                                        </td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center" scope="row">American Tv Shows</th>
                                                        <td className="text-center child-cell"><i className="ri-close-line i_close"></i></td>
                                                        <td className="text-center child-cell active"><i className="ri-check-line ri-2x"></i>
                                                        </td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center" scope="row">Hollywood Movies</th>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell active"><i className="ri-check-line ri-2x"></i>
                                                        </td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center" scope="row">Video Quality</th>
                                                        <td className="text-center child-cell">SD (480p)</td>
                                                        <td className="text-center child-cell active">HD (720p)</td>
                                                        <td className="text-center child-cell">FHD (1080p)</td>
                                                        <td className="text-center child-cell">FHD (1080p)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center" scope="row">Ad Free Entertainment</th>
                                                        <td className="text-center child-cell"><i className="ri-close-line i_close"></i></td>
                                                        <td className="text-center child-cell active"><i className="ri-close-line i_close"></i>
                                                        </td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                        <td className="text-center child-cell"><i className="ri-check-line ri-2x"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center"><i className="ri-close-line i_close"></i></td>
                                                        <td className="text-center">
                                                            <a href="#" className="btn btn-hover mt-3">Purchase</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a href="#" className="btn btn-hover mt-3">Purchase</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a href="#" className="btn btn-hover mt-3">Purchase</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <a href="#" className="btn btn-hover mt-3">Purchase</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div> 
        </div>)
    }
}

export default PricingContainer;