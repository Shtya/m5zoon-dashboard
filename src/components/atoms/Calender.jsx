"use client";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { CalendarDays, CalendarX } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useEffect , useState } from "react";


const Calendar = ({watch , dataAos , reverse , cnInput , label , cnLabel , trigger , error , setValue ,KEY = "calendar" , classname , place }) => {
  const t = useTranslations()
  const datePickerRef = useRef(null);
  const [currentDate , setcurrentDate ] = useState()

  const watchKey = watch?.(KEY)
  useEffect(()=>{
    if(watchKey) {
       trigger?.(KEY)
        setcurrentDate(watchKey)
      }
  },[watchKey])


  useEffect(() => {

    const ele = document.getElementById(KEY) 
    flatpickr( ele , {
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        const date = selectedDates[0];
        if (date) {
          const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
          setcurrentDate(formattedDate?.split("T")[0]);
          setValue && setValue( KEY , formattedDate?.split("T")[0]);
        }
      }
    });
  }, []);

  return (
    <label data-aos={dataAos} id={KEY} className={` flex flex-col gap-[15px] relative  cursor-pointer ${classname} `}>
      {label && <label htmlFor={KEY} className={`text-[#3e4c5b] dark:text-[#fff] text-lg font-normal ${cnLabel}`} > {label} </label> }

      <label  htmlFor={KEY} className={` ${cnInput} dark:bg-[#1F2A4A] rounded-lg border border-[#ececeb] dark:border-[#1F2A4A] h-[55px] flex items-center justify-between gap-[20px] w-full  cursor-pointer`}>
        <span className={` flex-1   ltr:ml-[10px] rtl:mr-[10px] text-[#6b6b6b] dark:text-[#fff] text-sm font-normal`}> { currentDate || place || t("choose_time") } </span>
        <input className=" hidden absolute cursor-pointer inset-0 opacity-0  z-[-1] " id={KEY} ref={datePickerRef} type="text" />
        <CalendarDays size={20} className={`text-[#6b6b6b] dark:text-white ltr:mr-[10px] rtl:ml-[10px] ${reverse && "order-[10] "}`} />
      </label>

      {error && <div className='error absolute ' > {t(error?.message)} </div>}
    </label>
  );
};

export default Calendar;
