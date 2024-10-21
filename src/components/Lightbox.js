import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Lightbox = ({images}) => {
  const [selectedImage, setImage] = useState(1)
  const handleClick = (dir) => {
    if(dir === 0){
        if(selectedImage === 0){
            setImage(images.length-1)
        } else {
            setImage(img=>img - 1)
        }
    } else {
        if(selectedImage === images.length-1){
            setImage(0)
        } else {
            setImage(img=>img+1)
        }
    }
  }
  return (
    <>
    <div className='flex overflow-scroll z-0 md:hidden'>
        {images.map((image,index)=><img src={image} key={index} className='w-full'/>)}
    </div>
    <div className={`hidden relative md:flex overflow-scroll z-[0] unselectable h-full w-screen justify-center`}>
        { <img src={images[selectedImage]} className='object-cover w-full h-screen'/> }
        <div className='absolute w-full h-24 bottom-[10%] flex justify-between items-center p-10'>
            <div className='md:flex hidden h-12 w-12 rounded-full bg-black justify-center items-center' onClick={()=>handleClick(0)}>
                <FaArrowLeft color='white' />
            </div>
            <div className=' hidden md:flex overflow-hidden w-4/5 justify-center'>
                {images.map((img,index)=><img src={img} key={index} className={`h-24 ${selectedImage === index && "border-4 border-black"}`}/>)}
            </div>
            <div className='md:flex hidden h-12 w-12 rounded-full bg-black justify-center items-center' onClick={()=>handleClick(1)}>
                <FaArrowRight color='white' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Lightbox