import React, { useState, useRef } from 'react';
import { Image, Smile, Send, X } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../../firebase";
import PostCreator from './PostCreator';

const AuraPostCreator = () => {
  let curruntUserName = localStorage.getItem("userName");
  let curruntUserEmail = localStorage.getItem("userEmail");
  
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Preview ke liye
  const [loading, setLoading] = useState(false);
  const [obj, setObj] = useState({});
  const fileInputRef = useRef(null);

  // Cloudinary Upload Logic
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'socialmediaapp');
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/daluopcso/image/upload`,
      { method: 'POST', body: formData }
    );
    const data = await response.json();
    return data.secure_url;
  };

  // File selection handle karna
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImageFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Browser mein preview dikhane ke liye
    }
  };

  async function addData() {
    if (!content.trim() && !imageFile) return;
    
    setLoading(true);
    let finalImageUrl = "";

    try {
      if (imageFile) {
        finalImageUrl = await uploadToCloudinary(imageFile);
      }

      const docRef = await addDoc(collection(db, "posts"), {
        name: curruntUserName,
        email: curruntUserEmail,
        text: content,
        image: finalImageUrl,
        createdAt: serverTimestamp(),
        likes: 0
      });

      console.log("Document written with ID: ", docRef.id);
      
      setObj({
        userName: curruntUserName,
        userEmail: curruntUserEmail,
        userText: content,
        userImage: finalImageUrl
      });

      // Cleanup
      setContent('');
      setImageFile(null);
      setPreviewUrl(null);

    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[80%] mx-auto p-1">
      <div className={`transition-all duration-500 rounded-3xl p-[1px] bg-gradient-to-br 
        ${isFocused ? 'from-blue-500 via-purple-500 to-pink-500 shadow-xl' : 'from-gray-200 to-gray-200 shadow-sm'}`}>
        
        <div className="bg-black rounded-[23px] overflow-hidden p-5">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-2xl">
                {curruntUserName?.charAt(0)}
              </div>
              <div className="flex-1">
                <textarea 
                  onFocus={() => setIsFocused(true)} 
                  onBlur={() => setIsFocused(false)} 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white text-sm p-2 min-h-[100px] resize-none"
                  placeholder="Kuch naya share karein..."
                />

                {previewUrl && (
                  <div className="relative mt-2 w-40 h-40 rounded-xl overflow-hidden border border-gray-700">
                    <img src={previewUrl} className="w-full h-full object-cover" alt="preview" />
                    <button 
                      onClick={() => {setPreviewUrl(null); setImageFile(null);}}
                      className="absolute top-1 right-1 bg-black/50 p-1 rounded-full text-white"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="h-[1px] bg-gray-800 my-4" />

            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button onClick={() => fileInputRef.current.click()} className="p-2 text-gray-400 hover:text-blue-400 transition">
                  <Image size={20} />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden />
                <button className="p-2 text-gray-400 hover:text-yellow-400 transition"><Smile size={20} /></button>
              </div>

              <button 
                onClick={addData}
                disabled={loading || (!content.trim() && !imageFile)}
                className={`flex items-center space-x-2 px-6 py-2 rounded-2xl font-bold transition-all
                  ${loading ? 'bg-gray-700 text-gray-500' : 'bg-white text-black hover:bg-gray-200'}`}
              >
                <span>{loading ? "Posting..." : "Post"}</span>
                <Send size={16} />
              </button>
            </div>
        </div>
      </div>
      {obj.userName && <PostCreator data={obj} />}
    </div>
  );
};

export default AuraPostCreator;