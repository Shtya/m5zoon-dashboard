'use client';
import Button from '@/components/atoms/Button';
import Checkbox, { CheckBoxTable } from '@/components/atoms/Checkbox';
import { hookSignUp } from '@/hooks/hookSignUp';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function page() {
    const t = useTranslations('notifications');
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();
    const [notifications_list , setnotifications_list] = useState([
        {
            id : 1 ,
            "message": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
            "date": "منذ 15 يوم"
        },
        {
            id : 2 ,
            "message": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
            "date": "منذ 15 يوم"
        },
        {
            id : 3 ,
            "message": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
            "date": "منذ 15 يوم"
        },
        {
            id : 4 ,
            "message": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
            "date": "منذ 15 يوم"
        },
        {
            id : 5 ,
            "message": "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
            "date": "منذ 15 يوم"
        }
    ])


  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]:not(#All)'); // Select all checkboxes except #All
    const selectAllCheckbox = document.querySelector('#All'); // The "Select All" checkbox
  
    if (selectAll) {
      setSelectedIds([]); // Unselect all
      allCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    } else {
      const newSelectedIds = notifications_list.map((e) => e.id);
      setSelectedIds(newSelectedIds); // Select all
      allCheckboxes.forEach((checkbox) => (checkbox.checked = true));
    }
  
    setSelectAll(!selectAll);
    selectAllCheckbox.checked = !selectAll; // Update "Select All" checkbox state
  };
  

  const handleCheckboxChange = (id) => {
    const updatedSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id) // Remove from selected
      : [...selectedIds, id]; // Add to selected
  
    setSelectedIds(updatedSelectedIds);
    
    // Update "Select All" checkbox
    const selectAllCheckbox = document.querySelector('#All');
    selectAllCheckbox.checked = updatedSelectedIds.length === notifications_list.length;
  
    setSelectAll(updatedSelectedIds.length === notifications_list.length);
  };
  

  useEffect(() => {
    if (selectedIds.length === notifications_list.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds]);

    const [removeAll , setRemoveAll] = useState(false)
    return (
        <div className='mt-[20px] mb-[80px] flex flex-col gap-[20px]'>
            {/*  Name of the page  */}
            <div className=' cShadow  bg-white p-[20px] rounded-[10px]  '>
                
                <div className='flex items-center justify-between gap-[10px] @max-xl:justify-center  flex-wrap ' >
                    <div className='flex items-center gap-[10px]'>
                        <h1 className=' @max-lg:text-center text-[#0f1728] dark:text-[#fff] duration-300  text-[27px] font-normal'> {t('title')} </h1>
                        <div className='min-w-[45px] h-[27px] px-2 py-0.5  rounded-2xl justify-center items-center flex text-center text-[#084384] dark:text-white bg-[#f5f8ff] dark:bg-bg4 text-xs font-normal'> 1500 </div>
                    </div>

                    <div className='flex items-center gap-[10px] flex-wrap '>
                        <Button onclick={()=> setRemoveAll(!removeAll)} name={ removeAll ? t("return") : t("clear_all")} cn={"bg-transparent border-[1px] !border-primary !text-primary "} order={"order-[-1]"} icon={ <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5574 4.35866C16.2157 4.22533 14.8741 4.12533 13.5241 4.05033V4.04199L13.3407 2.95866C13.2157 2.19199 13.0324 1.04199 11.0824 1.04199H8.89907C6.95741 1.04199 6.77407 2.14199 6.64074 2.95033L6.46574 4.01699C5.69074 4.06699 4.91574 4.11699 4.14074 4.19199L2.44074 4.35866C2.09074 4.39199 1.84074 4.70033 1.87407 5.04199C1.90741 5.38366 2.20741 5.63366 2.55741 5.60033L4.25741 5.43366C8.62407 5.00033 13.0241 5.16699 17.4407 5.60866C17.4657 5.60866 17.4824 5.60866 17.5074 5.60866C17.8241 5.60866 18.0991 5.36699 18.1324 5.04199C18.1574 4.70033 17.9074 4.39199 17.5574 4.35866Z" fill="#FBB03B"/><path d="M16.0245 6.78301C15.8245 6.57467 15.5495 6.45801 15.2661 6.45801H4.7328C4.44947 6.45801 4.16613 6.57467 3.97447 6.78301C3.7828 6.99134 3.67447 7.27467 3.69113 7.56634L4.2078 16.1163C4.29947 17.383 4.41613 18.9663 7.32447 18.9663H12.6745C15.5828 18.9663 15.6995 17.3913 15.7911 16.1163L16.3078 7.57467C16.3245 7.27467 16.2161 6.99134 16.0245 6.78301ZM11.3828 14.7913H8.6078C8.26613 14.7913 7.9828 14.508 7.9828 14.1663C7.9828 13.8247 8.26613 13.5413 8.6078 13.5413H11.3828C11.7245 13.5413 12.0078 13.8247 12.0078 14.1663C12.0078 14.508 11.7245 14.7913 11.3828 14.7913ZM12.0828 11.458H7.91613C7.57447 11.458 7.29113 11.1747 7.29113 10.833C7.29113 10.4913 7.57447 10.208 7.91613 10.208H12.0828C12.4245 10.208 12.7078 10.4913 12.7078 10.833C12.7078 11.1747 12.4245 11.458 12.0828 11.458Z" fill="#FBB03B"/></svg> } />
                    </div>
                </div>


                <hr className={`${!removeAll ? "max-h-[400px] opacity-100 border-t-[1px] border-[#EBEBEB] dark:border-border1 my-[30px] " :  "max-h-0 opacity-0" } overflow-auto ease-in-out duration-500 transition-all`} />

                <div className={` ${!removeAll ? "max-h-[400px] opacity-100 " :  "max-h-0 opacity-0" } overflow-auto ease-in-out duration-500 transition-all flex items-center justify-between`} >
                    <div className='  flex items-center gap-[20px] px-[10px]' >
                        <CheckBoxTable onclick={handleSelectAll} cn={"dark:border-white"} KEY={"All"} />
                        <label className='cursor-pointer text-[#084384] dark:text-white text-lg font-semibold' htmlFor="All"> {t("select_all")} </label>
                    </div>
                    <div dir='rtl' className=' cursor-pointer hover:opacity-90 duration-300 flex items-center gap-[5px] ' >
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_7774)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4165 0.833083C14.0915 0.508083 13.5665 0.508083 13.2415 0.833083L8.54154 5.53308L9.71654 6.70808L14.4165 1.99975C14.7332 1.68308 14.7332 1.14975 14.4165 0.833083ZM17.9499 0.824749L9.71654 9.05808L6.81654 6.16641C6.49154 5.84141 5.96654 5.84141 5.64154 6.16641C5.31654 6.49141 5.31654 7.01641 5.64154 7.34141L9.12487 10.8247C9.44987 11.1497 9.97487 11.1497 10.2999 10.8247L19.1249 2.00808C19.4499 1.68308 19.4499 1.15808 19.1249 0.833083H19.1165C18.7999 0.49975 18.2749 0.499749 17.9499 0.824749ZM0.933203 7.34975L4.41654 10.8331C4.74154 11.1581 5.26654 11.1581 5.59154 10.8331L6.17487 10.2497L2.1082 6.16641C1.7832 5.84141 1.2582 5.84141 0.933203 6.16641C0.608203 6.49141 0.608203 7.02475 0.933203 7.34975Z" fill="#637381"/></g><defs><clipPath id="clip0_1_7774"><rect width="20" height="10.8333" fill="white" transform="translate(0 0.583008)"/></clipPath></defs></svg>
                        <span className='text-[#ee9e1a] text-base font-semibold'>{t("mark_all_as_read")}</span>
                    </div>
                </div>

                <div className={`${removeAll ? "" : " mt-[30px] "} duration-300 notifications  `}>
                    {
                        notifications_list.map((e,i)=> (
                            <div key={i} className={` ${!removeAll ? "px-[10px] py-[20px] max-h-[400px] opacity-100 " :  "max-h-0 opacity-0" } duration-500 transition-all ease-in-out  overflow-hidden relative border-t border-t-[#ebebeb] dark:border-t-border1 flex items-center gap-[20px]`} > 
                                <div className={`bg-neutral-50 dark:bg-bg4 ${ selectedIds?.includes(e.id)  ? 'bottom-0' : 'bottom-[-100%]'} h-full w-[calc(100%+20px)] rtl:left-0 ltr:right-0  shadow-md absolute duration-500 transition-all overflow-auto ease-in-out `} ></div>
                                <CheckBoxTable cn={" dark:border-white "} onclick={()=> handleCheckboxChange(e.id) } KEY={`notification-${e.id}`}  />
                                <div className=' z-[100] relative    flex items-center gap-[10px] ' >
                                    <Image src={"/icons/test/13.png"} alt='' width={50} height={50} />
                                    <div >
                                        <h4 className='opacity-80 text-[#162522] dark:text-white text-lg font-normal' > {e.message} </h4>
                                        <span className='opacity-70  text-[#162522] dark:text-white text-sm font-medium' > {e.date} </span>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>




            {/* notification */}

        </div>
    );
}

