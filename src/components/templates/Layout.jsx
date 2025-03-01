'use client';
import Sidebar from './Sidebar';
import Footer from './Footer';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from '@/i18n/routing';
import Navbar from './Navbar';
import { GlobalProvider } from '@/context/GlobalContext';

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
    const [isMobile, setIsMobile] = useState(false);

    const [isAllowed, setisAllowed] = useState(false);
    useEffect(() => {
        if (['/sign-up', '/login'].includes(pathname)) {
            setisAllowed(false);
        } else {
            setisAllowed(true);
        }

        checkScreenWidth();

        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, [pathname]);



    const checkScreenWidth = () => {
        if (window.innerWidth <= 867) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };


    return (
        <GlobalProvider>
        <div className={` ${isMobile ? ' grid-cols-1 !px-[10px] ' : 'grid-cols-[auto,1fr] !px-[20px] '} container    relative grid gap-[20px] `}>
            <Sidebar isMobile={isMobile} />
            <main className={` ${isMobile ? " mt-[-20px] ltr:ml-[75px] rtl:mr-[75px] " : ""} container-type:inline-size pt-[10px] `}>
                <div className='@container  ' >
                    <Navbar />
                    {children}
                </div>
            </main>
        </div>
        </GlobalProvider>
    );
}
