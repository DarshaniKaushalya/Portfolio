import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FaStackOverflow } from 'react-icons/fa'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src="/images/kau.jpg"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Darshani </span>
        Kaushalya
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Darshani Kaushalya Diwakara_Software Engineer_Resume.pdf"
        download="Darshani Kaushalya Diwakara_Software Engineer_Resumeme.pdf"
      >
        <GiTie className="w-6 h6" />
        Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around mx-auto my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/darshani-kaushalya-diwakara-48202a197/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>

        <a href="https://github.com/DarshaniKaushalya">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://stackoverflow.com/users/15127988/darshani-diwakara">
          <FaStackOverflow className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Wariyapola, Srilanka</span>
        </div>
        <h6 className="my-2 text-sm">darshanikaushalya7788dkd@gmail.com</h6>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none dark:bg-dark-200"
        onClick={() => window.open('mailto:darshanikaushalya7788dkd@gmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
