import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <div className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
                    <span className="sr-only">Toggle</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">前端日志网</Link>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/frontend">前端</Link>
                    </li>
                    <li>
                        <Link to="/nodejs">Node.js</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;

