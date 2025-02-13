'use client';
import Sidebar from './Sidebar';
import Footer from './Footer';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from '@/navigation';
import Navbar from './Navbar';

export default function Layout({ children }) {
    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 1000,
            easing: 'ease-in-out',
            once: false, // true,
        });
    }, []);

    const pathname = usePathname();
    const [isAllowed, setisAllowed] = useState(false);
    useEffect(() => {
        if (['/sign-up', '/login'].includes(pathname)) {
            setisAllowed(false);
        } else {
            setisAllowed(true);
        }
    }, [pathname]);




    return (
        <div className='container bg-[#f7f7f7] relative grid grid-cols-[auto,1fr] gap-[20px] '>
            <Sidebar />
            <main className='container-type: inline-size '>
                <div className='@container' >
                    <Navbar />
                    {children}
                </div>
            </main>
        </div>
    );
}
