import React from 'react'

function Projects() {
  return (
    <div>
      
        <div className="flex flex-wrap justify-center items-center font-bold  font-serif text-5xl text-rose-950 mt-10">Projects</div>
        <div className='h-auto w-full  flex flex-wrap text-white justify-center mt-5 md:mt-10'>
        <div className="h-80 w-120 border-2 border-gray-600 rounded-4xl m-2 bg-[url('/Images/amazon-img.png')]  bg-cover mx-3 cursor-pointer" >
          <p className='font-bold text-2xl flex justify-center'>Amazon Clone</p>
        </div>
        <div className="h-80 w-120 border-2 border-gray-600 mx-3 rounded-4xl m-2 bg-[url('/Images/watchPaglu.png')] bg-cover bg-center cursor-pointer " > 
          <p className='font-bold text-2xl flex justify-center'>WatchPaglu</p></div>
        
        <div className="h-80 w-120 border-2 border-gray-600 md:mt-3 md:mb-4 m-2 md:mx-3 rounded-4xl  bg-[url('/Images/currency-img.png')] bg-cover bg-center cursor-pointer " >
        <p className='font-bold text-2xl flex justify-center'>Currency Converter</p>
        </div>
        <div className="h-80 w-120  border-2 border-gray-600 md:mt-3 md:mb-4 mx-3 m-2 rounded-4xl bg-[url('/Images/blog-img.png')]  bg-cover  cursor-pointer" >
           <p className='font-bold text-2xl flex justify-center '>Blog Space</p></div>
    </div>
    </div>
  )
}

export default Projects