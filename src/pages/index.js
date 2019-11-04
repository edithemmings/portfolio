import React from 'react'
import Helmet from 'react-helmet'
// import nodemailer from 'nodemailer'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'

const DEFAULT_IMAGES = [
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Open Doors', description: 'A web app to make it easier to find available emergency housing. (Prime Academy Solo Project, these numbers are palaceholders for demonstration purposes)' },
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Carbon Foodprint', description: 'A web app to track the carbon footprint of your food consumption. (First place at Hack the Gap, October 2019)' },
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Mina Families', description: 'A platform to connect new and expecting families with care providers. (Freelance contract)' },
    { id: '1', source: full01, thumbnail: thumb01, caption: 'The Wildlife Foundation', description: 'An informational website for an organization that works to conserve wildlife and indiginous land. (Freelance contract)' },
];

class HomeIndex extends React.Component {
    handleChange = (event, keyName) => {
        this.setState({
            ...this.state,
            [keyName]: event.target.value
        })
    }
    // handleEmailSubmit = () => {
    //     async function main() {
    //         // Generate test SMTP service account from ethereal.email
    //         // Only needed if you don't have a real mail account for testing
    //         let testAccount = await nodemailer.createTestAccount();

    //         // create reusable transporter object using the default SMTP transport
    //         let transporter = nodemailer.createTransport({
    //             host: 'smtp.gmail.com',
    //             port: 587,
    //             secure: false, // true for 465, false for other ports
    //             auth: {
    //                 user: process.env.EMAIL_ADDRESS, // generated ethereal user
    //                 pass: process.env.EMAIL_PASSWORD // generated ethereal password
    //             }
    //         });

    //         // send mail with defined transport object
    //         let info = await transporter.sendMail({
    //             from: '"Fred Foo 👻" <edieb.543@gmail.com>', // sender address
    //             to: 'emmings.edith@gmail.com', // list of receivers
    //             subject: `NEW MESSAGE from ${this.state.name}`, // Subject line
    //             text: `EMAIL: ${this.state.email}`, // plain text body
    //             html: `<b>${this.state.message}</b>` // html body
    //         });

    //         console.log('Message sent: %s', info.messageId);
    //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //         // Preview only available when sending through an Ethereal account
    //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //     }

    //     main().catch(console.error);
    // }
    render() {
        const siteTitle = "Edith Emmings"
        const siteDescription = "Edith Emmings Software Engineer Portfolio"
        const tools = [
            'React',
            'Redux',
            'Redux Sagas',
            'Node',
            'Express',
            'Postgres',
            'APIs',
            'JavaScript',
            'Python',
            'HTML',
            'CSS',
            'jQuery',
        ]

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
                            lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
                            tortor primis integer massa adipiscing id nisi accumsan pellentesque
                            commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus
                            id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="twopointfive">
                        <h2>Tools</h2>

                        <ul className="actions">
                            {tools.map(tool => {
                                return <li>{tool}</li>
                            })}
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input onChange={(e) => this.handleChange(e, 'name')} type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input onChange={(e) => this.handleChange(e, 'email')} type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea onChange={(e) => this.handleChange(e, 'message')} name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            {/* <div className="4u 12u$(small)">
                                    <ul className="labeled-icons">
                                        <li>
                                            <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                            1234 Somewhere Rd.<br />
                                            Nashville, TN 00000<br />
                                            United States
                                    </li>
                                        <li>
                                            <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                            000-000-0000
                                    </li>
                                        <li>
                                            <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                            <a href="#">hello@untitled.tld</a>
                                        </li>
                                    </ul>
                                </div> */}
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex