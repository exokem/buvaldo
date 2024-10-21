import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaImdb } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=' h-48 flex justify-center items-end'>
    <div className='white_gradient2 h-40 w-full text-black flex items-center justify-between p-2 md:p-10'>
        <p className='text-lg md:text-H2'>BRYAN UVALDO</p>
        <div className='hidden md:flex justify-center md:justify-between w-1/4'>
            <a href='https://www.instagram.com/buvaldo218/'>
                <FaInstagram size="30px" color='black'/>
            </a>
            <a href='https://www.youtube.com/channel/UCNDFgziSeSvF3CjxJxo7esg'>
                <FiYoutube size="30px" color='black'/>
            </a>
            <a href='https://www.imdb.com/name/nm12071705/'>
                <FaImdb size="30px" color='black'/>
            </a>
            <a href='https://www.linkedin.com/in/bryan-uvaldo-59827a1b9/'>
                <FiLinkedin size="30px" color='black'/>
            </a>
        </div>
        <div className='flex md:hidden justify-center md:justify-between w-1/4'>
            <a href='https://www.instagram.com/buvaldo218/'>
                <FaInstagram size="20px" color='black'/>
            </a>
            <a href='https://www.youtube.com/channel/UCNDFgziSeSvF3CjxJxo7esg'>
                <FiYoutube size="20px" color='black'/>
            </a>
            <a href='https://www.imdb.com/name/nm12071705/'>
                <FaImdb size="20px" color='black'/>
            </a>
            <a href='https://www.linkedin.com/in/bryan-uvaldo-59827a1b9/'>
                <FiLinkedin size="20px" color='black'/>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Footer