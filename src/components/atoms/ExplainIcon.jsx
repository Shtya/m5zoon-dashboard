import React from 'react'

export default function ExplainIcon({name}) {
  return (
	<div className=' relative group  cursor-pointer ' >
		<svg  className=' group-hover:opacity-80  duration-500 ' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6.375C8.70163 6.375 8.41548 6.49353 8.2045 6.7045C7.99353 6.91548 7.875 7.20163 7.875 7.5V7.58025C7.875 7.67971 7.83549 7.77509 7.76517 7.84541C7.69484 7.91574 7.59946 7.95525 7.5 7.95525C7.40054 7.95525 7.30516 7.91574 7.23483 7.84541C7.16451 7.77509 7.125 7.67971 7.125 7.58025V7.5C7.125 7.00272 7.32254 6.52581 7.67417 6.17417C8.02581 5.82254 8.50272 5.625 9 5.625H9.087C9.45218 5.62511 9.80857 5.73704 10.1082 5.94573C10.4079 6.15442 10.6365 6.44987 10.7633 6.79234C10.89 7.13481 10.9089 7.50789 10.8173 7.8614C10.7257 8.21491 10.5281 8.5319 10.251 8.76975L9.67275 9.2655C9.5795 9.34563 9.50463 9.44494 9.45325 9.55663C9.40186 9.66833 9.37517 9.7898 9.375 9.91275V10.3125C9.375 10.412 9.33549 10.5073 9.26517 10.5777C9.19484 10.648 9.09946 10.6875 9 10.6875C8.90054 10.6875 8.80516 10.648 8.73483 10.5777C8.66451 10.5073 8.625 10.412 8.625 10.3125V9.91275C8.625 9.44475 8.82975 9.00075 9.1845 8.69625L9.762 8.20125C9.92305 8.06327 10.038 7.87926 10.0913 7.674C10.1446 7.46874 10.1338 7.25206 10.0603 7.05314C9.98674 6.85421 9.85405 6.68258 9.68005 6.56134C9.50604 6.4401 9.29908 6.37507 9.087 6.375H9ZM9 12.375C9.14918 12.375 9.29226 12.3157 9.39775 12.2102C9.50324 12.1048 9.5625 11.9617 9.5625 11.8125C9.5625 11.6633 9.50324 11.5202 9.39775 11.4148C9.29226 11.3093 9.14918 11.25 9 11.25C8.85082 11.25 8.70774 11.3093 8.60225 11.4148C8.49676 11.5202 8.4375 11.6633 8.4375 11.8125C8.4375 11.9617 8.49676 12.1048 8.60225 12.2102C8.70774 12.3157 8.85082 12.375 9 12.375Z" fill="#818B9A"/><path d="M2.625 9C2.625 7.30925 3.29665 5.68774 4.49219 4.49219C5.68774 3.29665 7.30925 2.625 9 2.625C10.6908 2.625 12.3123 3.29665 13.5078 4.49219C14.7034 5.68774 15.375 7.30925 15.375 9C15.375 10.6908 14.7034 12.3123 13.5078 13.5078C12.3123 14.7034 10.6908 15.375 9 15.375C7.30925 15.375 5.68774 14.7034 4.49219 13.5078C3.29665 12.3123 2.625 10.6908 2.625 9ZM9 3.375C7.50816 3.375 6.07742 3.96763 5.02252 5.02252C3.96763 6.07742 3.375 7.50816 3.375 9C3.375 10.4918 3.96763 11.9226 5.02252 12.9775C6.07742 14.0324 7.50816 14.625 9 14.625C10.4918 14.625 11.9226 14.0324 12.9775 12.9775C14.0324 11.9226 14.625 10.4918 14.625 9C14.625 7.50816 14.0324 6.07742 12.9775 5.02252C11.9226 3.96763 10.4918 3.375 9 3.375Z" fill="#818B9A"/></svg>
		<div className={` delay-500 select-none
			hidden group-hover:flex ease-in-out duration-500 transition-all  z-[10] text-center text-white text-[12px] font-normal absolute top-[30px] w-[120px] left-[50%] translate-x-[-50%] px-[5px] py-[5px] bg-[#14549b] rounded-[3px] justify-center items-center gap-2.5
			after:absolute after:border-[10px] after:border-[transparent_transparent_#14549b_transparent] after:top-[-20px] after:left-[50%] after:translate-x-[-50%]
			`}>
			{name}
		</div>
	</div>
  )
}
