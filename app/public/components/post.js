import React from 'react';

const Post = ({ post }) => (
    <div>
        <h2>{post.title}</h2>
        <div>{post.content}</div>
    </div>
);

export default Post;

