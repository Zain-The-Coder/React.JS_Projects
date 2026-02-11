import React from 'react'

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-5 bg-[#050505] border-b border-white/5 sticky top-0 z-50">
        
        <h1 className="text-2xl font-black tracking-tighter text-white cursor-pointer group">
          <span className="text-blue-500 group-hover:text-white transition-colors duration-300">/</span>
          Zain
          <span className="font-light text-gray-400">Media</span>
        </h1>

        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <h2 className="text-sm font-medium text-gray-300">Hello,</h2>
            <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[2px] -mt-1">Guest</p>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden">
               <span className="text-xs font-bold text-white">ZM</span>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header