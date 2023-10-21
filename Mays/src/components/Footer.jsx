import { NavLink } from "react-router-dom";

export default function Footer() {
   return (
      <footer className="footer">
         <div className="footer__container container grid">
            <div className="footer__content grid">
               <div>
                  <a href="#" className="footer__logo">Banks</a>

                  <p className="footer__description">
                     Join us and explore <br />
                     the Financing World.
                  </p>
               </div>

               <div className="footer__data grid">
                  <div>
                     <h3 className="footer__title">About</h3>

                     <ul className="footer__links">
                        <li>
                           <a href="#" className="footer__link">About Us</a>
                        </li>

                        <li>
                           <a href="#" className="footer__link">Features</a>
                        </li>

                        <li>
                           <a href="#" className="footer__link">News & Blog</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="footer__title">Company</h3>

                     <ul className="footer__links">
                        <li>
                           <a href="../FAQ/index.html" className="footer__link">FAQs</a>
                        </li>

                        <li>
                           <a href="#" className="footer__link">History</a>
                        </li>

                        <li>
                           <NavLink className="footer__link" 
                           // to={'/bankCard'}
                           >
                              Cards
                           </NavLink>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="footer__title">Contact</h3>

                     <ul className="footer__links">
                        <li>
                           <a href="#" className="footer__link">Call Center</a>
                        </li>

                        <li>
                           <a href="#" className="footer__link">Support Center</a>
                        </li>

                        <li>
                           <a href="../Contact Form/index.html" className="footer__link">Contact Us</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="footer__title">Support</h3>

                     <ul className="footer__links">
                        <li>
                           <a href="#" className="footer__link">Privacy Policy</a>
                        </li>

                        <li>
                           <a href="#" className="footer__link">Terms & Services</a>
                        </li>

                        <li>
                           <a href="../Search Branch/index.html" className="footer__link">Branches</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="footer__group">
               <div className="footer__social">
                  <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
                     <i className="ri-facebook-line"></i>
                  </a>

                  <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
                     <i className="ri-instagram-line"></i>
                  </a>

                  <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
                     <i className="ri-twitter-line"></i>
                  </a>

                  <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
                     <i className="ri-youtube-line"></i>
                  </a>
               </div>

               <span className="footer__copy">
                  &#169; Copyright. All rights reserved
               </span>
            </div>
         </div>
      </footer>

   )
}