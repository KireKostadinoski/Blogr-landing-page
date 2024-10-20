/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
    sm: '480px',
    md:'1100px',
    xl:'1440px',
  },
    extend: {
      fontFamily: {
       sans: ["Ubuntu" , 'sans-serif'],
       serif: ["Overpass" , 'sans-serif'] 
      },
      lineHeight: {
        '28px': '28px',
        '32px': '32px',
        '33px': '33px',
      },
      backgroundImage: () => ({
        homeBgMobile: "url('../images/bg-pattern-intro-mobile.svg')",
        homeBgDesktop: "url('../images/bg-pattern-intro-desktop.svg')",
        ilustratorBgMobile: "url('../images/illustration-editor-mobile.svg')",
        ilustratorBgDesktop: "url('../images/illustration-editor-desktop.svg')",
        circlesBg: "url('../images/bg-pattern-circles.svg')",
        laptopBgMobile: "url('../images/illustration-laptop-mobile.svg')",
        laptopBgDesktop: "url('../images/illustration-laptop-desktop.svg')",
      }),
    },
  },
  plugins: [],
}

