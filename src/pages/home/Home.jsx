import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios"

export default function Home() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get("/posts")
      console.log(response)
    }
    fetchPost()
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
