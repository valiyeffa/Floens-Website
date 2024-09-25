import React, { Component } from 'react'

export class NewsTitle extends Component {
    render() {
        return (
            <main>
                <div className="news-title">
                    <div className="our-team">
                        <div className="services-sect">
                            <div className="services-sect-header">
                                <div className="left-mini-sect-title">
                                    <i class="fa-solid fa-stop"></i>
                                    <span>NEWS ROOM</span>
                                </div>

                                <div className="services-sect-title">
                                    <h1>See Latest News
                                        from the Blog Posts</h1>
                                </div>

                                <div className="right-mini-text">
                                    <button>VIEW ALL <span>|</span> <i class="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export class News extends Component {
    render() {
        return (
            <main>
                <div className="news-cards">
                    <div className="card">
                        <div className="card-body">
                            <div className="mini-head">
                                <div className="mini-head-user">
                                    <i class="fa-solid fa-user"></i>
                                    <span>by Admin</span>
                                </div>

                                <div className="mini-head-comments">
                                    <i class="fa-solid fa-comment-dots"></i>
                                    <span>2 Comments</span>
                                </div>
                            </div>

                            <h5 className="card-text">Talk About the Three Major Types of Floor Tiles</h5>
                        </div>

                        <div className="news-images">
                            <img src={this.props.image} alt="" />

                            <div className="add"><p>+</p></div>

                            <div className="date">
                                <p>{this.props.time} <span>June</span></p>
                               
                            </div>

                        </div>
                        
                    </div>
                </div>
            </main>
        )
    }
}
