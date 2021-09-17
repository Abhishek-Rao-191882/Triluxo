import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';


const Footer = () =>{
    return(
        <>
          <div className="footer-main">
             <div className="footer">
               <div className="box contact-box">
                 <h1>Contact</h1>
                 <p>Refined Minds <br/>
                    "Teaching our students about the <br/>
                    world the will inherit, and <br/>
                    inspiring them to change it!"—RP
                 </p>
               </div>
               <div className="box">
                 <p>Tel: +911234567890</p>
                 <p>Email: info@contact.com</p>
                 <p> <a href="/contact">Book a consultation</a></p>
                 <div className="social-media">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaYoutube/>
                 </div>
               </div>
               <div className="box newsletter">
                 <p>Subscribe to Get Our Newsletter</p>
                 <form>
                   <input type="text" placeholder="Enter your email here*" className="input" />
                   <button type="submit" className="join-button">Join</button>
                 </form>
               </div>
             </div>
             <div className="copyright">
                <p>Copyright @ 2021 by Redefined minds</p>
             </div>
          </div>
        </>
    )
}

export default Footer;