import React from 'react';
import { Route, Link } from 'react-router-dom';

const Category = (props) => {
    console.log(props);

    return (
        <option value={props.id}>{props.category}</option>
    );
}

export default Category;