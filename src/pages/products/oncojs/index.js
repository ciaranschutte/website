import React from 'react'
import Helmet from 'react-helmet'
import {
  H2,
  Button,
  Layout,
  ProductHero,
  ProductFeature,
  WindowGui,
  BottomCallout,
  Callout,
} from '../../../components'

// Screenshots
import lolliplotScreen from './assets/lolliplot_screen.png'
import oncogridScreen from './assets/oncogrid_screen.jpg'
import sapienScreen from './assets/sapien_screen.jpg'
import survivalplotScreen from './assets/survivalplot_screen.jpg'
import pathwayviewerScreen from './assets/pathwayviewer_screen.jpg'

const TargetHeader = ({ children }) => (
  <div>
    <H2>{children}</H2>
    <div className="my3 yellow-bar" />
  </div>
)

const OncoPage = () => (
  <Layout>
    <main className="OncoJs">
      {/* Metadata TODO - get updated metadata */}
      <Helmet>
        <title>Overture Products - Oncojs </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      {/* Hero */}
      <ProductHero
        title="OncoJS"
        subTitle="Bring data to life with stunning visualizations and real-time analysis."
        cardText="A picture is worth a thousand data points, so we created OncoJS to help see the science! Interactive and beautifully styled components that complete real-time analysis can bring your visualizations to the next level."
        getStartedLink="https://github.com/oncojs/"
        badge={{ color: 'red', text: 'Analyze & Discover' }}
        logo="logoOncojs"
        progressType="ga"
      />

      {/* Target Features + Screenshot */}

      {/* LOLLIPOP */}
      <section className="pb4">
        <div className="container">
          <div className="columns column items-center pt4">
            <div className="column is-5-desktop pt2">
              <TargetHeader>Lollipop</TargetHeader>

              <p className="pb2">
                {' '}
                Visualize the location of mutations on a protein structure.{' '}
              </p>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Lollipop height is based on cohort frequency."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Zoom in/out of protein domains."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Pass in a d3 object (v3 or v4) to generate your plot."
                />
              </div>

              <div className="mt2">
                <a
                  className="bold text-magenta"
                  target="_blank"
                  href="https://portal.gdc.cancer.gov/genes/ENSG00000183914"
                >
                  Live example >{' '}
                </a>
              </div>
            </div>

            {/* screenshot */}
            <div className="column  is-offset-1 flex items-center">
              <WindowGui>
                <img src={lolliplotScreen} />
              </WindowGui>
            </div>
          </div>
        </div>
      </section>

      {/* ONCOGRID */}
      <section className="pb4 bg-grey">
        <div className="container">
          <div className="columns column items-center pt4">
            {/* screenshot */}
            <div className="column is-6 flex items-center">
              <WindowGui>
                <img src={oncogridScreen} />
              </WindowGui>
            </div>

            <div className="column pt2 is-5-desktop pl3 pt2">
              <TargetHeader>Oncogrid</TargetHeader>

              <p className="pb2">
                Identify trends in mutation co-occurrence by plotting mutations
                and donors together on an Oncogrid.
              </p>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Customize your grid by plotting clinical data tracks along the same axis."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Interactively explore mutation trends with heat-map view and scrolling."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Get started easily with examples in API documents."
                />
              </div>

              <div className="mt2">
                <a
                  className="bold text-magenta"
                  target="_blank"
                  href="https://dcc.icgc.org/analysis/view/oncogrid/ce6fd9fd-b76e-488d-88a5-93bdc690f79e"
                >
                  Live example >{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SURVIVAL PLOT */}

      <section className="pb4">
        <div className="container">
          <div className="columns column items-center pt4">
            <div className="column pt2 is-5-desktop pt2">
              <TargetHeader>Survivalplot</TargetHeader>

              <p className="pb2">
                Visualize and compare datasets to determine probable health
                outcomes and their frequency in patient groups.{' '}
              </p>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="View summary data and observe survival patterns over time."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Compare different patterns and trends using expansive datasets."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Easily download summaries and graphs for 360 degree analysis."
                />
              </div>

              <div className="mt2">
                <a
                  className="bold text-magenta"
                  target="_blank"
                  href="https://dcc.icgc.org/analysis/view/phenotype/15c7c81a-7717-49e3-a0f7-be09fdc400b6"
                >
                  Live example >{' '}
                </a>
              </div>
            </div>

            {/* screenshot */}
            <div className="column is-offset-1 flex items-center">
              <WindowGui>
                <img src={survivalplotScreen} />
              </WindowGui>
            </div>
          </div>
        </div>
      </section>

      {/* SAPIEN */}
      <section className="pb4 bg-grey">
        <div className="container">
          <div className="columns column items-center pt4">
            {/* screenshot */}
            <div className="column is-6 flex items-center">
              <WindowGui>
                <img src={sapienScreen} />
              </WindowGui>
            </div>

            <div className="column pt2 is-5-desktop pl3 pt2">
              <TargetHeader>Sapien</TargetHeader>

              <p>Correlate data to an interactive map of the human body.</p>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Provide an opportunity for your users to learn and explore data visually."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Deliver an interactive experience for users to consume key information and data."
                />
              </div>

              <div className="mt2">
                <a
                  className="bold text-magenta"
                  target="_blank"
                  href="https://portal.gdc.cancer.gov/"
                >
                  Live example >{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYVIEWER */}

      <section className="pb4">
        <div className="container">
          <div className="columns column items-center pt4">
            <div className="column pt2 is-5-desktop pt2">
              <TargetHeader>Pathwayviewer</TargetHeader>

              <p className="pb2">
                {' '}
                A straightforward component for visualization of reactome
                pathways.
              </p>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="See the biology: visualize reactome data in a quick and easy way."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details="Explore your data: understand pathways and predict their implications."
                />
              </div>

              <div className="">
                <ProductFeature
                  size="small"
                  icon="target"
                  className="p0"
                  details=" View and synthesize data in the context of different pathways."
                />
              </div>

              <div className="mt2">
                <a
                  className="bold text-magenta"
                  target="_blank"
                  href="https://portal.gdc.cancer.gov/"
                >
                  Live example >{' '}
                </a>
              </div>
            </div>

            {/* screenshot */}
            <div className="column is-offset-1 flex items-center">
              <WindowGui>
                <img src={pathwayviewerScreen} />
              </WindowGui>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Terminals / steps */}

      <BottomCallout>
        <Callout
          icon="githubYellow"
          description="Bring data to life with stunning visualizations and real-time analysis."
          className="center"
        >
          <Button
            type="primary"
            size="medium"
            externalLink="https://github.com/oncojs/"
            icon="githubWhite"
          >
            Get Started
          </Button>
        </Callout>
      </BottomCallout>
    </main>
  </Layout>
)

export default OncoPage
