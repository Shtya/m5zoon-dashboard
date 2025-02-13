'use client'
import React , {useState} from 'react'

export default function SelectButton({data}) {

	const [activeFilter, setActiveFilter] = useState(data?.[0]?.key);

  return (
	<div className="flex flex-wrap justify-center bg-[#f6f7fb] rounded-[8px] overflow-hidden ">
      {data.map((filter) => (
        <button
          key={filter.key}
          className={`px-4 py-2 text-sm font-medium  transition-colors ${
            activeFilter === filter.key
              ? 'bg-secondery text-white text-base font-normal'
              : ' text-[#637381] text-base font-normal hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter(filter.key)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  )
}

