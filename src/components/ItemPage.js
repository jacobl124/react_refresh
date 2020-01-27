import React from 'react';
import {Link} from "react-router-dom";


function ItemPage (props) {
    return (
        <div>
            My ID is {props.match.params.id}
            <div>
            <Link to="/">Return to list</Link>
            </div>
        </div>
    );
}

export default ItemPage;
