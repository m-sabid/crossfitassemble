import React, { useState } from 'react';
import img1 from '../../../assets/Image/UserDashboard/Frame original.png'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useEffect } from 'react';

const UsersHome = () => {
    const { token } = AuthUser()
    const [userPhysic, setUserPhysic] = useState({});

    //react query for getting phySicalInfo from api
    useEffect(() => {
        fetch(`http://crossfitassemble.xyz/api/physical_info`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                setUserPhysic(data)
            }
            )
    }, [token])

    return (
        <div className='p-5 mt-4 '>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Users!</h2>
            </div>

            <div className=' sm:mt-10 mt-8 border-b-2'>

                <div className='sm:mt-10 mt-7 flex md:justify-evenly justify-between uppercase'>

                    <div className=' md:text-center grid sm:text-[16px] text-xs '>
                        <div className=''>
                            <p className='font-bold '>Neck</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.neck}</small>
                        </div>
                        <div className=''>
                            <p className='font-bold '>Shoulder</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.shoulder}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Chest</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.chest}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>R Biceps</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_biceps}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>L Biceps</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_biceps}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Waist</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.waist}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Abdomen</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.abdomen}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Hip</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.hip}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">R Thigh</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_thigh}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">L Thigh</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_thigh}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">R Calf </p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_calf}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">L Calf</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_calf}</small>
                        </div>
                    </div>

                    <div>
                        <img className='w-full' src={img1} alt="" />
                    </div>

                    <div className=' md:text-center text-end grid sm:text-[16px] text-xs '>
                        <div className=''>
                            <p className='font-bold '>Neck</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.neck}</small>
                        </div>
                        <div className=''>
                            <p className='font-bold '>Shoulder</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.shoulder}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Chest</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.chest}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>R Biceps</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_biceps}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>L Biceps</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_biceps}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Waist</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.waist}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Abdomen</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.abdomen}</small>
                        </div>
                        <div className=' '>
                            <p className='font-bold '>Hip</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.hip}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">R Thigh</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_thigh}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">L Thigh</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_thigh}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">R Calf </p>
                            <small className='text-gray-500'>~{userPhysic?.data?.r_calf}</small>
                        </div>
                        <div className=' '>
                            <p className="font-bold">L Calf</p>
                            <small className='text-gray-500'>~{userPhysic?.data?.l_calf}</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='sm:mt-0 mt-10'>
                    <span className='bg-info py-2 px-8 font-bold  rounded-md cursor-pointer'>
                        Back
                    </span>

                    <div className='sm:mt-10 mt-7 grid grid-cols-2'>
                        <div>
                            <img className='' src={img2} alt="" />
                        </div>
                        <div className='md:text-end text-center grid'>
                            <div className='md:text-end text-center grid '>
                                <div className=' '>
                                    <p className='font-bold '>Neck</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.neck}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Shoulder</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.shoulder}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Chest</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.chest}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Hip</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.hip}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Quadriceps</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.quadriceps}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Wrist</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.wrist}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Height</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.height}</small>
                                </div>
                                <div className=' '>
                                    <p className='font-bold '>Shoulder</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.shoulder}</small>
                                </div>
                                <div className=' '>
                                    <p className="font-bold">BMI</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.bmi}</small>
                                </div>
                                <div className=' '>
                                    <p className="font-bold">Calves</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.calves}</small>
                                </div>
                                <div className=' '>
                                    <p className="font-bold">Triceps</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.triceps}</small>
                                </div>
                                <div className=' '>
                                    <p className="font-bold">Weight</p>
                                    <small className='text-gray-500'>~{userPhysic?.data?.weight}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


            {/* <div className='mt-10'>

                <div className='mt-10'>

                    <div className='grid grid-cols-2 sm:mt-0 mt-10'>
                        <div className='mx-auto'>
                            <img src={body} alt="" />
                        </div>
                        <div className='sm:w-[80%] grid sm:gap-10 gap-5'>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Chest (in)</h1>
                                    <h1 className='text-2xl font-bold'>{userPhysic?.data?.chest}</h1>
                                </div>
                            </div>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Waist (in)</h1>
                                    <h1 className='text-2xl font-bold'>{userPhysic?.data?.wrist}</h1>
                                </div>
                            </div>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Hip (in)</h1>
                                    <h1 className='text-2xl font-bold'>{userPhysic?.data?.hip}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default UsersHome;