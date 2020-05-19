/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import '../../styles/bootstrap/bootstrap.scss';
import '../../styles/brands.scss';
import '../../styles/fontawesome.min.scss';
import '../../styles/jquery-ui.scss';
import '../../styles/line-awesome.min.scss';
import '../../styles/magnific-popup.scss';
import '../../styles/select2.min.scss';
import '../../styles/slick.scss';
import '../../styles/style.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ListPage from 'containers/ListPage/Loadable';
import ListingDetailsPage from 'containers/ListingDetailsPage/Loadable';
import AboutUs from 'containers/AboutPage/AboutPage.js';
import ContactUs from 'containers/ContactPage/ContactPage.js';
import Privacy from 'containers/PrivacyPolicyPage/PrivacyPage.js';
import SiteMap from 'containers/SiteMapPage/SiteMapPage';
import { categories, locations } from '../HomePage/const';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let currentLocation = window.location.pathname;
    let url_location = currentLocation.split('/')[1];
    let valid_location = false;
    let list_routes = '';
    let list_component = NotFoundPage;

    locations.forEach(item => {
      if (item.value === url_location) {
        valid_location = true
      }
    });
    if (valid_location) {
      let url_category = currentLocation.split('/')[3];
      let url_center = currentLocation.split('/')[4];
      if (url_center && url_center.length > 1) {
        list_component = ListingDetailsPage;
        list_routes = currentLocation;
      } else {
        list_component = ListPage;
        list_routes = currentLocation;
      }
    }
    return (
      <div>
        <Helmet titleTemplate="%s" defaultTitle="Irufit">
          <meta name="description" content="Irufit" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/privacy-policy" component={Privacy} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/site-map" component={SiteMap} />
          <Route path={list_routes} component={list_component} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
