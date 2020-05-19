import React from 'react';

const ReviewList = () => {
    return (
        <div className="atbd_content_module atbd_review_module">
            <div className="atbd_content_module__tittle_area">
                <div className="atbd_area_title">
                    <h4><span className="la la-star-o"></span>4 Reviews</h4>
                    <label className="btn btn-secondary btn-icon-left btn-sm not_empty"><span className="la la-star-o"></span> Add a review</label>
                </div>
            </div>
            <div className="atbdb_content_module_contents">
                <div id="client_review_list">
                    <div className="atbd_single_review atbdp_static">
                        <div className="atbd_review_top">
                            <div className="atbd_avatar_wrapper">
                                <div className="atbd_review_avatar"><img alt="" src="img/review-author-thumb.jpg" className="avatar avatar-32 photo" /></div>
                                <div className="atbd_name_time">
                                    <p>Mark Rose</p>
                                    <span className="review_time">6 hours ago</span>
                                </div>
                            </div>
                            <div className="atbd_rated_stars">
                                <ul>
                                    <li><span className="rate_active"></span></li>
                                    <li><span className="rate_active"></span></li>
                                    <li><span className="rate_active"></span></li>
                                    <li><span className="rate_active"></span></li>
                                    <li><span className="rate_disable"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_content">
                            <p>Lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus</p>
                            <a href="#" className="reply"><span className="la la-mail-reply-all"></span>Reply</a>
                        </div>
                        <div className="review_reply_form">
                            <div className="atbd_review_avatar"><img alt="" src="img/review-author-thumb2.jpg" className="avatar avatar-32 photo" /></div>
                            <form action="/">
                                <textarea placeholder="Message" className="form-control"></textarea>
                                <button className="btn btn-sm btn-secondary">Reply</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="review_pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#"><span className="la la-angle-left"></span></a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#"><span className="la la-angle-right"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReviewList;