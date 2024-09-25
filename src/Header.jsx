import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-head">
          <div className="head-left-side">
            <div className="mail">
              <FontAwesomeIcon className='fi' icon={faPaperPlane} />
              <a href="email">needhelp@company.com</a>
            </div>

            <div className="phone">
              <FontAwesomeIcon className='fi' icon={faPhoneVolume} />
              <a href="#">+91 5698 0036 420</a>
            </div>

            <div className="location">
              <FontAwesomeIcon className='fi' icon={faLocationDot} />
              <span>85 Ketch Harbour Road Bensal, PA 19020</span>
            </div>

          </div>

          <div className="head-right-side">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>

        </div>

        <div className="header-main">
          <div className="header-center">
            <div className="header-navbar">
              <div className="logo">
                <img src="https://bracketweb.com/floens-html/assets/images/logo-dark.png" alt="" srcset="" />
              </div>

              <div className="header-main-center">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>

              
              <div className="header-main-right">
              <div className="bars">
                <a href="#"><i class="fa-solid fa-bars"></i></a>
              </div>

                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>

                <button>GET A QUOTE <span>|</span> <i class="fa-solid fa-arrow-right-long"></i></button>
              </div>
            </div>
          </div>
        </div>

      </header>
    )
  }
}

export default Header;