import React from 'react';

const Post = ({ post }) => (
    <div>
        <h2>{post && post.title}</h2>
        <div dangerouslySetInnerHTML={renderPost(post)} />
    </div>
);

function renderPost(post) {
    return { __html: post && post.markedContent };
}

export default Post;

