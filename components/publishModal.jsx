'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TagsModal from './tagsModal';
import TagComponent from './tag';

const PublishModal = ({ username, isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTagsModal, setShowTagsModal] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSelectedTags = (tags) => {
        setSelectedTags(tags);
    };


    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

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
                        <span className="text-xs text-gray-500">Valid till: </span>
                        <span className="font-bold text-xs text-gray-500">{selectedDate.toLocaleDateString()} </span>
                    </div>
                </div>

                <img onClick={onClose}
                    className="p-[2px] rounded-full w-[20px] h-[20px] hover:bg-gray-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/close.svg"
                />

            </div>
            <textarea type='text'
                placeholder='Description of the job'
                className='w-[610px] text-md mt-2 min-h-[300px] text-gray-500 outline-none' />

                {/*____________ Display tags */}

            <div className="flex flex-wrap items-center gap-2 mt-2">
                {selectedTags.map((tag, index) => (
                    <TagComponent
                    key={index}
                    classes="cursor-pointer bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full m-1"
                    tagName={tag}
                />
                ))}
            </div>

            <div className='h-[0.1px] w-full bg-gray-200 mt-2 mb-3' />

            <div className='flex items-center justify-end gap-2'>

                <img
                    className=" w-[30.99px] h-[30.53px] rounded-full p-[2px] hover:bg-slate-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/clock.svg"
                    onClick={() => setShowCalendar(!showCalendar)}
                />

                {showCalendar && (
                    <div className="absolute z-10 top-1/2 bottom-1/2 left-1/2 right-1/2">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            className="bg-white shadow-md p-2 rounded-lg text-center w-96 "
                            calendarClassName="bg-blue-500 text-white font-bold rounded-t-lg"


                        />
                    </div>
                )}

                <img
                    className=" w-[30px] h-[30px]  p-[2px]  hover:bg-slate-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/tags.svg"
                    onClick={() => setShowTagsModal(true)}

                />
                {showTagsModal && <TagsModal onClose={() => setShowTagsModal(false)} handleSelectedTags={handleSelectedTags} />}

                <button
                    onClick={onClose}
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                >Publish</button>
            </div>

        </div>
    )
}

export default PublishModal