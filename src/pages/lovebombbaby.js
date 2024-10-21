import React, { useEffect, useState , useRef} from 'react'
import Nav from '../components/Nav'
import Lightbox from '../components/Lightbox'
import useScrollSnap from '../useScrollSnap'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

const LoveBombBaby = ({setfilm}) => {
  const router = useRouter()
  const [state, setState] = useState(0)
  const [filmState, setFilmState] = useState(2)
  const images = [
    [
      ["/Website_Photos/DSC08452.jpeg","/Website_Photos/New Photos 240722/PA_Still00.jpeg"],
      ["/Website_Photos/DSC08780.jpeg","/Website_Photos/Playin Around BTS @RSBMedia.us -150.jpeg","/Website_Photos/DSC08475.JPG","/Website_Photos/Playin Around BTS @RSBMedia.us -176.jpeg","/Website_Photos/DSC09330.JPG"]
    ],
    [
      ["/Website_Photos/New Photos 240722/LBB_Still001.jpeg","/Website_Photos/New Photos 240722/LBB_Still003.jpeg","/Website_Photos/New Photos 240722/LBB_Still006.jpeg"],
      ["/Website_Photos/ARI07462-1.jpg","/Website_Photos/LBB_7.4.jpg","/Website_Photos/LOWRES_BTS_3.jpg","/Website_Photos/ARI06897-1.jpg"]
    ]
  ]
  const credit_images = [
    ["/Website_Photos/Cast_Q1.jpg", "/Website_Photos/Cast_K1.jpg","/Website_Photos/Cast_A1.jpg","/Website_Photos/concept4bryanCOLOR+.jpg"],
    [],
    ["/Website_Photos/Crew_b4.jpg","/Website_Photos/Crew_m5.jpg","/Website_Photos/Crew_i3.jpg"]
  ]
  const credit_names = [[""],["Quinn Bringelson","Kat Capili","Amanda Whyte","Bryan Uvaldo","Maggie Soik","Ian Dugan"]]
  const timelines = ["/Website_Photos/240701 Picture Lock.png","/Website_Photos/New Photos 240722/LBB_Final Timeline.jpeg"]
  const [scrollState, setScroll] = useState([0,0])
  
  const handleScroll =(x)=>{
    const height = window.screen.height * 0.8
    const pos = containerRef.current.scrollTop
    setScroll([Math.floor(pos/height), x])
  }
  
  useEffect(()=>{
    scrollState[1] && elements[scrollState[0]].current?.scrollIntoView({ behavior: "smooth" })
  },[scrollState])
  
  const [animation,setAnimation] = useState(["",""])
  const containerRef = useRef(null);
  const elements = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]
  
  const [bind, unbind] = useScrollSnap(
    containerRef,
    {
      snapDestinationY: '100vh',
      timeout: 0,
      duration: 100,
      threshold: 0.2,
      snapStop: false
    },
    () => handleScroll(0)
  );
  
  function handleClick(next) {
    if(state === next) return
    if(next === 1){
      setAnimation(["animate-slide_film","animate-vanish"])
      setTimeout(() => { setFilmState(1) },800);
    } else if(next === 2){
      setAnimation(["animate-vanish","animate-slide_film_2"])
      setTimeout(() => { setFilmState(2) }, 800);
    } else {
      setAnimation(["animate-slide_film_r","animate-appear"])
      setTimeout(() => { setFilmState(0) }, 800);
    }
  }
  
  const handleClickM = (next) => {
    if(state === next) return
    if(next === 1){
      setFilmState(1)
      setfilm(1)
    } else if(next === 2){
      setFilmState(2)
    } else {
      setFilmState(0)
    }
  }
  
  return (
    <div>
      {/* Your JSX here */}
      <div>
        Determined to buy the perfect gift for her little brother, a young woman must fight her way through crazed customers at a toy store turned madhouse.
      </div>
      <div>
        After catching her cheating girlfriend, a fiery, drunk woman beats up an entire Halloween college party--all while prioritizing which booze is in her hand.
      </div>
      <div>
        PRIVATE LINK AVAILABLE UPON REQUEST
      </div>
      {credit_names[filmState-1].map((name, index) => (
        <div key={index}>
          {name}
        </div>
      ))}
      <div>Director</div>
      <div>Producer</div>
      <div>Stunt Coordinator</div>
      {credit_images[filmState-1].map((image, index) => (
        <img key={index} src={image} alt={`Credit ${index}`} />
      ))}
      {images[filmState-1].map((imageSet, setIndex) => (
        <div key={`set-${setIndex}`}>
          {imageSet.map((image, imageIndex) => (
            <img key={`image-${setIndex}-${imageIndex}`} src={image} alt={`Image ${imageIndex}`} />
          ))}
        </div>
      ))}
      {/* Rest of your JSX */}
    </div>
  )
}

export default LoveBombBaby