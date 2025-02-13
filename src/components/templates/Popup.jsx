'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import gsap from 'gsap'; // Import GSAP

export default function Popup({ children, position, move, title, isModalOpen, setIsModalOpen }) {
    const modalRef = useRef(null); // Ref for the modal

    // Get locale and determine direction
    const locale = useLocale();
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    useEffect(() => {
        if (isModalOpen) {
            // Determine animation properties based on the `move` parameter
            const animationProps =
                move === 'bottom'
                    ? { y: '100%', opacity: 0 } // Start off-screen at the bottom
                    : { x: direction === 'rtl' ? '100%' : '-100%', opacity: 0 }; // Start off-screen to the side

            gsap.fromTo(
                modalRef.current,
                animationProps, // Initial animation properties
                {
                    x: move === 'bottom' ? '0%' : '0%', // Slide in to the center (x-axis for side animation)
                    y: move === 'bottom' ? '0%' : '0%', // Slide in to the center (y-axis for bottom animation)
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                },
            );
        } else {
            // Determine animation properties based on the `move` parameter
            const animationProps =
                move === 'bottom'
                    ? { y: '100%', opacity: 0 } // Slide down to the bottom
                    : { x: direction === 'rtl' ? '100%' : '-100%', opacity: 0 }; // Slide out to the side

            if (modalRef.current) {
                gsap.to(modalRef.current, {
                    ...animationProps, // Apply animation properties
                    duration: 0.5,
                    ease: 'power3.in',
                    onComplete: () => setIsModalOpen(false), // Close modal after animation
                });
            }
        }
    }, [isModalOpen, direction, move]);

    return (
        isModalOpen && (
            <div className={`fixed h-screen  flex flex-col items-start  top-0 inset-0 z-[5000] bg-black bg-opacity-50`} onClick={() => setIsModalOpen(false)}>
                <div ref={modalRef} className={` ${position == 'center' ? 'left-[50%] translate-x-[-50%] ' : 'ltr:left-0 rtl:right-0 sm:ltr:rounded-br-[15px] sm:ltr:rounded-tr-[15px] sm:rtl:rounded-bl-[15px] sm:rtl:rounded-tl-[15px]'}  absolute bottom-0 h-[100vh] w-full max-w-[510px] bg-white shadow-lg`} onClick={e => e.stopPropagation()}>
                    {/* Modal Header */}
                    <div className='p-3 flex items-center justify-between border-b pb-3'>
                        <button className='rounded-full p-1 hover:bg-primary3 bg-primary2 duration-200' onClick={() => setIsModalOpen(false)}>
                            <Image className='w-[25px] h-[25px] object-contain' src='/icons/x.svg' alt='Close' width={25} height={25} />
                        </button>
                        <h2 className='w-full text-center text-lg font-bold'>{title}</h2>
                    </div>

                    {children}
                </div>
            </div>
        )
    );
}
