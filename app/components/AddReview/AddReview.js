import React from 'react';


const AddReview = () => {
    return (
        <div className="atbd_content_module atbd_review_form">
            <div className="atbd_content_module__tittle_area">
                <div className="atbd_area_title">
                    <h4><span className="la la-star"></span>Add a Review</h4>
                </div>
            </div>
            <div className="atbdb_content_module_contents atbd_give_review_area">
                <div className="atbd_notice alert alert-info" role="alert">
                    <span className="la la-info" aria-hidden="true"></span>
                    You need to <a href="">Login</a> or <a href="">Register</a> to submit a review
                  </div>
                <form action="/" id="atbdp_review_form" method="post">
                    <div className="atbd_review_rating_area">

                        <div className="atbd_review_update_rating">
                            <span>Rating: </span>
                            <div className="atbd_rating_stars">
                                <div className="br-wrapper br-theme-fontawesome-stars m-left-15">
                                    <select className="give_rating">

                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="content" id="review_content" className="form-control" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group">
                        <div id="atbd_up_preview"></div>
                        <div className="atbd_upload_btn_wrap">
                            <label >
                                <input type="file" id="atbd_review_attachment" hidden multiple />
                                <span className="btn btn-md atbd_upload_btn"><span className="la la-cloud-upload"></span>Upload Photo</span>
                            </label>
                            <span id="file_name"></span>
                        </div>
                    </div>

                    <button className="btn btn-gradient btn-gradient-one" type="submit" id="atbdp_review_form_submit">Submit Review</button>
                </form>
            </div>
        </div>
    )
}
export default AddReview;