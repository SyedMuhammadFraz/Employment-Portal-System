import React from 'react'

const ChatTile = ({ username, message, isRead, imagePath }) => {
    return (
        <div className={`w-full flex bg-white gap-3 pt-3 ${isRead ? '' : 'font-bold'}`}>
            <img
                className=" rounded-[50%] w-[53px] h-[53px] object-cover"
                alt=""
                src={imagePath}
            />

            <div className=''>
                <p className="font-bold">{username}</p>
                <p className="text text-xs text-black">{message}</p>
            </div>
        </div>
    )
}
export default ChatTile