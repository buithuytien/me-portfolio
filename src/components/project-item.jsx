import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';

export const ProjectItem = ({project_title, project_description, demo_link, github_link, img_link}) => {
    return (
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            {/*<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>*/}
            <div>
                {/*<div className="desc">*/}
                {/*    <div className="con">*/}
                        <h3 className={"pd-0 mb-0"}>
                            <a href={github_link} target={"_blank"}>{project_title}</a>
                        </h3>
                <Row>
                    <Col className={"col-md-5"}>
                        {/*<img*/}
                        {/*    src = "https://camo.githubusercontent.com/b520004c0f28e11e55152cd7634c96e10967f342ba002c8bdcff4d503396d571/68747470733a2f2f692e696d6775722e636f6d2f7976444734574b2e706e67"*/}
                        {/*    alt = "project image"*/}
                        {/*    className={"project-image"}*/}
                        {/*/>*/}
                        <div>
                            <img style={{maxWidth: "100%"}}
                                src={img_link}>
                            </img>
                        </div>
                        <br/>
                    </Col>
                    <Col className={"col-md-7"}>
                        <p>{project_description}</p>
                        <div>
                            <span><a href={demo_link} target="_blank"><i className="icon-youtube"/></a></span>
                            <span>    </span>
                            <span><a href={github_link} target="_blank"><i className="icon-github"/></a></span>
                        </div>
                    </Col>
                </Row>
                        {/*<img src={"https://camo.githubusercontent.com/b520004c0f28e11e55152cd7634c96e10967f342ba002c8bdcff4d503396d571/68747470733a2f2f692e696d6775722e636f6d2f7976444734574b2e706e67"}></img>*/}
                        {/*<span>{project_description}</span>*/}
                        {/*<p className="icon">*/}
                        {/*    <span><a href={demo_link} target="_blank"><i className="icon-youtube" /></a></span>*/}
                        {/*    <span>    </span>*/}
                        {/*    <span><a href={github_link} target="_blank"><i className="icon-github" /></a></span>*/}
                        {/*</p>*/}
                    </div>
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default ProjectItem