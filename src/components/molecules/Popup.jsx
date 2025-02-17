'use client';
import { useState } from 'react';
import Title from '../pages/common/Title';

const Popup = ({ content, isOpen, onClose, title }) => {
    // if (!isOpen) return null; // Hide popup when closed

    return (
        <div className={` ${!isOpen ? " pointer-events-none" : "backdrop-blur-[2px]" } fixed inset-0 px-[30px] flex items-center justify-center  z-[500]   `} >
            <div onClick={onClose} className={` ${!isOpen && "top-[-100vh] opacity-0 "}  transition-all duration-500 w-full h-full absolute left-0 top-0  opacity-70  `} style={{background : "rgba(0, 0, 0, 0.78)" }} ></div>
            <div onClick={onClose} className={` ${!isOpen && "bottom-[-100vh] opacity-0 "}  transition-all duration-500 w-full h-full absolute left-0 bottom-0 opacity-70  `} style={{background : "rgba(0, 0, 0, 0.78)" }} ></div>
			
			<div className={` ${!isOpen ? "max-h-0 opacity-0 " : " opacity-100 max-h-[1000px] p-[30px] "} overflow-auto duration-500 transition-all bg-white  rounded-lg shadow-lg mx-auto max-w-[800px] w-full relative`}>
                {/* Close Button */}
				<div className=" flex items-center justify-between mb-[30px] ">
					<Title title={title} cn={"!m-0"} />
					<svg onClick={onClose} className='cursor-pointer hover:shadow-lg hover:scale-95 duration-300 rounded-full ' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15.5" r="14.5" fill="white" stroke="#818B9A"/><path d="M11.25 19.25L18.75 11.75M11.25 11.75L15 15.5L18.75 19.25" stroke="#818B9A" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</div>

				<div className='h-[0px] mb-[30px]  border-[1px] border-[#ebebeb]' ></div>

                {/* Content Area */}
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Popup;
