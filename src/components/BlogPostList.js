// // src/components/BlogPostList.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { getPosts, deletePost } from '../utils/mockAPI';

// const PostContainer = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h3`
//   color: #333;
// `;

// const Author = styled.p`
//   font-size: 14px;
//   color: #666;
// `;

// const Summary = styled.p`
//   color: #444;
// `;

// const Date = styled.p`
//   font-size: 12px;
//   color: #888;
// `;

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedPosts = getPosts();
//       setPosts(fetchedPosts);
//     };
//     fetchData();
//   }, []);

//   const handleDelete = (postId) => {
//     deletePost(postId);
//     setPosts(posts.filter(post => post.id !== postId));
//   };

//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       {posts.map(post => (
//         <PostContainer key={post.id}>
//           <Title>{post.title}</Title>
//           <Author><strong>Author:</strong> {post.author}</Author>
//           <Summary>{post.summary}</Summary>
//           <Date><strong>Published on:</strong> {post.publicationDate}</Date>
//           <Link to={`/posts/${post.id}`}>Read more</Link>
//           <button onClick={() => handleDelete(post.id)}>Delete</button>
//         </PostContainer>
//       ))}
//     </div>
//   );
// };

// export default BlogPostList;







// src/components/BlogPostList.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllPosts, deletePost } from '../utils/mockAPI';

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const allPosts = getAllPosts();
//       setPosts(allPosts);
//     };
//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     deletePost(id);
//     setPosts(posts.filter(post => post.id !== id));
//   };

//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>
//               <Link to={`/posts/${post.id}`}>
//                 <h3>{post.title}</h3>
//               </Link>
//               <p>Author: {post.author}</p>
//               <p>{post.summary}</p>
//               <p>Published on: {post.publicationDate}</p>
//               <button onClick={() => handleDelete(post.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default BlogPostList;





// src/components/BlogPostList.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllPosts, deletePost } from '../utils/mockAPI';

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts when component mounts
//     setPosts(getAllPosts());
//   }, []);

//   const handleDelete = (id) => {
//     deletePost(id);
//     setPosts(getAllPosts()); // Refresh posts after deletion
//   };

//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>
//               <Link to={`/posts/${post.id}`}>
//                 <h3>{post.title}</h3>
//               </Link>
//               <p>Author: {post.author}</p>
//               <p>{post.summary}</p>
//               <p>Published on: {post.publicationDate}</p>
//               <button onClick={() => handleDelete(post.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <Link to="/add">Add New Post</Link>
//     </div>
//   );
// };

// export default BlogPostList;







// // src/components/BlogPostList.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllPosts, deletePost } from '../utils/mockAPI';
// import './BlogPostList.css';

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts when component mounts
//     setPosts(getAllPosts());
//   }, []);

//   const handleDelete = (id) => {
//     deletePost(id);
//     setPosts(getAllPosts()); // Refresh posts after deletion
//   };

//   return (
//     <div className="blog-posts-container">
//       <div className="blog-posts-header">
//         <h2>Blog Posts</h2>
//         <Link to="/add">
//           <button className="add-post-button">Add New Post</button>
//         </Link>
//       </div>
//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         <ul>
//           {posts.map(post => (
//             <li key={post.id} className="blog-post-card">
//               <div>
//                 <Link to={`/posts/${post.id}`}>
//                   <h3>{post.title}</h3>
//                 </Link>
//                 <p>Author: {post.author}</p>
//                 <p>{post.summary}</p>
//                 <p>Published on: {post.publicationDate}</p>
//               </div>
//               <div className="blog-post-card-buttons">
//                 <Link to={`/edit/${post.id}`}>
//                   <button>Edit</button>
//                 </Link>
//                 <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default BlogPostList;



// persisting 




// // src/components/BlogPostList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../utils/mockAPI';
import './BlogPostList.css';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when component mounts
    setPosts(getAllPosts());
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    setPosts(getAllPosts()); // Refresh posts after deletion
  };

  return (
    
    <div className="blog-posts-container">
      <h1 className='Main'>BlogNest</h1>
      <div className="blog-posts-header">
        <h2>Blog Posts</h2>
     
        <Link to="/add" className="link-button">
        <button className="add-post-button">
          <span className="add-post-icon">+</span> Add New Post
        </button>
    </Link>
      </div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} className="blog-post-card">
              <div>
                <Link to={`/posts/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p>Author: {post.author}</p>
                <p>{post.summary}</p>
                <p>Published on: {post.publicationDate}</p>
              </div>
              <div className="blog-post-card-buttons">
                <Link to={`/edit/${post.id}`}>
                  <button>Edit</button>
                </Link>
                <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPostList;








// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllPosts, deletePost } from '../utils/mockAPI';
// import './BlogPostList.css'; // Import the CSS file

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setPosts(getAllPosts());
//   }, []);

//   const handleDelete = (id) => {
//     deletePost(id);
//     setPosts(getAllPosts());
//   };

//   return (
//     <div className="list-container">
//       <h2 className="main-title">Blog Posts</h2>
//       <Link to="/add" className="link-button">
//         <button className="add-post-button">
//           <span className="add-post-icon">+</span> Add New Post
//         </button>
//       </Link>
//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         <div className="posts-list">
//           {posts.map(post => (
//             <div className="post-card" key={post.id}>
//               <Link to={`/posts/${post.id}`} className="post-link">
//                 <h3 className="post-title">{post.title}</h3>
//               </Link>
//               <p className="post-author">Author: {post.author}</p>
//               <p className="post-summary">{post.summary}</p>
//               <p className="post-date">Published on: {post.publicationDate}</p>
//               <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPostList;
