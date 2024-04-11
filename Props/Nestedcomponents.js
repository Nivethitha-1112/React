import React from 'react'
import './nestedcomponents.css'

//Nested Components Create a hierarchy of components, with multiple levels of nesting. 
//Pass props down through the hierarchy and display the data at each level of nesting.

// Parent Component: BlogPost
const BlogPost = () => {
    return (
        <div className="blog-post">
            <PostHeader />
            <PostContent />
            <PostFooter />
        </div>
    );
}

// Child Components
const PostHeader = () => {
    return (
        <div className='nested'>
            <h2>PROPS EXAMPLE: 06</h2>
            <h3>Nested Components</h3>
        <header className="post-header">
            <h3>Title of the Blog Post</h3>
            <p>Author: John Doe</p>
        </header>
        </div>
    );
}

const PostContent = () => {
    return (
        <div className="post-content">
            <p>This is the content of the blog post...</p>
        </div>
    );
}

const PostFooter = () => {
    return (
        <footer className="post-footer">
            <p>Published on: April 10, 2024</p>
            <button>Like</button>
        </footer>
    );
}

export default BlogPost;