import React from 'react'
import Nav from './Nav'
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaImdb } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import Link from 'next/link';

const FilmLink = ({data}) => {
  return (
    <div className='w-full flex justify-between items-center pt-10'>
      <div className='w-7/12 bg-gray h-128'>

      </div>
    <div className='w-4/12 h-128'>
      <div className='h-[4rem] flex justify-end'>
        <Link href={"/post-productions"}>
          <ImCancelCircle color='black' size={"30px"}/>
        </Link>
      </div>
    <div className='w-full h-96 flex flex-col justify-center gap-5'>
        <div className='flex flex-col gap-5 justify-center'>
          <div className='flex flex-col'>
            <h2 className='text-H2'>TITLE</h2>
            <h3 className='text-main'>SUBHEADER</h3>
          </div>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
            <div className='flex justify-between w-1/2'>
              <a href='https://www.instagram.com/buvaldo218/'>
                <FaInstagram size="30px" color='white'/>
              </a>
              <a href='https://www.youtube.com/channel/UCNDFgziSeSvF3CjxJxo7esg'>
                <FiYoutube size="30px" color='white'/>
              </a>
              <a href='https://www.imdb.com/name/nm12071705/'>
                <FaImdb size="30px" color='white'/>
              </a>
              <a href='https://www.linkedin.com/in/bryan-uvaldo-59827a1b9/'>
                <FiLinkedin size="30px" color='white'/>
              </a>
          </div>
        </div>
        
       
       
      </div>
    </div>
      
    </div>
  )
}

export default FilmLink