import React from 'react'
import styled from 'styled-components'

const MasterGrid = styled.div`
    width: 620px;
    margin: 60px auto;
    align-self: center;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 680px) {
        width: auto;
        margin: 40px 30px;
        flex-direction: column;
    }
`

const SectionTitle = styled.h2`
`
const SectionDescription = styled.body`
`

const TextLeft = ({ children }) => {
    return (
    <MasterGrid>
        {children}
    </MasterGrid>
    );         
}

export default TextLeft