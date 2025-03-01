'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExplainIcon from './ExplainIcon';

const Card = ({ data , index }) => {
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
        <div className={`flex items-start justify-between gap-[10px] px-[20px] py-[15px] ${ index == 0 ? "bg-[#225d9e] dark:bg-bg2 "  : data?.bg ? data?.bg : 'bg-white dark:bg-bg3 '} rounded-[6px] border border-[#eeeeee] dark:border-border1 `}>
            <div className='flex flex-col gap-[10px] '>
                <div className='items-center gap-[5px] inline-flex gap-y-[2px] gap-x-[2px] '>
                    <span className={` ${data?.bg ? 'text-white' : 'text-[#818b9a] dark:text-white '}  text-[15px] font-normal`}> {data?.title} </span>
                    <ExplainIcon cn={index == 0 ? "!fill-white" : "dark:fill-white" }  name={data?.explain} />
                </div>

                <div className={` ${data?.bg ? "text-white" : "text-black dark:text-white"} text-xl font-semibold font-['Inter']`}> {data.count} </div>
                <div className={` ${data?.bg ? "text-white" : "text-[#818b9a] dark:text-white"}  text-[13px] font-normal`}>
                    {t('dashboard.statics.value_price')} {data.price}{' $ '}
                </div>
            </div>

            <div className='text-center'>
                <div className='w-[55px] h-[45px]   ttttt '>
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
