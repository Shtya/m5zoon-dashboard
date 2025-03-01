"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';



const Radio = ({ setError , watch  , setValue, KEY, cn ,  data }) => {
  const [checked, setChecked] = useState();

  const handleChange = (e) => {
    setValue?.(KEY, e);
    setChecked(e);
  };



  const watchKey = watch?.(KEY)
  useEffect(()=> {
		if(watchKey) {
      handleChange(watchKey)
    }

    data && handleChange(data[0]?.value)
	} ,[])

  
  
  return (
    <div  className={`${cn} mt-[20px] flex-wrap flex items-center gap-[10px] `}>
      {
        data?.map((e,i)=>(
          <div key={i} onClick={()=> handleChange(e.value) } className={` ${checked == e.value ? "!bg-secondery text-white scale-y-[1.05] " : ""} text-secondery hover:text-white cursor-pointer hover:bg-secondery duration-300 relative max-w-full  w-full h-[60px] px-2 py-4 bg-[#f9fafb] rounded-[6px] border border-[#eeeeee] flex gap-[5px] max-sm:flex-col max-sm:h-fit justify-start items-center `} >
            <span className={`w-[12px] h-[12px] border-[1px] border-[#a4a4a4] ${checked == e.value ? "!bg-primary !border-primary " : "!bg-white"}  rounded-[50px] absolute top-[8px] rtl:left-[8px] ltr:right-[8px]`} />
            <div className={`flex-none w-[50px] h-[50px] flex items-center justify-center  ${e.key == "key1" && "scale-[1.6]" } ${e.key == "key3" && "scale-[1.1] sm:mb-[12px] " } `}> <Image className=''  src={e.img} alt='' width={40} height={40} /> </div>
            <span className='text-lg max-md:text-sm font-normal text-center ' > {e.name} </span>
          </div>
        ))
      }
    </div>
  );
};

export default Radio;
