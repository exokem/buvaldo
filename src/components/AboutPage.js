import React from 'react'
import Nav from './Nav'
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaImdb } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import Footer from './Footer';

const AboutPage = ({state, setState,home}) => {
  return (
    <>
    <div className='blue w-full h-screen'>
        <div className=' pb-0 h-1/5'>
        <Nav state={state} setState={setState} box={home && 0}/>
        </div>
        <div className='h-3/4  w-full p-10 flex md:flex-row flex-col gap-10 justify-around'>
            <div className='h-full w-full md:w-2/3  flex flex-col'>
                <img className="object-cover h-full shadow-lg md:w-auto w-full" src={home ? "/Website_Photos/ARI06304-1.jpg":'/Website_Photos/ARI07793-1.jpg'}/>
                <div className='text-black w-full'>
                    <p>Contact: buvaldo218@gmail.com</p>
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
            <div className='w-full text-bold text-black md:w-1/2 h-full flex items-center justify-start text-[10px] md:text-[20px]'>
                <p>Bryan Uvaldo is a Brazilian-American filmmaker with a B.F.A. in Film & Television from NYU Tisch School of the Arts. Passionate for the action film genre, Bryan is set to debut his first action short Love Bomb Baby later this year and follow that up with his NYU thesis, Playin’ Around, early next year. Bryan has edited ten short films, multiple promos for HBO Max, and is now the lead editor for a feature film. An intern at Warner Brothers Discovery during the Summer of 2022, Bryan worked as an editor for the marketing campaigns of Pretty Little Liars: Original Sin & Edge of the Earth. Bryan is determined to use his post-production experience as a building block for his path to becoming a director for blockbuster films.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage