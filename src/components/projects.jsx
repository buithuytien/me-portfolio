import React, { Component } from 'react'
import ProjectItem from "./project-item";

export default class Projects extends Component {
	projects;

  render() {
	  this.projects = [
		  {
			  project_title: "Distributed E-commerce application",
			  project_description: "Implemented distributed consensus and replicated data storage for a e-commerce web app with 3 consensus server replicas. Built a RESTful API using Java Spring and MySQL. Implemented a web application using ReactJS.",
			  demo_link: "https://drive.google.com/file/d/14dRucXjaX8Lt84e71hbHEM_sFvpH3T4Y/view?usp=share_link",
			  github_link: "https://github.com/thaipham98/docker-project"
		  },

		  {
			  project_title: "Abstractive News Summarization",
			  project_description: "Implemented transformer-based and RNN-based encoder decoder model to generate abstractive summary of news with GUI. Achieved Rouge-2 score of 18.22, comparable to SOTA models.",
			  demo_link: "https://www.youtube.com/watch?v=1QX8QX9oZqM",
			  github_link: "https://github.com/buithuytien/text_sum"
		  },
		  {
			  project_title: "Multiplayer Chess over LAN with sockets (Java, networking)",
			  project_description: "Developed multiplayer Chess game with GUI connecting 2 computers from Local Area Network with JUnit tests.",
			  demo_link: "https://www.youtube.com/watch?v=TPxtkUUtu5s&t=121s",
			  github_link: "https://github.com/buithuytien/ChessJava2"
		  }
	  ];
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>

						<div className="row">
							{this.projects.map((project) => ProjectItem(project))}

						{/*	<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">*/}
						{/*		<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>*/}
						{/*			<div className="desc">*/}
						{/*				<div className="con">*/}
						{/*					<h3><a href="work.html">Work 02</a></h3>*/}
						{/*					<span>Animation</span>*/}
						{/*					<p className="icon">*/}
						{/*						<span><a href="#"><i className="icon-share3" /></a></span>*/}
						{/*						<span><a href="#"><i className="icon-eye" /> 100</a></span>*/}
						{/*						<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
						{/*					</p>*/}
						{/*				</div>*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">*/}
						{/*		<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>*/}
						{/*			<div className="desc">*/}
						{/*				<div className="con">*/}
						{/*					<h3><a href="work.html">Work 03</a></h3>*/}
						{/*					<span>Illustration</span>*/}
						{/*					<p className="icon">*/}
						{/*						<span><a href="#"><i className="icon-share3" /></a></span>*/}
						{/*						<span><a href="#"><i className="icon-eye" /> 100</a></span>*/}
						{/*						<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
						{/*					</p>*/}
						{/*				</div>*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">*/}
						{/*		<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>*/}
						{/*			<div className="desc">*/}
						{/*				<div className="con">*/}
						{/*					<h3><a href="work.html">Work 04</a></h3>*/}
						{/*					<span>Application</span>*/}
						{/*					<p className="icon">*/}
						{/*						<span><a href="#"><i className="icon-share3" /></a></span>*/}
						{/*						<span><a href="#"><i className="icon-eye" /> 100</a></span>*/}
						{/*						<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
						{/*					</p>*/}
						{/*				</div>*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">*/}
						{/*		<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>*/}
						{/*			<div className="desc">*/}
						{/*				<div className="con">*/}
						{/*					<h3><a href="work.html">Work 05</a></h3>*/}
						{/*					<span>Graphic, Logo</span>*/}
						{/*					<p className="icon">*/}
						{/*						<span><a href="#"><i className="icon-share3" /></a></span>*/}
						{/*						<span><a href="#"><i className="icon-eye" /> 100</a></span>*/}
						{/*						<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
						{/*					</p>*/}
						{/*				</div>*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">*/}
						{/*		<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>*/}
						{/*			<div className="desc">*/}
						{/*				<div className="con">*/}
						{/*					<h3><a href="work.html">Work 06</a></h3>*/}
						{/*					<span>Web Design</span>*/}
						{/*					<p className="icon">*/}
						{/*						<span><a href="#"><i className="icon-share3" /></a></span>*/}
						{/*						<span><a href="#"><i className="icon-eye" /> 100</a></span>*/}
						{/*						<span><a href="#"><i className="icon-heart" /> 49</a></span>*/}
						{/*					</p>*/}
						{/*				</div>*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
						{/*<div className="row">*/}
						{/*	<div className="col-md-12 animate-box">*/}
						{/*		<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>*/}
						{/*	</div>*/}
						</div>
					</div>
				</section>
      </div>
    )
  }
}
