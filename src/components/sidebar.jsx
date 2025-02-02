import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Cheryl Bui</a></h1>
              <span className="email"><i className="icon-mail"></i> bui.thuy@northeastern.edu</span>
              {/*<span className="email"><i className="icon-download4" /><a href="https://drive.google.com/file/d/17Pgh-8kw42kwuOISizXyme7cxqDE-4xm/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a></span>*/}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Experience</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}

                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.dropbox.com/scl/fi/xcqjtwr3jtc9usj5c78b0/SWE_CherylBui2024_GHC.pdf?rlkey=orbwuccvtkrl0w401m9tzoaqc&dl=0" target="_blank" rel="noopener noreferrer">Resume</a></li>
                {/*<li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>*/}
                {/*<li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>*/}
                {/*<li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>*/}
                <li><a href="https://www.linkedin.com/in/thuy-tien-bui-b49331b4/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/buithuytien" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/*<li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>*/}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              {/*<p><small>*/}
              {/*  Something coming soon !!*/}
              {/*</small></p>*/}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
