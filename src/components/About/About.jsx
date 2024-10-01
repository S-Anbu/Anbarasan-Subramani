import React from 'react'
import Anbu from './Anbu.png'
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element id='about' name='about' className='pt-16'>
    <div  className=" my-12 lg:my-24 mx-10 lg:mx-24 relative ">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000" className="grid grid-cols-1  lg:grid-cols-2 gap-7 md:gap-4 lg:gap-6">
        <div className="order-2 lg:order-1">
          <p className="font-semibold text-3xl mb-5 text-[#8e0af3] uppercase">
            Who I am?
          </p>
          <p className=" text-sm lg:text-lg">
          My name is Anbarasan. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
            <img src={Anbu} className='md:w-[280px]  rounded-lg transition-all duration-1000 shadow-xl shadow-deep-purple-500 hover:scale-110 cursor-pointer' alt="Anbarasan-Subramani" />
        </div>
      </div>
    </div>
    </Element>

  )
}

export default About