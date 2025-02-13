import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const TimedownComponent = () => {
    const t = useTranslations('home');
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        const checkScrollPosition = () => {
            const optionsElement = document.getElementById('options');

            if (optionsElement) {
                const optionsPosition = optionsElement.getBoundingClientRect();

                if (optionsPosition.top <= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        const ele = document.querySelector('.main');
        ele.addEventListener('scroll', checkScrollPosition);

        checkScrollPosition();

        return () => {
            ele.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const fragment = window.location.hash;
            const name = fragment.replace('#', '');
            setName(name);
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className={`overflow-hidden container max-w-[590px] bg-white flex items-center text-center text-sm font-bold shadow-xl duration-300 ease-in-out fixed w-full h-[50px] z-[100] ${isVisible ? 'top-0' : '-top-[50px]'}`}>
            <a href='#product-description' className={`${name == 'product-description' ? 'text-primary' : 'text-black'} hover:text-primary relative flex w-full cursor-pointer select-none items-center justify-center gap-1 py-4 transition-all duration-300 `}>
                <svg className='h-[14px]' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'></path>
                </svg>
                {t('Overview')}
                <div className={`${name == 'product-description' ? 'bottom-0' : 'bottom-[-7px]'} absolute h-[7px] w-[60%] rounded-t-full transition-all duration-500 bg-primary`}></div>
            </a>

            <div className='h-5 w-[1px] bg-gray-400'></div>

            <a href='#review' className={`${name == 'review' ? 'text-primary' : 'text-black'} hover:text-primary relative flex w-full cursor-pointer select-none items-center justify-center gap-1 py-4 transition-all duration-300 `}>
                <svg className='h-[14px]' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z'></path>
                </svg>
                {t('Review')}
                <div className={`${name == 'review' ? 'bottom-0' : 'bottom-[-7px]'} absolute h-[7px] w-[60%] rounded-t-full transition-all duration-500 bg-primary`}></div>
            </a>
        </div>
    );
};

export default TimedownComponent;
