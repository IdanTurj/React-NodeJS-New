import React from 'react';
import { Route, Link } from 'react-router-dom';

const ManageCard = (props) => {
    console.log(props);

    return (
        <div className="col-3 Owners-Manage-col">
            <div className="Owners-Manage-Card">
                <img className="Owners-Manage-image" src={props.image} />
                <p className="Owners-Manage-p">Name : {props.name}  {props.lastname}</p>
                <p className="Owners-Manage-p">Category : {props.category}</p>
                <p className="Owners-Manage-p">Experience : {props.education}</p>
                <p className="Owners-Manage-p">Phone : {props.phone}</p>
                <p className="Owners-Manage-p">Location : {props.location}</p>
            </div>
        </div>
    );
}

export default ManageCard;