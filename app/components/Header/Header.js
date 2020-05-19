import React from 'react';
import { Link } from 'react-router-dom';
import { categories, locations } from '../../containers/HomePage/const.js';

class Header extends React.Component {
    render() {
        const select_locations = locations.map((item, index) => {
            return <option key={index}>{item.title}</option>
        })
        return (
            <div className="menu-area menu1 menu--dark">
                <div className="top-menu-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-fullwidth">
                                    <div className="logo-wrapper order-lg-0 order-sm-1">
                                        <div className="logo logo-top">
                                            <a href="/"><img src={require("../../images/logo.png")} alt="logo image" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                    <div className="menu-container order-lg-1 order-sm-0">
                                        <div className="d_menu">
                                            <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#direo-navbar-collapse" aria-controls="direo-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon icon-menu"><i className="la la-reorder"></i></span>
                                                </button>

                                                <div className="collapse navbar-collapse" id="direo-navbar-collapse">
                                                    <ul className="navbar-nav">
                                                        <li>
                                                            <Link to='/'>Home</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/about-us">About us</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="select-basic single_search_field">
                                                    <select className="form-control">
                                                        {select_locations}
                                                    </select>
                                                </div>
                                            </nav>

                                        </div>

                                    </div>
                                    <div className="menu-right order-lg-2 order-sm-2">
                                        <div className="search-wrapper">
                                            <div className="nav_right_module search_module">
                                                <span className="icon-left" id="basic-addon9"><i className="la la-search"></i></span>
                                                <div className="search_area">
                                                    <form action="/">
                                                        <div className="input-group input-group-light">
                                                            <input type="text" className="form-control search_field top-search-field" placeholder="What are you looking for?" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="author-area">
                                            <div className="author__access_area">
                                                <ul className="d-flex list-unstyled align-items-center">
                                                    <li>
                                                        <Link to="/contact-us" className="access-link" data-toggle="modal" >Add Listing</Link>
                                                    </li>
                                                    <li>
                                                        <a href="" className="access-link" data-toggle="modal" >Login</a>
                                                        <span>or</span>
                                                        <a href="" className="access-link" data-toggle="modal" >Register</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
