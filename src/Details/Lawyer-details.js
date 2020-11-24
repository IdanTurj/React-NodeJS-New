import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CardDetail from './detailedCard';
import './Lawyer-details.css';



class Details extends Component {

    state = {
        Lawyer: [],
    }

    componentDidMount = () => {
        console.log("Lawyer", this.props.match.params.id);

        let lawyerid = this.props.match.params.id

        axios.get(`http://localhost:5000/lawyers/findLawyer?id=${lawyerid}`)

            .then(response => {
                console.log("Lawyers", response)
                this.Arry = response.data
                this.setState({ Lawyer: this.Arry })
                console.log("LawyersInfo", this.state.Lawyer)
            })

    }

    render() {

        let ShowDetails = this.state.Lawyer.map(Detail => {
            return (<CardDetail id={Detail.id}
                name={Detail.name}
                lastname={Detail.lastname}
                location={Detail.location}
                category={Detail.category}
                image={Detail.image}
                company={Detail.company}
                cc={Detail.cc}
                ccs={Detail.ccs}
                phone={Detail.phone}
                education={Detail.education}></CardDetail>)
        })


        return (
            <div className="Details-Page">
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




                <div className="info">
                    {ShowDetails}
                </div>

            </div>
        )
    }
}


export default Details