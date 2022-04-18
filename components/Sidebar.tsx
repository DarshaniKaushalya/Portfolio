import React from 'react';
import{AiFillGithub, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div><img 
    src='/images/kau.jpg' 
    alt='user avatar'
    className='w-32 h32 mx-auto rounded-full'
    />
    <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Darshani </span> 
        Kaushalya
    </h3>
    <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
    <a className='px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center' 
        href='' 
        download="name"><GiTie className='w-6 h-6'/>Download Resume</a>
 {/* Social Icons */}
<div className='flex justify-around my-5 text-green md:w-full mx-auto'>
    <a href=''>
        <AiFillGithub className='w-8 h-8 cursor-pointer'/>
    </a>
    <a href=''>
        <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
    </a>
    <a href=''>
        <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
    </a>
</div>
 {/* Address */}
 <div className='my-5 py-4 bg-gray-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
     <div className='flex items-center justify-center space-x-2'>
         <GoLocation/>
         <span>Wariyapola, Srilanka</span>
     </div>
     <p className='my-2'>darshanikaushalya7788dkd@gmail.com</p>
     <p className='my-2'>1234567890</p>
 </div>
 {/* Email Button */}
 <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2
 focus:outline-none
 " 
 onClick={()=>window.open('mailto:darshanikaushalya7788dkd@gmail.com')}>Email Me</button>
 <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Toggle Theme</button>

    </div>
  )
}

export default Sidebar