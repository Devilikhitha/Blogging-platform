// // // src/components/AddEditPost.js

// // import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import { addPost, updatePost } from '../utils/mockAPI';

// // const AddEditPost = ({ post }) => {
// //   const [formData, setFormData] = useState({
// //     title: post ? post.title : '',
// //     author: post ? post.author : '',
// //     content: post ? post.content : '',
// //     publicationDate: post ? post.publicationDate : ''
// //   });

// //   const history = useHistory();

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (post) {
// //       updatePost(post.id, formData);
// //     } else {
// //       addPost({ ...formData, id: Date.now().toString() });
// //     }
// //     history.push('/');
// //   };

// //   return (
// //     <div>
// //       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>Title:</label>
// //         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
// //         <label>Author:</label>
// //         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
// //         <label>Content:</label>
// //         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
// //         <label>Publication Date:</label>
// //         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
// //         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddEditPost;



// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { addPost, updatePost } from '../utils/mockAPI';

// const AddEditPost = ({ post, history }) => {
//   const [formData, setFormData] = useState({
//     title: post ? post.title : '',
//     author: post ? post.author : '',
//     content: post ? post.content : '',
//     publicationDate: post ? post.publicationDate : ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (post) {
//       updatePost(post.id, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     // Use history.push('/') to navigate to the homepage
//     history.push('/');
//   };

//   return (
//     <div>
//       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// AddEditPost.propTypes = {
//   post: PropTypes.object, // Optional post object for editing
//   history: PropTypes.object.isRequired // Required history object for navigation
// };

// export default AddEditPost;





// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { addPost, updatePost } from '../utils/mockAPI';
// import { useNavigate } from 'react-router-dom';

// const AddEditPost = ({ post }) => {
//   const navigate = useNavigate(); // Hook to get navigation function

//   const [formData, setFormData] = useState({
//     title: post ? post.title : '',
//     author: post ? post.author : '',
//     content: post ? post.content : '',
//     publicationDate: post ? post.publicationDate : ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (post) {
//       updatePost(post.id, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/'); // Navigate to the homepage after submission
//   };

//   return (
//     <div>
//       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// AddEditPost.propTypes = {
//   post: PropTypes.object // Optional post object for editing
// };

// export default AddEditPost;




// // src/components/AddEditPost.js

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { addPost, updatePost } from '../utils/mockAPI';

// const AddEditPost = ({ post }) => {
//   const [formData, setFormData] = useState({
//     title: post ? post.title : '',
//     author: post ? post.author : '',
//     content: post ? post.content : '',
//     publicationDate: post ? post.publicationDate : ''
//   });

//   const history = useHistory();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (post) {
//       updatePost(post.id, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     history.push('/');
//   };

//   return (
//     <div>
//       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;



// src/components/AddEditPost.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addPost, updatePost } from '../utils/mockAPI';

// const AddEditPost = ({ post }) => {
//   const [formData, setFormData] = useState({
//     title: post ? post.title : '',
//     author: post ? post.author : '',
//     content: post ? post.content : '',
//     publicationDate: post ? post.publicationDate : ''
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (post) {
//       updatePost(post.id, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;






// src/components/AddEditPost.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { addPost, updatePost } from '../utils/mockAPI';

// const AddEditPost = ({ post }) => {
//   const [formData, setFormData] = useState({
//     title: post ? post.title : '',
//     author: post ? post.author : '',
//     content: post ? post.content : '',
//     publicationDate: post ? post.publicationDate : ''
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (post) {
//       updatePost(post.id, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{post ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;




// // src/components/AddEditPost.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getPostById, addPost, updatePost } from '../utils/mockAPI';

// const AddEditPost = () => {
//   const { postId } = useParams();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     content: '',
//     publicationDate: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (postId) {
//       const post = getPostById(postId);
//       if (post) {
//         setFormData({
//           title: post.title,
//           author: post.author,
//           content: post.content,
//           publicationDate: post.publicationDate
//         });
//         setIsEditing(true);
//       } else {
//         setIsEditing(false);
//       }
//     }
//   }, [postId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       updatePost(postId, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;





//with css 


// src/components/AddEditPost.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getPostById, addPost, updatePost } from '../utils/mockAPI';
// import './AddEditPost.css'; // Import the CSS file

// const AddEditPost = () => {
//   const { postId } = useParams();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     content: '',
//     publicationDate: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (postId) {
//       const post = getPostById(postId);
//       if (post) {
//         setFormData({
//           title: post.title,
//           author: post.author,
//           content: post.content,
//           publicationDate: post.publicationDate
//         });
//         setIsEditing(true);
//       } else {
//         setIsEditing(false);
//       }
//     }
//   }, [postId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       updatePost(postId, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/');
//   };

//   return (
//     <div className="add-edit-post">
//       <h2>{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;








// src/components/AddEditPost.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getPostById, addPost, updatePost } from '../utils/mockAPI';
// import './AddEditPost.css'; // Import the CSS file

// const AddEditPost = () => {
//   const { postId } = useParams();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     content: '',
//     publicationDate: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (postId) {
//       const post = getPostById(postId);
//       if (post) {
//         setFormData({
//           title: post.title,
//           author: post.author,
//           content: post.content,
//           publicationDate: post.publicationDate
//         });
//         setIsEditing(true);
//       } else {
//         setIsEditing(false);
//       }
//     }
//   }, [postId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       updatePost(postId, formData);
//     } else {
//       addPost({ ...formData, id: Date.now().toString() });
//     }
//     navigate('/');
//   };

//   return (
//     <div className="add-edit-post">
//       <h2>{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
//         <label>Author:</label>
//         <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
//         <label>Content:</label>
//         <textarea name="content" value={formData.content} onChange={handleInputChange} required />
//         <label>Publication Date:</label>
//         <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
//         <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
//       </form>
//     </div>
//   );
// };

// export default AddEditPost;



// src/components/AddEditPost.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, addPost, updatePost } from '../utils/mockAPI';
import './AddEditPost.css'; // Import the CSS file

const AddEditPost = () => {
  const { postId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    publicationDate: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      const post = getPostById(postId);
      if (post) {
        setFormData({
          title: post.title,
          author: post.author,
          content: post.content,
          publicationDate: post.publicationDate
        });
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updatePost(postId, formData);
    } else {
      addPost({ ...formData, id: Date.now().toString() });
    }
    navigate('/');
  };

  return (
    <div className="add-edit-post">
      <h2>{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleInputChange} required />
        <label>Content:</label>
        <textarea name="content" value={formData.content} onChange={handleInputChange} required />
        <label>Publication Date:</label>
        <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} required />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
      </form>
    </div>
  );
};

export default AddEditPost;
