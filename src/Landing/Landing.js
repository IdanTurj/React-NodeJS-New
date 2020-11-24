import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import '../Landing/Landing.css'
import Category from './Category'



class LandingPage extends Component {

    state = {
        lawyers: [],
        Category: [],
        location: [],
        SelectCat: [],
        CatSelected: [],

    }



    componentDidMount = () => {
        this.categories();

    }

    categories = () => {
        axios.get(`http://localhost:5000/category/getCategories`)

            .then(response => {
                console.log("Categories", response)
                this.Arry = response.data
                this.setState({ Category: this.Arry })
                console.log(this.state.Category)
            })
    }


    // ChangeLanguage = (lang) => {
    //     let LangChange = lang.target.value;

    //     if (LangChange == 1) {
    //         window.location.href = "/main-heb";
    //     } else if (LangChange == 2) {
    //         window.location.href = "/";
    //     }



    // }



    ChangeCategor = (event) => {
        console.log("Checked : ", event.target.value);

        this.setState({ CatSelected: event.target.value })


    }

    render() {
        let categor = this.state.Category.map(categ => {
            return (<Category id={categ.id} category={categ.category}></Category>)

        })

        return (
            <div className="Landing-Home">
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
                                <a href="/About">About Us</a>
                            </li>
                            <li>
                                <a href="/Join-us">Join Us</a>
                            </li>
                            <li>
                                <a href="/Team">Team</a>
                            </li>
                        </ul>

                        <div className="nav-number">(05535)</div>
                        {/* <select className="select-language" onChange={this.ChangeLanguage}>
                            <option>Language</option>
                            <option className="hebrew" value="1">Hebrew</option>
                            <option className="english" value="2">English</option>
                        </select> */}
                    </div>

                </header>
                <div id="banner">
                    <h1>LawyerApp</h1>
                    <div className="searchLawyer">
                        {this.state.CatSelected != "" ? <Redirect to={'/Lawyers/' + this.state.CatSelected} /> : null}
                        <select className="input-search" id="category" onChange={this.ChangeCategor}>
                            <option default>Choose Category</option>
                            {categor}
                        </select>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <h2 className="content-h2">Insurance Recovery, Hospitality Disputes, and Commercial Litigation</h2>

                        <p className="content-paragraph">ITG is a law firm founded by long-time colleagues Idan Turjeman,<br></br> and Idan Gispan. They bring decades of top law firm experience to their clients but with lower rates and alternative fee arrangements.</p>
                        <hr></hr>

                        <div className="content-specializes">
                            <h2 className="content-h2">ITG specializes in those areas:</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="background-color">
                            <div className="container">
                                <h2 className="content-inside">Our Experience</h2>

                                <p className="content-para">Partners Idan Turjeman, and Idan Gispan have Helped <br></br> a lot of Lawyers. <br></br> They have Founded a lot of recoveries to their clients. They are also deeply committed to pro bono work and civic service.</p>
                            </div>
                        </div>

                        <div className="image-insurance">
                            <h1 className="h1-images"><span className="span1"></span></h1>
                        </div>
                        <div className="image-hospitality">
                            <h1 className="h1-images"><span className="span2"></span></h1>
                        </div>
                        <div className="image-commercial">
                            <h1 className="h1-images"><span className="span3"></span></h1>
                        </div>
                    </div>

                    <div className="container contact">
                        <h1 className="Contact-us">Contact Us</h1>
                        <hr></hr>
                        <div className="contact-info">
                            <div className="card">
                                <i className="card-icon far fa-envelope"></i>
                                <p className="p-icons"> ITG.group112@gmail.com</p>
                            </div>

                            <div className="card">
                                <i className="card-icon fas fa-phone"></i>
                                <p className="p-icons">+0542436753</p>
                            </div>

                            <div className="card">
                                <i className="card-icon fas fa-map-marker-alt"></i>
                                <p className="p-icons">Tel-Aviv</p>
                            </div>
                        </div>
                    </div>


                    <footer className="footer">
                        <div className="footer-wrapper">
                            <div className="single-footer">
                                <h3>Company Logo</h3>
                                <p className="comp-logo"></p>
                            </div>
                        </div>


                        <div className="footer-wrapper">
                            <div className="single-footer">
                                <h3>Get Help</h3>
                                <ul>
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="/Join-us">Join Us</a></li>
                                    <li><a href="#">Refunds</a></li>
                                    <li><a href="#">Payment Option</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="footer-wrapper">
                            <div className="single-footer">
                                <h4>You Can Find Us On</h4>
                                <ul>
                                    <a href="#"> <i className="fa fa-facebook-square contactIcon" aria-hidden="true"></i></a>
                                    <a href="#">  <i className="fa fa-twitter-square contactIcon" aria-hidden="true"></i></a>
                                    <a href="#"> <i className="fa fa-instagram contactIcon" aria-hidden="true"></i></a>
                                    <a href="#"> <i className="fa fa-linkedin-square contactIcon" aria-hidden="true"></i></a><br>
                                    </br>
                                    <i className="fa fa-copyright rights" aria-hidden="true">All the rights reserved for ITG Company Idan`s code</i>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div >
        )
    }
}



export default LandingPage;
