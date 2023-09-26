import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Amazon - SDE Intern <span> Fall 2023</span></h2>
                        <ul>
                          <li>Software Engineer Intern at Business Data Technology team.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Salesforce - SDE Intern <span> Summer 2023</span></h2>
                        <ul>
                          <li>Developed Google Analytics (GA) Audience data generator (React, NodeJS) to generate daily 300 test cases for GA integration with Salesforce Marketing Cloud, saving at least 24 hours for each customer support case.</li>
                          <li>Created Teamcity CI/CD template for automated UI test with headless Chrome and Docker adopted by 10+ engineers.</li>
                          <li>Developed Audience listing and search UI features (React, Redux) in GA Integration to be used by 400+ customers.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Amazon Robotics - SDE Intern <span> Spring 2023</span></h2>
                        <ul>
                          <li>Develop web application with microservice backend (Typescipt, React, NextJS, DynamoDB) to track robotics' health metrics
                            in 100+ Amazon warehouses. Reduce 90% navigation time for on-call engineers.</li>
                          <li>Develop collaborative editable form (Two-phase locking, NestJS, DynamoDB) enabling concurrent edit from multiple people for request gathering. Reduce 50% of redundant communication loop.</li>
                          <li>Setup cloud infrastructure as code (AWS CDK, Typescript) with AWS Virtual Private Cloud model to configure secure
                            connection to Amazon’s on-premise services.</li>
                          {/*<li>Implement authorization for internal monitoring web pages with secured Remote Procedure Call to on-premise services</li>*/}
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Athenahealth - SDE Intern <span>Summer 2022</span></h2>
                        <ul>
                          <li>Developed microservice application to automate claim tracking for hospitals. Estimated to save annualized 2 million USD.</li>
                          <li>Implemented Rest API, Spring Boot, JPA, JDBC, postgreSQL database and Flyway database migration to perform CRUD
                            operations on microservice app with full-coverage Junit tests.</li>
                          <li>Wrote end-to-end JUnit tests for request receive, database query, response body, and error handling.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
