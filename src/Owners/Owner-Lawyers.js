import React from 'react';
import { Route, Link } from 'react-router-dom';

const OwnLawyer = (props) => {
    console.log(props);

    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.lastname}</td>
            <td>{props.phone}</td>
            <td>{props.cc}</td>
            <td>{props.ccs}</td>
            <td>{props.education}</td>
            <td>{props.image}</td>
            <td>{props.company}</td>
            <td>{props.locId}</td>
            <td>{props.CatId}</td>
            <td>{props.category}</td>
            <td>{props.location}</td>
        </tr>
    );
}

export default OwnLawyer;