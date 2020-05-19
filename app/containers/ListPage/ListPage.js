/*
 * ListPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import List from '../../components/List';
import Breadcrumb from '../../components/BreadCrumb'
import FeatureList from '../../components/Features/FeaturesList';
import Tags from '../../components/Tags/TagsList';
import Ratings from '../../components/Ratings';
import Locations from '../../components/LocationsList';
import queryString from 'query-string'
export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }
    onRouteChanged() {
        let pathname = this.props.location;
        this.props.loadList(pathname);
    }
    componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let pathname = this.props.location;
        this.props.loadList(pathname);
        this.props.loadlocation(pathname);
        // this.props.loadtags(querystring);
        this.props.loadfeatures(pathname);

    }
    
    convertCase(str) {
        let splitStr = str.split('-');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
    componentWillReceiveProps(props) {
        let location_url = window.location.pathname.split('/');
        if (location_url.length > 3) {
            let locality_url = this.convertCase(location_url[2])
            this.props.locality.forEach((item, index) => {
                if (locality_url === item.title) {
                    item.checked = true;
                }
            });
        }
    }
    handleLocationChange = (e) => {
        this.props.locality[index].checked = !this.props.locality[index].checked;
        let selected_locality = '';
        this.props.locality.forEach(loc => {
            if (loc.checked) {
                selected_locality += '/' + loc.title;
            }
        });
        let location_category_url = this.props.location.pathname.split('/');
        let locality_url = '/' + location_category_url[1] + '/' + location_category_url[2] + selected_locality + this.props.location.search;
        this.props.history.replace(locality_url);
        this.props.loadList(this.props.history.location);
    }
    handleFeatureChange = (index) => {
        this.props.features[index].checked = !this.props.features[index].checked;
        let selected_feature = [];
        this.props.features.forEach(fea => {
            if (fea.checked) {
                selected_feature.push(fea.title);
            }
        });
        let feature_url = '';
        if (selected_feature.length >= 1) {
            feature_url = '&features=' + selected_feature.join();
        }
        let querystring = queryString.parse(this.props.location.search);
        let page = {
            'start': parseInt(querystring.start)
        }
        page = queryString.stringify(page);
        let final_url = '?' + page + feature_url;
        this.props.history.replace({ search: final_url });
        // this.props.loadList(this.props.history.location)
    }
    handleTagChange = (index) => {
        alert("Tags" + index);
    }
    loadNextList = (e) => {
        e.preventDefault();
        let querystring = queryString.parse(this.props.location.search);
        querystring['start'] = (querystring['start']) ? (parseInt(querystring['start']) + 1) : 1;
        let stingified = queryString.stringify(querystring);
        this.props.history.push('?' + stingified);
        // this.props.loadList(this.props.location);
    }
    loadPreviousList = (e) => {
        e.preventDefault();
        let querystring = queryString.parse(this.props.location.search);
        querystring['start'] = (parseInt(querystring['start']) == 1) ? 1 : parseInt(querystring['start']) - 1;
        let stingified = queryString.stringify(querystring);
        this.props.history.push('?' + stingified);
        // this.props.loadList(this.props.location);
    }
    handleLocationClick = (e) => {
        let selected_locality = e.target.value.toLowerCase().replace(/ /g, '-');
        let location_category_url = this.props.location.pathname.split('/');
        let category_url = (location_category_url.length > 3) ? location_category_url[3] : location_category_url[2]
        let locality_url = '/' + location_category_url[1] + '/' + selected_locality + '/' + category_url + this.props.location.search;
        this.props.history.replace(locality_url);
        // this.props.loadList(this.props.history.location);
    }
    render() {
        
        let pathName = this.props.location.pathname.split('/');
        let title = (pathName[2]) ? pathName[2] + ' in ' + pathName[1] : pathName[1];
        let list_item;
        if (this.props.data.listsData && this.props.data.listsData.length > 0) {
            list_item = this.props.data.listsData.map((item, index) => {
                item['list_category'] = this.props.location.pathname.split('/')[2]
                return <List key={index} data={item} />
            });
        } else {
            list_item = <p className="nodatafound">No Data found</p>;
        }
        let location_list = this.props.locality.map((item, index) => {
            return <Locations data={item} key={index} onClick={this.handleLocationClick} />
        });
        let feature_list = this.props.features.map((item, index) => {
            return <FeatureList data={item} key={index} onChange={() => this.handleFeatureChange(index, item.title)} />
        });
        let tag_list = this.props.tags.map((item, index) => {
            return <Tags data={item} key={index} onClick={() => this.handleTagChange(index)} />
        });
        return (
            <article>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content="All your fitness needs ends in IruFit. Find your gyms, yoga, zumba, martial arts, dance classes, personal trainers, coach and physiotherapist in IruFit." />
                </Helmet>
                <section className="all-listing-wrapper section-bg">
                    <div className="container">
                        <div className="row">
                            <Breadcrumb header={this.props.location.pathname} />
                            <div className="col-lg-12 listing-items">
                                <div className="row">
                                    <div className="col-lg-4 order-lg-0 order-1 mt-5 mt-lg-0">
                                        <div className="listings-sidebar">
                                            <div className="search-area default-ad-search">

                                                <div className="filter-checklist">
                                                    <h5>Filter by Location</h5>
                                                    <div className="control-group hideContent">
                                                        {location_list}
                                                    </div>
                                                    {/* <div className="checklist-items feature-checklist hideContent">
                                                            {location_list}
                                                        </div> */}
                                                </div>
                                                {/* <div className="form-group p-bottom-10">
                                                        <div className="price-range rs-primary">
                                                            <p className="d-flex justify-content-between">
                                                                <span>Price Range: </span>
                                                                <span className="amount"></span>
                                                            </p>
                                                            <div className="slider-range"></div>
                                                        </div>
                                                    </div> */}
                                                <div className="check-btn">
                                                    <div className="btn-checkbox active-color-secondary">
                                                        <label>
                                                            <input type="checkbox" value="1" /><span className="color-success"><i className="la la-clock-o"></i> Open Now</span>
                                                        </label>
                                                    </div>
                                                    <div className="btn-checkbox active-color-secondary">
                                                        <label>
                                                            <input type="checkbox" value="1" /><span className="color-primary"><i className="la la-tags"></i> Offering Deal</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="filter-checklist">
                                                    <h5>Filter by Features</h5>

                                                    <div className="checklist-items feature-checklist hideContent">
                                                        {feature_list}
                                                    </div>
                                                </div>
                                                {/* <div className="filter-checklist">
                                                        <h5>Filter by Tags</h5>
                                                        <div className="checklist-items feature-checklist hideContent">
                                                            {tag_list}
                                                        </div>
                                                    </div> */}
                                                {/* <div className="filter-checklist">
                                                            <h5>Filter by Ratings</h5>
                                                            <Ratings/>
                                                        </div> */}
                                                {/* <a href="" className="btn btn-gradient btn-gradient-two btn-block btn-icon icon-right m-top-40">Search Filter <span className="la la-long-arrow-right"></span></a> */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 order-lg-1 order-0" >
                                        <div className="row">
                                            {list_item}
                                        </div>
                                        {(this.props.data.listsData && this.props.data.listsData.length == 10) ?
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <nav className="navigation pagination d-flex justify-content-end" role="navigation">
                                                        <div className="nav-links">
                                                            <a className="prev page-numbers" href="" onClick={this.loadPreviousList}><span className="la la-long-arrow-left"></span></a>
                                                            {/* <span aria-current="page" className="page-numbers current">1</span> */}
                                                            <a className="next page-numbers" href="" onClick={this.loadNextList}><span className="la la-long-arrow-right"></span></a>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                            : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

