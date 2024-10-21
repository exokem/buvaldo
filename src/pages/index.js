import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useRef,useEffect } from "react";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav"
import Films from "@/components/Films";
import { Parallax, useParallax } from "react-scroll-parallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaArrowCircleDown } from "react-icons/fa";
import useScrollSnap from '../useScrollSnap'
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()

  const [state, setState] = useState(0)
  const ref = useRef(0)
  const [film, setfilm] = useState(0)
  
  const parallax = useParallax({
  onProgressChange: (progress) => {
    if (parallax.ref.current) {
      // set progress to CSS variable
      console.log(progress)

      if(progress > 0.95){
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      } else {
        parallax.ref.current.style.setProperty(
          "--progress",
         "0px"
        );
      }
      
    }
  },
});
  useEffect(()=>{
    router.prefetch("/lovebombbaby")
    router.prefetch("/playinaround")
  },[])
  // const ref = useRef(<HTMLDivElement/>);
  return (
    <>
    <div ref={parallax.ref} style={{filter:"blur(calc(10px * var(--progress)))"}} className={`${film != 0 ? "hidden":"fixed"} hidden md:flex   z-[-1]   bg-bg4 h-screen w-screen object-cover  bg-cover p-10 pt-5 flex justify-center items-end`}>
      <Parallax opacity={[70,0,'easeOutQuad']} >
        <div className="w-full h-1/2 flex justify-center">
          <div className="mt-20 flex w-1/2  h-full left-[25%] top-[60%] text-black bg-yellow  p-10 glow-box flex flex-col text-[20px] rounded " style={{opacity:"calc(1-var(--progress))"}}>
            <p>Bryan Uvaldo, a Brazilian-American filmmaker and NYU Tisch graduate, is set to debut his action short Love Bomb Baby this year, followed by his thesis film Playin&apos Around next year. With ten short films and HBO Max promos edited, he&apos;s now lead editor on a feature film. After interning at Warner Brothers Discovery in 2022, Bryan aims to leverage his post-production experience to become a blockbuster director.</p>
            <div className="flex flex-col items-center">
              Scroll to view films
              <FaArrowCircleDown size={"40px"}/>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
     
    <div ref={ref} className={`absolute z-[10] w-screen h-screen top-0 hdden md:flex flex-col justify-between pb-0 `}>
      <div className="md:fixed w-screen">
        
      <Nav box={0}/>
      </div>
      <Parallax speed={100} translateY={[200, 200]}>
        <div className="h-[80vh] overflow-hidden w-screen">
        <Films setfilm={setfilm}/>
        </div>
      </Parallax>
    
    </div>
    <div ref={ref} className={`bg-bg4 absolute z-[10] w-screen h-screen top-0  flex md:hidden flex-col justify-between pb-0 `}>
      <div className="md:fixed w-screen">
        
      <Nav box={0}/>
      </div>
        <div className="h-[80vh] overflow-hidden w-screen">
        <Films setfilm={setfilm}/>
        </div>
    
    </div>
    </>
  );
}
