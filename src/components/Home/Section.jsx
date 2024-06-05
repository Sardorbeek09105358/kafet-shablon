import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Section = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`)
            .then((res) => {
                setUsers(res.data);
                const totalCount = Number(res.headers['x-total-count']);
                const totalPagesCount = Math.ceil(totalCount / limit);
                setTotalPages(totalPagesCount);
                console.log('Fetched Data:', res.data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [page, limit]);

    const handleCardClick = (id) => {
        let storedIds = JSON.parse(localStorage.getItem('Data')) || [];
        if (!storedIds.includes(id)) {
            storedIds.push(id);
            localStorage.setItem('Data', JSON.stringify(storedIds));
        }
        navigate(`/about/${id}`);
    };

    return (
        <div className="w-full pt-10">
            <div className="w-full">
                <div className="flex flex-col justify-center mx-auto items-center">
                    {users.map((item) => (
                        <div
                            key={item.id}
                            className="w-[75%] h-[250px] bg-[#fffff] mb-4 cursor-pointer rounded-lg pl-3 kopyright"
                            onClick={() => handleCardClick(item.id)}
                        >
                            <h1 className="text-[#666] text-[24px] mt-3 capitalize">{item.name}</h1>
                            <h3>{item.email}</h3>
                        </div>
                    ))}
                </div>
                <div className="w-[90%] flex justify-end gap-10 mt-6">
                    <button
                        className="w-[120px] rounded-md cursor-pointer text-white hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500 bg-indigo-500 h-[40px] text-[22px] capitalize"
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    <button
                        className="w-[120px] rounded-md cursor-pointer text-white hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500 bg-indigo-500 h-[40px] text-[22px] capitalize"
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section;
