import React from 'react'; 
import './Footer.css';
import Button from '../Button/Button'; 
import Feature from '../Feature/Feature';

export const Footer = () => {

    return(
        <div className="footer">
                <img src='images/logo.svg' alt="logo" className="img-logo foot"/>
                <div className="subscribe">
                            <Feature title={"Subscribe"} className={"center"} parrafo={"Huddle re-imagines the way we build communities. You have a voice, but so des your audience. Create connections with your users as you engage in genuine discussion."} />
                            <Button text={"Click Here to Subscribe"} color={"pink"}/>
                    </div>
                <div>
                <div className="icon">
                <div className="copy-right">
                        <i className="fas fa-copyright icon-2" ></i>
                        <label className="copy-right-label">Copyright 2019 Huddle. All rights reserved.</label>
                    </div>
                     <i className="fab fa-facebook-square icons"></i>
                     <i className="fab fa-instagram icons"></i>
                     <i className="fab fa-twitter-square icons"></i>
                     
                </div>
               
                <div className="label">
                     
                    <div className="col">
                        <span className="col">About us</span>
                        <span className="col">What we do</span>
                        <span className="col">FAQ</span>
                        <label className="col">Career</label>
                        <label className="col">Blog</label>
                        <label className="col">Contact us</label>
                        
                    </div>
                    
                    
                </div>
                </div>
               
                
        </div>
    );
}

export default Footer;