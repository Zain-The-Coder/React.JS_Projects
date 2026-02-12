import React, { useEffect, useState } from 'react'
import PostUploader from './PostUploader';
import AuraPostCreator from './AuraPostCreator';

const PostCard = ({doc}) => {
    const [userName , setuserName] = useState("");
    const [userEmail , setuserEmail] = useState("");
    useEffect(() => {
        setuserName(localStorage.getItem("userName"));
        setuserEmail(localStorage.getItem("userEmail"))

    } , [])
  return (
    <>
    <AuraPostCreator />
    </>
  )
}

export default PostCard