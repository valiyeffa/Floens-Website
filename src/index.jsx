import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main from './main';
import OurTeam from './ourteam';
import { Services, Boxes } from './services';
import { NewsTitle, News } from './newsroom';
import './css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Services />
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <Boxes img="https://bracketweb.com/floens-html/assets/images/services/service-2-1.jpg" text="Tiling & Concrete" />
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <Boxes img="https://bracketweb.com/floens-html/assets/images/services/service-2-4.jpg" text="Carpets & Rugs" />
            </div>
            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <Boxes img="https://bracketweb.com/floens-html/assets/images/services/service-2-5.jpg" text="Oak Flooring" />
            </div>
          </div>
        </div>

        <OurTeam />

        <NewsTitle />

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <News time="20" image="https://bracketweb.com/floens-html/assets/images/blog/blog-1-2.jpg" />
            </div>

            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <News time="22" image="https://bracketweb.com/floens-html/assets/images/blog/blog-1-3.jpg" />
            </div>

            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <News time="8" image="https://bracketweb.com/floens-html/assets/images/blog/blog-1-10.jpg" />
            </div>
          </div>
        </div>

      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


