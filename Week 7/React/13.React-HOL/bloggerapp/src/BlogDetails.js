import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Conditional Rendering", date: "2024-06-10" },
    { id: 2, title: "Using map() in JSX", date: "2024-07-05" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - <em>{blog.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
