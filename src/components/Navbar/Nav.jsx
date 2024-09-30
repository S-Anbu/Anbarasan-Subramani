import React from "react";
import logo from './logo.png';
import { Link } from "react-scroll";


import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({setOpenNav}) {
    return (
        <div className="flex items-center justify-center  sm:justify-between space-x-10 gap-5">

            <ul className="my-2 flex flex-col gap-2  md:mb-0 md:mt-0  md:flex-row  md:items-center  md:gap-6 justify-center">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >

                    <Link to="Home" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors" onClick={() => setOpenNav(false)}> Home</Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    <Link to="about" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors" onClick={() => setOpenNav(false)}>
                        About
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    <Link to="Projects" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors" onClick={() => setOpenNav(false)}>
                        Projects
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    <Link to="Skills" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors" onClick={() => setOpenNav(false)}>
                        Skills
                    </Link>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    <Link to="Contact" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors" onClick={() => setOpenNav(false)}>
                        Contacts
                    </Link>
                </Typography>
            </ul>
            <div className="social-icons hidden lg:flex items-center space-x-5 ">
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
            <Link to="Contact" smooth={true} duration={600} >
                <button className="px-2 lg:px-4 py-2 hidden md:block  bg-gradient-to-r from-[#5001fb] to-[#8e0af3] rounded-md text-white font-semibold">
                    Let's Connect
                </button>
            </Link>

        </div>
    );
}

export function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="sticky top-0 z-50 mx-auto max-w-screen-2xl  py-3">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center justify-between gap-4">

                    <Link to="Home" smooth={true} duration={600} >
                        <img src={logo} alt="" className="rounded-full w-12 h-12 ring ring-gray-200 ring-offset-1" />
                    </Link>
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer  py-1.5 hidden md:block"
                    >
                        <Link to="Home" smooth={true} duration={600} className="flex items-center font-semibold hover:text-[#8e0af3] transition-colors"> Anbarasan</Link>
                    </Typography>
                </div>
                <div className="hidden md:block ">
                    <NavList setOpenNav={setOpenNav} />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList setOpenNav={setOpenNav} />
            </Collapse>
        </Navbar>
    );
}