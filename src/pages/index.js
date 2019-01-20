import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>Hello World, this is my first styled component!</Title>
    <h1>Questions</h1>
    <p>How come my open sans bold isn't rendering correctly?</p>
    <p>I need help with parallax</p>
    <p>how to do nested components? two side by side</p>
    <p>how come i cant get images to show???? struggling just to simply center an image with a certain width</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
