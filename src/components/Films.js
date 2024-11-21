'use client'

import React, {useEffect, useState , useRef} from 'react'
import Lightbox from '@comp/Lightbox'
import useScrollSnap from '@api/useScrollSnap'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Films = ({setfilm}) => 
{
	const router = useRouter()
	const [state, setState] = useState(0)
	const [filmState, setFilmState] = useState(0)
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

	const creditImages = [
		["/Website_Photos/Cast_Q1.jpg", "/Website_Photos/Cast_K1.jpg","/Website_Photos/Cast_A1.jpg","/Website_Photos/concept4bryanCOLOR+.jpg"],
		[],
		["/Website_Photos/Crew_b4.jpg","/Website_Photos/Crew_m5.jpg","/Website_Photos/Crew_i3.jpg"]
	]

	const creditNames = [[""],["Quinn Bringelson","Kat Capili","Amanda Whyte","Bryan Uvaldo","Maggie Soik","Ian Dugan"]]
	const timelines = ["/Website_Photos/240701 Picture Lock.png","/Website_Photos/New Photos 240722/LBB_Final Timeline.jpeg"]

	const [scrollState, setScroll] = useState([0,0])
	const handleScroll =(x)=>
	{
		const height = window.screen.height * 0.8
		const pos = containerRef.current.scrollTop
		setScroll([Math.floor(pos/height), x])
	}

	useEffect(()=>
	{
		scrollState[1] && elements[scrollState[0]].current?.scrollIntoView({behavior: "smooth"})
	},[scrollState])
   

	const [animation,setAnimation] = useState(["",""])

	const containerRef = useRef(null)
	const elements = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]

	const [bind, unbind] = useScrollSnap(
		containerRef,
		{snapDestinationY: '100vh',
			timeout: 0,
			duration: 100,
			threshold: 0.2,
			snapStop: false},
		() =>  handleScroll(0)
	)

 
	function handleClick(next) 
	{
		if (state === next) return
		if (next === 1)
		{
			setAnimation(["animate-slide_film","animate-vanish"])
			setTimeout(() => 
			{
				router.push("/playinaround")
				setFilmState(1)
			},800)
		}
		else if (next === 2)
		{
			setAnimation(["animate-vanish","animate-slide_film_2"])
			setTimeout(() => 
			{
				router.push("/lovebombbaby")
				setFilmState(2)
			}, 800)
            
		}
		else 
		{
			setAnimation(["animate-slide_film_r","animate-appear"])
			setTimeout(() => 
			{
				setFilmState(0)
			}, 800)
		}
	}

	const handleClickM = (next) => 
	{
		if (state === next) return
		if (next === 1)
		{
			setFilmState(1)
			setfilm(1)

		}
		else if (next === 2)
		{
			setFilmState(2)
		}
		else 
		{
			setFilmState(0)
		}
	}
 
	return (
		<div ref={containerRef} id="container" className='static lg:absolute h-[200vh] md:h-[400vh]'>
			{/* <div ref={elements[0]} className={`${(filmState === 0 ? "gradient": filmState === 2 ? "bg-bg2 ":"bg-bg1" )} h-screen w-auto`}> */}
			<div ref={elements[0]} className={`${(filmState === 0 ? "none": filmState === 2 ? "bg-bg2 ":"bg-bg1" )} h-screen w-auto`}>

				<div className='fixed top-[20%] xl:top-[30%] w-1/3 lg:w-1/4 flex items-center pl-10 z-[3] md:block hidden'>
					<Menu film={filmState} scroll={scrollState} setScroll={setScroll}/>
				</div>
				{/* <div className={`${filmState > 0 && "white_gradient"} p-10 pb-5 pt-5`}>
            <Nav box={2} state={state} setState={setState} setFilmState={setFilmState}/>
        </div> */}
				<div className={`md:hidden flex flex-col justify-between gap-10 px-10 pb-10`}>
					{
						filmState === 0 &&  <Link href={'/playinaround'}><Image className={`w-80`} src='/Website_Photos/_32A6359.jpeg' alt="description" width={200} height={400} /></Link>
					}
					{
						<Link href={'/lovebombbaby'}><Image className={`w-80`} src='/Website_Photos/IMG_7286.png' alt="descriptionLove" width={300} height={200} /></Link>
					}
				</div>

				<div className='p-10 pt-0 hidden lg:block pb-20'>
					<div className='flex justify-center  items-center w-full fixed'>
						<div className={`unselectable flex items-center relative z-[0] ${filmState === 1 && "glow-box"} ${animation[0]} ${filmState !== 0 && "unclickable"} `} onClick={()=>handleClick(1)}>
							<Image className={`w-96`} src='/Website_Photos/_32A6359.jpeg' alt="description" width={400} height={300} />
							<div className={` text-white absolute ${filmState === 1 ? "block" : "hidden"} h-64 w-full left-[500px] flex flex-col justify-center gap-10 ${animation[2]}`}>
								<h2 className='p-2 glow-box text-black text-H2'>DIRECTOR WRITER CO-EDITOR</h2>
								<p className=' glow-box text-body text-black '> Determined to buy the perfect gift for her little brother, a young woman must fight her way through crazed customers at a toy store turned madhouse.</p>

							</div>
						</div>
						<div className={`unselectable flex items-center relative ml-20 z[-1] ${filmState === 2 && "glow-box_lbb"} ${animation[1]} ${filmState !== 0 && "unclickable"}`} onClick={()=>handleClick(2)}>
							<Image className={`w-96`} src='/Website_Photos/IMG_7286.png' alt="LoveBombBaby" width={400} height={300} />
							<div className={` absolute ${filmState === 2 ? "flex" : "hidden"} lbb text-white h-64 w-full left-[500px] flex flex-col justify-center gap-5 h-96 ${animation[2]}`}>
								<h2 className='text-H2'>DIRECTOR WRITER CO-EDITOR</h2>
								<p className='text-white '>After catching her cheating girlfriend, a fiery, drunk woman beats up an entire Halloween college party--all while prioritizing which booze is in her hand.</p>
								<div className='flex justify-center items-center w-full'>
									<div className="flex justify-center h-3/4 w-1/3">
										<Image className="w-full h-full object-contain" src="/Website_Photos/WINNER - The Art of Movie Making Film Festival TAMMFF - 2024 copy.png" alt="award logo" width={400} height={300} />
									</div>
									<div className="flex justify-center w-1/3 h-3/4">
										<img className="w-full h-full object-contain" src="/Website_Photos/New Photos 240722/Austin Action Fest ALT.PNG"/>
									</div>
									<div className="flex justify-center w-1/3 h-3/4">
										<img className="w-full h-full object-contain" src="/Website_Photos/Urban Action Fest Laruel.png"/>
									</div>
								</div>
								<div className='text-[10px] w-auto'>
									<p>PRIVATE LINK AVAILABLE UPON REQUEST</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{
				filmState > 0 &&  
                <div ref = {elements[1]} className='hidden md:block lg:h-screen w-screen'>
                	<Lightbox images={images[filmState-1][0]}/>
                </div>

			}

			{
				filmState > 0 &&  
                <div ref={elements[2]} className='hidden md:block lg:h-screen w-screen'>
                	<Lightbox images={images[filmState-1][1]}/>
                </div>
			}
			{
				filmState > 0 &&  
            <div ref={elements[3]} className={`h-screen w-auto hidden md:block`}>
            	<div className={`w-full bg-center h-screen ${filmState === 1 ? "bg-bg2":"bg-bg3"} flex justify-end items-center lg:pr-20`}>
            		<div className={`${filmState === 2 ? "":""}`}>
            			<img src={timelines[filmState-1]} className='w-full lg:w-[60rem]'/>
            		</div>
            	</div>
            </div>

			}

			{
				(filmState > 0 & filmState === 2) &&  
            <div ref={elements[4]} className={`h-screen w-auto `}>
            	<div className='w-full bg-right-top h-screen bg-bg3 flex justify-center md:justify-end items-center '>
            		<div className='w-full md:w-2/3 h-full p-5 md:p-10 flex md:flex-row flex-col gap-5 '>
            			<div className='bg-white h-full w-full flex justify-center items-center md:w-1/2 glow-box_lbb'>
            				<img src="/Website_Photos/lbb_credits.png" className='object-cover '/>
            			</div>
            			<div className='w-full md:w-1/2 hidden md:flex flex-col gap-10 md:gap-5 '>
            				<div className='flex justify-around w-full h-1/3 gap-5 text-white '>
            					<div className='h-full w-1/3 '>
            						{
            							filmState === 2 && (<>
            								<img src={creditImages[0][0]}/>
            								<div className='flex justify-center items-center'>
            									<p className='text-lg'>{creditNames[filmState-1][0]}</p>
            								</div>
            							</>)
            						}
            					</div>
            					<div className='h-full w-1/3'>
            						{
            							filmState === 2 && (<>
            								<img src={creditImages[0][1]} />
            								<div className='flex justify-center items-center'>
            									<p className='text-lg'>{creditNames[filmState-1][1]}</p>
            								</div>
            							</>)
            						}
            					</div>
            					<div className='h-full w-1/3'>
            						{
            							filmState === 2 && (<>
            								<img src={creditImages[0][2]}/>
            								<div className='flex justify-center items-center'>
            									<p className='text-lg'>{creditNames[filmState-1][2]}</p>
            								</div>
            							</>)
            						}
            					</div>
            				</div>
            				<div className='flex justify-around w-full h-1/3 gap-5'>
            					<div className='h-full w-full'>
            						{
            							filmState === 2 && (<>
            								<img className="h-full glow-box_lbb" src={creditImages[0][3]}/>
            							</>)
            						}
            					</div>
            				</div>
            				<div className='flex justify-around w-full h-1/3 gap-5 text-white'>
            					<div className=' h-full w-1/3 flex flex-col'>
            						<img src={creditImages[2][0]} className=' glow-box_lbb object-cover h-full'/>
            						<div className='flex flex-col justify-center items-center'>
            							<p className='text-lg'>{creditNames[filmState-1][3]}</p>
            							<p className='text-lg'>Director</p>
            						</div>
            					</div>
            					<div className=' h-full w-1/3 flex flex-col'>
            						<img src={creditImages[2][1]} className=' glow-box_lbb object-cover h-full'/>
            						<div className='flex flex-col justify-center items-center'>
            							<p className='text-lg'>{creditNames[filmState-1][4]}</p>
            							<p className='text-lg'>Producer</p>
            						</div>
            					</div>
            					<div className='h-full w-1/3 flex flex-col'>
            						<img src={creditImages[2][2]} className='glow-box_lbb object-cover h-full'/>
            						<div className='flex justify-center flex-col items-center'>
            							<p className='text-lg'>{creditNames[filmState-1][5]}</p>
            							<p className='text-lg'>Stunt Coordinator</p>
            						</div>
            					</div>
                                
            				</div>
            			</div>
            		</div>
            	</div>
            </div>

			}
		</div>
	)
}


const Menu = ({film, scroll, setScroll,}) => 
{


	const titles = ["Playin' Around","Love Bomb Baby"]
	const description = ["Short / 10m 3s / Action Comedy / 2024", "Short / 10m 3s / Action Comedy / 2023"]

	const menuItems = [["OVERVIEW", "FILM STILLS", "BEHIND THE SCENES", "TIMELINE"],["OVERVIEW", "FILM STILLS", "BEHIND THE SCENES", "TIMELINE","CREDITS"]]

	return (
		<>
			{film > 0 && 
    <div className='z-[3] flex flex-col h-1/3 justify-around gap-5 lg:gap-10 text-white'>
    	<div className='flex flex-col'>
    		<h1 className=' text-[25px] lg:text-menu'>{titles[film-1] }</h1>
    		<h2 className='text-[12px] lg:text-body'>{description[film-1]}</h2>
    	</div>
    	<div className='cursor-pointer flex flex-col justify-between gap-1 text-sm lg:text-body'>
    		{
    			menuItems[film - 1].map((item, index) => (
    				<h2 
    					key={`menu-item-${index}`}
    					className={`${film === 1 ? scroll[0] === index && "text-blue" : scroll[0] === index && "text-pink"}`} 
    					onClick={() => setScroll([index, 1])}
    				>
    					{item}
    				</h2>
    			))
    		}
    	</div>
       
    </div>
			}
    
		</>
	)
}

export default Films