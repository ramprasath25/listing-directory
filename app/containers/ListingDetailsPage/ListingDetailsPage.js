/*
 * Listing Details Page
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SellerInfo from '../../components/SellerInfo';
import BusinessHours from '../../components/BusinessHours';
import FAQ from '../../components/FAQ';
import ReviewList from '../../components/ReviewsList';
import AddReview from '../../components/AddReview';
import TagDetails from '../../components/Tags/TagDetails';
import FeatureDetails from '../../components/Features/FeaturesDetails';
import queryString from 'query-string';
import axios from 'axios';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    width: '40%'
  }
};
Modal.setAppElement('#app');
export default class ListingDetailsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.location.key !== this.props.location.key) {
      window.location.reload();
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.loadListDetails(this.props.location);
  }
  FormatTitle(center, locality, location) {
    return `${center} in ${locality}, ${location}`
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.claimBusiness(event.target);
    this.setState({ showModal: false });
  }
  render() {
    let center_title = (this.props.data.listDetailsData.title) ? this.props.data.listDetailsData.title : 'irufit';
    let location = (this.props.data.listDetailsData.location) ? this.props.data.listDetailsData.location.title : 'irufit';
    let locality = (this.props.data.listDetailsData.locality) ? this.props.data.listDetailsData.locality.title : 'irufit';
    let claimed = (this.props.data.listDetailsData) ? this.props.data.listDetailsData.claimed : true;
    let claim_text = (!claimed) ? 'Claim This Business' : 'Claimed';
    let list_features = '';
    if (this.props.data.listDetailsData.categories) {
      this.props.data.listDetailsData.categories.forEach((item, index) => {
        if (index === this.props.data.listDetailsData.categories.length - 1) {
          list_features += item.title + '.'
        } else if (index == this.props.data.listDetailsData.categories.length - 2) {
          list_features += item.title + ' & '
        } else {
          list_features += item.title + ', '
        }

      });
    }
    let listDetailsTitle = this.FormatTitle(center_title, locality, location);
    let location_path = this.props.location.pathname.split('/');
    let str
    if (location_path.length === 5) {
      str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[2]}`}><span>{location_path[2]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[3]}`}><span>{location_path[3]}</span></Link></div>
    } else if (location_path.length === 4) {
      str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[2]}`}><span>{location_path[2]}</span></Link></div>
    } else {
      str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link></div>
    }
    return (
      <div>
        <Helmet>
          <title>{listDetailsTitle}</title>
          <meta
            name="description"
            content="All your fitness needs ends in IruFit. Find your gyms, yoga, zumba, martial arts, dance classes, personal trainers, coach and physiotherapist in IruFit."
          />
        </Helmet>
        <div className="listing-info content_above">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                {/* <ul className="list-unstyled listing-info--badges">
                  <li><span className="atbd_badge atbd_badge_featured">Featured!!!!</span></li>
                  <li><span className="atbd_badge atbd_badge_popular">Popular</span></li>
                </ul> */}
                {str}
                <ul className="list-unstyled listing-info--meta">
                  {/* <li>
                    <div className="average-ratings">
                      <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star"></i></span>
                      <span><strong>26</strong> Reviews</span>
                    </div>
                  </li> */}
                  <li>
                    <div className="atbd_listing_category">
                      {/* <a href=""><span className="la la-glass"></span>{this.props.data.listDetailsData.categories[0].title}</a> */}
                    </div>
                  </li>
                </ul>
                <h1>{this.props.data.listDetailsData.title}</h1>
                <p className="subtitle">{this.props.data.listDetailsData.tagline}</p>
              </div>
              <div className="col-lg-4 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end">
                <div className="atbd_listing_action_area">
                  <div className="atbd_action atbd_save">
                    <div className="action_button">
                      <a href="" className="atbdp-favourites"><span className="la la-heart-o"></span> Save</a>
                    </div>
                  </div>
                  <div className="atbd_action atbd_share dropdown">
                    <span className="dropdown-toggle" id="social-links" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                      <span className="la la-share"></span>Share
                                </span>
                  </div>
                  <div className="atbd_action atbd_report">
                    <div className="action_button">
                      <a href="" data-toggle="modal" data-target="#atbdp-report-abuse-modal"><span className="la la-flag-o"></span> Report</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
          onRequestClose={this.handleCloseModal}
        >
          <div className="atbdp-widget-listing-contact contact-form">
            <form className="form-vertical" role="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" id="atbdp-contact-name" placeholder={listDetailsTitle} name="centreDetails" required="" disabled value={listDetailsTitle} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="atbdp-contact-name" placeholder="Name" name="username" required minLength={2} maxLength={20} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="atbdp-contact-name" placeholder="Mobile" name="mobile" required minLength={10} maxLength={10} />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="atbdp-contact-email" placeholder="Email" name="email" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="atbdp-contact-message" rows="6" placeholder="Message" name="message"></textarea>
              </div>
              <div className="form-group">
                <input type="text" hidden value={this.props.data.listDetailsData._id} name="_id" />
              </div>
              <button type="submit" className="btn btn-gradient btn-gradient-three">Claim</button>
              <button onClick={this.handleCloseModal} className="btn">Cancel</button>
            </form>
          </div>

        </Modal>
        <section className="directory_listiing_detail_area single_area section-bg section-padding-strict">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="atbd_content_module atbd_listing_details">
                  <div className="atbd_content_module__tittle_area">
                    <div className="atbd_area_title">
                      <h4><span className="la la-file-text-o"></span>Details</h4>
                    </div>
                  </div>
                  <div className="atbdb_content_module_contents">
                    <p>{center_title} in {locality}, {location} is a well-known fitness center within a km radius of {locality}. This fitness center offers many fitness programs on {list_features} Please walk into the fitness center in the evening hours to experience the best what {center_title} has to offer.</p>
                  </div>
                </div>

                <FeatureDetails data={this.props.data.listDetailsData.features} />
                {/* <FAQ /> */}
                {/* <ReviewList /> */}
                {/* <AddReview /> */}
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                {/* <SellerInfo data={this.props.data.listDetailsData.sellerInfo} /> */}
                <div className="widget atbd_widget widget_claim_listing">
                  <button className="btn btn-block btn-gradient btn-gradient-three btn-lg claim-btn"
                    onClick={this.handleOpenModal} disabled={claimed}>
                    {claim_text}
                  </button>
                </div>
                <BusinessHours data={this.props.data.listDetailsData.businessHours} />
                {/* <TagDetails data={this.props.data.listDetailsData.tags} /> */}
                {/* <div className="widget atbd_widget widget-card">
                  <div className="atbd_widget_title">
                    <h4><span className="la la-map-marker"></span> Sidebar Map</h4>
                  </div>
                  <div className="widget-body atbdb_content_module_contents">
                    <div className="map" id="map-two"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}
