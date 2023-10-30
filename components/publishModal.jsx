import React from 'react'

const PublishModal = ({ username, isOpen, onClose }) => {
    if (!isOpen) {
        return null; 
    }
    return (
        <div className='w-[650px] flex flex-col p-5 pl-8 pr-8 bg-white rounded-md max-h-[600px]'>

            <div className='flex items-start justify-between'>

                <div className=" flex items-center gap-3 ">
                    <img
                        className=" rounded-[50%] w-[63px] h-[63px] object-cover"
                        alt=""
                        src="./assets/images/dp.png"
                    />
                    <div className=''>
                        <p className="font-bold">{username}</p>
                        <p className="text text-xs text-gray-500">Valid till: July, 2023 </p>
                    </div>
                </div>

                <img onClick={onClose}
                    className=" w-[15.99px] h-[15.53px] hover:bg-slate-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/close.svg"
                />

            </div>
            <textarea type='text'
                placeholder='Description of the job'
                className='w-[610px] text-md mt-2 min-h-[300px] text-gray-500 outline-none' />

            <div className='h-[0.1px] w-full bg-gray-200 mt-2 mb-3' />

            <div className='flex items-center justify-end gap-2'>

                <img
                    className=" w-[30.99px] h-[30.53px] hover:bg-slate-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/clock.svg"
                />
                <button
                    onClick={onClose}
                    className='bg-blue-600 p-3 text-sm font-bold text-white rounded-3xl'
                >Publish</button>
            </div>

        </div>
    )
}

export default PublishModal