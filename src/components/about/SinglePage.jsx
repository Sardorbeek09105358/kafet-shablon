import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
const SinglePage = () => {
    const { id } = useParams();
    const [comment, setComment] = useState(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((res) => {
                setComment(res.data);
                console.log('Fetched Comment:', res.data);
            })
            .catch((error) => console.error('Error fetching comment:', error));
    }, [id]);

    if (!comment) {
        return <div>Loading...</div>;
    }

    return (
        <div className=''>
            <div className="w-full pt-10 h-[100vh] flex items-center flex-col justify-center">
                <div className='h-[300px] bg-red-500 w-[80%] mb-5'>
                    <h1>cafet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo numquam, aspernatur temporibus vero dolore voluptas earum quisquam aliquam doloremque odio in laudantium ratione soluta adipisci fugiat eveniet excepturi error consequatur ducimus. Laudantium sapiente voluptatem dicta reprehenderit accusantium dolor sint eius.</p>
                </div>
                <div className="w-[80%] mx-auto bg-white mb-4 rounded-lg p-3 kopyright shadow-lg">
                    <h1 className="text-[#666] text-[24px] mt-3 capitalize">{comment.name}</h1>
                    <p className="text-[#999] text-[18px] mt-1 mb-5">{comment.body}</p>
                    <h3 className="text-[#333] mb-6">{comment.email}</h3>
                    <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500">
                        <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
                            <Link href="https://t.me/CAFETjournal_TKTI" className="text-gray-600 capitalize" rel="noopener noreferrer" target="_blank">
                                <i className="fa-brands fa-telegram mr-1"></i>Telegram
                            </Link>
                            <Link href="https://www.instagram.com/tktiuz" className="text-gray-600 capitalize" target='_blank'>
                                <i className="fa-brands fa-instagram mr-1"></i>Instagram
                            </Link>
                          
                            <Link href="https://vk.com/tktiuz" className="text-gray-600 capitalize" target='_blank'>
                                <i className="fa-brands fa-vk mr-1"></i>VK
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
            </div>
        </div>
    );
};

export default SinglePage;
