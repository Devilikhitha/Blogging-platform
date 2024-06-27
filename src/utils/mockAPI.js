// // src/utils/mockAPI.js

// const STORAGE_KEY = 'blogPosts';

// // Initialize with mock data or an empty array
// if (!localStorage.getItem(STORAGE_KEY)) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
// }

// const getPosts = () => {
//   return JSON.parse(localStorage.getItem(STORAGE_KEY));
// };

// const addPost = (post) => {
//   const posts = getPosts();
//   posts.push(post);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
// };

// const updatePost = (postId, updatedPost) => {
//   let posts = getPosts();
//   posts = posts.map(post => (post.id === postId ? { ...post, ...updatedPost } : post));
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
// };

// const deletePost = (postId) => {
//   let posts = getPosts();
//   posts = posts.filter(post => post.id !== postId);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
// };

// export { getPosts, addPost, updatePost, deletePost };





// // src/utils/mockAPI.js

// let posts = [];

// export const getAllPosts = () => {
//   return posts;
// };

// export const getPostById = (id) => {
//   return posts.find(post => post.id === id);
// };

// export const addPost = (newPost) => {
//   posts.push(newPost);
// };

// export const updatePost = (id, updatedPost) => {
//   const index = posts.findIndex(post => post.id === id);
//   if (index !== -1) {
//     posts[index] = { ...posts[index], ...updatedPost };
//   }
// };

// export const deletePost = (id) => {
//   posts = posts.filter(post => post.id !== id);
// };



// // Define getPosts function
// export const getPosts = () => {
//     return posts;
//   };



// src/utils/mockAPI.js

// let posts = []; // Array to store posts

// // Function to get all posts
// export const getAllPosts = () => {
//   return posts;
// };



// // Define getPosts function
// export const getPosts = () => {
//     return posts;
//   };



// // Function to get a post by ID
// export const getPostById = (id) => {
//   return posts.find(post => post.id === id);
// };

// // Function to add a new post
// export const addPost = (newPost) => {
//   posts.push(newPost);
// };

// // Function to update an existing post
// export const updatePost = (id, updatedPost) => {
//   const index = posts.findIndex(post => post.id === id);
//   if (index !== -1) {
//     posts[index] = { ...posts[index], ...updatedPost };
//   }
// };

// // Function to delete a post by ID
// export const deletePost = (id) => {
//   posts = posts.filter(post => post.id !== id);
// };



// persisting



// src/utils/mockAPI.js

const loadPosts = () => {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
};

const savePosts = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

let posts = loadPosts(); // Load posts from local storage

// Function to get all posts
export const getAllPosts = () => {
  return posts;
};

// Function to get a post by ID
export const getPostById = (id) => {
  return posts.find(post => post.id === id);
};

// Function to add a new post
export const addPost = (newPost) => {
  posts.push(newPost);
  savePosts(posts); // Save to local storage
};

// Function to update an existing post
export const updatePost = (id, updatedPost) => {
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    savePosts(posts); // Save to local storage
  }
};

// Function to delete a post by ID
export const deletePost = (id) => {
  posts = posts.filter(post => post.id !== id);
  savePosts(posts); // Save to local storage
};
