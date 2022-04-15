import React from 'react';

const Post = (props) => {
    const {title, content, karmaPoints, index} = props;

    return (
        <div>
            <h2>{title}</h2>
            <img style={{width: '500px'}} src={content} alt={title}/>
            <h3>{karmaPoints}</h3>
            <h1>*********************{index}******************************************</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Post;
