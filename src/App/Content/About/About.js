import React from 'react';
import  './About.moudle.css';
import model from '../assets/images/about-model.png';

const About = () => (
    <section className='about' id='about'>
        <div className='about-text'>
            <h1>About Me</h1>
            <h2>FreeLancing Full Stack Developer</h2>
            <p>I have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. I am something of a swing, ready to assist wherever needed in the process.</p>
            <button>View More Details</button>
        </div>
        <div>
            <img alt='model' src={model} />	
        </div>
    </section>
)

export default About