'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CheckBoxTable } from '../atoms/Checkbox';
import ButtonIcon from '../atoms/ButtonIcon';
import Button from '../atoms/Button';

const Table = ({setisOpenPopup , cn , head, data, onOpen, nameEditBtn , showHref , editHref }) => {
    const statusColors = {
        // blue
        invoice_value_usd : " dark:!text-primary !text-[#084384] ",
        shipping_cost : " dark:!text-primary !text-[#084384] ",
        id : "  dark:!text-primary !text-[#084384] ",
        upsell_fee :  " dark:!text-primary !text-[#084384] ",
        all_orders : " dark:!text-primary !text-[#084384] " ,
        
        
        
        
        // green
        shipping_cost_return : " !text-[#169C3B] ",
        received_orders_fee :  " !text-[#169C3B] ",
        stock_in_shipping_companies : " !text-[#169C3B] " ,
        
        // orange
        orders_in_progress : " !text-[#F9A51A] " ,
        monthly_fee :  " !text-[#F9A51A] ",
        invoice_value_sar : " !text-[#F9A51A] ",
        shipping_fee_receive : " !text-[#F9A51A] ",
        
        
        Acceptable : " dark:!bg-bg4  !text-[#138031] !bg-[#f1fff2] ",
        Unacceptable : " dark:!bg-bg4  !text-[#df2727] !bg-[#fff3f1] ",
        Available: " dark:bg-bg4 bg-green-100 text-green-700",
        Paid : " dark:bg-bg4  text-[#169C3B] bg-[#F0FFEF] ",
        collector : " dark:bg-bg4 text-[#F7A00F] bg-[#FEF3E5] ",
        "Out of Stock": " dark:bg-bg4 bg-red-100 text-red-700",
        Pending: " dark:bg-bg4 bg-yellow-100 text-yellow-800",
        Processing: " dark:bg-bg4 bg-blue-100 text-blue-700",
        Active: " dark:bg-bg4 bg-teal-100 text-teal-700",
        Discontinued: " dark:bg-bg4 bg-gray-200 text-gray-700",
        Returned: " dark:bg-bg4 bg-red-200 text-red-800",
        Delayed: " dark:bg-bg4 bg-orange-100 text-orange-700",
        "Limited Stock": " dark:bg-bg4 bg-yellow-200 text-yellow-800",
        Shipped: " dark:bg-bg4 bg-purple-100 text-purple-700", // New status for shipped orders
        Delivered: " dark:bg-bg4 bg-green-200 text-green-800", // New status for delivered orders
        Canceled: " dark:bg-bg4 bg-gray-300 text-gray-800", // New status for canceled orders
        Refunded: " dark:bg-bg4 bg-indigo-100 text-indigo-700", // New status for refunded orders
        Failed: " dark:bg-bg4 bg-red-300 text-red-900", // New status for failed transactions
        OnHold: " dark:bg-bg4 bg-orange-200 text-orange-800", // New status for on-hold orders
    };

    const [sortAttrs, setSortAttrs] = useState([]);

    const handleSorting = field => {
        setSortAttrs(prev => {
            let updatedSorts = [...prev];
            const existingSortIndex = updatedSorts.findIndex(s => s.field === field);

            if (existingSortIndex !== -1) {
                // Toggle sorting order: ASC ↔ DESC
                updatedSorts[existingSortIndex].order = updatedSorts[existingSortIndex].order === 'asc' ? 'desc' : 'asc';
            } else {
                // Add new field sorting with default "asc" order
                updatedSorts.push({ field, order: 'asc' });
            }

            return updatedSorts;
        });
    };

    //! Select
    const [selectedRows, setSelectedRows] = useState([]);

    // Select/Deselect All Rows
    const handleCheckAll = () => {
        const allCheckboxes = document.querySelectorAll(".body input[type='checkbox']");
        const allChecked = selectedRows.length !== allCheckboxes.length; // Toggle all

        console.log("first")
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = allChecked;
        });
        console.log(selectedRows)
        setSelectedRows(allChecked ? Array.from(allCheckboxes).map(checkbox => + checkbox.id) : []);
    };

    // Handle Single Checkbox Click
    const handleCheckboxChange = id => {
        setSelectedRows(prevSelected => {
            const updatedSelection = prevSelected.includes(+id)
                ? prevSelected.filter(rowId => rowId !== +id) // Remove from array
                : [...prevSelected, +id]; // Add to array

            return updatedSelection;
        });
        console.log(selectedRows)
    };

    // Listen for `selectedRows` changes & update #all checkbox
    useEffect(() => {
        const allCheckboxes = document.querySelectorAll(".body input[type='checkbox']");
        const selectAllCheckbox = document.querySelector('#all');
        if (selectAllCheckbox) {
            selectAllCheckbox.checked = selectedRows.length === allCheckboxes.length && allCheckboxes.length > 0;
        }
    }, [selectedRows]);

    //! Expand
    const [expandedRow, setExpandedRow] = useState(null);
    const handleToggleExpand = id => {
        setExpandedRow(prev => (prev === id ? null : id)); // Toggle the expanded row
    };

    const [showImg, setshowImg] = useState(null);

    //! pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 15;
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);


    return (
        <>
            <div  className='overflow-x-auto bg-white dark:bg-bg2 rounded-[6px]  border-[1px] border-[#EEF0F4] dark:border-border1  '>
                <table className='w-full   border-collapse'>
                    <thead>
                        <tr className='text-white text-sm w-full border-b-[1px] dark:border-border1 border-[#EEF0F4] '>
                            <th className='bg-secondery dark:bg-transparent !px-[10px] w-[40px] '>
                                {/* <CheckBoxTable onclick={handleCheckAll} KEY={'all'} cn={'border-white z-[100] '} /> */}
                            </th>

                            {head.map(h => {
                                const sortInfo = sortAttrs.find(s => s.field === h.name);
                                return (
                                    <th key={h.name} onClick={() => h.sort && handleSorting(h.name)} className={`p-3 px-[15px] bg-secondery dark:bg-transparent ${h.sort ? 'cursor-pointer hover:bg-opacity-80 dark:hover:bg-bg3 duration-300' : 'select-none'}`}>
                                        <span className='text-nowrap justify-center inline-flex items-center gap-[5px]'>
                                            {h.sort && <Image className={`transition-transform duration-300 ${sortInfo ? (sortInfo.order === 'asc' ? 'rotate-0' : 'rotate-180') : ''}`} src={'/icons/swap.png'} alt='' width={12} height={12} />}
                                            {h.name}
                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody >
                        {paginatedData?.map((product , i) => (
                            <>
                                <tr   className={` ${i % 2 == 0 ? " bg-[#f7f8fa] dark:bg-bg3 " : ""}  `} key={product.id} >
                                    <td className=' ltr:pl-[20px] rtl:pr-[20px] '>
                                        <CheckBoxTable onclick={handleCheckboxChange} KEY={product.id} cn={'dark:checked:!bg-primary  checked:!border-secondery dark:border-border1 '} />
                                    </td>

                                    {Object.keys(product).map(key =>
                                        !["action" , 'download' , "watch" ].includes(key)? (
                                            <td key={key} className={`p-3 text-center text-[#637381] dark:text-[#fff] text-base font-normal ${statusColors[key]}`}>
                                                {key === 'status' ? <span className={` px-[5px] py-[7px] block !min-w-[90px] !max-w-fit mx-auto w-full  rounded-2xl text-[14px] font-medium  ${statusColors[product.status] || 'bg-gray-200 dark:bg-bg4 dark:text-white text-gray-700'}`}>{product[key]}</span> : key === 'img' ? <img onClick={() => setshowImg(product[key])} src={product[key]} alt={key} className='w-10 cursor-pointer hover:opacity-85 hover:scale-[.93] duration-300 h-10 rounded-full mx-auto' /> : product[key]}
                                            </td>
                                        ) : null,
                                    )}
                                    {Object.keys(product).includes('action') && (
                                        <td className='relative   h-full  '>
                                            <div onClick={() => handleToggleExpand(product.id)} className='w-[40px] h-[40px] mx-auto  shadow-sm cursor-pointer hover:shadow-lg duration-300 bg-[#f3f6f9] dark:bg-bg4 flex items-center justify-center rounded-full '> <Image className='mx-auto ' src={'/icons/dots.png'} alt='' width={14} height={14} /> </div>
                                        </td>
                                    )}
                                    {Object.keys(product).includes('download') && (
                                        <td className='relative cursor-pointer hover:opacity-80 duration-300 h-full  '>
                                            <svg className='mx-auto' width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_465_6571" style={{maskType : "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="21"><path d="M9.5 1.5L15 7V18.5C15 19.05 14.55 19.5 14 19.5H2C1.45 19.5 1 19.05 1 18.5V2.5C1 1.95 1.45 1.5 2 1.5H9.5Z" fill="white" stroke="white" strokeWidth="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 2V6.5H15L10.5 2Z" fill="black" stroke="black" strokeWidth="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 1.5L15 7" stroke="white" strokeWidth="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 17.5L12 13.5H9.5V10.5H6.5V13.5H4L8 17.5Z" fill="black"/></mask><g mask="url(#mask0_465_6571)"><path d="M20 -1.5H-4V22.5H20V-1.5Z" fill="#084384"/></g></svg>
                                        </td>
                                    )}
                                    {Object.keys(product).includes('watch') && (
                                        <td onClick={()=> setisOpenPopup({show : true , id : product.id }) } className='relative cursor-pointer hover:opacity-80 duration-300 h-full  '>
                                            <svg className='mx-auto'  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 5.5C5.69398 5.5 2.63398 11.183 2.09098 12.308C2.06195 12.3678 2.04688 12.4335 2.04688 12.5C2.04688 12.5665 2.06195 12.6322 2.09098 12.692C2.63298 13.817 5.69298 19.5 12.001 19.5C18.309 19.5 21.368 13.817 21.911 12.692C21.94 12.6322 21.9551 12.5665 21.9551 12.5C21.9551 12.4335 21.94 12.3678 21.911 12.308C21.369 11.183 18.309 5.5 12.001 5.5Z" stroke="#F9A51A" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#F9A51A" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </td>
                                    )}
                                </tr>

                                <tr className={`${i % 2 == 0 ? " bg-[#f7f8fa] dark:bg-bg3 " : ""} border-b-[1px] dark:border-border1 border-[#EEF0F4]`} >
                                    <td colSpan={Object.keys(product).length + 2}>
                                        <div className={` ${expandedRow === product.id ? 'max-h-[200px] opacity-100 p-[20px] ' : 'max-h-0 opacity-50'} flex items-center gap-[10px] overflow-auto duration-500 translate-x-0 ease-in-out `}>
                                            <ButtonIcon cn="!w-[40px] !h-[40px] " href={showHref ?`${showHref}/${product["id"]}` : "" } icon={'/icons/eye.png'} />
                                            <ButtonIcon cn="!w-[40px] !h-[40px] " href={editHref ?`${editHref}/${product["id"]}` : "" } icon={'/icons/edit.png'} />
                                            {nameEditBtn && <Button onclick={onOpen} order={'order-[-1]'} cn={'bg-secondery dark:bg-primary !min-h-[40px] '} name={nameEditBtn} icon={<Image className='flex-none' src={'/icons/plus.png'} alt='' width={25} height={25} />} />}
                                        </div>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Show Image */}
            <div className={` ${!showImg ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-screen opacity-100 backdrop-blur-[2px]'} fixed inset-0 px-[30px] flex items-center justify-center  z-[500000000]   `}>
                <div onClick={() => setshowImg(null)} className={` ${!showImg && 'top-[-100vh] opacity-0 '}  transition-all duration-500 w-full h-full absolute left-0 top-0  opacity-70  `} style={{ background: 'rgba(0, 0, 0, 0.78)' }}></div>
                <div onClick={() => setshowImg(null)} className={` ${!showImg && 'bottom-[-100vh] opacity-0 '}  transition-all duration-500 w-full h-full absolute left-0 bottom-0 opacity-70  `} style={{ background: 'rgba(0, 0, 0, 0.78)' }}></div>

                <div className={` relative ${!showImg ? 'max-h-0 opacity-0 ' : ' opacity-100 max-h-[1000px] p-[30px] '} overflow-auto duration-500 transition-all bg-white dark:bg-bg1 rounded-[6px] shadow-lg mx-auto max-w-[800px] min-h-[600px] w-full relative`}>
                <svg onClick={() => setshowImg(null)} className=' absolute top-[15px] ltr:left-[15px] rtl:right-[15px] cursor-pointer hover:shadow-lg hover:scale-95 duration-300 rounded-full ' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className=' dark:fill-bg4 ' cx="15" cy="15.5" r="14.5" fill="white" stroke="#818B9A"/>
                        <path className=' dark:stroke-white ' d="M11.25 19.25L18.75 11.75M11.25 11.75L15 15.5L18.75 19.25" stroke="#818B9A" strokeWidth="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <img className='w-full max-h-[600px] object-contain' src={showImg} alt='' />
                </div>
            </div>


            {/*  Pagination */}
            <div className='flex justify-center items-center gap-2 mt-4'>
                <button className='cursor-pointer group' onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                    <svg className=' ltr:rotate-[-180deg]' width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className='dark:fill-bg4 group-hover:fill-bg2'  x="1" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
                    <rect className='stroke-white '  x="1" y="0.5" width="31" height="31" rx="15.5" stroke="#F1F1F1"/>
                    <path className='dark:stroke-white dark:fill-white fill-black stroke-black '  d="M12.773 12L11.833 12.94L14.8863 16L11.833 19.06L12.773 20L16.773 16L12.773 12Z" fill="black"/>
                    <path className='dark:stroke-white dark:fill-white fill-black stroke-black '  d="M17.1666 12L16.2266 12.94L19.2799 16L16.2266 19.06L17.1666 20L21.1666 16L17.1666 12Z" fill="black"/>
                    </svg>
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    (index === 0 || index === totalPages - 1 || (index >= currentPage - 2 && index <= currentPage + 1)) ? (
                        <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`w-[35px] h-[35px] rounded-full ${currentPage === index + 1 ? 'bg-secondery dark:bg-primary text-white' : 'text-[#333333] dark:text-white dark:border-white border border-[#f1f1f1]'} text-[13px] font-bold`}>
                            {index + 1}
                        </button>
                    ) : index === 1 || index === totalPages - 2 ? (
                        <span key={index} className='text-[#333] dark:text-white '>...</span>
                    ) : null
                ))}
                <button  className='cursor-pointer group' onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                    <svg className=' ltr:rotate-[-180deg]'  width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className='dark:fill-bg4 group-hover:fill-bg2 duration-300 '  x="1" y="0.5" width="31" height="31" rx="15.5" fill="white"/>
                    <rect className='stroke-white '  x="1" y="0.5" width="31" height="31" rx="15.5" stroke="#F1F1F1"/>
                    <path className='dark:stroke-white dark:fill-white fill-black stroke-black ' d="M20.227 20L21.167 19.06L18.1137 16L21.167 12.94L20.227 12L16.227 16L20.227 20Z" fill="#333333"/>
                    <path className='dark:stroke-white dark:fill-white fill-black stroke-black ' d="M15.8334 20L16.7734 19.06L13.7201 16L16.7734 12.94L15.8334 12L11.8334 16L15.8334 20Z" fill="#333333"/>
                    </svg>

                </button>
            </div>
        </>
    );
};

export default Table;
