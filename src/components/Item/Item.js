import React from 'react';


function Item (props) {
    return (
        <div>
            My item is {props.match.params.id}
        </div>
    );
}

export default Item;
