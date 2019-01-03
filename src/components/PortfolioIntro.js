import React from 'react'
import styled from 'styled-components'

const IntroWrapper = styled.div`
    height: 1000px;
`

const SectionImage = styled.img`
    background: url(${props => props.image});
    height: 100px; <--500px
    width: 600px;
    background-size: cover;
    border: 1px solid black;
    margin-bottom: 110px;
`
const MasterGrid = styled.div`
`

const SectionTitle = styled.h1`
    margin: 25px 0px;
`
const SectionDescription = styled.body`
`
const PinkBreak = styled.div`
    width: 75px;
    height: 5px;
    background: var(--pink);
    margin: 40px 0px;
`
const Tools = styled.h4`
    margin-bottom: 40px;
`
const Problem = styled.div`
`
const ProblemTitle = styled.h3`
    font-size: 17px;
    line-height: 26px;
    font-weight: 700;
`
const ProblemText = styled.body`
`
const Solution = styled.div`
`
const SolutionTitle = styled.h3`
    font-size: 17px;
    line-height: 26px;
    font-weight: 700;
`
const SolutionText = styled.body`
`

const PortfolioIntro = props => (
    <IntroWrapper>
        <SectionImage image={props.image} />

        <MasterGrid>
            <SectionTitle>title{props.title}</SectionTitle>
            <SectionDescription>descrip{props.description}</SectionDescription>
            <PinkBreak />
            <Tools>Tools: {props.tools}</Tools>
            <Problem>
                <ProblemTitle>Problem</ProblemTitle>
                <ProblemText>test{props.problem}</ProblemText>
            </Problem>
            <Solution>
                <SolutionTitle>Solution</SolutionTitle>
                <SolutionText>test{props.solution}</SolutionText>
            </Solution>
        </MasterGrid>
    </IntroWrapper>
)

export default PortfolioIntro