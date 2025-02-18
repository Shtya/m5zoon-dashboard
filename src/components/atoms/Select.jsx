'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';

const Select = ({cnSelect ,label , cnInput , iconSelect , dataAos , delay  , error , trigger , watch , KEY, setValue, icon, data, cn, place }) => {
    const t = useTranslations()

  const [val, setval] = useState();
  const [show, setShow] = useState(false);

  useEffect(()=> {
    if(!place) setval({name : data?.[0].name})
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


  return (
    <div ref={selectRef} data-aos={dataAos} data-aos-delay={delay}  className={`${cn} select z-[100] relative flex  flex-col gap-[15px]  w-full `}>
      {label && <label htmlFor={KEY} className={` text-[#3e4c5b] text-lg font-normal `} > {label} </label> }

      <div onClick={() => setShow(!show)} className={` ${cnSelect} px-[10px] rounded-lg border border-[#ececeb] duration-300 cursor-pointer w-full min-h-[55px] flex justify-between items-center`}>
        <div className='flex items-center gap-[9px] '>
            {val?.icon && <Image className=' flex-none w-[20px] h-[20px] object-cover rounded-[50%] ' src={val?.icon} alt='' width={20} height={20} />}
            <div className={` ${cnInput}  text-sm font-normal text-[#6b6b6b]`}> {val?.name || place} </div>
        </div>
        <Image className={`${show ? 'rotate-[180deg]' : ''} duration-300 `} src={iconSelect || "/icons/arrow-top-black.png"} alt='' width={12} height={12} />
      </div>

        <div  className={`almarai ${show ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-50 '} z-[10000]   overflow-auto  duration-300 shadow-md  ease-in-out absolute top-[110%] w-full bg-white `}>
          {data.map((e, i) => (
            <div className=' gap-[5px] hover:bg-secondery group duration-100 min-h-[40px] cursor-pointer flex items-center px-[10px] ' key={i} onClick={_ => handleValue(e)}>
              <span className='text-sm font-normal text-[#6b6b6b] duration-100 group-hover:text-white '>  {e.value}  </span>
            </div>
          ))}
        </div>


      {error && <div className='error absolute ' > {t(error?.message)} </div>}
    </div>
  );
};

export default Select;
