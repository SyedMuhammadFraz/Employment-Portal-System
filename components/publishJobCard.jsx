"use client"
import React, { useState } from 'react';
import TagComponent from './tag';

const PublishJobCard = ({ username, text, title, date, imageurl,tags, classes }) => {
    const [showMore, setShowMore] = useState(false);
    const maxLength = 150; // Adjust the length as needed
 




    const handleSeeMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div className={`w-full rounded-md mb-4 bg-white p-4 ${classes}`}>

            <div className='flex items-center justify-between'>

                <div className=" flex items-center gap-3 ">
                    <img
                        className=" rounded-[50%] w-[63px] h-[63px] object-cover"
                        alt=""
                        src={imageurl}
                    />
                    <div className=''>
                        <p className="font-bold">{username}</p>
                        <p className="text text-xs text-gray-500">Valid till: {date} </p>
                    </div>
                </div>

                <img
                    className=" w-[19.99px] h-[19.53px]"
                    alt=""
                    src="./assets/icons/dots.svg"
                />

            </div>

            <h2 className='font-bold pt-4'>{title}</h2>

            <div className=''>
                <p className='text-gray-500 text-sm pt-2'>
                    {text && (
                        <>
                            {showMore ? (
                                <>
                                    {text}
                                    <button onClick={handleSeeMore} className="text-blue-500"> See less</button>
                                </>
                            ) : (
                                <>
                                    {text.length > maxLength ? text.slice(0, maxLength) + '...' : text}
                                    {text.length > maxLength && <button onClick={handleSeeMore} className="text-blue-500"> See more</button>}
                                </>
                            )}
                        </>
                    )}
                </p>
            </div>

            {/* tags_____________ */}
            <div className='flex pt-5 gap-2  justify-center'>

                {tags.map((tag, index) => (
                    <TagComponent key={index} tag={tag} classes={'flex flex-col bg-gray-300 font-normal rounded-3xl pl-5 pr-5 h-10 justify-center items-center font-semibold'} />
                ))}
            </div>
            <div className='h-[0.1px] w-full bg-gray-200 mt-10' />
            <div className='flex justify-center'>
                <button className='text-center justify-center p-4 text-blue-600 hover:text-blue-700 font-bold' > Apply </button>

            </div>

        </div>

    )
}

export default PublishJobCard