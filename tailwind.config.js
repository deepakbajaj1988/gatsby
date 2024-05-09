/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        // 'arrow_rt': "url('./src/images/arrow_rt.png')",   
        // 'outline-img': "url('./src/images/ft_under_line.png')", 
        // 'let_back': "url('./src/images/let_back.png')",  
        // 'black-white-arrow': "url('./src/images/arrow_black.png')",    
        // 'home-video-section-bg': "url('./src/images/home-video-section-bg.webp')",    
                           
      }, 
 
      screens: {
        'mdtab': '992px',
        // '2xl': '1400px',
        'BigScreen': {'max': '1800px'},
        'PCScreenmin': {'min': '1520px'},
        'PCScreen': {'max': '1520px'},
        'FullScreen': {'max': '1400px'},
        'smallLaptop': {'max': '1300px'},
        'tablet': {'max': '1200px'},
        'tabletmin': {'min': '1200px'}, 
        'tabletPortrait': {'max': '1023px'},
        'break_t': {'max': '1000px'},
        'break_m': {'max': '920px'}, 
        'mobile': {'max': '767px'},   
        'mobileLand': {'max': '620px'},
        'mobilePortrait': {'max': '480px'}, 
      },

      gridTemplateColumns: {
        'home_slider': '550px 1fr', 
        'awrd-winning': '1fr 400px',   
        'awrd-winning-tablet': '1fr 200px',      
        'testimomial-grid': '170px 1fr'       
      },

      backgroundPosition: {        
        'right-center': 'right 25px center'              
      },

      colors: {
        'kinex_pink': '#c91d61'          
      },
      translate: { 
        '0_50': '0px -50%',
      },

      gridTemplateColumns: {
        'two-col': '1fr 1fr'     
      }   


    },
  },
  plugins: [],
}
