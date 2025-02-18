'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react'; // Icons

export default function MultiInput({ label, KEY, cnInput, place }) {
    const [values, setValues] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Handle adding new value
    const handleAddValue = () => {
        if (inputValue.trim() !== '' && !values.includes(inputValue)) {
            setValues([...values, inputValue]);
            setInputValue('');
        }
    };

    // Remove selected value
    const handleRemove = value => {
        setValues(values.filter(item => item !== value));
    };

    return (
        <div className='relative w-full flex flex-col gap-[15px] '>
            {label && (
                <label htmlFor={KEY} className='text-gray-700 text-lg font-normal'>
                    {label}
                </label>
            )}

            {/* Input Box */}
            <div className={`px-[10px] rounded-lg border-[2px] border-[#ececeb] duration-300 cursor-pointer w-full min-h-[55px] py-[5px] flex justify-between items-center  ${cnInput}`}>
                {/* Display selected values as tags */}
                <div className='flex flex-wrap gap-2 flex-1 '>
                    {values.map((value, index) => (
                        <span key={index} className='bg-secondery text-white px-2 py-1 rounded-md flex items-center gap-1'>
                            {value}
                            <button onClick={() => handleRemove(value)} className='text-white '> <X size={14} />  </button>
                        </span>
                    ))}

                    <input onKeyDown={(e) => e.key === "Enter" && handleAddValue()} type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} className='border-none outline-none flex-1 bg-transparent  min-w-[50px]' placeholder={values?.length < 1 ? place :""} />
                </div>

                {/* Plus Button */}
                <button onClick={handleAddValue} className=' bg-secondery text-white w-[20px] h-[20px] flex items-center justify-center rounded-[4px] '> <Plus size={15} /> </button>
            </div>
        </div>
    );
}
