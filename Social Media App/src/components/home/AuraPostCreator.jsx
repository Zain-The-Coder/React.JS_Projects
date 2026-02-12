import React, { useState } from 'react';
import { Image, Smile, Send} from 'lucide-react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import DummyPost from './DummyPost';
import PostCard from './PostCard';
import PostCreator from './PostCreator';

const AuraPostCreator = () => {
  let curruntUserName = localStorage.getItem("userName");
  let curruntUserEmail = localStorage.getItem("userEmail");
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [posted , setPosted] = useState(false);
  const [obj , setObj] = useState({});
 
function addData() {
  setDoc(doc(db, "posts", curruntUserName), {
    name: curruntUserName ,
    email : curruntUserEmail ,
    text : content , 
    like : 'liks'
  })
    .then(() => {
      console.log("Document successfully written!");
      setObj({userName : curruntUserName , userEmail : curruntUserEmail , userText : content})
    })

    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}



  return (
    <div className="max-w-[80%] mx-auto p-1">
      <div className={`transition-all duration-500 rounded-3xl p-[1px] bg-gradient-to-br 
        ${isFocused ? 'from-blue-500 via-purple-500 to-pink-500 shadow-xl' : 'from-gray-200 to-gray-200 shadow-sm'}`}>
        
        <div className="bg-black rounded-[23px] overflow-hidden">
          <div className="p-5">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl text-center object-cover bg-slate-100 font-[poppins] text-[30px]">
                  {curruntUserName.charAt(0)}

                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="flex-1">
                <textarea onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white font-[poppins] text-[14px] p-[10px] text-lg placeholder-gray-400 resize-none min-h-[100px]"
                  placeholder="Kuch naya share karein..."/>
              </div>
            </div>

            <div className="h-[1px] w-full bg-gray-100 my-4" />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <PostTool icon={<Image size={20} />} color="hover:bg-blue-50 cursor-pointer hover:text-blue-600" />
                <PostTool icon={<Smile size={20} />} color="hover:bg-yellow-50  cursor-pointer hover:text-yellow-600" />
              </div>

              <button onClick={addData}
                disabled={!content.trim()}
                className={`group flex items-center cursor-pointer space-x-2 px-6 py-2.5 rounded-2xl font-bold transition-all duration-300
                  ${!content.trim() 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800 active:scale-95 shadow-lg shadow-black/20'}`}>
                <span>Post</span>
                <Send size={16} className={`transition-transform duration-300 ${content.trim() && 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PostCreator data={obj} 
       />
    </div>
  );
};

const PostTool = ({ icon, color }) => (
  <button className={`p-2.5 rounded-xl text-gray-500 transition-colors duration-200 ${color}`}>
    {icon}</button>
);

export default AuraPostCreator;