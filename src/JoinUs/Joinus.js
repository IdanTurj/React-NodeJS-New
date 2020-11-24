import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './Joinus.css';



class JoinUs extends Component {

    state = {
        NewLawyer: [],
        categories: [],
        Pendings: [],
        locations: [],
        CheckCategory: [],
        CheckLocation: [],
    }

    componentDidMount = () => {

        axios.get(`http://localhost:5000/category/getCategories`)

            .then(response => {
                console.log("Categories", response)
                this.Arry = response.data
                this.setState({ categories: this.Arry })
                console.log("Categories : ", this.state.categories)
            })


        axios.get(`http://localhost:5000/location/getLocations`)

            .then(response => {
                console.log("Locations", response)
                this.Arry = response.data
                this.setState({ locations: this.Arry })
                console.log("Locations : ", this.state.locations)
            })
    }

    GetCatName = (event) => {
        let id = event.target.value;
        axios.get(`http://localhost:5000/category/getCategory?id=${id}`)

            .then(response => {
                console.log("CatCheck", response)
                this.Arry = response.data
                this.setState({ CheckCategory: this.Arry })
                console.log("CatCheck On  : ", this.state.CheckCategory)

            })
    }

    GetLocName = (event) => {
        let locId = event.target.value;

        axios.get(`http://localhost:5000/location/getLocation?id=${locId}`)

            .then(response => {
                console.log("LocCheck", response)
                this.Arry = response.data
                this.setState({ CheckLocation: this.Arry })
                console.log("LocCheck On  : ", this.state.CheckLocation)

            })
    }

    Join = () => {
        let name = document.getElementById("nameIn").value;
        let last_name = document.getElementById("lastnameIn").value;
        let company = document.getElementById("companyIn").value;
        let CaseClose = document.getElementById("ccIn").value;
        let CaseCloseSuccess = document.getElementById("ccsIn").value;
        let areaCode = document.getElementById("areaIn").value;
        let restCode = document.getElementById("phoneIn").value;
        let phone = areaCode + restCode;
        let education = document.getElementById("educationIn").value;
        let Categoryname = this.state.CheckCategory.category
        let categoryId = this.state.CheckCategory.id
        let image = document.getElementById("imageIn").value;
        let locationId = this.state.CheckLocation.id;
        let location = this.state.CheckLocation.location


        console.log("file", image)


        axios.get(`http://localhost:5000/pendings/InsertPending?name=${name}&lastname=${last_name}&phone=${phone}&cc=${CaseClose}&ccs=${CaseCloseSuccess}&education=${education}&image=${image}&company=${company}&category_id=${categoryId}&location_id=${locationId}&category=${Categoryname}&location=${location}`)

            .then(response => {
                console.log("Categories", response)
                this.Arry = response.data
                this.setState({ Pendings: this.Arry })
                console.log("Categories : ", this.state.Pendings)
            })
        console.log("Category Name : ", Categoryname)
        console.log("Check Category Inspect : ", categoryId)

        alert("Thanks for Joining our Team!")
        window.location.href = "/"
    }



    DontJoin = () => {
        alert("You Must agree the terms!")
        window.location.href = "#"
    }

    render() {

        let category = this.state.categories.map(categors => {
            return (<option value={categors.id}>{categors.category}</option>)

        })

        let locationn = this.state.locations.map(locate => {
            return (<option value={locate.id}>{locate.location}</option>)

        })

        return (
            <div className="JoinUs-Page">
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
                                <a href="/About">About</a>
                            </li>
                            <li>
                                <a href="/Work">What We Do</a>
                            </li>
                            <li>
                                <a href="/Team">Team</a>
                            </li>
                        </ul>

                        <div className="nav-number">(05535)</div>
                    </div>

                </header>
                <div className="content-join">
                    <div className="row">

                        <div className="join-us">
                            <form className="join-form" action="/uploadPhoto" encType="multipart/form-data" method="GET">
                                <h1 className="join-h1">Join Us</h1>
                                <div id="name">
                                    <h2 className="name">Name</h2>
                                    <input className="firstname" type="text" id="nameIn" /><br></br>
                                    <label className="firstlabel">First Name</label>
                                    <input className="lastname" type="text" id="lastnameIn" /><br></br>
                                    <label className="lastlabel">Last Name</label>
                                </div>

                                <h2 className="name">Company</h2>
                                <input className="company" id="companyIn" type="text" />

                                <h2 className="name">Case Closed</h2>
                                <input className="cc" type="text" id="ccIn" />

                                <h2 className="name">Case Closed Successfuly</h2>
                                <input className="ccs" type="text" id="ccsIn" />

                                <h2 className="name">Education</h2>
                                <input className="ccs" type="text" id="educationIn" />

                                <h2 className="name">Profile Image</h2>
                                <input className="join-image" type="file" accept="image/*" name="Myfile" id="imageIn" />


                                <h2 className="name">Telephone</h2>
                                <input className="code" maxLength="3" type="text" id="areaIn" />
                                <label className="area-code">Area Code</label>
                                <input className="join-number" maxLength="7" type="text" id="phoneIn" />
                                <label className="phone-number">Phone Number</label>


                                <h2 className="name">Category</h2>
                                <select className="join-option" id="categoryId" onChange={this.GetCatName}>
                                    <option disabled="disabled" className="Join-option-Select" selected="selected">--Choose Category</option>
                                    {category}
                                </select>

                                <h2 className="name">Location</h2>
                                <select className="join-option" id="locationId" onChange={this.GetLocName}>
                                    <option disabled="disabled" className="Join-option-Select" selected="selected">--Choose Location</option>
                                    {locationn}
                                </select>


                                <div className="space-between-location-and-popup"></div>
                                <a href="#popup-terms" className="button-terms">Agree Terms</a>
                                <div className="popup-terms" id="popup-terms">
                                    <div className="popup-terms-inner">
                                        <a className="popup-terms-close" href="#">X</a>
                                        <div className="scroll-bar-terms">
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                            <p>Talking alotTalking alotTalking alotTalking alotTalking alotTalking alot</p>
                                        </div>

                                        <buttom className="terms-buttom" type="buttom" onClick={this.Join}>I Agree</buttom>

                                        <buttom className="terms-buttom-disagree" type="buttom" onClick={this.DontJoin}>I disagree</buttom>

                                    </div>
                                </div>

                            </form>


                        </div>
                    </div>

                </div >
            </div>
        )
    }
}


export default JoinUs