import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogContext from "./context/BlogContext";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";  // Import Footer.jsx

export default function App() {

  const [IsAuth, setIsAuth] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [UserAuthenticated, setUserAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");

  return (
    <BlogContext.Provider value={{
      IsAuth, 
      setIsAuth, 
      blogs,
      setBlogs,
      UserAuthenticated,
      setUserAuthenticated,
      userName, setUserName,
      userImage, setUserImage,
      currentUserId, setCurrentUserId,
    }}>
      <BrowserRouter>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Routes className="flex-grow">
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
          <Footer />  {/* Footer component */}
        </div>
      </BrowserRouter>
    </BlogContext.Provider>
  );
}
