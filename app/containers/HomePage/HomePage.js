/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HomepageList from '../../components/HomepageList';
import { categories, locations } from './const';
export default class HomePage extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.load_popular_list()
  }
  goToList(path) {
    window.location.href = '/chennai/' + path + '?start=1';
  }
  render() {

    const HomePageList = this.props.homepage_popular_list.popularList.map((item, index) => {
      return <HomepageList key={index} list={item} />
    });
    const select_options = categories.map((item, index) => {
      return <option key={index}>{item.title}</option>
    });
    const home_categories = categories.map((item, index) => {

      let path = item.path.toLowerCase();
      return (
        <div className="col-lg-3 col-sm-6" key={index}>
          <div className="category-single category--img" onClick={() => this.goToList(path)} >
            <Link to="">
              <figure className="category--img4">
                <img src={require(`../../images/${item.img}`)} alt="" />
                <figcaption className="overlay-bg">
                  <span className="cat-box">
                    <div>
                      <div className="icon">
                        <img src={require(`../../images/${item.icon}`)} />
                      </div>
                      <h4 className="cat-name">{item.title}</h4>
                    </div>
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      )
    });
    const select_locations = locations.map((item, index) => {
      return <option key={index}>{item.title}</option>
    })
    return (
      <article>
        <Helmet>
          <title>Fitness Destination</title>
          <meta name="description" content="All your fitness needs ends in IruFit. Find your gyms, yoga, zumba, martial arts, dance classes, personal trainers, coach and physiotherapist in IruFit." />
        </Helmet>
        <section className="intro-wrapper bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src={require('../../images/intro_1.jpg')} alt="" />
          </div>
          <div className="directory_content_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="search_title_area">
                    <h2 className="title">Find the Best Fitness in your city</h2>
                    <p className="sub_title">Let's uncover the best fitness destination nearest to you.</p>
                  </div>
                  <form action="/" className="search_form">
                    <div className="atbd_seach_fields_wrapper">
                      <div className="single_search_field search_query">
                        <input className="form-control search_fields" type="text" placeholder="What are you looking for?" />
                      </div>
                      <div className="form-group">
                        <div className="select-basic single_search_field">
                          <select className="form-control">
                            <option>Category</option>
                            {select_options}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="select-basic single_search_field">
                          <select className="form-control">
                            <option>Location</option>
                            {select_locations}
                          </select>
                        </div>
                      </div>
                      <div className="atbd_submit_btn">
                        <button type="submit" className="btn btn-block btn-gradient btn-gradient-three btn-md btn_search">Search</button>
                      </div>
                    </div>
                  </form>
                  <div className="directory_home_category_area">
                    <ul className="categories">
                      <li><span className="color-primary"><img src={require('../../images/gym.png')} /></span></li>
                      <li><span className="color-success"><img src={require('../../images/zumba.png')} /></span></li>
                      <li><span className="color-warning"><img src={require('../../images/crossfunction.png')} /></span></li>
                      <li><span className="color-danger"><img src={require('../../images/yoga.png')} /></span></li>
                      <li><span className="color-danger"><img src={require('../../images/fitness.png')} /></span></li>
                    </ul>
                    <ul className="categories">
                      <li><span className="color-danger"><img src={require('../../images/kickboxing.png')} /></span></li>
                      <li><span className="color-danger"><img src={require('../../images/dance.png')} /></span></li>
                      <li><span className="color-danger"><img src={require('../../images/swimming.png')} /></span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="categories-cards section-padding-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>What Kind of Activity do you Want to try?</h2>
                  <p>Just looking around? Let us suggest you something!.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {home_categories}
            </div>
          </div>
        </section>
        <section className="listing-cards section-bg section-padding" style={{backgroundColor:'#fafafa'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Best Listings Around You</h2>
                  <p>Explore the popular listings around your locality</p>
                </div>
              </div>
              <div className="listing-cards-wrapper col-lg-12">
                <div className="row">
                  {HomePageList}
                  <div className="col-lg-12 text-center m-top-20">
                    <a href="" className="btn btn-gradient btn-gradient-three">Explore All 200+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="cta section-padding border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Why <span>Irufit</span> for your Business?</h2>
                  <p>Explore the popular listings around the world</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <img src={require('../../images/illustration-1.svg')} alt="" className="svg" />
                  </div>
                  <div className="col-lg-5 offset-lg-1 col-md-6 mt-5 mt-md-0">
                    <ul className="feature-list-wrapper list-unstyled">
                      <li>
                        <div className="icon"><span className="circle-secondary"><i className="la la-check-circle"></i></span></div>
                        <div className="list-content">
                          <h4>Claim Listing</h4>
                          <p>Best way to start managing your business listing is by claiming it so you can update.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><span className="circle-success"><i className="la la-money"></i></span></div>
                        <div className="list-content">
                          <h4>Paid Listing</h4>
                          <p>Turn your visitors into members with exciting offers and services on your page.</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><span className="circle-primary"><i className="la la-line-chart"></i></span></div>
                        <div className="list-content">
                          <h4>Promote your Business</h4>
                          <p>Promote your business to target customers who need your services or products.</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="action-btns list-unstyled">
                      <li><a href="" className="btn btn-primary">Submit Listings</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* <section className="subscribe-wrapper"> 
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1>Subscribe to Newsletter</h1>
                <p>Subscribe to get update and information. Don't worry, we won't send spam!</p>
                <form action="/" className="subscribe-form m-top-40">
                  <div className="form-group">
                    <span className="la la-envelope-o"></span>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <button className="btn btn-gradient btn-gradient-one">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </article>
    );
  }
}

