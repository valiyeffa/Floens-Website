import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <main>
                <div className="services-sect">
                    <div className="services-sect-header">
                        <div className="left-mini-sect-title">
                            <i class="fa-solid fa-stop"></i>
                            <span>SERVICES</span>
                        </div>

                        <div className="services-sect-title">
                            <h1>We Provides Best florring Services for you</h1>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export class Boxes extends Component {
    render() {
        return (
            <main>
                <div className="services-boxes">
                    <div className="card" >
                        <div className="card-img">
                            <div className="card-img-bg">
                                <img src={this.props.img} alt="" />
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="card-text-head">
                                <b>{this.props.text}</b>
                            </div>

                            <div className="service-details">
                                <a href="#">
                                    <span>SERVICE DEATILS | </span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

