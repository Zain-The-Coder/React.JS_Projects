import React from 'react'
import { Heart, MessageCircle, MoreHorizontal, Clock, Bookmark } from 'lucide-react';

const PostCreator = ({data}) => {
  const userAvatar = `https://ui-avatars.com/api/?name=${data.userName}&background=3b82f6&color=fff`;

  return (
    <>
    <div className="min-h-screen bg-[#0F172A] p-4 md:p-10 flex flex-col items-center">
      
      <div className="max-w-xl w-full bg-[#1E293B] rounded-[2rem] border border-slate-700/50 shadow-2xl shadow-black/20 overflow-hidden">
        
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={userAvatar} 
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/20" 
                alt="user" 
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1E293B] rounded-full"></div>
            </div>
            <div>
              <h4 className="font-bold text-slate-100 tracking-wide">{data.userName || "Zain User"}</h4>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="text-blue-400 font-medium">{data.userEmail || "user@zainmedia.com"}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> Just now
                </span>
              </div>
            </div>
          </div>
          <button className="text-slate-500 hover:text-slate-200 p-2 transition">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <div className="px-5 pb-4">
          <p className="text-slate-300 leading-relaxed text-[15px]">{data.userText}</p>
        </div>

        {data.userImage && (
          <div className="px-4">
            <div className="relative group rounded-3xl overflow-hidden aspect-video border border-slate-700">
              <img 
                src={data.userImage} // Ab ye dynamic hai!
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="post content" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        )}

        <div className="p-5 flex justify-between items-center">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-red-500/10 hover:text-red-500 text-slate-400 transition-all duration-300">
              <Heart size={18} />
              <span className="text-xs font-bold">0</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-blue-500/10 hover:text-blue-500 text-slate-400 transition-all duration-300">
              <MessageCircle size={18} />
              <span className="text-xs font-bold">0</span>
            </button>
          </div>
          <button className="p-2 text-slate-500 hover:text-blue-400 transition">
            <Bookmark size={20} />
          </button>
        </div>

        <div className="px-5 pb-5">
          <div className="flex items-center gap-3 bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 focus-within:border-blue-500/50 transition-all">
            <img src={userAvatar} className="w-8 h-8 rounded-lg" alt="me" />
            <input 
              type="text" 
              placeholder="Write a comment..." 
              className="bg-transparent border-none outline-none text-sm text-slate-200 w-full placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default PostCreator