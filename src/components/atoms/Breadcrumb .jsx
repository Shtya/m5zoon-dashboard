import { Link } from '@/i18n/routing';
import { ChevronLeft, ChevronsLeft } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex flex-wrap items-center  space-x-1 md:space-x-2'>
                {items.map((item, index) => (
                    <li key={index} className={` inline-flex items-center hover:opacity-80 duration-300 `}>
                        {index !== 0 && (
                            <ChevronsLeft className={` ltr:rotate-180 ltr:mr-[5px]  ${index == items.length -1 ? "text-primary" : " text-[#757d8a] " } `}  />
                        )}
                        {item.href ? (
                            <Link href={item.href} className='inline-flex items-center text-[#757d8a] dark:text-white dark:text-opacity-70 text-lg font-normal  '>
                                {item.icon && <span className='mr-2'>{item.icon}</span>}
                                {item.label}
                            </Link>
                        ) : (
                            <span className='text-primary select-none text-lg font-normal'>
                                {item.icon && <span className='mr-2'>{item.icon}</span>}
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
