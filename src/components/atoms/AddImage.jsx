// import React from 'react'

// export default function AddImage({cn , title , desc}) {
//   return (
// 	<div className={` cursor-pointer hover:opacity-60 hover:scale-[.99] duration-300 ease-in-out transition-all flex flex-col gap-[10px] justify-center items-center w-full h-[230px] bg-[#f1f8fe] dark:bg-bg3 rounded-lg border-dashed border-2 border-[#084384] ${cn} `} >
// 		<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M17.2498 32.583V21.083L13.4165 24.9163" stroke="#084384" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.25 21.083L21.0833 24.9163" stroke="#084384" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.1668 19.1663V28.7497C42.1668 38.333 38.3335 42.1663 28.7502 42.1663H17.2502C7.66683 42.1663 3.8335 38.333 3.8335 28.7497V17.2497C3.8335 7.66634 7.66683 3.83301 17.2502 3.83301H26.8335" stroke="#084384" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.1668 19.1663H34.5002C28.7502 19.1663 26.8335 17.2497 26.8335 11.4997V3.83301L42.1668 19.1663Z" stroke="#084384" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
// 		<span className='text-[#162522] text-lg font-medium' >  {title}  </span>
// 		{desc && <span className='text-[#637381] dark:text-[#fff] text-sm font-medium' >  {desc}  </span>}
// 	</div>
//   )
// }
'use client';
import React, { useState } from 'react';

export default function AddImage({ cn, title, desc, multiple = false }) {
    const [images, setImages] = useState([]);

    // عند اختيار الصور
    const handleImageUpload = event => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => URL.createObjectURL(file));

        setImages(multiple ? [...images, ...newImages] : newImages.slice(0, 1));
    };

    return (
        <div className={`flex flex-col gap-4 w-full ${cn} `}>

            {!multiple && images.length > 0 ? (
                <div className='relative w-full h-[230px]'>
                    <img src={images[0]} alt='Uploaded' className='w-full h-full p-[5px] rounded-[8px] object-contain  border-2 border-[#eee]' />
                    <button onClick={() => setImages([])} className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'> ✖ </button>
                </div>
            ) : (
                // زر الرفع عند عدم وجود صورة (أو عند اختيار صور متعددة)
                <label className={`cursor-pointer hover:opacity-60 hover:scale-[.99] transition-all flex flex-col gap-2 justify-center items-center w-full h-[230px] bg-[#f1f8fe] dark:bg-bg3 rounded-lg border-dashed border-2 border-[#084384] dark:border-border1 ${cn}`}>
                    <input type='file' accept='image/*' multiple={multiple} onChange={handleImageUpload} className='hidden' />
                    <svg width='46' height='46' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>    
                        <path className=' dark:stroke-white ' d='M17.2498 32.583V21.083L13.4165 24.9163' stroke='#084384' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />    
                        <path className=' dark:stroke-white ' d='M17.25 21.083L21.0833 24.9163' stroke='#084384' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />    
                        <path className=' dark:stroke-white ' d='M42.1668 19.1663V28.7497C42.1668 38.333 38.3335 42.1663 28.7502 42.1663H17.2502C7.66683 42.1663 3.8335 38.333 3.8335 28.7497V17.2497C3.8335 7.66634 7.66683 3.83301 17.2502 3.83301H26.8335' stroke='#084384' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />    
                        <path className=' dark:stroke-white ' d='M42.1668 19.1663H34.5002C28.7502 19.1663 26.8335 17.2497 26.8335 11.4997V3.83301L42.1668 19.1663Z' stroke='#084384' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span className='text-[#162522] text-center dark:text-white text-lg font-medium'>{title}</span>
                    {desc && <span className='text-[#637381] dark:text-[#fff] text-sm font-medium'>{desc}</span>}
                </label>
            )}

            {/* عرض الصور أسفل زر الرفع في حالة رفع صور متعددة */}
            {multiple && images.length > 0 && (
                <div className='grid grid-cols-4 gap-[10px] '>
                    {images.map((img, index) => (
                        <div key={index} className=' group rounded-md  hover:bg-red-200 duration-300 relative w-full min-h-[60px] p-[3px] overflow-hidden bg-[#eee] dark:bg-bg4 bg-opacity-40'>
                            <img src={img} alt='Uploaded' className=' group-hover:opacity-0 duration-300 w-full h-full rounded-lg object-contain' />
                            <button onClick={() => setImages(images.filter((_, i) => i !== index))} className='absolute top-[-300px] duration-500 group-hover:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-red-500 text-white rounded-full w-[50px] h-[50px] flex items-center justify-center text-xs'> ✖  </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
