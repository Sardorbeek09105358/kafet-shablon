import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo_c.jpg"

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
               <img src={logo} alt="" className='w-12'/>
                    <span class="ml-3 text-xl">cafet.uz</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"><i className="fa-brands fa-telegram"></i>
                    <Link href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank" to={"https://t.me/CAFETjournal_TKTI"}>Telegram</Link>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
                    <Link to={"https://tkti.uz/uz/"} target='_blank' className='capitalize text-blue-500'><i className="fa-brands fa-internet-explorer"></i> Internet</Link>
                    <Link to={"https://scholar.google.com/"} target='_blank' className='capitalize text-blue-500'>google scholar</Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer
