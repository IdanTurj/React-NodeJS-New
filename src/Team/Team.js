import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import '../Team/Team.css';
import GetLaw from './GetLawyers';


class Team extends Component {

    state = {
        AllLawyers: [],
    }

    componentDidMount = () => {

        axios.get(`http://localhost:5000/lawyers/getLawyers`)

            .then(response => {
                console.log("Lawyers", response)
                this.Arry = response.data
                this.setState({ AllLawyers: this.Arry })
                console.log("All Lawyers : ", this.state.AllLawyers)
            })
    }

    render() {

        // let AllLawyers = this.state.AllLawyers.map(lawyer => {
        //     return (<GetLaw name={lawyer.name} category={lawyer.category} education={lawyer.education} lastname={lawyer.lastname} image={lawyer.image} location={lawyer.location} ></GetLaw>)
        // })

        return (
            <div className="Twam-Page">
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

                    <h1>Our Team</h1><hr></hr>

                </header>

                <div className="row">
                    {/* {AllLawyers} */}
                </div>


            </div>
        )
    }
}


export default Team