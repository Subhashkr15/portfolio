import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')


  const Handler=(e)=>{
     e.preventDefault()
     console.log("Name:",name)
     console.log("Email",email)
     console.log("Subject",subject)
     console.log("Message",message)

     setName('')
     setEmail('')
     setSubject('')
     setMessage('')
  }
  return (
<div className="flex flex-row flex-wrap justify-around mt-15 md:mt-20 font-serif">
  <div className="h-auto w-200 text-[#061825] ml-3 ">
    <h1 className='font-extrabold text-red-950 flex justify-center text-lg md:text-4xl'>Contact Me</h1>
    <p className='font-bold text-sky-950 mt-5 md:mt-2 text-sm md:text-lg'>Let's Work Together</p>
    <p className='mt-3 md:mt-2 text-balance md:text-lg text-[13px]'>Thank you for visiting my portfolio!
    <br/>
     As a fresher frontend developer, I’m excited to explore opportunities where I can apply my skills, 
     learn from experienced developers, and contribute to meaningful projects. I’m passionate about creating user-friendly 
     interfaces and bringing designs to life using HTML, CSS, JavaScript, React, and Tailwind CSS.
     Whether you're a recruiter, developer, or just someone who wants to connect — I’d love to hear from you!
     Feel free to reach out to me for internships, freelance work, full-time roles, or even for a quick tech chat.</p>
    <p className='flex flex-row text-lg md:text-xl items-center mt-4 md:mt-10 '> 
    <img className='h-3 w-3' src="Images/contact-email.jpg " alt=""/>
    <Link to="https://mail.google.com/" >subhashkr1508@gmail.com </Link></p> 
    <p className='flex flex-row items-center text-lg md:text-lg'>
      <img className='h-4 w-4 ' src="Images/contact-phn.jpeg" alt="" />7004287513</p>
    <div className='md:h-20 md:w-8 h-6 w-6  mt-1 md:mt-2  flex flex-col  flex-wrap '>

      <Link 
      to="https://www.instagram.com/subhash_k15/">
      <img className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="/Images/contact-insta.jpeg" alt="" />
      </Link>
      <Link 
      to="https://github.com/Subhashkr15">
      <img className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="/Images/contact-github.jpg" alt="" /></Link>
      
      <Link 
      to="https://www.linkedin.com/in/subhash-kumar-419466284/">
      <img  className="rounded-full m-2 p-1 border-2 hover:border-pink-700" src="Images/contact-linkedin.jpeg" alt="" /></Link>
    </div>
  </div>
  <div className="md:h-auto h-65  md:mt-5 mt-15 flex flex-col flex-wrap">
    <form  onSubmit={Handler}>
    <div className="flex flex-col text-[#08034e] flex-wrap font-bold ">
      
      <input className="border-black   rounded-md border-2 h-7 w-50 placeholder-gray-800 md:h-10 px-2 md:w-120"
       type="text"  placeholder='Enter Your Name'
       value={name}
       onChange={(e)=>setName(e.target.value)}
      />
      <input  className="border-black  placeholder-gray-800 rounded-md  mt-2 border-2  h-7 w-50 md:h-9 px-2 md:w-120"
       type="text" placeholder="Enter Your Email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)} />

      <input  className="border-black placeholder-gray-800 rounded-md mt-2 border-2  h-7 w-50 md:h-9 md:w-120 px-2" 
      type="text" placeholder='Enter Your Subject'
      value={subject}
      onChange={(e)=>setSubject(e.target.value)}/>

      <textarea className='border-black  mt-2 h-10 w-50 md:h-30 md:w-120 border-2 text-left align-top pt-2 px-2 borderr-gray-300 rounded-md placeholder-gray-800 resize-none'placeholder='Enter Your Message' 
       value={message}
       onChange={(e)=>setMessage(e.target.value)}></textarea>

    <button className=" text-xl font-bold border-2  mt-4 md:mt-6 h-10  rounded-full 
     bg-gradient-to-r from-[#000407]  via-[#27425e] to-[rgb(94,172,236)] focus:ring-1 text-white  focus:ring-sky-950 focus-outline-none "
    type="submit">
      Submit    
    </button>
  </div>
  </form>
  </div>
</div>
  )
}

export default Contact