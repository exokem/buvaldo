import React from 'react'
import AboutPage from '@/components/AboutPage'

const About = () => {
  const images = ["/Website_Photos/ARI07462-1.jpg","/Website_Photos/DSC08251.JPG","/Website_Photos/IMG_3234.jpeg","/Website_Photos/Screen Shot 2020-07-03 at 12.52.02 PM.PNG"]
  return (
    <>
    <AboutPage/>
    <div className='w-full flex flex-col md:flex-row justify-start  blue-bg gap-5 p-5'>
      {
        images.map((image, index)=>
          index < 3 &&
          <img src={image} key={index} className='object-cover w-full md:h-1/3 md:w-1/4 bg-yellow'/>
        )
      }
    </div>
    </>
  )
}

export default About