import React from 'react'
import styled from 'styled-components'

/*
const MasterWrapper = styled.div`
    width: 620px;
    height: ${props => props.image.height};
    margin: auto;
    background: lightgrey;
    @media only screen and (max-width: 680px) {
        width: auto;
        height: 300px;
        margin: 40px 30px;
    }
`
*/

const SectionImage = styled.img`
    width: 620px;
    height: 500px;
    margin: auto;
    @media only screen and (max-width: 680px) {
        width: auto;
        margin: 40px 30px;
    }

`

const Contentwidthimage = props => (
   
<SectionImage image={props.image}></SectionImage> 
       
)

export default Contentwidthimage