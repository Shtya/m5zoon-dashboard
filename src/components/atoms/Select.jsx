'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';

const Select = ({cnSelect ,label , cnInput , iconSelect , dataAos , delay  , error , trigger , watch , KEY, setValue, icon, data, cn, place }) => {
    const t = useTranslations()

  const [val, setval] = useState();
  const [show, setShow] = useState(false);

  useEffect(()=> {
    if(!place) setval({name : t("choose_some_thing") })
  } ,[place])

  const handleValue = e => {
    setval({ name: e?.value , icon : e.icon });
    setValue?.(KEY, e?.name);
    setShow(false);
  };

  const watchKey = watch?.(KEY)
  useEffect(()=>{
    if(watchKey)  trigger?.(KEY) 
    },[watchKey])
  

  const selectRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) setShow(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const twoArrow = <svg width="15" height="30" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className=' fill-[#B8B8B8] dark:fill-white ' d="M19.1801 14.4802L15.9701 11.2702L14.0101 9.30023C13.1801 8.47023 11.8301 8.47023 11.0001 9.30023L5.82007 14.4802C5.14007 15.1602 5.63007 16.3202 6.58007 16.3202H12.1901H18.4201C19.3801 16.3202 19.8601 15.1602 19.1801 14.4802Z" />
  <path className=' fill-[#B8B8B8] dark:fill-white ' d="M19.1801 20.5198L15.9701 23.7298L14.0101 25.6998C13.1801 26.5298 11.8301 26.5298 11.0001 25.6998L5.82007 20.5198C5.14007 19.8398 5.63007 18.6798 6.58007 18.6798H12.1901H18.4201C19.3801 18.6798 19.8601 19.8398 19.1801 20.5198Z" />
  </svg>
  
  return (
    <div ref={selectRef} data-aos={dataAos} data-aos-delay={delay}  className={`${cn} select z-[100] relative flex  flex-col gap-[15px]  w-full `}>
      {label && <label htmlFor={KEY} className={` text-[#3e4c5b] dark:text-[#fff] text-lg font-normal `} > {label} </label> }

      <div onClick={() => setShow(!show)} className={` ${cnSelect} dark:dark:bg-[#1F2A4A] px-[10px] rounded-lg border border-[#ececeb] dark:border-border1  duration-300 cursor-pointer w-full min-h-[55px] flex justify-between items-center`}>
        <div className='flex items-center gap-[9px] '>
            {val?.icon && <Image className=' flex-none w-[20px] h-[20px] object-cover rounded-[50%] ' src={val?.icon} alt='' width={20} height={20} />}
            <div className={` ${cnInput}  text-sm font-normal text-[#6b6b6b] dark:text-[#fff]`}> {val?.name || place} </div>
        </div>
        {
          iconSelect ? twoArrow
          : <ChevronDown size={20} className={` text-[#6b6b6b] dark:text-white ${show ? 'rotate-[180deg]' : ''} duration-300 `}  />
        }
      </div>

        <div  className={`almarai ${show ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-50 '} z-[10000]   overflow-auto  duration-300 shadow-md  ease-in-out absolute top-[110%] w-full bg-white dark:bg-bg3 `}>
          {data.map((e, i) => (
            <div className=' gap-[5px] hover:bg-secondery hover:dark:bg-bg2 group duration-100 min-h-[40px] cursor-pointer flex items-center px-[10px] ' key={i} onClick={_ => handleValue(e)}>
              <span className='text-sm font-normal text-[#6b6b6b] dark:text-[#fff] duration-100 group-hover:text-white '>  {e.value}  </span>
            </div>
          ))}
        </div>


      {error && <div className='error absolute ' > {t(error?.message)} </div>}
    </div>
  );
};

export default Select;



