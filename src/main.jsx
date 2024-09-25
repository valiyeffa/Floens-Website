import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <main>
                <div className="first-main-sect">
                    <div className="main-carousel">
                        <div className="bg-img">
                            <img src="https://bracketweb.com/floens-html/assets/images/backgrounds/slider-2-1.jpg" alt="" />
                        </div>

                        <div className="main-text-left">
                            <div className="text">
                                <p>WELCOME TO FLOENS TILES & FLOORING</p>
                            </div>

                            <div className="main-text-two">
                                <h1>PRECISION TILES & BEST FLOORING SOLUTIONS</h1>
                            </div>

                            <button>DISCOVER MORE <span>|</span> <i class="fa-solid fa-arrow-right-long"></i></button>
                        </div>

                        <div className="main-carousel-tiles">
                            <div className="main-carousel-right">
                                <div className="right-frst-box-bg">
                                    <img src="https://bracketweb.com/floens-html/assets/images/slider/slider-2-1.jpg" alt="" />
                                </div>

                                <div className="tiles">
                                    <div className="modern-tiles-one "></div>

                                    <div className="mini-circle-one">
                                        <div className="mini-circle"></div>
                                    </div>

                                    <p>MODERN TILES</p>
                                </div>

                                <div className="right-scnd-box-bg">
                                    <img src="https://bracketweb.com/floens-html/assets/images/slider/slider-2-2.jpg" alt="" />
                                </div>

                                <div className="tiles-two">
                                    <div className="modern-tiles-two"></div>

                                    <div className="mini-circle-two">
                                        <div className="mini-circle"></div>
                                    </div>

                                    <p>MODERN TILES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-main-sect">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-1.png" alt="" /></div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-2.png" alt="" /></div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-3.png" alt="" /></div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-4.png" alt="" /></div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-5.png" alt="" /></div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 col-sm-4">
                                <div className="icons"> <img src="https://bracketweb.com/floens-html/assets/images/resources/brand-1-6.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main