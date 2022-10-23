import React from 'react';
import toast from 'react-hot-toast';

import AuthUser from '../../hooks/AuthUser/AuthUser';

const LogDeleteModal = ({ log }) => {
    const { token } = AuthUser()

    const handleLogDelete = (id) => {
        console.log(id)
        fetch(`http://crossfitassemble.xyz/api/console/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Product deleted successfully')
                } else {
                    toast.error('Something went wrong')
                }
                console.log(data)
            })
    }

    return (
        <div className='absolute bottom-0'>

            <input type="checkbox" id="my-modal-15" className="modal-toggle" />
            <label htmlFor="my-modal-15" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <h3 className="text-lg font-bold text-center">Are you sure want to Delete?  </h3>
                    <div className='flex gap-3 mt-5 justify-center'>
                        <div
                            onClick={() => handleLogDelete(log?.id)}
                            className='bg-success py-2 px-5 rounded font-bold text-white cursor-pointer' type="submit">Yes</div>

                        <label htmlFor="my-modal-15">
                            <div className='bg-error py-2 px-5 rounded font-bold text-white cursor-pointer' type="submit">No</div>
                        </label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default LogDeleteModal;