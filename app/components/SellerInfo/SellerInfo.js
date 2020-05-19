import React from 'react';

const SellerInfo = (sellerInfo) => {
    let verified_data = (sellerInfo.data.verified) ? <span className="verified" data-toggle="tooltip" data-placement="top" title="Verified"></span> : ''
    return (
        <div className="widget atbd_widget widget-card">
            <div className="atbd_widget_title">
                <h4><span className="la la-user"></span>Info</h4>
                <span className="badge badge-success">Contact</span>
            </div>
            <div className="widget-body atbd_author_info_widget">
                <div className="atbd_avatar_wrapper">
                    <div className="atbd_review_avatar">
                        <img src={require("../../images/avatar-60x60.jpg")} alt="Avatar Image" />
                    </div>
                    <div className="atbd_name_time">
                        <h4>{sellerInfo.data.name} {verified_data}</h4>
                    </div>
                </div>
                <div className="atbd_widget_contact_info">
                    <ul>
                        <li>
                            <span className="la la-map-marker"></span>
                            <span className="atbd_info">{sellerInfo.data.address}</span>
                        </li>
                        <li>
                            <span className="la la-phone"></span>
                            <span className="atbd_info">{sellerInfo.data.telephone}</span>
                        </li>
                        <li>
                            <span className="la la-envelope"></span>
                            <span className="atbd_info">{sellerInfo.data.mail}</span>
                        </li>
                        <li>
                            <span className="la la-globe"></span>
                            <a href="" className="atbd_info">{sellerInfo.data.website}</a>
                        </li>
                    </ul>
                </div>
                <div className="atbd_social_wrap">
                    <p><a href={sellerInfo.data.facebook}><span className="fab fa-facebook-f"></span></a></p>
                    <p><a href={sellerInfo.data.twitter}><span className="fab fa-twitter"></span></a></p>
                    <p><a href={sellerInfo.data.linkedin}><span className="fab fa-linkedin-in"></span></a></p>
                </div>
            </div>
        </div>
    )
}

export default SellerInfo;