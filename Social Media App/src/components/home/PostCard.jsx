import React, { useEffect, useState } from 'react'
import PostUploader from './PostUploader';

const PostCard = () => {
    const [userName , setuserName] = useState("");
    const [userEmail , setuserEmail] = useState("");
    useEffect(() => {
        setuserName(localStorage.getItem("userName"));
        setuserEmail(localStorage.getItem("userEmail"))

    } , [])
  return (
    <>
    <p>{userName}</p>
    <p>{userEmail}</p>
    <PostUploader />

    </>
  )
}

export default PostCard