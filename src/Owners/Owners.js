import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import '../Owners/Owners.css';
import OwnPending from './Owner-Pendings';
import OwnLawyer from './Owner-Lawyers';
import ManageCard from './Owners-Manage';



class Owner extends Component {

    state = {
        PendingLawyer: [],
        PendingNewId: [],
        NewLawyerInsert: [],
        DeleteAndInsertPending: [],
        DeletePending: [],
        LawyersDetails: [],
    }


    componentDidMount = () => {
        if (!localStorage.OwnerLoged) {
            window.location.href = "/";
            alert("You Dont have Permission!")
        }


        axios.get(`http://localhost:5000/pendings/getPendings`)

            .then(response => {
                console.log("Pendings On", response)
                this.Arry = response.data
                this.setState({ PendingLawyer: this.Arry })
                console.log("Pendings : ", this.state.PendingLawyer)
            })




        axios.get(`http://localhost:5000/lawyers/getLawyers`)

            .then(response => {
                console.log("Lawyers On", response)
                this.Arry = response.data
                this.setState({ LawyersDetails: this.Arry })
                console.log("Lawyers : ", this.state.LawyersDetails)
            })

    }




    SignedOut = (OwnerOut) => {
        localStorage.clear(OwnerOut);
    }

    AddPendingID = (id) => {
        console.log("PendingID : ", id)

        axios.get(`http://localhost:5000/pendings/FindPenidngId?id=${id}`)

            .then(response => {
                console.log("Pendings On", response)
                this.Arry = response.data
                this.setState({ PendingNewId: this.Arry })
                console.log("Pendings : ", this.state.PendingNewId)

                this.LawyerInsert();
                this.LawyerDeleted(id);
            })


    }

    LawyerInsert = () => {
        let InstLawyerParam = this.state.PendingNewId

        console.log("Check InstParam : ", InstLawyerParam.name)

        axios.get(`http://localhost:5000/lawyers/instLaw?name=${InstLawyerParam.name}&lastname=${InstLawyerParam.lastname}&phone=${InstLawyerParam.phone}&cc=${InstLawyerParam.cc}&ccs=${InstLawyerParam.ccs}&education=${InstLawyerParam.education}&image=${InstLawyerParam.image}&company=${InstLawyerParam.company}&category_id=${InstLawyerParam.category_id}&location_id=${InstLawyerParam.location_id}&category=${InstLawyerParam.category}&location=${InstLawyerParam.location}`)

            .then(response => {
                console.log("LawyerIns", response)
                this.Arry = response.data
                this.setState({ NewLawyerInsert: this.Arry })
                console.log("Lawyer Added: ", this.state.NewLawyerInsert)
            })

        window.location.reload(false);


    }

    LawyerDeleted = (id) => {
        axios.get(`http://localhost:5000/pendings/deletePenidngId?id=${id}`)

            .then(response => {
                console.log("Pendings On", response)
                this.Arry = response.data
                this.setState({ DeleteAndInsertPending: this.Arry })
                console.log("Pendings : ", this.state.DeleteAndInsertPending)
            })


    }

    DeletePendingID = (id) => {
        axios.get(`http://localhost:5000/pendings/deletePenidngId?id=${id}`)

            .then(response => {
                console.log("Pendings On", response)
                this.Arry = response.data
                this.setState({ DeletePending: this.Arry })
                console.log("Pendings : ", this.state.DeletePending)
            })

        window.location.reload(false);
    }

    render() {
        let ShowManageCard = this.state.LawyersDetails.map(Man => {
            return (<ManageCard
                id={Man.id}
                name={Man.name}
                lastname={Man.lastname}
                phone={Man.phone}
                cc={Man.cc} ccs={Man.ccs}
                education={Man.education}
                image={Man.image}
                company={Man.company}
                category={Man.category}
                location={Man.location}></ManageCard>)
        })


        let ShowLawyersDetail = this.state.LawyersDetails.map(Law => {
            return (<OwnLawyer id={Law.id}
                name={Law.name}
                lastname={Law.lastname}
                phone={Law.phone}
                cc={Law.cc} ccs={Law.ccs}
                education={Law.education}
                image={Law.image}
                company={Law.company}
                locId={Law.location_id}
                CatId={Law.category_id}
                category={Law.category}
                location={Law.location}></OwnLawyer>);
        })

        let ShowPendingLaw = this.state.PendingLawyer.map(Pend => {
            return (<OwnPending id={Pend.id}
                name={Pend.name}
                lastname={Pend.lastname}
                phone={Pend.phone}
                cc={Pend.cc} ccs={Pend.ccs}
                education={Pend.education}
                image={Pend.image}
                company={Pend.company}
                locId={Pend.location_id}
                CatId={Pend.category_id}
                category={Pend.category}
                location={Pend.location}
                AcceptFN={() => this.AddPendingID(Pend.id)}
                DeleteFN={() => this.DeletePendingID(Pend.id)}></OwnPending>);
        })

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

                        <div className="nav-SignOut"><a href="/" onClick={() => this.SignedOut(localStorage.OwnerLoged)}>Sign Out</a></div>
                    </div>
                </header>

                <input type="checkbox" id="Owners-check" />
                <label for="Owners-check">
                    <i className="fas fa-bars" id="btn"></i>
                    <i className="fas fa-times" id="cancel"></i>
                </label>
                <div className="Owners-sidebar">

                    <div className="Owners-header">Owners-Manage</div>
                    <ul className="Owners-ul">
                        <li className="Owners-li"><a href="#Manage"><i className="fas fa-qrcode"></i>Manage</a></li>
                        <li className="Owners-li"><a href="#"><i className="fas fa-link"></i>Changer</a></li>
                        <li className="Owners-li"><a href="#Lawyers"><i className="fas fa-stream"></i>Lawyers</a></li>
                        <li className="Owners-li"><a href="#Pendings"><i className="fas fa-calendar-week"></i>Pendings</a></li>
                        <li className="Owners-li"><a href="#"><i className="far fa-question-circle"></i>Support</a></li>
                    </ul>


                </div>

                <div className="Owners-Manage" id="Manage">
                    <div className="Owners-Manage-inner">
                        <a className="Owners-Manage-close" href="#">X</a>
                        <div className="row">
                            {ShowManageCard}
                        </div>
                    </div>
                </div>

                <div className="Owners-Lawyers" id="Lawyers">
                    <table className="table table-hover Owners-Lawyers-Table">
                        <a className="Owners-Lawyers-close" href="#">X</a>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last_name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Case-Close</th>
                                <th scope="col">Case-Close-Success</th>
                                <th scope="col">Education</th>
                                <th scope="col">Image</th>
                                <th scope="col">Company</th>
                                <th scope="col">Location_id</th>
                                <th scope="col">Category_id</th>
                                <th scope="col">Category</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ShowLawyersDetail}
                        </tbody>
                    </table>
                </div>

                <div className="Owners-pendings" id="Pendings">
                    <table className="table table-hover Owners-table">
                        <a className="Owners-pendings-close" href="#">X</a>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last_name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Case-Close</th>
                                <th scope="col">Case-Close-Success</th>
                                <th scope="col">Education</th>
                                <th scope="col">Image</th>
                                <th scope="col">Company</th>
                                <th scope="col">Location_id</th>
                                <th scope="col">Category_id</th>
                                <th scope="col">Category</th>
                                <th scope="col">Location</th>
                                <th scope="col">Accept</th>
                                <th scope="col">Decline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ShowPendingLaw}
                        </tbody>
                    </table>

                </div>

            </div >
        )
    }
}


export default Owner