import React, { Component } from "react";
import heroImg from "./assets/hero_img.svg";
import Helmet from "react-helmet";
import { H1, H2, Hero, Button, Layout } from "../../components/";
import "./styles.scss";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <main className="ContactPage">
          {/* Metadata */}
          <Helmet>
            <title>Overture - Contact Us</title>
            <meta
              name="description"
              content=" Looking for help with our software stack? Want to collaborate? Looking for employment? Get in touch with the Overture team."
            />
            <meta
              name="keywords"
              content="Overture, data science software, bioinformatics software, open-source software, cancer research, Ontario Institute for Cancer Research, OICR, development careers"
            />
          </Helmet>

          <Hero title="Contact Us" fgImage="img_contact" fgImageClass="contact-hero-img"/>
          <div
            className="is-hidden-mobile"
            style={{ width: "1px", height: "72px" }}
          />

          {/* Details / info */}
          <section className="section">
            <div className="container">
              {/* Header */}
              <div className="column is-offset-1 mb4">
                <H2>Get in Touch!</H2>
                <div className="mt3 yellow-bar" />
              </div>

              <div className="columns">
                {/* Copy: Bullets: laern more  */}
                <div className="column is-half is-offset-1">
                  <div>
                    <ul className="pb3">
                      <li className="bullet">
                        Looking for help with our software stack?
                      </li>
                      <li className="bullet">
                        Want to learn more about Overture?
                      </li>
                      <li className="bullet">Want to collaborate?</li>
                      <li className="bullet">Looking for employment? </li>
                    </ul>
                  </div>
                </div>

                {/* Contact / slack button. */}
                <div className="column">
                  <div>
                    There are many reasons to get in touch  with us and we want
                    to hear from you!
                  </div>

                  <div className="flex">
                    <Button
                      type="primary"
                      className="my2 mr2"
                      size="medium"
                      icon="mail"
                      externalLink="mailto:contact@overture.bio"
                      target="_self"
                    >
                      Contact Us
                    </Button>

                    <Button
                      type="secondary"
                      size="medium"
                      icon="slack"
                      externalLink="http://slack.overture.bio/"
                    >
                      Join us on Slack
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default ContactPage;
