import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.component.style.scss';

const Footer = () => {
  return (
    <footer>
      <div className='main-footer widgets-dark typo-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget subscribe no-box'>
                <h5 className='widget-title'>
                  Super Car Detailing<span></span>
                </h5>
                <p>
                  We will deliver you your own personal professional car
                  detailer to your door step
                </p>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget no-box'>
                <h5 className='widget-title'>
                  Quick Links<span></span>
                </h5>
                <ul className='thumbnail-widget'>
                  <li>
                    <div className='thumb-content'>
                      <Link to='/home'>Home</Link>
                    </div>
                  </li>
                  <li>
                    <div className='thumb-content'>
                      <Link to='/services'>Services</Link>
                    </div>
                  </li>
                  <li>
                    <div className='thumb-content'>
                      <Link to='/products'>Pricing</Link>
                    </div>
                  </li>
                  <li>
                    <div className='thumb-content'>
                      <Link to='/book'>Book</Link>
                    </div>
                  </li>
                  <li>
                    <div className='thumb-content'>
                      <Link to='/contact'>Contact</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget no-box'>
                <h5 className='widget-title'>
                  Get Started<span></span>
                </h5>
                <p>10x more eco friendly than your local carwash</p>
                <a
                  className='btn btn-outline-primary'
                  href='#.'
                  target='_blank'
                >
                  Register Now
                </a>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-3'>
              <div className='widget no-box'>
                <h5 className='widget-title'>
                  Contact Us<span></span>
                </h5>

                <p>
                  <a href='mailto:info@domain.com' title='Suuper Car Detailing'>
                    junokacompany@gmail.com
                  </a>
                </p>
                <ul className='social-footer2'></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>Copyright Suuper Car Detailing © 2020. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
