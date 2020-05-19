import React from 'react';
import { Link } from 'react-router-dom';
// let userprofile = window.localStorage.getItem('userprofile');
// let userprofile = ""
// userprofile = JSON.parse(userprofile);
// let userLocation =  (userprofile) ? userprofile.city.toLowerCase():'chennai';
let userLocation = 'chennai';
const Footer = () => (
  <footer className="footer-three footer-grey p-top-95" style={{ 'boxShadow': '0px -5px 5px rgba(39, 43, 65, 0.05)' }}>
    <div className="footer-top p-bottom-25">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="widget widget_pages">
              <h2 className="widget-title">Company Info</h2>
              <ul className="list-unstyled">
                <li className="page-item"><Link to="/about-us">About Us</Link></li>
                <li className="page-item"><Link to="/contact-us">Contact Us</Link></li>
                <li className="page-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex  col-sm-6">
            <div className="widget widget_social">
              <h2 className="widget-title">Connect with Us</h2>
              <ul className="list-unstyled social-list">
                <li><a href="https://twitter.com/irufit" target="_blank"><span className="twitter"><i className="fab fa-twitter"></i></span> Twitter</a></li>
                <li><a href="https://facebook.com/irufit" target="_blank"><span className="facebook"><i className="fab fa-facebook-f"></i></span> Facebook</a></li>
                <li><a href="https://instagram.com/irufit" target="_blank"><span className="instagram"><i className="fab fa-instagram"></i></span> Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget widget_pages">
              <h2 className="widget-title">Top Cities</h2>
              <ul className="list-unstyled">
                <li className="page-item"><Link to="/bengaluru?start=1">Bengaluru</Link></li>
                <li className="page-item"><Link to="/delhi?start=1">Delhi</Link></li>
                <li className="page-item"><Link to="/mumbai?start=1">Mumbai</Link></li>
                <li className="page-item"><Link to="/chennai?start=1">Chennai</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="widget widget_pages">
              <h2 className="widget-title">Top Categories</h2>
              <ul className="list-unstyled">
                <li className="page-item"><Link to={`/${userLocation}/gyms?start=1`}>Gyms</Link></li>
                <li className="page-item"><Link to={`/${userLocation}/zumba?start=1`}>Zumba</Link></li>
                <li className="page-item"><Link to={`/${userLocation}/fitness-studios?start=1`}>Fitness Studio</Link></li>
                <li className="page-item"><Link to={`/${userLocation}/dance?start=1`}>Dance</Link></li>
              </ul>
            </div>
            {/* <div className="widget widget_text">
              <h2 className="widget-title">Trending searches</h2>
              <div className="textwidget">
                <p>Download the IRUFIT app today so you can find your fitness anytime, anywhere.</p>
                <ul className="list-unstyled store-btns">
                  <li><a href="" className="btn-gradient btn-gradient-two btn btn-md btn-icon icon-left"><span className="fab fa-apple"></span> App Store</a></li>
                  <li><a href="" className="btn btn-dark btn-md btn-icon btn-icon"><span className="fab fa-android"></span> Google Play</a></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-bottom--content">
              <a href="" className="footer-logo"><img src="img/logo.png" alt="" /></a>
              <p className="m-0 copy-text">©2019 irufit. </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </footer>
);

export default Footer;
