import React from 'react'
import Card from './Card'
import AboutContent from './AboutContent'
import Footer from "../Home/Footer";
import Gallery from './Gallery';
import Services from './Services';

const About = () => {
  return (
    <div className='w-full h-[100vh] pt-24'>
      <Card/>
      <AboutContent />
      <Gallery/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default About
