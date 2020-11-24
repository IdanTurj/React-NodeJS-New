import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import '../Lawyers/Lawyers.css';
import LawyerCard from './LawyerCard';



class Lawyers extends Component {

    state = {
        Lawyers: [],
    }

    componentDidMount = () => {
        console.log("PROPS", this.props.match.params.id);

        let catid = this.props.match.params.id

        axios.get(`http://localhost:5000/lawyers/getLaw?id=${catid}`)

            .then(response => {
                console.log("Lawyers", response)
                this.Arry = response.data
                this.setState({ Lawyers: this.Arry })
                console.log(this.state.Lawyers)
            })

    }

    render() {

        let FindLawyers = this.state.Lawyers.map(Found => {
            return (<LawyerCard id={Found.id} name={Found.name} lastname={Found.lastname} image={Found.image} location={Found.location} category={Found.category} education={Found.education}></LawyerCard>);
        })

        return (
            <div className="Lawyers-Page">
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


                <div className="row">

                    {FindLawyers}

                </div>


            </div>
        )
    }
}


export default Lawyers