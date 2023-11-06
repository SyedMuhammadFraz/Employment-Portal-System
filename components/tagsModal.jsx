import React, { useState } from 'react';
import TagComponent from './tag';

const TagsModal = ({ onClose, handleSelectedTags }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const allTags = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6', 'Tag7', 'Tag8', 'Tag9', 'Tag10'];

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((item) => item !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleDone = () => {
        handleSelectedTags(selectedTags);
        onClose();
      };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        className="rounded-l-md border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                        placeholder="Search Tags"
                                    />
                                    <button className="px-4 rounded-r-md border-t border-b border-r text-gray-800 border-gray-200 bg-white">
                                        Search
                                    </button>
                                </div>
                                <div className="flex items-center justify-end mt-2">
                                    <img
                                        onClick={onClose}
                                        className="p-2 rounded-full w-6 h-6 hover:bg-gray-200 cursor-pointer"
                                        alt=""
                                        src="./assets/icons/close.svg"
                                    />
                                </div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                                    Selected Tags
                                </h3>
                                <div className="flex flex-wrap mt-2">
                                    {selectedTags.map((tag, index) => (
                                        <TagComponent
                                            key={index}
                                            onClick={() => handleTagClick(tag)}
                                            tagName={tag}
                                            classes={"cursor-pointer bg-gray-300 font-semibold text-gray-800 text-sm px-3 py-1 rounded-full m-1"}
                                        />


                                    ))}
                                </div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                                    All Tags
                                </h3>
                                <div className="flex flex-wrap mt-2">
                                    {allTags
                                        .filter((tag) => !selectedTags.includes(tag))
                                        .map((tag, index) => (
                                            <TagComponent
                                                key={index}
                                                onClick={() => handleTagClick(tag)}
                                                classes="cursor-pointer bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full m-1"
                                                tagName={tag}
                                            />
                                                
                                            
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={handleDone}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagsModal;
