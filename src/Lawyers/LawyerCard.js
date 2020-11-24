import React from 'react';
import { Route, Link } from 'react-router-dom';

const LawyerCard = (props) => {
    console.log(props);

    return (
        <div className="col-3 lawyers-col">
            <div className="lawyers-card">
                <img className="lawyers-image" src={props.image} />
                <p className="lawyers-p">Name : {props.name}  {props.lastname}</p>
                <p className="lawyers-p">Category : {props.category}</p>
                <p className="lawyers-p">Experience : {props.education}</p>
                <Link to={{ pathname: "/lawyer-details/" + props.id }} className="btn lawyers-button">More Info</Link>
            </div>
        </div>
    );
}

export default LawyerCard;