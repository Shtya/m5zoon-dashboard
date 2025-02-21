import { ChevronDown, MoveUp } from 'lucide-react'; // أيقونة السهم للأسفل
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function AdSlider({ data }) {
  const t = useTranslations("")
  const [width , setWidth ] = useState(false)
  useEffect(()=> {
    setTimeout(() => {
        setWidth(true)
    }, 0);
  } ,[])

    return (
        <div>
            {data?.map((e, i) => (
                <div key={i} className='flex items-center  w-full gap-2 p-2'>
                    <div className=' flex-none bg-[#f5f8fb] dark:bg-bg3 h-[50px] w-[50px] flex text-center justify-center '>
                        <Image className=' object-contain '  src={e.icon} alt={e.name} width={30} height={30} />
                    </div>
                    <div className='  flex flex-col gap-[10px] w-full '>
                        <div className='flex items-center justify-between gap-[10px] '>
                            <span className='text-sm text-gray-600 dark:text-white '> {e.name} </span>
                            <div className='flex items-center gap-[5px] '>
                                <span className='text-[#121212] dark:text-white ' > {e.count_order} {t("dashboard.platform_orders.order") } </span>
                                <Image src={e.status == "up" ? "/icons/up-green.png" : "/icons/down-red.png" } alt={e.name} width={17} height={17} />
                            </div>
                        </div>

                        <div className=' relative duration-500 transition-all w-full h-[5px] bg-[#e3e7fc] '>
                            <span className={` absolute rtl:left-0 ltr:right-0 z-[10] top-0 h-full bg-[#e3e7fc] transition-all duration-1000 ${width ? "w-0" : "w-[100%]"} `} > </span>
                            <span style={{  width: e.percent , backgroundColor: e.color }} className={` slide-width absolute ltr:left-0 rtl:right-0 top-0 h-full`}></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
