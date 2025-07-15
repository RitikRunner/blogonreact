import { useState } from "react"

const Home = () => {
  
  const [blogs,setBlogs] = useState([
   {title: 'My new website', body: 'lorem impsum', author: 'mario' , id: 1},
   {title: 'holy moly', body: 'gsdgsgem impsdfsdfum', author: 'Luigi' , id: 2},
   {title: 'ding dong', body: 'fffrem ssdpssdfsdum', author: 'Yoshi' , id: 3},
  ]);


  return (
    <div className="flex justify-center items-stretch flex-col ">
      {blogs.map((blog) => (
  <div className="blog-preview" key={blog.id}>
    <h2 className="font-bold text-4xl text-green-600">{blog.title}</h2>
    <p>Written by {blog.author}</p>
  </div>
         ))}
    </div>
  )
}

export default Home
