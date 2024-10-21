/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#6EC7EA',
      'purple': '#4B4C6F',
      'pink': '#FD34DA',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#ffffff',
      'black':'#000000'
    },
    fontSize:{
      'H1':'56px',
      'H2':'22px',
      'body':'18px',
      'menu':'32px'
    },
    extend: {
      fontFamily: {
        poppins: ["Lato"],
      },
      keyframes: {
        slide: {
          'from':{
            transform: "translatex(0px) scaleX(1)"
          },
          'to': { transform: "translatex(105px) scaleX(0.8)"}
        },
        slider: {
          'from':{ transform: "translatex(105px) scaleX(0.8)"},
          'to': {
            transform: "translatex(0px) scaleX(1)"
          }
        },
        slide_film: {
          from: {transform: "translatex(0px)"},
          to: {transform: "translatex(50%)"}
        },
        slide_film_2: {
          from: {transform: "translatex(0px)"},
          to: {transform: "translatex(-65%)"}
        },
        vanish: {
          from: {opacity:1},
          to: {opacity:0}
        },
        appear: {
          "0%":{display:"block", opacity:0},

          "100%": {display:"block",opacity:1}
        }
      },
      animation: {
        slide: 'slide 1s ease-in-out forwards',
        slide_r: 'slider 1s ease-in-out forwards',
        slide_film:'slide_film 1s ease-in-out forwards',
        slide_film_r:'slide_film 1s ease-in-out reverse',
        slide_film_2:'slide_film_2 1s ease-in-out forwards',
        vanish: 'vanish 0.5s ease-in-out forwards',
        appear: 'appear 0.5s ease-in-out forwards'
      },
      height: {
        '128': '32rem',
        'film_poster':'40rem',
      },
      backgroundImage: {
        'bg2': "url('../../public/Website_Photos/LBB_8.3.png')",
        'bg1':"url('../../public/Website_Photos/DSC08452.jpeg')",
        'bg3':"url('../../public/Website_Photos/ARI06897-1.jpg')",
        'bg4':"url('../../public/Website_Photos/ARI06304-1.jpg')",
        'bg5':"url('../../public/Website_Photos/New Photos 240722/PA_Still00.jpeg')",
        // 'bg6':"url('../../public/Website_Photos/Screenshot 2024-08-18 at 10.59.11 PM.png')"
      }
    },
  },
  plugins: [],
};
