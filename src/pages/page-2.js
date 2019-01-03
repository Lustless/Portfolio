import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PortfolioIntro from '../components/PortfolioIntro';


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <PortfolioIntro>
      title="Name of the Project"
      description="12 sections"
      image={require('../images/gatsby-astronaut.png')}
      tools="photoshop"
      problem="this is so hard"
      solution="yaikr dafk"
    </PortfolioIntro>
  </Layout>


)

export default SecondPage
