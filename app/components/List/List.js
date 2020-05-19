import React from 'react';
import { Link } from 'react-router-dom';

const List = (Listdata) => {
  let locality = (Listdata.data.locality) ? Listdata.data.locality.title : '';
  let location = (Listdata.data.location) ? Listdata.data.location.title : '';
  let category = (Listdata.data.list_category) ? Listdata.data.list_category : '';
  let list_title = (Listdata.data.title) ? Listdata.data.title : 'irufit';
  let location_link = (Listdata.data.search_url) ? Listdata.data.search_url : '/'
  // let location_link = '/' + location.toLowerCase() + '/' + locality.toLowerCase() + '/' + category + '/' + list_title.toLowerCase().replace(/ /g, '-');
  let profile_img = 'https://ui-avatars.com/api/?rounded=true&size=50&font-size=0.6&bold=true&color=ffff&background=ff914c&name=' + list_title[0];
  return (
    <div className="col-sm-6">
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
                <span className="custom-tooltip">{Listdata.data.title}</span>
              </a>
            </div>
            <div className="atbd_thumbnail_overlay_content">
              <ul className="atbd_upper_badge">
                {/* <li><span className="atbd_badge atbd_badge_featured">Featured</span></li> */}
              </ul>
            </div>
          </figure>
          <div className="atbd_listing_info">
            <div className="atbd_content_upper">
              <h4 className="atbd_listing_title">
                {/* <Link to={location_link}> */}
                <a href={location_link}>
                  {list_title}
                </a>
                {/* </Link> */}
              </h4>
              {/* <div className="atbd_listing_meta">
                  <span className="atbd_meta atbd_listing_rating">4.5<i className="la la-star"></i></span>
                  <span className="atbd_meta atbd_listing_price">$55.00</span>
                  <span className="atbd_meta atbd_badge_open">Open Now</span>
              </div> */}
              <div className="atbd_listing_data_list">
                <ul>
                  <li>
                    <p><span className="la la-map-marker"></span>{locality}, {location}</p>
                  </li>
                  <li>
                    {/* <p><span className="la la-phone"></span>{Listdata.data.telephone}</p> */}
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="atbd_listing_bottom_content">
              <div className="atbd_content_left">
                <div className="atbd_listing_category">
                  <a href=""><span className="la la-glass"></span>{Listdata.data.type}</a>
                </div>
              </div>
              <ul className="atbd_content_right">
                <li className="atbd_count"><span className="la la-eye"></span>900+</li>
              </ul>
            </div> */}
          </div>
        </article>
      </div>
    </div>
  );
};


export default List;
