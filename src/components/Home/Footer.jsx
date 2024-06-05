import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo_c.jpg"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
                <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 sm:mb-0">
                    <img src={logo} alt="logo" className='w-12' />
                    <span className="ml-3 text-xl">cafet.uz</span>
                </Link>
                <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500">
                    <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
                        <Link href="https://t.me/CAFETjournal_TKTI" className="text-gray-600 capitalize" rel="noopener noreferrer" target="_blank">
                            <i className="fa-brands fa-telegram mr-1"></i>Telegram
                        </Link>
                        <Link href="https://www.instagram.com/tktiuz" className="text-gray-600 capitalize" target='_blank'>
                            <i className="fa-brands fa-instagram mr-1"></i>Instagram
                        </Link>
                        <Link href="http://youtube.com/@tktiuzrasmiy" className="text-gray-600 capitalize" target='_blank'>
                            <i className="fa-brands fa-youtube mr-1"></i>YouTube
                        </Link>
                        <Link href="https://vk.com/tktiuz" className="text-gray-600 capitalize" target='_blank'>
                            <i className="fa-brands fa-vk mr-1"></i>VK
                        </Link>
                        <Link href="http://linkedin.com/company/tktiuz" className="text-gray-600 capitalize" target='_blank'>
                            <i className="fa-brands fa-linkedin mr-1"></i>LinkedIn
                        </Link>
                        <Link href="https://t.me/TyutorTKTI" className="text-gray-600 capitalize" rel="noopener noreferrer" target="_blank">
                            TUTOR.UZ   
                        </Link>
                    </div>
                     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
                        <Link href="https://tkti.uz/uz/" className="capitalize text-blue-500" target='_blank'>
                                 <i className="fa-brands fa-internet-explorer mr-1"></i>TKTI.UZ
                        </Link>
                        <Link href="https://scholar.google.com/" className="capitalize text-blue-500" target='_blank'>
                            Google Scholar
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
