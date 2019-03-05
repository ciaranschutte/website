/**
 * This component represents the `Case Studies` page.
 * The page is made up of
 * a) several case studies and;
 * b) a navigation component for scrolling / jumping between different case studies.
 * NOTE: The structure of a case studies is laregly the same, so we render
 * the UI based on a data structure in ./data.js
 * This component is a Class component because
 * a) each case study has a "slider" for displaying screenshots
 * b) for indicating the currently selected logo in the navigation.
 */

import React, { Component } from "react";
import { H1, H4, Layout } from "../../components";
import CaseStudy from "./case-study";
import caseData from "./data";
import Navigation from "./navigation";
import "./styles.scss";
import { Waypoint } from "react-waypoint";

class CaseStudiesPage extends Component {

  state = {
    currentCase: null
  }

  _handleWaypointEnter(caseStudy, e) {
    console.log("entered area", caseStudy);
    this.setState({currentCase: caseStudy.title})
  }

  _handleWaypointLeave(caseStudy, e) {
    console.log("left area", caseStudy);
    // this.setState({currentCase: caseStudy.title})
  }


  render() {
    return (
      <Layout>
        <main className="CaseStudiesPage">
          {/* HERO */}
          <section className="case-hero">
            <div className="case-hero-content">
              <H1 className="case-heading">Case Studies</H1>
              <H4>
                We’ve participated in projects from small to large. We welcome
                the chance to collaborate with you and bring your data into the
                future with the Overture stack!
              </H4>
            </div>
          </section>

          {/* Case Study Interactive NavBar */}
          <Navigation currentCase={this.state.currentCase} />

          {/* Case Study Component */}
          {caseData.map(d => {
            return (
              <Waypoint
                onEnter={(e) => this._handleWaypointEnter(d, e)}
                onLeave={(e) => this._handleWaypointLeave(d, e)}
              >
                <div>
                  <CaseStudy
                    title={d.title}
                    description={{ __html: d.description }}
                    clientListItem={d.listItems}
                    clientLink={d.checkItOutLink}
                    logo={d.logo}
                    details={d.details}
                  />
                </div>
              </Waypoint>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default CaseStudiesPage;