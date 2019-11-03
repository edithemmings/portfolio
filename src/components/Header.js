import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Edith Emmings profile photo" /></a>
                    <h1>
                        <strong>I'm Edith Emmings</strong>,   
                        <br/> a software engineer <br />
                        based in Minneapolis.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
