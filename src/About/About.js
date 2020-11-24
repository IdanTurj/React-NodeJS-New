import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import '../About/About.css';



class About extends Component {

    state = {

    }

    componentDidMount = () => {

    }

    render() {

        return (
            <div className="About-Page">
                <header>
                    <div className="row">
                        <div className="col-1">

                            <a href='/'><p className="Logo"></p></a>

                        </div>

                        <ul className="nav-links">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/About">Who We Are</a>
                            </li>
                            <li>
                                <a href="/Work">What We Do</a>
                            </li>
                            <li>
                                <a href="/Team">Our Team</a>
                            </li>
                        </ul>

                        <div className="nav-number">(05535)</div>
                    </div>

                </header>
            </div>
        )
    }
}


export default About