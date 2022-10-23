import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa'
import LogDeleteModal from './LogDeleteModal';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import LogUpdateModal from './LogUpdateModal';

const LogItems = ({ log }) => {
    const [handleBtn, setHandleBtn] = useState(false)
    const [handleUpdateButton, setHandleUpdateButton] = useState(false)
    const navigate = useNavigate()

    return (
        <div>
            <h1 className=' font-bold text-primary border-primary border-b-0 border w-fit px-5 py-1'>{log?.type}</h1>
            <div className="bg-accent package_card px-4 py-3 border flex w-full justify-between ">
                <div onClick={() => navigate(`/dashboard/log/${log.id}`)}
                >
                    <h1 className='text-xl cursor-pointer handle_letter_spacing'><span className='font-bold'> {log?.title}</span></h1>
                    <div >
                        <h1 className='text-justify cursor-pointer'>{log?.description}</h1>
                    </div>
                </div>

                <div>

                    <label onClick={() => setHandleUpdateButton(true)} className='' htmlFor="my-modal-8" >
                        <div className='p-2 mb-2 w-fit mx-auto cursor-pointer bg-warning rounded-full text-white text-xl flex items-center justify-center'>
                            <FaRegEdit />
                        </div>
                    </label>
                    {
                        handleUpdateButton && <LogUpdateModal log={log} />
                    }
                    <label onClick={() => setHandleBtn(true)} htmlFor="my-modal-15">
                        <div className='p-2 w-fit mx-auto cursor-pointer bg-error rounded-full text-white text-xl flex items-center justify-center'>
                            <RiDeleteBin2Line />
                        </div>
                    </label>
                    {
                        handleBtn && <LogDeleteModal log={log} />
                    }
                </div>
            </div>
        </div>
    );
};

export default LogItems;