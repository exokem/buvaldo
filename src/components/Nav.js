import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export async function getServerSideProps(context) {
    console.log(context.req.headers.referer)
    return
  }

const Nav = ({box, grad=1}) => {

  const path = usePathname();

  const [animation, setAnimation] = useState("")

    const boxref = useRef(box)
 
 

  return (
    <nav className={`md:flex w-full text-black  ${grad == 0 && "white_gradient"} p-10 pb-5 pt-5`}>
        <div className={`md:flex w-full  flex-col cursor-pointer `}>
            <Link href={"./"}>
            <h1 className ={`text-[30px] sm:text-[35px] lg:text-H1 font-bold ${box === 0 && "gradient_yellow"} w-fit`}>BRYAN UVALDO</h1>
            </Link>
            <div className='relative font-semibold flex text-H2 gap-3'>
                <div className={`${box === 0 && "hidden"} absolute w-[7.5rem] gradient_yellow h-8 left-0 ${box === 1 && "slide animate-slide_r"} ${box === 2 && "left-0 animate-slide"} `}></div>
                <div className='absolute z-2 flex gap-3'>
                    <Link href={"/films"}>
                    <h2>DIRECTOR.</h2>
                    </Link>
                    <Link href={"/post-productions"}>
                    <h2>EDITOR.</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div className={`font-medium text-[12px] sm:text-[16px] lg:text-H2 h-32 flex w-full md:w-1/2 md:justify-center gap-5 justify-between items-center `}>
            <Link href={'/films'}>
            <h2 className={`${path === "/films" && "underline"}`}>FILMS</h2>
            </Link>
            <Link href={'/post-productions'}>
            <h2 className={`${path === "/post-productions" && "underline"}`}>POST PRODUCTION</h2>
            </Link>
            <Link href={"/about"}>
            <h2 className={`${path === "/about" && "underline"}`}>ABOUT</h2>
            </Link>
        </div>
    </nav>
  )
}

export default Nav