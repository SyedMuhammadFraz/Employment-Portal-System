"use client"
import Navbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';

const ChatTile = ({ username, message, imagePath, isRead, onClick }) => {
    return (
        <div className={`w-full flex bg-white gap-3 pt-3 ${isRead ? '' : 'font-bold'}`} onClick={onClick}>
            <img
                className="rounded-[50%] w-[53px] h-[53px] object-cover"
                alt=""
                src={imagePath}
            />

            <div className=''>
                <p className="font-bold">{username}</p>
                <p className="text text-xs text-gray-500">{message}</p>
            </div>
        </div>
    );
};

const ChatSide = ({ chats }) => {
    const [selectedChat, setSelectedChat] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const selectedChatData = isClient ? chats[selectedChat] : {};

    return (
        <>     
        <Navbar/>
        
        <div className='flex max-h-screen bg-[#F3F2EF] pl-40 pr-40 pb-40 pt-16 '>
            <div className='w-[325px] bg-white p-4'>
                <div className='flex justify-start'>Discussions</div>
                {chats.map((chat, index) => (
                    <ChatTile
                        key={index}
                        username={chat.username}
                        message={chat.message}
                        imagePath={chat.imagePath}
                        isRead={selectedChat === index}
                        onClick={() => setSelectedChat(index)}
                    />
                ))}
            </div>
            <div className='flex-1 h-[400px] bg-gray-200 p-4 '>
                <div className="h-full">
                    <div className='text-xl font-bold'>{selectedChatData.username}</div>
                    <div className='text-gray-500'>{selectedChatData.message}</div>
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md w-full p-2"
                        placeholder="Type your message here"
                    />
                </div>
            </div>
        </div>
        </>
    );
};

// Sample data for chat
const chats = [
    {
        username: 'John Doe',
        message: 'Hey, how are you?',
        imagePath: './assets/images/dp.png',
    },
    {
        username: 'Jane Doe',
        message: 'I am good, thanks for asking!',
        imagePath: './assets/images/dp2.png',
    },
    // Add more sample chat data here
];

export default function ChatPage() {
    return <ChatSide chats={chats} />;
}
