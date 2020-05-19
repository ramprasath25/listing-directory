import React from 'react';
import { Link } from 'react-router-dom';

const HomepageList = (data) => {
    let title = (data.list.title) ? data.list.title : 'irufit';
    let profile_img = 'https://ui-avatars.com/api/?rounded=true&size=50&font-size=0.6&bold=true&color=ffff&background=f5548e&name=' + title[0];
    let locality = (data.list.locality) ? data.list.locality.title : '';
    let location = (data.list.location) ? data.list.location.title : '';
    let category = (data.list.categories) ? data.list.categories[0].title.toLowerCase() : '';
    let location_link = '/' + location.toLowerCase() + '/' + locality.toLowerCase().replace(/ /g, '-') + '/' + category + '/' + title.toLowerCase().replace(/ /g, '-');
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="atbd_single_listing ">
                <article className="atbd_single_listing_wrapper">
                    <figure className="atbd_listing_thumbnail_area">
                        <div className="atbd_listing_image">
                            <a href={location_link}>
                                <img src={require('../../images/List-Image-1.jpg')} alt="listing image" />
                            </a>
                        </div>
                        <div className="atbd_author atbd_author--thumb">
                            <a href={location_link}>
                                <img src={profile_img} alt="Author Image" />
                                <span className="custom-tooltip">{title}</span>
                            </a>
                        </div>
                        <div className="atbd_thumbnail_overlay_content">
                            <ul className="atbd_upper_badge">
                                <li><span className="atbd_badge atbd_badge_featured">Featured</span></li>
                            </ul>
                        </div>
                    </figure>
                    <div className="atbd_listing_info">
                        <div className="atbd_content_upper">
                            <h4 className="atbd_listing_title">
                                <a href={location_link}>{title}</a>
                            </h4>
                            <div className="atbd_listing_data_list">
                                <ul>
                                    <li>
                                        <p><span className="la la-map-marker"></span>{locality}, {location}</p>
                                    </li>
                                    <li>
                                        {/* <p><span className="la la-phone"></span>{data.list.telephone}</p> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default HomepageList;