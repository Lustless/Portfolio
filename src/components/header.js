import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 500) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
                    <div className="MasterWrapper">
                      <div className="ChristieWrapper">
                        <div className="Christie">CHRISTIE TANG</div>
                        <div className="ChristieLogo"></div>
                      </div>
                      <div className="HeaderGroup">
                          <div className="about"><Link to="/about">about</Link></div>
                          <div className="portfolio"><Link to="/portfolio">portfolio</Link></div>
                          <div className="contact"><Link to="/contact">contact</Link></div>
                      </div>
                    </div>
            </div>
        )
    }
}

export default Header