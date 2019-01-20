import React from 'react'
import styled from 'styled-components'

const MasterWrapper = styled.div`
    /*perspective: 1px;
    transform-style: preserve-3d;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px solid black 
    */
`

const IntroWrapper = styled.div`
    display: block;
    position: relative;
    background-color: white;
    z-index: 1;
    padding-top: 100px;
    margin-bottom: 100px;
    @media only screen and (max-width: 680px) {
        padding-top: 40px;
        margin-bottom: 40px;
    }
`
const ProblemSolution = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 680px) {
        flex-direction: column;
    }
`

const SectionImage = styled.img`
    background: url(${props => props.image});
    width: 100%;
    background-size: cover;
    height: 500px;
    justify-content: center;
    align-items: center;
    /*
    display: flex;
    flex: 1 0 auto;
    position: relative;
    z-index: -1;
    transform: translateZ(-1px) scale(2);
    */
`

const MasterGrid = styled.div`
    width: 620px;
    margin: 0 auto;
    align-self: center;
    @media only screen and (max-width: 680px) {
        width: auto;
        margin: 0px 30px;
    }
`

const SectionTitle = styled.h1`
    margin: 25px 0px;
    @media only screen and (max-width: 680px) {
        font-size: 47px;
        line-height: 52px;
    }
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
    @media only screen and (max-width: 680px) {
        margin-left: 0px;
        margin-top: 20px;
    }
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