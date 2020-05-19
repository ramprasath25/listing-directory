import React from 'react';

export default function AboutUs() {
    return (
        <div>
            <section className="about-wrapper bg-gradient-ps">
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1>IruFit is Body and Mind Fitness</h1>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                                <img src={require('../../images/about-illustration.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-contents section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 contents-wrapper">
                            <div class="contents">
                                <div class="row align-items-center">
                                    <div class="col-lg-5 col-sm-6">
                                        <img src={require('../../images/about-img1.png')} alt="" />
                                    </div>
                                    <div class="col-lg-6 offset-lg-1 col-sm-6 mt-5 mt-md-0">
                                        <h1>What is IruFit all about?</h1>
                                        <p>Human body is composed of five elements; Food that we eat is essentially made of Earth, Water, Fire, Air and Sky. Nutrition is just ratio of elements at right amount based on the region you belong to. There is no direct science or formula to it. I disagree nutrition and diet concepts as universal concept. It is the responsibility of each and every individual or family to find out the right nutritional methods based on the region, weather and food availability.</p>
                                        <p>
                                            We are all controlled by emotions and emotions are born as reactions from mind. A strong mind is important for an individual for a healthy and happy life. IruFit is all about body and mind fitness and that is what we are going to do. We are not going to teach or preach any methods, as no method is the right method. Best wishes to achieve your desired fitness!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contents">
                                <div class="row align-items-center">
                                    <div class="col-lg-5 col-sm-6">
                                        <h1>Get Listed </h1>
                                        <ul class="list-unstyled list-features p-top-15">
                                            <li>
                                                <div class="list-count"><span>1</span></div>
                                                <div class="list-content">
                                                    <h4>Claim</h4>
                                                    <p>Best way to start managing your business listing is by claiming it so you can update.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="list-count"><span>2</span></div>
                                                <div class="list-content">
                                                    <h4>Promote</h4>
                                                    <p>Promote your business to customers who need your services or products.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="list-count"><span>3</span></div>
                                                <div class="list-content">
                                                    <h4>Convert</h4>
                                                    <p>Turn visitors into members with exciting offers and services on your page..</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 offset-lg-1 text-right col-sm-6 mt-5 mt-md-0">
                                        <img src={require('../../images/about-img2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}