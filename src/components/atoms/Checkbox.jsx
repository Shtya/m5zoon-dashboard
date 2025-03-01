'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Checkbox = ({ watch, dataAos, cn, KEY, label, setValue, err, cnLabel }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setValue?.(KEY, !isChecked);
    };

    const watchKey = watch?.(KEY);
    useEffect(() => {
        if (watchKey) {
            setIsChecked(watchKey);
        }
    }, []);

    return (
        <div data-aos={dataAos} className={`form-group  mt-5 flex items-center  gap-3 ${cn}`}>
            <input type='checkbox' id={KEY} className={`hidden`} checked={isChecked} onChange={handleCheckboxChange} />

            <div onClick={handleCheckboxChange} className={`w-[20px] h-[20px] flex-none border-[1px] ${isChecked ? 'border-white bg-trnasparent' : 'border-black bg-white'} rounded-[6px] cursor-pointer flex items-center justify-center`}>
                <svg className={`${isChecked ? "scale-100" : "scale-0 "} duration-300 `} width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#084384"/></svg>
            </div>

            <label htmlFor={KEY} className={`cursor-pointer select-none ${cnLabel} `}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;

export const CheckBoxTable = ({ KEY, cn, onclick }) => {
    return (
        <div className={`flex items-center justify-center relative`}>
            <input id={KEY} onClick={() => onclick(KEY)} className={`${cn} peer checked:bg-primary duration-300 checked:!border-primary checked:shadow-md appearance-none  w-[20px] h-[20px] border-black border-[1px] rounded-[6px] cursor-pointer  `} type='checkbox' />
            <svg className='peer-checked:fill-white peer-checked:scale-[1] duration-300 transition-all pointer-events-none scale-0 fill-green absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer ' width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M12.1963 0.382233C12.4322 0.62705 12.5647 0.959049 12.5647 1.30522C12.5647 1.65139 12.4322 1.98339 12.1963 2.22821L5.90613 8.75571C5.67021 9.00045 5.35029 9.13794 5.0167 9.13794C4.68311 9.13794 4.36318 9.00045 4.12726 8.75571L0.353146 4.83921C0.123984 4.59299 -0.00281878 4.26322 4.75572e-05 3.92092C0.0029139 3.57862 0.135221 3.25118 0.368471 3.00913C0.601722 2.76708 0.917254 2.62979 1.24711 2.62681C1.57696 2.62384 1.89474 2.75542 2.13201 2.99323L5.0167 5.98674L10.4175 0.382233C10.6534 0.137489 10.9733 0 11.3069 0C11.6405 0 11.9604 0.137489 12.1963 0.382233Z' />
            </svg>
        </div>
    );
};
