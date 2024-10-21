import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const PostProduction = ({state, setState}) => {

    const HBO = ["/HBO Work/Alt_Palante.png","/HBO Work/Malia.png","/HBO Work/Minx.png","/HBO Work/Edge of Earth Thumbnail.png","/HBO Work/Jordan.png"];
    const narrative_work = ["/Thumbnails/ChasingDreams.jpeg","/Thumbnails/Scrambled.png","/Thumbnails/Cloche.png"];
    const commercial_work = ["/Thumbnails/Diana.png","/Thumbnails/Stan Labs LW.png"];
    const links = [
        ["/films/RobertoAguirreSacasa", "/films/MaliaPyles", "/films/Minx", "/films/EdgeOfTheEarth", "/films/JordanGonzalez"],
        ["/films/ChasingButterflyDreams", "/films/ScrambledEggs", "/films/Cloche"],
        ["/films/DianaFlorence", "/films/StanLabsVehicleDeodorizer", ""]
    ];

    // Descriptions for each category (you can manually update these)
    const HBODescriptions = [
        "Co-Creator, Roberto Aguirre-Sacasa, and actress, Maia Reficco, discuss their latin roots and how their heritage has shaped who they are and what they bring to the show. Part of the Pretty Little Liars: Original Sin Campaign through Palante Max.",
        "Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.",
        "Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.",
        "Edge of the Earth Promo",
        "Jordan Gonzalez Queerness in Conversation"
    ];
    
    const narrativeDescriptions = [
        "Chasing Butterfly Dreams",
        "Scrambled Eggs",
        "Cloche"
    ];

    const commercialDescriptions = [
        "One of multiple short promos made for Diana Florence’s Why It Matters campaign as part of her run for Manhattan District Attorney in 2021.",
        "Instructional How to Use video for a Stan Labs Deodorizer product."
    ];

    return (
        <>
            <div className=' gradient flex gap-10 flex-col text-black'>
                <div>
                    <Nav state={state} setState={setState} box={2}/>
                </div>
                <div className='h-full w-full p-5 flex flex-col gap-10'>
                    <div className='unselectable text-H2 w-full justify-start flex'>
                        HBO COMMERCIAL WORK
                    </div>
                    <Images images={HBO} links={links[0]} descriptions={HBODescriptions} />

                    <div className='unselectable  w-full text-H2 justify-start flex'>
                        NARRATIVE WORK
                    </div>
                    <Images images={narrative_work} links={links[1]} descriptions={narrativeDescriptions} />

                    <div className='unselectable  w-full text-H2 justify-start flex'>
                        COMMERCIAL WORK
                    </div>
                    <Images images={commercial_work} links={links[2]} descriptions={commercialDescriptions} />
                </div>
            </div>
            <Footer/>
        </>
    );
}

const Images = ({images, links, descriptions}) => {
    const [center, setCenter] = useState(1);

    const handleClick = (n) => {
        if (n === 1) {
            setCenter((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        } else {
            setCenter((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }
    };

    const get_image = (indexOffset) => {
        if (images.length === 1) return images[0]; // If only one image
        const index = (center + indexOffset + images.length) % images.length;
        return images[index];
    };

    const get_link = (indexOffset) => {
        const index = (center + indexOffset + links.length) % links.length;
        return links[index];
    };

    const get_description = (indexOffset) => {
        const index = (center + indexOffset + descriptions.length) % descriptions.length;
        return descriptions[index];
    };

    return (
        <>
            <div className='flex md:hidden overflow-scroll'>
                {
                    images.map((image, index) => (
                        <div key={index} className="relative group">
                            <img src={image} className='object-cover h-auto w-screen'/>
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg">{descriptions ? descriptions[index] : `Image ${index + 1}`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='unselectable w-full h-1/3 gap-5 p-5 justify-around relative md:flex hidden'>
                {images.length > 3 &&
                    <div className='unselectable no-click absolute h-full w-full flex justify-between p-5'>
                        <div className='h-full flex items-center justify-center'>
                            <div className='bg-black click h-8 w-8 opacity-75 lg:h-12 lg:w-12 rounded-full flex justify-center items-center' onClick={() => handleClick(-1)}>
                                <FaArrowLeft color='white'/>
                            </div>
                        </div>
                        <div className='h-full flex items-center justify-center'>
                            <div className='bg-black click h-8 w-8 opacity-75 lg:h-12 lg:w-12 rounded-full flex justify-center items-center' onClick={() => handleClick(1)}>
                                <FaArrowRight color='white'/>
                            </div>
                        </div>
                    </div>
                }
                <div className={`shadow-lg w-1/3 shrink-0 flex item-center justify-center relative group`}>
                    <Link href={`${get_link(-1)}`}>
                        <img src={get_image(-1)} className='w-full h-full object-cover'/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">{get_description(-1)}</p>
                        </div>
                    </Link>
                </div>
                <div className={`shadow-lg shrink-0 flex w-1/3 item-center justify-center relative group`}>
                    <Link href={`${get_link(0)}`}>
                        <img src={get_image(0)} className='shadow-m w-full h-full object-cover'/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">{get_description(0)}</p>
                        </div>
                    </Link>
                </div>
                <div className={`shadow-lg w-1/3 shrink-0 flex item-center justify-center relative group`}>
                    <Link href={`${get_link(1)}`}>
                        <img src={get_image(1)} className='shadow-m w-full h-full object-cover'/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg">{get_description(1)}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}


export default PostProduction;
