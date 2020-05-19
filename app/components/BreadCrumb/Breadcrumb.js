import React from 'react';
import { Link } from 'react-router-dom';

let Breadcrumb = (data) => {
    let { header } = data;
    let location_path = header.split('/');
    let str
    if (location_path.length === 4) {
        str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[2]}`}><span>{location_path[2]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[3]}`}><span>{location_path[3]}</span></Link></div>
    } else if (location_path.length === 3) {
        str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link> / <Link to={`/${location_path[1]}/${location_path[2]}`}><span>{location_path[2]}</span></Link></div>
    } else {
        str = <div><Link to={`/${location_path[1]}`}><span>{location_path[1]}</span></Link></div>
    }
    return (
        <div className="col-lg-12">
            <div className="atbd_generic_header">
                <div className="atbd_generic_header_title">
                    {str}
                </div>
                <div className="atbd_listing_action_btn btn-toolbar" role="toolbar">
                    <div className="dropdown has_dropdown">
                        <a className="action-btn dropdown-toggle" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret"></span></a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                            <a className="dropdown-item" href="">A to Z ( title )</a>
                            <a className="dropdown-item" href="">Z to A ( title )</a>
                            <a className="dropdown-item active" href="">Latest listings</a>
                            <a className="dropdown-item" href="">Oldest listings</a>
                            <a className="dropdown-item" href="">Popular listings</a>
                            <a className="dropdown-item" href="">Price ( low to high )</a>
                            <a className="dropdown-item" href="">Price ( high to low )</a>
                            <a className="dropdown-item" href="">Random listings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;