import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import '../Owner-Logged/Login.css';



class OwnLoged extends Component {

    state = {
        Owner: [],
        Admin: {},
    }

    componentDidMount = () => {

    }

    CheckOwner = () => {
        let email = document.getElementById("emailIn").value;
        let password = document.getElementById("passwordIn").value;


        axios.get(`http://localhost:5000/owners/getOwners?email=${email}&password=${password}`)

            .then(response => {
                console.log("Owners", response)
                this.Arry = response.data
                this.setState({ Owner: this.Arry })
                console.log("ALL ", this.state.Owner)
                this.state.Admin = this.state.Owner.name
                console.log("NAME", this.state.Admin)

                if (this.state.Admin) {
                    localStorage.OwnerLoged = JSON.stringify(this.state.Admin)
                    window.location.href = "/Owners"
                    alert("You Successfully Signed In!")
                } else {
                    alert("Email Or Password is Wrong!")
                }
            })
    }

    render() {

        return (
            <div className="OwnerLoggin-Page">
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


                <div className="Login-Box">
                    <h2 className="Login-h2">Login</h2>
                    <form>
                        <div className="Login-Input">
                            <input type="email" id="emailIn" name="" required="" />
                            <label>Username</label>
                        </div>

                        <div className="Login-Input">
                            <input type="password" id="passwordIn" name="" required="" />
                            <label>Password</label>
                        </div>
                        <button type="button" className="btn-login" onClick={() => this.CheckOwner()}>Submit</button>
                    </form>

                </div>



            </div>
        )
    }
}


export default OwnLoged