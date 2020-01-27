import React from 'react';
import Item from "./Item";
function List () {

    let itemArray = [
        {
            color:"red",
            number:0,
            name:"Mario",
            id: 1
        },
        {
            color:"green",
            number:5,
            name:"Luigi",
            id: 2
        },
        {
            color:"#90ee90",
            number:2,
            name:"Yoshi",
            id: 3
        }
    ];

    let items = itemArray.map((item, index) =>
        <Item color={item.color} name={item.name} number={item.number} id={item.id} key={index}/>
    )

    return (
        <div>
            {items}
        </div>
    );
}

export default List;
