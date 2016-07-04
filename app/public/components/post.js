import React from 'react';

const Post = ({ post }) => (
    <div>
        <h2>{post && post.title}</h2>
        <div>{post && post.content}</div>
    </div>
);

export default Post;

