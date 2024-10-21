import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
const Filmlink = () => {
   
    const router = useRouter();
  const film = router.query; // id is the dynamic part of the route
    const [state, setState] = useState("")
    useEffect(()=>{
        setState(film.film)
    },[film])
    const role = [
        [],
        ["Director, Editor","Director, Writer, Editor"],
        ["Director"]
    ]
    const paths = {
        // NARRATIVE WORK
        "poster": {
            "path": "/Website_Photos/New Photos 240722/Uvaldo_Poster.ytt.jpg",
            "title": "My Poster Film",
            "description": "An inside look into Bryan’s first job where he was tasked with changing out the movie posters at his local movie theater. The “Yourselfie” part of his accepted NYU Application in 2019.",
            "subheading": "PERSONAL NARRATIVE / NYU Application / 2019"
        },
        "Omicron": {
            "path": "/Website_Photos/New Photos 240722/Omicron.ytt.jpg",
            "title": "The Omicron Spymaster",
            "description": "What if a cocky spy trainee fails his first test? What would he do to recover from such a blunder? Film made in NYU Frame & Sequence in 2020.",
            "subheading": "SPY COMEDY / NYU Short / 2020"
        },
        "solong": {
            "path": "/Website_Photos/New Photos 240722/So Long.ytt.jpg",
            "title": "So Long",
            "description": "Struggling with school, a student is forced to accept help from his high school teacher. This is my love letter to all my teachers I’ve had over the years. The short film submitted with my NYU Application in 2019.",
            "subheading": "COMING OF AGE / NYU Application / 2019"
        },
        "Catharsis": {
            "path": "/Website_Photos/New Photos 240722/Catharsis.ytt.jpg",
            "title": "Catharsis at the Pier",
            "description": "A one-shot film of a student filmmaker failing to make a one-shot film; ala Symbiopsychotaxiplasm: Take One (1968). Film made in NYU Sight & Sound with the challenge of making it in only one shot.",
            "subheading": "SATIRE / NYU Short / 2021"
        },
        "helloagain": {
            "path": "/Website_Photos/New Photos 240722/Hello Again.ytt.jpg",
            "title": "Hello Again",
            "description": "My self-portrait short film where I explore how many times I have been separated from both friends and family throughout my life, and how I overcame these disconnections over time. Film created for Video Production in Mamaroneck High School.",
            "subheading": "PERSONAL NARRATIVE / NYU Application / 2018"
        },
        "pityparty": {
            "path": "Website_Photos/Pity Party.jpeg",
            "title": "Carolina Rial’s Pity Party",
            "description": "Lively and fun music video made for Carolina Rial’s song Pity Party. Made for NYU Short Commercial Form in 2022.",
            "subheading": "Music Video / 2022"
        },
        "ChasingButterflyDreams": {
            "path": "/Thumbnails/ChasingDreams.jpeg",
            "title": "Chasing Butterfly Dreams",
            "description": "Feature Film",
            "subheading": "NARRATIVE WORK"
        },
        "ScrambledEggs": {
            "path": "/Thumbnails/Scrambled.png",
            "title": "Scrambled Eggs",
            "description": "NYU Thesis Short",
            "subheading": "NARRATIVE WORK"
        },
        "Cloche": {
            "path": "/Thumbnails/Cloche.png",
            "title": "Cloche",
            "description": "Thesis Short",
            "subheading": "NARRATIVE WORK"
        },
    
        // HBO COMMERCIAL WORK
        "RobertoAguirreSacasa": {
            "path": "/HBO Work/Alt_Palante.png",
            "title": "Roberto Aguirre-Sacasa & Maia Reficco Pa’lante Pa’ Mi",
            "description": "Co-Creator, Roberto Aguirre-Sacasa, and actress, Maia Reficco, discuss their latin roots and how their heritage has shaped who they are and what they bring to the show. Part of the Pretty Little Liars: Original Sin Campaign through Palante Max.",
            "subheading": "HBO Max Promo / 2022"
        },
        "MaliaPyles": {
            "path": "/HBO Work/Malia.png",
            "title": "Malia Pyles Queerness in Conversation",
            "description": "Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.",
            "subheading": "HBO Max Promo / 2022"
        },
        "Minx": {
            "path": "/HBO Work/Minx.png",
            "title": "Minx",
            "description": "Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.",
            "subheading": "HBO Max Promo / 2022"
        },
        "EdgeOfTheEarth": {
            "path": "/HBO Work/Edge of Earth Thumbnail.png",
            "title": "Edge of the Earth",
            "description": "Used to promote the four-part documentary series Edge of the Earth on the front page of HBO Max in July 2022.",
            "subheading": "HBO Max Video Hero / 2022"
        },
        "JordanGonzalez": {
            "path": "/HBO Work/Jordan.png",
            "title": "Jordan Gonzalez Queerness in Conversation",
            "description": "Jordan Gonzalez discusses the importance of Ash’s character and his impact on Mouse’s journey on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.",
            "subheading": "HBO Max Promo / 2022"
        },
    
        // COMMERCIAL WORK
        "DianaFlorence": {
            "path": "/Thumbnails/Diana.png",
            "title": "Diana Florence: Why it Matters",
            "description": "One of multiple short promos made for Diana Florence’s Why It Matters campaign as part of her run for Manhattan District Attorney in 2021.",
            "subheading": "Advertising Campaign / 2020-2021"
        },
        "StanLabsVehicleDeodorizer": {
            "path": "/Thumbnails/Stan Labs LW.png",
            "title": "Stan Labs Vehicle Deodorizer Instructional Video",
            "description": "Instructional How to Use video for a Stan Labs Deodorizer product.",
            "subheading": "Commercial Work / 2020"
        }
    };
    
    
   
    
    
    
    const src = film.film

  return (
    <div className='h-screen gradient'>
   
    <Nav />
    <div className="h-[80vh] w-screen  flex p-10 pt-0">

      <div 
        className="flex items-center w-1/2  relative cursor-pointer"
      >{
        paths[src] && <img
        src={paths[src].path}
       
        className="object-contain w-full h-[50vh]"
      />
      }
        
      </div>
      {
        paths[src] && <div className=" w-1/2 flex flex-col justify-center gap-10 p-8 text-white">
        <div className='flex flex-col'>
        <h1 className="text-[40px] font-bold mb-2">{paths[src].title}</h1>
        <h2 className="text-2xl mb-4">{paths[src].subheading}</h2>
        </div>
        <p className="text-lg">
          {paths[src].description}
        </p>
      
      </div>
      }
      
    </div>
    </div>
  );
};

export default  Filmlink;
