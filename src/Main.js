import { Button } from 'react-bootstrap'
import React from 'react'
function Main() {
    const cardInfo = [
        { image: 'images/card1.jpg' },
        { image: 'images/card2.jpg' },
        { image: 'images/card3.png' },
        { image: 'images/card4.jpg' },
        { image: 'images/card5.jpg' },
        { image: 'images/card6.png' },
        { image: 'images/card7.jpg' },
        { image: 'images/card8.jpg' },
        { image: 'images/card9.jpg' },
    ]
    const cardInfotwo = [
        { image: 'images/card10.png' },
        { image: 'images/card11.png' },
        { image: 'images/card12.png' },
        { image: 'images/card13.png' },
        { image: 'images/card14.png' },
        { image: 'images/card15.jpg' },
        { image: 'images/card16.png' },
        { image: 'images/card17.png' },
        { image: 'images/card18.png' },
    ]
    const widgets = [
        { text: 'English' },
        { text: 'Subscriber Agreement' },
        { text: 'Privacy Policy' },
        { text: 'Your California Privacy Rights' },
        { text: 'Do Not Sell My Info' },
        { text: 'Children s Online Privacy Policy' },
        { text: 'Closed Captioning' },
        { text: 'Interest-Based Ads' },
        { text: 'Supported Devices' },
        { text: 'Help' },
        { text: 'Gift Disney+' },
        { text: 'About Us' },
    ]
    const widgetsnext = [
        { text: 'Disney+ Partner Program' },
        { text: 'The Premier Access plus' },
        { text: 'The Disney Bundle' },

    ]
    return (
        <section id="main">
            <section>
                <div className="App-header background-image" >
                    <img style={{ width: '50%' }} src="images/bundle.svg" alt="nahe dikhi?" />
                    <Button className="mt-3 p-3" style = {{width:'50%'}}>Get The Disney Bundle</Button>
                    <p className="mt-3 fs-6 text-center">stream now.<span>Terms Apply.</span></p>
                    <img style={{ width: '60%' }} src="images/main1.png" alt="nahe dikhi?" />
                    <p className="fs-6 mt-3 text-center">Sign up For Disney+ Only.<br />$7.99/month or $79.99/year.</p>
                </div>
            </section>
            {/*Section 2 */}
            <section>
                <div className="container">
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-lg-6 mx-auto">
                            <img className="img-fluid" src="images/main2.jpg" alt="nahe dikhi?" />
                        </div>
                        <div className="col-lg-6">
                            <h1 >Now Streaming with Premier Access</h1>
                            <p>See Raya and the Last Dragon before it's available to all Disney+ subscribers on June 4.
                            Watch as many times as you like with Premier Access for $29.99 and your Disney+ subscription.
                            <span>Learn more</span>.</p>
                            <Button>Get Primere Access Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            {/*Section 3 */}
            <section>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <img className=" mt-5 img-fluid" src="/images/main3.jpg" alt="nahe dikhi?" />
                        <div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Section 4 */}
            <section>
                <div className="container">
                    <div className="row mt-5" style={{ width: '100%' }}>
                        <h1 className="text-center mt-5">The new home for your favorites</h1>
                        <p className="text-center">An unprecedented collection of the world's most beloved movies and TV series.</p>
                    </div>
                    <div className="row">
                        {cardInfo.map((cardInfo, id) => (
                            <div className="col-md-4 mt-3">
                                <div className="card mb-md-0 mb-3 border-1 rounded-md overflow-hidden b-hover">
                                    <img className="card-img-top" src={cardInfo.image} alt="nahe dikhi?" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Section 5 */}
            <section>
                <div className="App-header-two mt-5 mb-5">
                    <Button className="p-3" style={{ width: '400px' }}>Get The Disney Bundle</Button>
                </div>
            </section>
            {/*Section 6 */}
            <section >
                <div className="container">
                    <div className="row align-items-center mt-5 mb-5">
                        <div className="col-lg-6 mx-auto">
                            <h1 >Stream now or download and go</h1>
                            <p className="text-white">Stream on 4 devices at once or download your favorites to watch later.
                             With dozens of titles in stunning 4K UHD, you can watch the way you always wished</p>
                        </div>
                        <div className="col-lg-6 ">
                            <img className="img-fluid" src="images/main4.png" alt="nahe dikhi?" />
                        </div>

                    </div>
                </div>
            </section>
            {/*Section 7 */}
            <section>
                <div className="container">
                    <div className="row mt-5" style={{ width: '100%' }}>
                        <h1 className="text-center mt-5">Stream exclusive Disney+ Originals</h1>
                        <p className="text-center">New stories from our incredible family of studios.</p>
                    </div>
                    <div className="row">
                        {cardInfotwo.map((cardInfo, id) => (
                            <div className="col-md-4 mt-3">
                                <div className="card mb-md-0 mb-3 border-1 rounded-md overflow-hidden b-hover">
                                    <img className="card-img-top" src={cardInfo.image} alt="nahe dikhi?" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Section 8 */}
            <section>
                <div className="container ">
                    <div className="row row-height border border-success border-3 mt-5 mb-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/main5.png" alt="nahe dikhi?" />
                        </div>
                        <div className="col-lg-6">
                            <p>Get The Disney Bundle to stream the best movies, shows,
                                 and sports with Disney+, Hulu, and ESPN+. Terms apply.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Footer */}
            <section>
                <div className="container ">
                    <div className="row mt-5 mb-5" style={{ width: '100%' }}>
                        <img className="img-fluid mx-auto mt-5" style={{ width: '120px' }} src="images/logo.svg" alt="nahe dikhi?" />
                    </div>
                    <div className="row">
                        {widgets.map((widgets, id) => (
                            <div className="col-md-1 mt-3">
                                <p className="fs">{widgets.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="row mx-auto" style={{ width: '50%' }}>
                        {widgetsnext.map((widgets, id) => (
                            <div className="col-md-4 mt-3">
                                <p>{widgets.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="row mx-auto" style={{ width: '100%' }}>
                        <div className="col-md-12 mt-1">
                            <p className="text-center mt-1">Disney. All rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>









        </section>

    )
}

export default Main

