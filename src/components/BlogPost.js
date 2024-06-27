// src/components/BlogPost.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getPosts } from '../utils/mockAPI';

// const BlogPost = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const posts = getPosts();
//       const selectedPost = posts.find(post => post.id === postId);
//       setPost(selectedPost);
//     };
//     fetchPost();
//   }, [postId]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p><strong>Author:</strong> {post.author}</p>
//       <p>{post.content}</p>
//       <p><strong>Published on:</strong> {post.publicationDate}</p>
//     </div>
//   );
// };

// export default BlogPost;






// persisting 





// // src/components/BlogPost.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getPostById } from '../utils/mockAPI';

// const BlogPost = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const selectedPost = getPostById(postId);
//       setPost(selectedPost);
//     };
//     fetchPost();
//   }, [postId]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p><strong>Author:</strong> {post.author}</p>
//       <p>{post.content}</p>
//       <p><strong>Published on:</strong> {post.publicationDate}</p>
//     </div>
//   );
// };

// export default BlogPost;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../utils/mockAPI';
import './BlogPost.css'; // Import the CSS file

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = getAllPosts();
      const selectedPost = posts.find(post => post.id === postId);
      setPost(selectedPost);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-container">
      <div className="post-card">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-author"><strong>Author:</strong> {post.author}</p>
        <p className="post-content">{post.content}</p>
        <p className="post-date"><strong>Published on:</strong> {post.publicationDate}</p>
      </div>
    </div>
  );
};

export default BlogPost;
