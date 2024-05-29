import React from 'react'
import AboutContent from './AboutContent'
import Footer from "../Home/Footer";
import Gallery from './Gallery';
import Services from './Services';
import Statistic from './Statistic';

const About = () => {
  return (
    <div className='w-full h-[100vh] pt-24'>
      <Statistic />
      <AboutContent />
      <Gallery/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default About
