import React from 'react';
import { Route, Link } from 'react-router-dom';

const CardDetail = (props) => {
    console.log(props);

    return (
        <div className="row">
            <div className="make-info-col-6">
                <img className="info-image" src={props.image}></img>
            </div>
            <div className="make-info-col">
                <p className="more-infor-content"><span className="span-info">Full-Name : </span>{props.name} {props.lastname}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Phone : </span>{props.phone}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Company : </span>{props.company}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Case Closed : </span>{props.cc}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Case Closed Successfully : </span>{props.ccs}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Category : </span>{props.category}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Location : </span>{props.location}</p><br></br>
                <p className="more-infor-content"><span className="span-info">Education : </span>{props.education}</p><br></br>
                <button type="button" className="btn info-button">Contact Me</button>
            </div>
        </div>

    );
}

export default CardDetail;