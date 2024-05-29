import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo_c.jpg";
import "./Navbar.css";

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "BLOG'S", link: "/blog" },
        { name: "CONTACT", link: "/contact" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <header className="text-gray-600 body-font nav bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <NavLink to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="" className='w-14' />
                    <span className="ml-3 text-xl capitalize">cafet</span>
                </NavLink>
                <div className="md:hidden ml-auto cursor-pointer" onClick={() => setOpen(!open)}>
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </div>
                <nav className={`md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-base justify-center transition-all duration-500 ease-in-out ${open ? 'max-h-screen' : 'max-h-0 md:max-h-full overflow-hidden'}`}>
                    {Links.map(link => (
                        <NavLink
                            key={link.name}
                            to={link.link}
                            className="mr-5 hover:text-gray-900 p-2 md:p-0"
                            onClick={() => setOpen(false)}  // Close the menu on link click
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded text-base mt-4 md:mt-0 bg-indigo-500 text-gray-100 capitalize">
                    login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
