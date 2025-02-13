'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = ({ data }) => {
    const t = useTranslations('');

	const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setProgress(data?.value), 0); // Simulate progress update
    }, []);

    /**
     * title
     * value
     * count
     * price
     * color
     * secondColor
     */
    return (
        <div className={`flex items-start justify-between gap-[10px] px-[20px] py-[15px]  ${data?.bg ? data?.bg : 'bg-white'} rounded-lg border border-[#eeeeee]`}>
            <div className='flex flex-col gap-[10px] '>
                <div className='flex items-center gap-[5px] '>
                    <span className={` ${data?.bg ? 'text-white' : 'text-[#818b9a]'}  text-[15px] font-normal`}> {data?.title} </span>
                    <svg  width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path className={`${data?.bg ? 'fill-white' : 'fill-[#818b9a]'} `} d='M9.5 7.125C9.20163 7.125 8.91548 7.24353 8.7045 7.4545C8.49353 7.66548 8.375 7.95163 8.375 8.25V8.33025C8.375 8.42971 8.33549 8.52509 8.26517 8.59541C8.19484 8.66574 8.09946 8.70525 8 8.70525C7.90054 8.70525 7.80516 8.66574 7.73483 8.59541C7.66451 8.52509 7.625 8.42971 7.625 8.33025V8.25C7.625 7.75272 7.82254 7.27581 8.17417 6.92417C8.52581 6.57254 9.00272 6.375 9.5 6.375H9.587C9.95218 6.37511 10.3086 6.48704 10.6082 6.69573C10.9079 6.90442 11.1365 7.19987 11.2633 7.54234C11.39 7.88481 11.4089 8.25789 11.3173 8.6114C11.2257 8.96491 11.0281 9.2819 10.751 9.51975L10.1728 10.0155C10.0795 10.0956 10.0046 10.1949 9.95325 10.3066C9.90186 10.4183 9.87517 10.5398 9.875 10.6628V11.0625C9.875 11.162 9.83549 11.2573 9.76517 11.3277C9.69484 11.398 9.59946 11.4375 9.5 11.4375C9.40054 11.4375 9.30516 11.398 9.23483 11.3277C9.16451 11.2573 9.125 11.162 9.125 11.0625V10.6628C9.125 10.1948 9.32975 9.75075 9.6845 9.44625L10.262 8.95125C10.423 8.81327 10.538 8.62926 10.5913 8.424C10.6446 8.21874 10.6338 8.00206 10.5603 7.80314C10.4867 7.60421 10.3541 7.43258 10.18 7.31134C10.006 7.1901 9.79908 7.12507 9.587 7.125H9.5ZM9.5 13.125C9.64918 13.125 9.79226 13.0657 9.89775 12.9602C10.0032 12.8548 10.0625 12.7117 10.0625 12.5625C10.0625 12.4133 10.0032 12.2702 9.89775 12.1648C9.79226 12.0593 9.64918 12 9.5 12C9.35082 12 9.20774 12.0593 9.10225 12.1648C8.99676 12.2702 8.9375 12.4133 8.9375 12.5625C8.9375 12.7117 8.99676 12.8548 9.10225 12.9602C9.20774 13.0657 9.35082 13.125 9.5 13.125Z' fill='#818B9A' />
                        <path className={`${data?.bg ? 'fill-white' : 'fill-[#818b9a]'} `} d='M3.125 9.75C3.125 8.05925 3.79665 6.43774 4.99219 5.24219C6.18774 4.04665 7.80925 3.375 9.5 3.375C11.1908 3.375 12.8123 4.04665 14.0078 5.24219C15.2034 6.43774 15.875 8.05925 15.875 9.75C15.875 11.4408 15.2034 13.0623 14.0078 14.2578C12.8123 15.4534 11.1908 16.125 9.5 16.125C7.80925 16.125 6.18774 15.4534 4.99219 14.2578C3.79665 13.0623 3.125 11.4408 3.125 9.75ZM9.5 4.125C8.00816 4.125 6.57742 4.71763 5.52252 5.77252C4.46763 6.82742 3.875 8.25816 3.875 9.75C3.875 11.2418 4.46763 12.6726 5.52252 13.7275C6.57742 14.7824 8.00816 15.375 9.5 15.375C10.9918 15.375 12.4226 14.7824 13.4775 13.7275C14.5324 12.6726 15.125 11.2418 15.125 9.75C15.125 8.25816 14.5324 6.82742 13.4775 5.77252C12.4226 4.71763 10.9918 4.125 9.5 4.125Z' fill='#818B9A' />
                    </svg>
                </div>

                <div className={` ${data?.bg ? "text-white" : "text-black"} text-xl font-semibold font-['Inter']`}> {data.count} </div>
                <div className={` ${data?.bg ? "text-white" : "text-[#818b9a]"}  text-[13px] font-normal`}>
                    {t('dashboard.statics.value_price')} {data.price}{' $ '}
                </div>
            </div>

            <div className='text-center'>
                <div className='w-[55px] h-[55px]'>
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
						strokeWidth={15}
                        styles={buildStyles({
                            textColor: data?.color,
                            pathColor: data?.color,
                            trailColor: data?.secondColor,
                            strokeLinecap: 'round',
                            textSize: '20px',
							pathTransitionDuration: 1,
                        })}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
