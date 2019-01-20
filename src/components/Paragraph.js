import React from 'react'
import styled from 'styled-components'

const MasterGrid = styled.div`
    width: 620px;
    margin: 60px auto;
    align-self: center;
    @media only screen and (max-width: 680px) {
        width: auto;
        margin: 40px 30px;
    }
`

const SectionTitle = styled.h2`
`
const SectionDescription = styled.body`
`

const Paragraph = props => (
    <MasterGrid>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionDescription>{props.description}</SectionDescription>
    </MasterGrid>
                
)

export default Paragraph