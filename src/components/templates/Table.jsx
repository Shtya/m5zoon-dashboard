'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CheckBoxTable } from '../atoms/Checkbox';
import ButtonIcon from '../atoms/ButtonIcon';
import Button from '../atoms/Button';

const Table = ({setisOpenPopup , head, data, onOpen, nameEditBtn }) => {
    const statusColors = {
        // blue
        invoice_value_usd : " !text-[#084384] ",
        shipping_cost : " !text-[#084384] ",
        id : " !text-[#084384] ",
        upsell_fee :  " !text-[#084384] ",
        all_orders : " !text-[#084384] " ,

        
        
        // green
        shipping_cost_return : " !text-[#169C3B] ",
        received_orders_fee :  " !text-[#169C3B] ",
        stock_in_shipping_companies : " !text-[#169C3B] " ,
        
        // orange
        orders_in_progress : " !text-[#F9A51A] " ,
        monthly_fee :  " !text-[#F9A51A] ",
        invoice_value_sar : " !text-[#F9A51A] ",
        shipping_fee_receive : " !text-[#F9A51A] ",



        Available: 'bg-green-100 text-green-700',
        Paid : " text-[#169C3B] bg-[#F0FFEF] ",
        collector : "text-[#F7A00F] bg-[#FEF3E5] ",
        'Out of Stock': 'bg-red-100 text-red-700',
        Pending: 'bg-yellow-100 text-yellow-800',
        Processing: 'bg-blue-100 text-blue-700',
        Active: 'bg-teal-100 text-teal-700',
        Discontinued: 'bg-gray-200 text-gray-700',
        Returned: 'bg-red-200 text-red-800',
        Delayed: 'bg-orange-100 text-orange-700',
        'Limited Stock': 'bg-yellow-200 text-yellow-800',
        Shipped: 'bg-purple-100 text-purple-700', // New status for shipped orders
        Delivered: 'bg-green-200 text-green-800', // New status for delivered orders
        Canceled: 'bg-gray-300 text-gray-800', // New status for canceled orders
        Refunded: 'bg-indigo-100 text-indigo-700', // New status for refunded orders
        Failed: 'bg-red-300 text-red-900', // New status for failed transactions
        OnHold: 'bg-orange-200 text-orange-800', // New status for on-hold orders
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
            <div className='overflow-x-auto bg-white rounded-lg shadow-md py-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='text-white text-sm w-full'>
                            <th className='bg-secondery !px-[10px] '>
                                <CheckBoxTable onclick={handleCheckAll} KEY={'all'} cn={'border-white z-[100] '} />
                            </th>

                            {head.map(h => {
                                const sortInfo = sortAttrs.find(s => s.field === h.name);
                                return (
                                    <th key={h.name} onClick={() => h.sort && handleSorting(h.name)} className={`p-3 px-[15px] bg-secondery ${h.sort ? 'cursor-pointer hover:bg-opacity-80 duration-300' : 'select-none'}`}>
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
                                <tr   className={` ${i % 2 == 0 ? " bg-[#f7f8fa]" : ""} `} key={product.id} >
                                    <td className=''>
                                        <CheckBoxTable onclick={handleCheckboxChange} KEY={product.id} cn={'checked:!bg-secondery checked:!border-secondery '} />
                                    </td>

                                    {Object.keys(product).map(key =>
                                        !["action" , 'download' , "watch" ].includes(key)? (
                                            <td key={key} className={`p-3 text-center text-[#637381] text-base font-normal ${statusColors[key]}`}>
                                                {key === 'status' ? <span className={` px-[15px] py-[7px] block !min-w-[60px] w-full  rounded-full text-sm font-medium  ${statusColors[product.status] || 'bg-gray-200 text-gray-700'}`}>{product[key]}</span> : key === 'img' ? <img onClick={() => setshowImg(product[key])} src={product[key]} alt={key} className='w-10 cursor-pointer hover:opacity-85 hover:scale-[.93] duration-300 h-10 rounded-full mx-auto' /> : product[key]}
                                            </td>
                                        ) : null,
                                    )}
                                    {Object.keys(product).includes('action') && (
                                        <td className='relative   h-full  '>
                                            <div onClick={() => handleToggleExpand(product.id)} className='w-[40px] h-[40px] mx-auto  shadow-sm cursor-pointer hover:shadow-lg duration-300 bg-[#f3f6f9] flex items-center justify-center rounded-full '> <Image className='mx-auto ' src={'/icons/dots.png'} alt='' width={14} height={14} /> </div>
                                        </td>
                                    )}
                                    {Object.keys(product).includes('download') && (
                                        <td className='relative cursor-pointer hover:opacity-80 duration-300 h-full  '>
                                            <svg className='mx-auto' width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_465_6571" style={{maskType : "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="21"><path d="M9.5 1.5L15 7V18.5C15 19.05 14.55 19.5 14 19.5H2C1.45 19.5 1 19.05 1 18.5V2.5C1 1.95 1.45 1.5 2 1.5H9.5Z" fill="white" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 2V6.5H15L10.5 2Z" fill="black" stroke="black" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 1.5L15 7" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 17.5L12 13.5H9.5V10.5H6.5V13.5H4L8 17.5Z" fill="black"/></mask><g mask="url(#mask0_465_6571)"><path d="M20 -1.5H-4V22.5H20V-1.5Z" fill="#084384"/></g></svg>
                                        </td>
                                    )}
                                    {Object.keys(product).includes('watch') && (
                                        <td onClick={()=> setisOpenPopup({show : true , id : product.id }) } className='relative cursor-pointer hover:opacity-80 duration-300 h-full  '>
                                            <svg className='mx-auto'  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 5.5C5.69398 5.5 2.63398 11.183 2.09098 12.308C2.06195 12.3678 2.04688 12.4335 2.04688 12.5C2.04688 12.5665 2.06195 12.6322 2.09098 12.692C2.63298 13.817 5.69298 19.5 12.001 19.5C18.309 19.5 21.368 13.817 21.911 12.692C21.94 12.6322 21.9551 12.5665 21.9551 12.5C21.9551 12.4335 21.94 12.3678 21.911 12.308C21.369 11.183 18.309 5.5 12.001 5.5Z" stroke="#F9A51A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#F9A51A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </td>
                                    )}
                                </tr>

                                <tr className={`${i % 2 == 0 ? " bg-[#f7f8fa]" : ""} `} >
                                    <td colSpan={Object.keys(product).length + 2}>
                                        <div className={` ${expandedRow === product.id ? 'max-h-[200px] opacity-100 p-[20px] ' : 'max-h-0 opacity-50'} flex items-center gap-[10px] overflow-auto duration-500 translate-x-0 ease-in-out `}>
                                            <ButtonIcon icon={'/icons/eye.png'} />
                                            <ButtonIcon icon={'/icons/edit.png'} />
                                            {nameEditBtn && <Button onclick={onOpen} order={'order-[-1]'} cn={'bg-secondery'} name={nameEditBtn} icon={<Image className='flex-none' src={'/icons/plus.png'} alt='' width={25} height={25} />} />}
                                        </div>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Show Image */}
            <div className={` ${!showImg ? ' pointer-events-none' : 'backdrop-blur-[2px]'} fixed inset-0 px-[30px] flex items-center justify-center  z-[500]   `}>
                <div onClick={() => setshowImg(null)} className={` ${!showImg && 'top-[-100vh] opacity-0 '}  transition-all duration-500 w-full h-full absolute left-0 top-0  opacity-70  `} style={{ background: 'rgba(0, 0, 0, 0.78)' }}></div>
                <div onClick={() => setshowImg(null)} className={` ${!showImg && 'bottom-[-100vh] opacity-0 '}  transition-all duration-500 w-full h-full absolute left-0 bottom-0 opacity-70  `} style={{ background: 'rgba(0, 0, 0, 0.78)' }}></div>

                <div className={` relative ${!showImg ? 'max-h-0 opacity-0 ' : ' opacity-100 max-h-[1000px] p-[30px] '} overflow-auto duration-500 transition-all bg-white  rounded-lg shadow-lg mx-auto max-w-[800px] min-h-[600px] w-full relative`}>
                    <svg onClick={() => setshowImg(null)} className=' absolute top-[15px] ltr:left-[15px] rtl:right-[15px] cursor-pointer hover:shadow-lg hover:scale-95 duration-300 rounded-full ' width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='15' cy='15.5' r='14.5' fill='white' stroke='#818B9A' />
                        <path d='M11.25 19.25L18.75 11.75M11.25 11.75L15 15.5L18.75 19.25' stroke='#818B9A' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>

                    <img className='w-full max-h-[600px] object-contain' src={showImg} alt='' />
                </div>
            </div>


            {/*  Pagination */}
            <div className='flex justify-center items-center gap-2 mt-4'>
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                    <Image src={'/icons/pagination-right.png'} alt='' width={35} height={35} />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    (index === 0 || index === totalPages - 1 || (index >= currentPage - 2 && index <= currentPage + 1)) ? (
                        <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`w-[35px] h-[35px] rounded-full ${currentPage === index + 1 ? 'bg-secondery text-white' : 'text-[#333333] border border-[#f1f1f1]'} text-[13px] font-bold`}>
                            {index + 1}
                        </button>
                    ) : index === 1 || index === totalPages - 2 ? (
                        <span key={index} className='text-[#333]'>...</span>
                    ) : null
                ))}
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                    <Image src={'/icons/pagination-left.png'} alt='' width={35} height={35} />
                </button>
            </div>
        </>
    );
};

export default Table;
