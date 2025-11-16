import "../App.css";
import { useState } from "react";

function BlogContent() {
  const [blog, setBlog] = useState(null);

  const blogs = [
    {
      title: "Mastering JavaScript",
      content:
        "JavaScript is one of the most versatile and powerful programming languages used in web development. From manipulating the DOM to building full-stack applications, JavaScript forms the backbone of modern web technologies."
    },
    {
      title: "React in Indian Startups",
      content:
        "React has become the most popular frontend library among Indian startups. Its component-based architecture, speed, and flexibility make it the preferred choice for building scalable and interactive user interfaces."
    },
    {
      title: "Career in Web Development",
      content:
        "Web development offers a wide range of career opportunities including frontend, backend, and full-stack roles. With the rapid digital growth in India, skilled developers are in high demand with attractive salary packages."
    }
  ];

  return (
    <div>
      {/* Blog Titles */}
      {blogs.map((ele, idx) => (
        <h3
          key={idx}
          onClick={() => setBlog(ele)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {ele.title}
        </h3>
      ))}

      {/* Blog Content */}
      {blog ? (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Select a blog to read</p>
      )}
    </div>
  );
}

export default BlogContent;
