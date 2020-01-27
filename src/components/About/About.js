import React from 'react';
import Post from "./Post";
function About () {

    let postArray = [
        {
            color:"red",
            number:0
        },
        {
            color:"green",
            number:5
        },
        {
            color:"blue",
            number:2
        },
        {
            color:"orange",
            number:10
        },{
            color:"purple",
            number:40
        },
    ];

    let posts = postArray.map((pst, index) =>
        <Post color={pst.color} number={pst.number} key={index}/>
    )

    return (
        <div>
            {/*<Post color={"blue"}/>*/}
            {/*<Post color={"orange"}/>*/}
            {/*<Post color={"purple"}/>*/}
            {/*<Post color={"red"}/>*/}
            {posts}
        </div>
    );
}

export default About;
