import React from "react"; 
import Nav from "../nav_container"; 
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { useForm } from "react-cool-form";

class PricingContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
 
    } 

    

    render() {
            
            const Field = ({ label, id, error, ...rest }) => (
                <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...rest} />
                {error && <p>{error}</p>}
                </div>
            );
            
            const App = () => {
                const { form, getState } = useForm({
                // (Strongly advise) Provide the default values just like we use React state
                defaultValues: { username: "", email: "", password: "" },
                // The event only triggered when the form is valid
                onSubmit: (values) => console.log("onSubmit: ", values),
                });
                // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
                // Which helps the user focus on typing without being annoyed by the error message
                const errors = getState("errors", { errorWithTouched: true }); // Default is "false"
            
                return (
                <form ref={form} noValidate>
                    <Field
                        label="Username"
                        id="username"
                        name="username"
                        // Support built-in validation
                        required
                        error={errors.username}
                        />
                    <Field
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        required
                        error={errors.email}
                        />
                    <Field
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        error={errors.password}
                        />
                        <input type="submit" />
                </form>
                );
            };
        return(
            <div className="my-list-main">
                <Nav page="browse" onList={true} /> 
                <Nav page="moviefestival" onList={true} />
                <div className="list-container"> 
                    <div className="list-rows-container">
                     <div className="pricing-container"> 
                            <PricingTable  highlightColor='#dc1a27'>
                                <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                                    <PricingDetail> <b>15</b> projects</PricingDetail>
                                    <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>5</b> users</PricingDetail>
                                    <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                                    <PricingDetail> <b>35</b> projects</PricingDetail>
                                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot> 
                            </PricingTable> 

                            <PricingTable  highlightColor='#dc1a27'> 
                                <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                                    <PricingDetail> <b>100</b> projects</PricingDetail>
                                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                                    <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                                    <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                            </PricingTable> 
                         </div>
                         
                    </div>
                </div> 
        </div>)
    }
}

export default PricingContainer;