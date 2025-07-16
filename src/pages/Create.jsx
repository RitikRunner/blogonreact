import { useState } from "react";

const Create = () => {

  const [showInput,setShowInput] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [blogs, setBlogs] = useState([])

  const handleClick=()=>{
      setShowInput(true)
  }

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
  
  const handleDelete=()=>{
    setBlogs(blogs.filter((blog)=> blog.id));
  }
  
  return (
    <div className="">
      <h1>here you can write about everything</h1>
        <div className="bg-red-400 rounded-full w-20 h-20 mx-auto">
          <button onClick={handleClick} className="font-extrabold text-7xl flex justify-center content-evenly ml-3.5 mt-3 cursor-pointer">+</button>
        </div>
      
      {showInput && (
        <div className="flex flex-col">
          <textarea
           className="flex"
            placeholder="Enter blog content"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            rows={4}
            style={{ width: "300px" }}
/>
          <button onClick={handleAddBlog} className="font-bold bg-green-500 text-white text-xl w-30 h-9 cursor-pointer flex rounded-xl justify-center ">Submit</button>
          <button onClick={() => handleDelete(blogs.id)} className="font-bold bg-red-500 text-white text-xl w-30 h-9 cursor-pointer flex rounded-xl justify-center" >Delete</button>
          
        </div>
      )}
    </div>
  )
}

export default Create
