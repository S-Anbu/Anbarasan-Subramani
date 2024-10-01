import React from 'react'
import CoderProfile from './CodeSnippet';
import CoderProfile2 from './CodeSnippet2';
import { Element } from 'react-scroll';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <>
            <Element className='pt-5 lg:pt-0' id='Home' name='Home'>
                <div className='flex items-center justify-center lg:pt-12'>

                    <div className='flex items-center justify-center xl:space-x-10'>
                        <div data-aos="fade-down"  data-aos-delay="50" data-aos-duration="1000" className='flex flex-col space-y-8 lg:space-y-10 '>
                            <div data-aos="fade-down"  data-aos-delay="50" data-aos-duration="1000" className='lg:hidden block lg:mt-10 '>
                                <CoderProfile2 />
                            </div>
                            <div className='hidden lg:block'>
                                <span className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl  font-semibold md:block'>Hi, I'm <span className='text-[#8e0af3] '>Anbarasan</span> </span>
                                <span className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl  font-semibold'>Web Designer &</span> <br />
                                <span className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl  font-semibold'> Developer</span>
                            </div>
                            <div className='hidden  lg:flex space-x-5 mt-3 mr-5  '>
                                <a href="https://www.linkedin.com/in/anbarasan-subramani/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>
                                </a>
                                <a href="https://github.com/S-Anbu/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                                </a>
                                <a href="https://wa.me/+917502252206" target="_blank">
                                    <img src="https://api.iconify.design/logos:whatsapp-icon.svg?color=%23888888" width={27} alt="Whatsapp" />
                                </a>
                                <a href="https://wa.me/+917502252206" target="_blank">
                                    <img src="https://api.iconify.design/skill-icons:instagram.svg?color=%23888888" width={25} alt="instagram" />
                                </a>
                            </div>
                            <div className='  flex '>
                                <Link to="Contact" smooth={true} duration={600} >
                                    <button className='px-4 sm:px-6 py-3 bg-gradient-to-r from-[#5001fb] to-[#8e0af3] rounded-lg text-white font-semibold flex items-center space-x-2' type="button">CONTACT ME  <svg xmlns="http://www.w3.org/2000/svg" className='ml-2' width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M2 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m10 4h4v2h-4zm-3-5h7v2h-7zm2-5h5v2h-5z"></path></svg></button>
                                </Link>
                                <a href='Anbarasan.pdf' download='Anbarasan.pdf'>
                                    <button className='px-4 sm:px-6 py-3 bg-gradient-to-r from-[#5001fb] to-[#8e0af3] rounded-lg text-white font-semibold ml-4 flex items-center space-x-2' type="button">GET RESUME <svg xmlns="http://www.w3.org/2000/svg" className='ml-2' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#fff" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z"></path></svg> </button>
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" className='hidden lg:block lg:mt-10 '>
                            <CoderProfile />
                        </div>
                    </div>
                </div>
            </Element>
        </>
    )
}

export default Home