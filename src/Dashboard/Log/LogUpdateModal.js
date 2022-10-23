import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AuthUser from '../../hooks/AuthUser/AuthUser';

const LogUpdateModal = ({ setOpenModal, log }) => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const [selection, setSelection] = useState('analysis log')
    const { token } = AuthUser();

    console.log(log, 'log');
    const onSubmitForm = (data) => {

        const formData = new FormData();
        formData.append('title', data.title || log?.title);
        formData.append('description', data.description || log?.description);
        formData.append('type', selection || log?.type);
        formData.append('image', data.image[0] || log?.image);

        //axios post request
        axios.patch(`http://crossfitassemble.xyz/api/console/${log.id}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.data.success) {
                    toast.success('Log updated successfully')
                    // setOpenModal(false)
                    reset()
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
                // setOpenModal(true)
            })
    }
    return (
        <div className='absolute bottom-0'>
            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-8" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmitForm)}>

                        <div className=" mt-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Enter The Title" className="input input-bordered w-full focus:outline-none"
                                    {...register("title", {
                                        minLength: {
                                            value: 3,
                                            message: 'Title must be at least 3 characters'
                                        }
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('title');
                                    }} />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.title?.message}</small>
                            </div>
                        </div>

                        <div className=" mt-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select onChange={(e) => setSelection(e.target.value)} type="text" className="input input-bordered w-full focus:outline-none"
                                >
                                    <option value="analysis log">Analysis log</option>
                                    <option value="regular log">Regular log</option>
                                </select>
                            </div>
                        </div>

                        <div className=" mt-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input placeholder="Enter Description" type="text" className="input input-bordered w-full focus:outline-none"
                                    {...register("description")}
                                    onKeyUp={(e) => {
                                        trigger('description');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.description?.message}</small>
                            </div>
                        </div>

                        <div className=" mt-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Media</span>
                                </label>
                                <input placeholder="Select your media" type="file" className=" w-full focus:outline-none"
                                    {...register("image", {
                                        required: 'Image is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('image');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.image?.message}</small>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4 relative">
                            <div>
                                <label htmlFor="my-modal-8" className="btn btn-error text-white font-bold btn-sm">Close</label>
                            </div>
                            <div className="text-end">
                                <button
                                    type='submit'
                                    className="btn  bg-green-500 text-white font-bold px-3 py-1 rounded-md cursor-pointer btn-sm">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default LogUpdateModal;