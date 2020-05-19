import React from 'react';


const FAQ = () => {
    return (
        <div className="atbd_content_module atbd_faqs_module">
            <div className="atbd_content_module__tittle_area">
                <div className="atbd_area_title">
                    <h4><span className="la la-question-circle"></span>Listing FAQ's</h4>
                </div>
            </div>
            <div className="atbdb_content_module_contents">
                <div className="atbdp-accordion">
                    <div className="accordion-single selected">
                        <h3 className="faq-title"><a href="#">Question number one</a></h3>
                        <p className="ac-body" >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high level of precision, full legal compliance</p>
                    </div>
                    <div className="accordion-single">
                        <h3 className="faq-title"><a href="#">Question number two and others</a></h3>
                        <p className="ac-body" >Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ;