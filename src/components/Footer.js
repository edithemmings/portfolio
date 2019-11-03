import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/edith-emmings/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/edieemm" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto: emmings.edith@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>&copy; Edith Emmings</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Footer
