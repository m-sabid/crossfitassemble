import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import Loading from '../../hooks/Loading/Loading';

const LogDetails = () => {
    const { id } = useParams();
    const { token, userRole } = AuthUser()
    const [singleLog, setSingleLog] = useState({})
    const navigate = useNavigate()

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;
    const [loading, setLoading] = useState(true)

    //axios get request by id
    // axios.get(`http://crossfitassemble.xyz/api/console/${id}`,
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then(res => {
    //         // console.log(res);
    //         setSingleLog(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    useEffect(() => {
        setLoading(true)
        fetch(`http://crossfitassemble.xyz/api/console/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setSingleLog(data);
                setLoading(false)
            }
            )
    }, [token, id])


    return (
        <div className="">
            <div className='flex justify-between p-3 pb-6 border-b'>
                <h2 className='text-2xl font-semibold'>Hello, {userRole}!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                </div>
            </div>

            {
                loading ? <Loading /> :
                    <>
                        <div className="lg:w-[60%] md:w-[80%] px-3 mx-auto my-10">
                            <h1 className=' font-bold text-primary border-primary border w-fit px-5 py-1 border-b-0'>{singleLog?.type}</h1>
                            <div className="bg-accent px-4 py-3 border w-full ">
                                <div>
                                    <div className="max-w-md mx-auto rounded mb-5 overflow-hidden">
                                        <img className=' mx-auto' src={singleLog?.image} alt="" />
                                    </div>
                                    <h1 className='text-xl'><span className='font-bold'> {singleLog?.title}</span></h1>
                                    <h1 className='text-justify'>{singleLog?.description}</h1>
                                </div>

                                <button
                                    onClick={() => navigate(-1)}
                                    className='btn btn-outline btn-xs btn-primary mt-5'>Go back
                                </button>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default LogDetails;