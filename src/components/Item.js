import React from 'react';
import {
    Link,
} from 'react-router-dom'

export default function Item (props) {

    const [colored, setColored] = React.useState(false);

    let style = {
        backgroundColor: "white"
    };

    if (colored === true) {
         style = {
            backgroundColor: props.color
        }
    }
    else {
         style = {
            backgroundColor: "white"
        }
    }

    const toggleColor = () => {
        setColored(!colored)
        };

    return (
        <div className="post" style={style} onClick={toggleColor}>
            <h1>{props.name}</h1>

            <Link to={`/item/${props.id}`}>Item Link</Link>
        </div>
    );
}


