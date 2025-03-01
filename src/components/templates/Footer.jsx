"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
    const t = useTranslations('footer');


    const social = [
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5299 4.36783C12.3618 4.36783 12.1974 4.41768 12.0577 4.51108C11.9179 4.60448 11.8089 4.73723 11.7446 4.89254C11.6803 5.04786 11.6634 5.21877 11.6962 5.38365C11.729 5.54854 11.81 5.69999 11.9289 5.81887C12.0477 5.93774 12.1992 6.0187 12.3641 6.05149C12.529 6.08429 12.6999 6.06746 12.8552 6.00312C13.0105 5.93879 13.1432 5.82984 13.2366 5.69006C13.33 5.55028 13.3799 5.38594 13.3799 5.21783C13.3799 4.99239 13.2903 4.77619 13.1309 4.61678C12.9715 4.45738 12.7553 4.36783 12.5299 4.36783ZM15.7882 6.08199C15.7745 5.49429 15.6644 4.91282 15.4624 4.36074C15.2823 3.88838 15.002 3.46065 14.6407 3.10699C14.29 2.74392 13.8612 2.46537 13.387 2.29241C12.8364 2.08427 12.2542 1.97168 11.6657 1.95949C10.9149 1.91699 10.6741 1.91699 8.7474 1.91699C6.82073 1.91699 6.5799 1.91699 5.82906 1.95949C5.24055 1.97168 4.65843 2.08427 4.10781 2.29241C3.63442 2.46712 3.20606 2.74543 2.85406 3.10699C2.49099 3.45774 2.21244 3.88647 2.03948 4.36074C1.83134 4.91136 1.71875 5.49348 1.70656 6.08199C1.66406 6.83283 1.66406 7.07366 1.66406 9.00033C1.66406 10.927 1.66406 11.1678 1.70656 11.9187C1.71875 12.5072 1.83134 13.0893 2.03948 13.6399C2.21244 14.1142 2.49099 14.5429 2.85406 14.8937C3.20606 15.2552 3.63442 15.5335 4.10781 15.7082C4.65843 15.9164 5.24055 16.029 5.82906 16.0412C6.5799 16.0837 6.82073 16.0837 8.7474 16.0837C10.6741 16.0837 10.9149 16.0837 11.6657 16.0412C12.2542 16.029 12.8364 15.9164 13.387 15.7082C13.8612 15.5353 14.29 15.2567 14.6407 14.8937C15.0036 14.5413 15.2841 14.1132 15.4624 13.6399C15.6644 13.0878 15.7745 12.5064 15.7882 11.9187C15.7882 11.1678 15.8307 10.927 15.8307 9.00033C15.8307 7.07366 15.8307 6.83283 15.7882 6.08199ZM14.5132 11.8337C14.5081 12.2833 14.4266 12.7288 14.2724 13.1512C14.1593 13.4594 13.9776 13.738 13.7411 13.9657C13.5114 14.1999 13.2334 14.3811 12.9266 14.497C12.5042 14.6512 12.0587 14.7327 11.6091 14.7378C10.9007 14.7732 10.6386 14.7803 8.77573 14.7803C6.91281 14.7803 6.65073 14.7803 5.9424 14.7378C5.47553 14.7466 5.01065 14.6747 4.56823 14.5253C4.27482 14.4035 4.00961 14.2227 3.78906 13.9941C3.55396 13.7665 3.37458 13.4878 3.2649 13.1795C3.09196 12.7511 2.99604 12.2955 2.98156 11.8337C2.98156 11.1253 2.93906 10.8632 2.93906 9.00033C2.93906 7.13741 2.93906 6.87533 2.98156 6.16699C2.98474 5.70732 3.06865 5.25179 3.22948 4.82116C3.35418 4.52218 3.54558 4.25567 3.78906 4.04199C4.00426 3.79844 4.27022 3.60502 4.56823 3.47533C4.99999 3.31952 5.45506 3.23809 5.91406 3.23449C6.6224 3.23449 6.88448 3.19199 8.7474 3.19199C10.6103 3.19199 10.8724 3.19199 11.5807 3.23449C12.0304 3.23965 12.4759 3.32108 12.8982 3.47533C13.2201 3.59479 13.509 3.78901 13.7411 4.04199C13.9733 4.25958 14.1546 4.52559 14.2724 4.82116C14.4298 5.25249 14.5113 5.70784 14.5132 6.16699C14.5486 6.87533 14.5557 7.13741 14.5557 9.00033C14.5557 10.8632 14.5486 11.1253 14.5132 11.8337ZM8.7474 5.36658C8.02901 5.36798 7.32716 5.58228 6.73053 5.98241C6.13389 6.38254 5.66925 6.95055 5.3953 7.61465C5.12136 8.27875 5.05041 9.00916 5.19142 9.71357C5.33242 10.418 5.67906 11.0648 6.18753 11.5723C6.696 12.0797 7.34349 12.4251 8.04817 12.5648C8.75286 12.7044 9.48312 12.632 10.1467 12.3568C10.8103 12.0816 11.3774 11.6158 11.7763 11.0184C12.1753 10.421 12.3882 9.71871 12.3882 9.00033C12.3892 8.52227 12.2956 8.04876 12.1129 7.607C11.9301 7.16525 11.6619 6.76398 11.3235 6.42628C10.9851 6.08857 10.5834 5.8211 10.1413 5.63923C9.69914 5.45737 9.22544 5.36471 8.7474 5.36658ZM8.7474 11.3591C8.28088 11.3591 7.82484 11.2207 7.43694 10.9616C7.04905 10.7024 6.74672 10.334 6.56819 9.90298C6.38967 9.47197 6.34296 8.99771 6.43397 8.54016C6.52498 8.0826 6.74963 7.66231 7.07951 7.33244C7.40938 7.00256 7.82967 6.77791 8.28723 6.6869C8.74478 6.59589 9.21905 6.6426 9.65005 6.82112C10.0811 6.99965 10.4494 7.30198 10.7086 7.68987C10.9678 8.07777 11.1061 8.53381 11.1061 9.00033C11.1061 9.31008 11.0451 9.6168 10.9266 9.90298C10.8081 10.1892 10.6343 10.4492 10.4153 10.6682C10.1963 10.8872 9.93623 11.061 9.65005 11.1795C9.36387 11.2981 9.05715 11.3591 8.7474 11.3591Z" className='group-hover:fill-white fill-[#09396F] ' /></svg> ,
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.25 3C9.89125 3 10.549 3.0165 11.1865 3.0435L11.9395 3.0795L12.6602 3.12225L13.3352 3.168L13.9517 3.216C14.6209 3.26692 15.2506 3.55233 15.73 4.02195C16.2093 4.49158 16.5076 5.1153 16.5722 5.78325L16.6022 6.102L16.6585 6.7845C16.711 7.49175 16.75 8.26275 16.75 9C16.75 9.73725 16.711 10.5083 16.6585 11.2155L16.6022 11.898L16.5722 12.2167C16.5076 12.8848 16.2092 13.5086 15.7297 13.9783C15.2502 14.4479 14.6203 14.7333 13.951 14.784L13.336 14.8312L12.661 14.8778L11.9395 14.9205L11.1865 14.9565C10.5414 14.9844 9.89573 14.9989 9.25 15C8.60427 14.9989 7.95863 14.9844 7.3135 14.9565L6.5605 14.9205L5.83975 14.8778L5.16475 14.8312L4.54825 14.784C3.87911 14.7331 3.2494 14.4477 2.77003 13.978C2.29067 13.5084 1.99239 12.8847 1.92775 12.2167L1.89775 11.898L1.8415 11.2155C1.78437 10.4783 1.75385 9.73936 1.75 9C1.75 8.26275 1.789 7.49175 1.8415 6.7845L1.89775 6.102L1.92775 5.78325C1.99237 5.11541 2.29053 4.49179 2.76975 4.02218C3.24896 3.55257 3.87849 3.26709 4.5475 3.216L5.16325 3.168L5.83825 3.12225L6.55975 3.0795L7.31275 3.0435C7.95813 3.01555 8.60402 3.00104 9.25 3ZM7.75 7.18125V10.8188C7.75 11.1652 8.125 11.3812 8.425 11.2087L11.575 9.39C11.6435 9.35054 11.7005 9.29372 11.7401 9.22525C11.7797 9.15678 11.8005 9.07909 11.8005 9C11.8005 8.92091 11.7797 8.84322 11.7401 8.77475C11.7005 8.70628 11.6435 8.64946 11.575 8.61L8.425 6.792C8.35657 6.75249 8.27894 6.7317 8.19993 6.73171C8.12091 6.73172 8.04329 6.75254 7.97487 6.79207C7.90646 6.8316 7.84965 6.88845 7.81018 6.9569C7.7707 7.02535 7.74995 7.10298 7.75 7.182V7.18125Z" className='group-hover:fill-white fill-[#09396F] ' /></svg> ,
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_520_7420)"><mask id="mask0_520_7420" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18"><path d="M0.25 0.5H17.25V17.5H0.25V0.5Z" fill="white"/></mask><g mask="url(#mask0_520_7420)"><path d="M13.6375 1.29639H16.2446L10.5496 7.82196L17.25 16.7032H12.0043L7.89271 11.3179L3.19343 16.7032H0.583929L6.67479 9.7211L0.25 1.2976H5.62929L9.34014 6.2191L13.6375 1.29639ZM12.7207 15.1392H14.1657L4.84 2.77903H3.29057L12.7207 15.1392Z" className='group-hover:fill-white fill-[#09396F] '/></g></g><defs><clipPath id="clip0_520_7420"><rect width="17" height="17" fill="white" transform="translate(0.25 0.5)"/></clipPath></defs></svg> ,
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.06797 3.32203H9.66597V0.619025C8.89226 0.53857 8.11485 0.498849 7.33697 0.500025C5.02497 0.500025 3.44397 1.91103 3.44397 4.49503V6.72203H0.834473V9.74803H3.44397V17.5H6.57197V9.74803H9.17297L9.56397 6.72203H6.57197V4.79253C6.57197 3.90003 6.80997 3.32203 8.06797 3.32203Z" className='group-hover:fill-white fill-[#09396F] '/></svg> ,
    ]


    const contact = [
        { key:"email" , title : t("contact_uae") , desc : t("email") , icon : <svg  className='svg max-md:w-[35px] '  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:stroke-primary stoke-black' x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#103e73" strokeDasharray="2 2"/><rect className=' group-hover:fill-primary ' x="5" y="5" width="40" height="40" rx="20" fill="#103e73"/><path className='group-hover:stroke-white group-hover:fill-white stroke-white fill-white ' d="M35 18.75V31.25C35 31.9594 34.4594 32.5 33.75 32.5H32.5V21.1556L25 26.5431L17.5 21.1556V32.5H16.25C15.5406 32.5 15 31.9594 15 31.25V18.75C15 18.395 15.1338 18.0825 15.3581 17.8612C15.4749 17.7442 15.6141 17.6519 15.7673 17.5899C15.9205 17.5278 16.0847 17.4972 16.25 17.5H16.6669L25 23.5419L33.3331 17.5H33.75C34.105 17.5 34.4175 17.6337 34.6419 17.8612C34.8662 18.0825 35 18.395 35 18.75Z" fill="#103e73"/></svg> },
        { key:"email" , title : t("contact_ksa") , desc : t("email") , icon : <svg  className='svg max-md:w-[35px] '  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:stroke-primary stoke-black' x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#103e73" strokeDasharray="2 2"/><rect className=' group-hover:fill-primary ' x="5" y="5" width="40" height="40" rx="20" fill="#103e73"/><path className='group-hover:stroke-white group-hover:fill-white stroke-white fill-white ' d="M35 18.75V31.25C35 31.9594 34.4594 32.5 33.75 32.5H32.5V21.1556L25 26.5431L17.5 21.1556V32.5H16.25C15.5406 32.5 15 31.9594 15 31.25V18.75C15 18.395 15.1338 18.0825 15.3581 17.8612C15.4749 17.7442 15.6141 17.6519 15.7673 17.5899C15.9205 17.5278 16.0847 17.4972 16.25 17.5H16.6669L25 23.5419L33.3331 17.5H33.75C34.105 17.5 34.4175 17.6337 34.6419 17.8612C34.8662 18.0825 35 18.395 35 18.75Z" fill="#103e73"/></svg> },
        { key:""      , title : t("headquarters") , desc : t("location") , icon :  <svg  className='svg max-md:w-[35px] '  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className='group-hover:stroke-primary stoke-black' x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#103e73" strokeDasharray="2 2"/><rect className=' group-hover:fill-primary' x="5" y="5" width="40" height="40" rx="20" fill="#103e73"/><path className=' group-hover:stroke-white group-hover:fill-white stroke-white fill-white ' d="M24.9999 26.1916C26.4358 26.1916 27.5999 25.0276 27.5999 23.5916C27.5999 22.1557 26.4358 20.9916 24.9999 20.9916C23.564 20.9916 22.3999 22.1557 22.3999 23.5916C22.3999 25.0276 23.564 26.1916 24.9999 26.1916Z" stroke="#F9A51A" strokeWidth="1.5"/><path className='group-hover:stroke-white stroke-white ' d="M18.0167 22.075C19.6584 14.8584 30.3501 14.8667 31.9834 22.0834C32.9417 26.3167 30.3084 29.9 28.0001 32.1167C26.3251 33.7334 23.6751 33.7334 21.9917 32.1167C19.6918 29.9 17.0584 26.3084 18.0167 22.075Z" stroke="#F9A51A" strokeWidth="1.5"/></svg> },
    ]


    const handleMail = (key , value) =>{
        if (key === "email") {
            window.location.href = `mailto:${value}`;
        }
    }

    return (
        <div className='relative ' > 
        <div className={`bg-fixed h-[500px] blur-[1px] md:w-[50%] md:ltr:translate-x-[220px] md:rtl:translate-x-[-220px] bg-cover bg-center bg-[url('/imgs/frame-left.png')] absolute top-0 ltr:right-0 rtl:left-0 max-md:scale-y-[-1] max-md:!rounded-none max-md:translate-y-[160px]  max-md:w-full rtl:rounded-tr-[60px] ltr:rounded-tl-[60px] `} ></div>
            {/* <div className={`max-md:translate-y-[80px] bg-fixed bg-cover bg-center bg-[url('/imgs/frame-right.png')] max-md:w-full max-md:!rounded-none w-[544px] h-full absolute ltr:right-0 rtl:left-0  top-0 rtl:rounded-tr-[60px] ltr:rounded-tl-[60px] `}></div> */}
        <footer className=' container max-md:px-[50px] max-sm:px-[20px] relative min-h-[500px]  flex flex-col justify-center items-center  '>

            <div className='  relative  p-[50px] min-h-[300px] w-full bg-[#fafbff]  max-md:!p-[30px] max-md:!mx-[0px] rtl:pl-[100px] ltr:pr-[100px] rtl:ml-[100px] ltr:rounded-[0_50px_50px_0] rtl:rounded-[50px_0_0_50px] max-md:!rounded-[0_0_50px_50px] '>
                
                <div className='flex max-md:flex-col justify-between gap-[30px] ' >
                    <div className='flex flex-col gap-[10px] ' > 
                        <Image className='mb-[10px] max-md:w-[80px] ' src={"/imgs/logo2.png"} alt='' width={120} height={40} />
                        <p className=' text-balance text-[#a0a7c0] text-20 font-normal' > {t("description")} </p>
                    </div>
                    <div>
                        <h3 className='text-secondery t20 font-semibold mb-[20px] max-md:mb-[10px] ' > {t("title")} </h3>
                        <ul className=' social flex items-center gap-[10px] ' >
                            {social.map((e,i)=> <li key={i} className=' group cursor-pointer hover:bg-secondery  hover:border-secondery duration-300 w-[40px] h-[40px] bg-white rounded-[6px] border border-[#eeeeee] flex justify-center items-center ' > <a>  {e} </a> </li> )}
                        </ul>
                    </div>

                </div>

                <div className='flex max-md:flex-col max-md:items-start max-md:gap-[20px] justify-between items-center mt-[50px] ' >
                    {
                        contact.map((e,i)=> <div key={i} className=' flex group items-center gap-[15px] ' >
                            {/* <Image className='' src={e.icon} alt='' width={40} height={40} /> */}
                            <span className='' > {e.icon} </span>
                            <div className='flex flex-col ' >
                                <p className='text-secondery t20 max-md:t16 font-normal' > {e.title} </p>
                                <p onClick={()=>handleMail(e.key , e.desc)} className={`text-[#09396f] max-md:t15 t18 font-extralight ${e.key == "email" && "underline  cursor-pointer"} `} > {e.desc} </p>
                            </div>
                        </div> )
                    }
                </div>
            </div>

            <div className=" max-md:hidden mb-[-50px] text-center text-secondery z-[100] bg-white mt-[30px] t14 font-normal"> {t("copyright")} </div>
        </footer>

        </div>
    );
}
