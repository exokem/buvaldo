import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Films = ({state, setState}) => {

    const short_films = ["/Website_Photos/DSC08452.jpeg", "/Website_Photos/New Photos 240722/LBB_Still001.jpeg"];
    const narrative_work = ["/Website_Photos/New Photos 240722/Uvaldo_Poster.ytt.jpg","/Website_Photos/New Photos 240722/So Long.ytt.jpg","/Website_Photos/New Photos 240722/Catharsis.ytt.jpg","/Website_Photos/New Photos 240722/Omicron.ytt.jpg","/Website_Photos/New Photos 240722/Hello Again.ytt.jpg"];
    const commercial_work = ["/Website_Photos/Pity_Party.jpeg"];

    const descriptionsShortFilms = ["Description for Short Film 1", "Description for Short Film 2"];
    const descriptionsNarrative = [
        "An inside look into Bryan’s first job where he was tasked with changing out the movie posters at his local movie theater. The “Yourselfie” part of his accepted NYU Application in 2019.",
        "Struggling with school, a student is forced to accept help from his high school teacher. This is my love letter to all my teachers I’ve had over the years. The short film submitted with my NYU Application in 2019.",
        "A one-shot film of a student filmmaker failing to make a one-shot film; ala Symbiopsychotaxiplasm: Take One (1968). Film made in NYU Sight & Sound with the challenge of making it in only one shot.",
        "Description for Omicron",
        "Description for Hello Again"
    ];
    const descriptionsCommercial = ["Pity Party Music Video"];

    const links = [
        ["playinaround", "lovebombbaby"],
        ["films/poster","films/solong","films/Catharsis","films/Omicron","films/helloagain"],
        ["films/pity_party"]
    ];

    return (
        <>
            <div className='gradient flex gap-10 flex-col text-black'>
                <div>
                    <Nav state={state} setState={setState} box={1}/>
                </div>
                <div className='h-full w-full p-5 flex flex-col gap-10'>
                    <div className='unselectable text-H2 w-full justify-start flex'>
                        SHORT FILMS
                    </div>
                    <Images images={short_films} links={links[0]} descriptions={descriptionsShortFilms}/>

                    <div className='unselectable  w-full text-H2 justify-start flex'>
                        NARRATIVE WORK
                    </div>
                    <Images images={narrative_work} links={links[1]} descriptions={descriptionsNarrative}/>

                    <div className='unselectable  w-full text-H2 justify-start flex'>
                        COMMERCIAL WORK
                    </div>
                    <Images images={commercial_work} links={links[2]} descriptions={descriptionsCommercial}/>
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

export default Films;
