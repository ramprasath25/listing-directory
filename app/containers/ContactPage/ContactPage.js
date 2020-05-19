import React from 'react';
import axios from 'axios';

class ContactUs extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('https://api.irufit.com/enquiries', {
            'name': event.target.name.value,
            'email': event.target.email.value,
            'reason': event.target.reason.value,
            'message': event.target.message.value
        }).then((response) => {
            alert("Success, will get back to you soon");
            location.reload()
        });
    }
    render() {
        return (
            <section className="contact-area section-bg p-top-100 p-bottom-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="widget atbd_widget widget-card contact-block">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-envelope"></span> Contact Form</h4>
                                </div>
                                <div className="atbdp-widget-listing-contact contact-form">
                                    <form className="form-vertical" role="form" onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="atbdp-contact-name" placeholder="Name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="atbdp-contact-email" placeholder="Email" name="email" required />
                                        </div>
                                        <div className="select-basic single_search_field">
                                            <select className="form-control" name="reason">
                                                <option value="enquiry">Enquiry</option>
                                                <option value="add">Add Listing</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div><br />
                                        <div className="form-group">
                                            <textarea className="form-control" id="atbdp-contact-message" rows="6" placeholder="Message" name="message"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-gradient btn-gradient-three btn-block">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget atbd_widget widget-card">
                                <div className="atbd_widget_title">
                                    <h4><span className="la la-phone"></span>Contact Info</h4>
                                </div>
                                <div className="widget-body atbd_author_info_widget">
                                    <div className="atbd_widget_contact_info">
                                        <ul>
                                            <li>
                                                <span className="la la-map-marker"></span>
                                                <span className="atbd_info">Bangalore, India</span>
                                            </li>
                                            <li>
                                                <span className="la la-phone"></span>
                                                <span className="atbd_info">98 455 66 846</span>
                                            </li>
                                            <li>
                                                <span className="la la-envelope"></span>
                                                <span className="atbd_info">support@irufit.com</span>
                                            </li>
                                            <li>
                                                <span className="la la-globe"></span>
                                                <a href="" className="atbd_info">www.irufit.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="atbd_social_wrap">
                                        <p><a href="https://facebook.com/irufit"><span className="fab fa-facebook-f"></span></a></p>
                                        <p><a href="https://twitter.com/irufit"><span className="fab fa-twitter"></span></a></p>
                                        <p><a href="https://instagram.com/irufit"><span className="fab fa-instagram"></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;