/**
 * Component: Display the Product Sub-Menu on mouse over / tap.
*/
import React from "react";
import Link from "gatsby-link";
import Badge from "../../Badge/index";
import Icon from "../../Icon/index";
import './styles.scss'

const ProductsPopup = ({ closeMenus, className }) => {
  return (
    <div className={`ProductsPopup ${className}`}>
      <div className={`menu-items ${className}`}>

        {/* section: Text overview - Desktop only */}
        <section className="menu-section explore-text">
          <div className="heading-text">Explore our products</div>
          <div className="body-text">Overture is a collection of open-source products for big-data genomic science that you can use to support your research.</div>

        </section>

        {/* section: DISCOVERY */}
        <section className="menu-section">
          <Badge color="pink">Core</Badge>
          <div className="menu-section-links">
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/ego"
            >
              Ego
            </Link>
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/song"
            >
              Song
            </Link>
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/score"
            >
              Score
            </Link>
          </div>
        </section>

        {/* section: DISCOVERY */}

        <section className="menu-section">
          <Badge color="blue">Discovery</Badge>
          <div className="menu-section-links">
            <a
              onClick={() => closeMenus()}
              target="_blank"
              className="menu-section-link"
              href="https://github.com/overture-stack/arranger"
            >
              Arranger
              <Icon className="pl1" img="githubGrey" />
            </a>
            <a
              onClick={() => closeMenus()}
              href="https://github.com/oncojs"
              className="menu-section-link"
              to="/oncojs"
            >
              OncoJS
              <Icon className="pl1" img="githubGrey" />
            </a>
          </div>
        </section>

        {/* section: DISCOVERY */}

        <section className="menu-section">
          <Badge color="yellow">Analysis</Badge>

          <div className="menu-section-links">
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/jukebox"
            >
              Jukebox
            </Link>
            <a
              onClick={() => closeMenus()}
              className="menu-section-link"
              href="https://github.com/jtracker-io"
            >
              JTracker
              <Icon className="pl1" img="githubGrey" />
            </a>
          </div>
        </section>

        {/* section: DISCOVERY */}

        <section className="menu-section">
          <Badge color="green">Social</Badge>
          <div className="menu-section-links">
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/persona"
            >
              Persona
            </Link>
            <Link
              onClick={() => closeMenus()}
              className="menu-section-link"
              to="/products/riff"
            >
              Riff
            </Link>
          </div>
        </section>

        {/* section: MANAGEMENT */}

        <section className="menu-section" style={{ flexShrink: 0 }}>
          <Badge color="red">Management</Badge>
          <div className="menu-section-links">
            <a
              onClick={() => closeMenus()}
              href="https://github.com/CancerCollaboratory/billing"
              className="menu-section-link"
              to="/billing"
            >
              Billing & Usage
              <Icon className="pl1" img="githubGrey" />
            </a>
            <a
              onClick={() => closeMenus()}
              className="menu-section-link"
              href="https://github.com/overture-stack/enrolment"
            >
              Enrolment
              <Icon className="pl1" img="githubGrey" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPopup