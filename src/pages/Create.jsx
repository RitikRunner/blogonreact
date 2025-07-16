import { useState } from "react";

const Create = () => {
  const [showInput, setShowInput] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleAddBlog = () => {
    if (newTitle.trim() === "") return;

    const newBlog = {
      title: newTitle,
      author: "Anonymous",
      id: Date.now(),
    };

    setBlogs([...blogs, newBlog]);
    setNewTitle("");
    setShowInput(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="">
      <h1>Here you can write about everything</h1>

      {/* + Button */}
      <div className="bg-red-400 rounded-full w-20 h-20 mx-auto">
        <button
          onClick={handleClick}
          className="font-extrabold text-7xl flex justify-center ml-3.5 mt-3 cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Form */}
      {showInput && (
        <div className="flex flex-col items-center mt-4">
          <textarea
            className="mb-2 p-2 border border-gray-300 rounded row-start-5 columns-40"
            placeholder="Enter blog content"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            rows={4}
            style={{ width: "300px" }}
          />
          <button
            onClick={handleAddBlog}
            className="font-bold bg-green-500 text-white text-xl px-4 py-2 rounded-xl mb-4"
          >
            Submit
          </button>
        </div>
      )}

      {/* Blog List */}
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-gray-100 border border-gray-300 rounded p-4 m-4"
        >
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-sm text-gray-600">Written by {blog.author}</p>
          <button
            onClick={() => handleDelete(blog.id)}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Create;