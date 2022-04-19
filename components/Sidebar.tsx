import React from 'react';
import{AiFillGithub, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {

    
    const {theme,setTheme} = useTheme();

    const changeTheme = ()=>{
        setTheme(theme==="light" ? "dark":"light");
    }
    
  return (
    <div>
    <Image 
    src='/images/kau.jpg' 
    alt='user avatar'
    className='mx-auto rounded-full'
    height="128px"
    width="128px"
    layout="intrinsic"
    />
    <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Darshani </span> 
        Kaushalya
    </h3>
    <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
    <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' 
        href='' 
        download="name"><GiTie className='w-6 h-6'/>Download Resume</a>
 {/* Social Icons */}
<div className='flex justify-around mx-auto my-5 text-green md:w-full'>
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
 <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
     <div className='flex items-center justify-center space-x-2'>
         <GoLocation/>
         <span>Wariyapola, Srilanka</span>
     </div>
     <p className='my-2'>darshanikaushalya7788dkd@gmail.com</p>
     <p className='my-2'>1234567890</p>
 </div>
 {/* Email Button */}
 <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none dark:bg-dark-200" 
 onClick={()=>window.open('mailto:darshanikaushalya7788dkd@gmail.com')}>Email Me</button>
 <button 
 onClick={changeTheme}
 className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>

    </div>
  )
}

export default Sidebar