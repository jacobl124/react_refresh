import React from 'react';


export default function Post (props) {

    const [post,setPost] = React.useState(props.number);

    return (
       <div className="post" style={{color: props.color}} onClick={()=>setPost(post+1)}>
           Post Number: {post}
       </div>
    );
}

