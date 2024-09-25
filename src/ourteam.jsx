import React, { Component } from 'react'

export class OurTeam extends Component {
  render() {
    return (
      <main>
        <div className="our-team ">
          <div className="services-sect">
            <div className="services-sect-header">
              <div className="left-mini-sect-title">
                <i class="fa-solid fa-stop"></i>
                <span>OUR TEAM</span>
              </div>

              <div className="services-sect-title">
                <h1>Meet our Best Team Members</h1>
              </div>

              <div className="right-mini-text">
                <p>Luctus enim vehicula nec. Ut auctor lobortis sapien et eleifend. Integer ac orci vitae neque porttitor efficitur ac vestibulum orci. Sed tincidunt magna sed leo luctus</p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                <div className="team-card">
                  <div className="team-media">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </div>

                  <div className="team-names">
                    <b>MIKE HARDSON</b>
                    <p>MARKETING MANAGER</p>
                  </div>

                  <img src="https://bracketweb.com/floens-html/assets/images/team/team-1-1.jpg" alt="" />
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                <div className="team-card">
                  <div className="team-media">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </div>

                  <div className="team-names">
                    <b>ANTHONY B.CASTILLO</b>
                    <p>MARKETING MANAGER</p>
                  </div>

                  <img src="https://bracketweb.com/floens-html/assets/images/team/team-1-2.jpg" alt="" />
                </div>
              </div>
              <div className='col-12 col-lg-4 col-md-12 col-sm-12'>
                <div className="team-card">
                  <div className="team-media">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </div>

                  <div className="team-names">
                    <b>DAVID COOPER</b>
                    <p>MARKETING MANAGER</p>
                  </div>

                  <img src="https://bracketweb.com/floens-html/assets/images/team/team-1-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default OurTeam
