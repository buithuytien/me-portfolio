import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! I'm Cheryl</h1>
                          <h2>I'm an aspiring Software Engineer</h2>
                          <h5>Graduating in May 2024</h5>
                          <p><a className="btn btn-primary btn-learn" href="https://www.dropbox.com/scl/fi/xcqjtwr3jtc9usj5c78b0/SWE_CherylBui2024_GHC.pdf?rlkey=orbwuccvtkrl0w401m9tzoaqc&dl=0" target="_blank" rel="noopener noreferrer">Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/buithuytien" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                            <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/thuy-tien-bui-b49331b4/" target="_blank" rel="noopener noreferrer">View LinkedIn <i className="icon-linkedin2" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
