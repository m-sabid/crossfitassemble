import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AuthUser from '../../../hooks/AuthUser/AuthUser';

const SalaryTable = ({ salaryDetails }) => {
    const [confirm, setConfirm] = useState(false)
    const [id, setId] = useState(null)
    const { token, userRole } = AuthUser()

    const handlePaid = (id) => {

        setId(id)
    }
    if (confirm && id) {
        fetch(`http://crossfitassemble.xyz/api/salary_overview/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully Paid', {
                        id: 'paid'
                    })
                } else {
                    toast.error('Something went wrong')
                }
                setConfirm(false)
            }).catch(err => console.log(err))
        setConfirm(false)
    }
    return (
        <div className='mb-5'>
            <div className="overflow-x-auto overflow-y-hidden">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='bg-accent text-center'>
                            <th className='bg-accent'></th>
                            <th className='bg-accent'>User</th>
                            <th className='bg-accent'>name</th>
                            <th className='bg-accent'>Email</th>
                            <th className='bg-accent'>Date</th>
                            <th className='bg-accent'>Amount</th>
                            <th className='bg-accent'>Type</th>
                            {
                                userRole === 'accountant' && <th className='bg-accent'>Action</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            salaryDetails.map((data, index) => {
                                return (
                                    <tr className='text-center'>
                                        <th>{++index}</th>
                                        <td>
                                            <img className='w-12 h-12 rounded-full mx-auto' src={data?.user?.profile_image} alt="" />
                                        </td>
                                        <td>{data?.user?.name}</td>
                                        <td>{data?.user?.email}</td>
                                        <td>{data?.date}</td>
                                        <td className='font-bold'>৳ {data?.amount}</td>
                                        <td >
                                            {
                                                data?.status ? <button className='btn  btn-xs btn-success text-white'>Paid</button> : <button className='btn btn-xs btn-error text-white'>Unpaid</button>
                                            }

                                        </td>
                                        {
                                            userRole === 'accountant' && <td>
                                                {
                                                    !data?.status &&
                                                    <label onClick={() => handlePaid(data?.id)} className='btn  btn-xs btn-success text-white' htmlFor="my-modal-3">Make Paid</label>


                                                }


                                            </td>
                                        }

                                    </tr>
                                )
                            })
                        }
                        {
                            <>
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Are you sure you want to mark it as PAID?</h3>
                                        <div className='flex justify-evenly items-center mt-5'>
                                            <label onClick={() => setConfirm(true)} className='btn btn-success text-white px-10 ' htmlFor="my-modal-3">
                                                Yes
                                            </label>
                                            <label className='btn btn-error px-10 text-white' htmlFor="my-modal-3">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SalaryTable;