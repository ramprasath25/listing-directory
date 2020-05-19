import React from 'react';

const TagDetails = (TagDetails) => {
    let tag_data = TagDetails.data.map((item, index) => {
        return <li key={index}><a href="">{item}</a></li>
    });
    return (
        <div className="widget atbd_widget widget-card">
            <div className="atbd_widget_title">
                <h4><span className="la la-tags"></span> Tag Style</h4>
            </div>
            <div className="widget-body atbdp-widget-tags">
                <ul className="list-unstyled">
                    {tag_data}
                </ul>
            </div>
        </div>

    )
}
export default TagDetails;