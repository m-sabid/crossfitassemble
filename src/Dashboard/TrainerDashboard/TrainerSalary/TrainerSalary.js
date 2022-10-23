import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import SalaryTable from '../../AdminDashboard/Salary/SalaryTable';

const TrainerSalary = () => {
    const { token } = AuthUser()


    const { data: salaryDetails, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://crossfitassemble.xyz/api/salary_overview`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())

    )
    if (isLoading) {
        return <Loading />
    }

    // get trainer detail by email from salarydetails
    const trainerDetail = salaryDetails?.data?.filter(salary => {
        if (salary?.user?.email === 'trainer@gmail.com') {
            return salary
        }
    })



    const salaryPaid = trainerDetail?.filter(salary => {
        if (salary.status) {
            return salary
        }
    })
    const paidAmount = salaryPaid?.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)

    const salaryUnPaid = trainerDetail?.filter(salary => {
        if (salary.status === false) {
            return salary
        }
    })
    const unPaidAmount = salaryUnPaid?.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)


    // total pending salary user
    const totalPendingSalary = trainerDetail?.filter(salary => {
        if (salary.status === false) {
            return salary
        }
    })

    // console.log(salaryDetails, 'salaryDetails')


    return (
        <div className='p-5 mt-4 '>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Trainers!</h2>
            </div>

            <div className='mt-7 border-b-[1px] pb-3 mb-5'>
                <h2 className='font-semibold'>Salary Overview</h2>
                {/* <p className='text-secondary text-sm'>March 2022</p> */}
            </div>

            <div className='grid sm:grid-cols-3 bg-[#FEEDD1] lg:py-5 mb-10'>
                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white'>
                    <div className='sm:py-8 pt-5 pb-2 text-center'>
                        <h1 className='font-bold text-xl text-center'>Total Pending</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl  font-semibold mr-4 text-primary'>{totalPendingSalary?.length}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white relative'>
                    <div className='text-primary sm:py-8 pt-5  pb-2 text-center'>
                        <h1 className='font-bold text-xl'>Total Unpaid</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{unPaidAmount}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center relative'>
                    <div className='text-success sm:py-8 pt-5 pb-4 text-center'>
                        <h1 className='font-bold text-xl'>Total Paid</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{paidAmount}</h2>
                    </div>
                </div>

            </div>

            <SalaryTable salaryDetails={trainerDetail} />
        </div>
    );
};

export default TrainerSalary;