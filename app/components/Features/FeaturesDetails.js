import React from 'react';

const FeatureDetails = (features) => {
    let feature_data = features.data.map((item, index) => {
        return <li key={index}><a href=""><span className="la la-bookmark"></span>{item.title}</a></li>
    });
    return (
        <div className="widget atbd_widget widget-card">
            <div className="atbd_widget_title">
                <h4><span className="la la-bookmark"></span> Features</h4>
            </div>
            <div className="widget-body atbdp-widget-categories">
                <ul className="atbdp_parent_category">
                    {feature_data}
                </ul>
            </div>
        </div>
    )
}

export default FeatureDetails