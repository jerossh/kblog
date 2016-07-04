import React from 'react';
import { Link } from 'react-router';

const Posts = ({ posts, getPost }) => (
    <div className="list-group">
        {posts && posts.length && posts.map((p, i) =>
            <Link className="list-group-item" key={i}
                    to={`/p/${p.id}.html`}
                    onClick={() => getPost(p.id)}>{p.title}</Link>
        )}
    </div>
);

export default Posts;

