import React from 'react'
import styled from 'styled-components'

const MasterWrapper = styled.div`
`

const IntroWrapper = styled.div`
    width: 620px;
    align-self: center;
    display: block;
    margin: 0 auto;
    @media only screen and (max-width: 680px) {
        width: auto;
        margin: 0px 30px;
    }
`
const ProblemSolution = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 110px;
`

const SectionImage = styled.img`
    background: url(${props => props.image});
    height: 500px;
    width: 100%;
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
    margin-right: 10px;
`
const ProblemTitle = styled.h3`
    font-size: 17px;
    line-height: 26px;
    font-weight: 700;
`
const ProblemText = styled.body`
`
const Solution = styled.div`
    margin-left: 10px;
`
const SolutionTitle = styled.h3`
    font-size: 17px;
    line-height: 26px;
    font-weight: 700;
`
const SolutionText = styled.body`
`

const PortfolioIntro = props => (
    <MasterWrapper>
        <SectionImage image={props.image} />
        <IntroWrapper>
            <MasterGrid>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionDescription>{props.description}</SectionDescription>
                <PinkBreak />
                <Tools>Tools: {props.tools}</Tools>
                <ProblemSolution>
                    <Problem>
                        <ProblemTitle>Problem</ProblemTitle>
                        <ProblemText>{props.problem}</ProblemText>
                    </Problem>
                    <Solution>
                        <SolutionTitle>Solution</SolutionTitle>
                        <SolutionText>{props.solution}</SolutionText>
                    </Solution>
                </ProblemSolution>
            </MasterGrid>
        </IntroWrapper>
    </MasterWrapper>
)

export default PortfolioIntro