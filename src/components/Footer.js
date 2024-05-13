import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => { 
  return ( 
    <>
<footer className="relative bg-[#141414]">
<div className="border-t border-[#2c2c2c]" id="footer">
    <div className="pb-20 pt-32   FullScreen:py-[100px] smallLaptop:py-[80px] tablet:py-[70px] tabletPortrait:py-[60px] mobile:py-[50px]"> 
        <div className="max-w-[1480px] mx-auto px-[15px]">  
            <div className="flex gap-20 justify-between all_space fter_inner tablet:block smallLaptop:gap-0"> 
                <div className="relative flex flex-col gap-8 w-1/3 form_inn_ft tablet:w-full  tablet:!w-1/1">   
                    <div className="relative"><Link href="/" className="inline-block"><StaticImage width="41" height="43" src="../images/logo_ft.png" className="image wp-image-2659  attachment-full size-full" alt="" decoding="async" /></Link></div>  
                    <div className="widget_text relative"> 
                        <div className="textwidget custom-html-widget"> 
                            <p className="text-white text-lg font-bold">
                                Ready to <span className="under_line under_ft after:bg-outline-img relative">speak with an expert?</span>
                            </p>
                        </div> 
                    </div>
                    <div className="relative">
                        <div className="textwidget">
                            <h3 className=" text-white text-[50px] leading-[55px] font-light">Call us Now<br/>
                                <Link className="transition hover:underline font-bold hover:no-underline" to="tel:+16474966189">647-496-6189</Link>
                            </h3>
                            <div className="text-left text-[#808080] mt-16 leading-8 mobile:mt-8 mobile:mb-8">Copyright © 2023 <Link className="text-kinex_pink" to="/">Kinex Media Inc.</Link><br/>   
                                All Rights Reserved.</div>
                        </div>
                    </div> 
                </div>

 
                <div className="w-3/5 flex gap-[90px] gap-y-10 sm:grid-cols-2 form_inn tablet:w-full mobile:block smallLaptop:gap-[20px] tablet:mt-[50px] mobile:mt-[0px]">   

                        <div className="w-2/5 flex flex-col text-white gap-7 footer-info mobile:w-full">
                            <div className="relative">
                                <h3>Mississauga (Head Office)</h3> 
                                <div className="textwidget">
                                    <p>25 Watline Avenue, Suite 302, <br />Mississauga, Ontario L4Z 2Z1</p>
                                </div>
                            </div>
                            <div className="relative">
                                <h3 className="font-bold">Toronto Office</h3>
                                <div className="textwidget">
                                    <p>25O University Ave. Suite 200<br />Toronto, ON M5H 3E5</p>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="font-bold">Quick Contact (Head Office)</h3>
                                <div className="textwidget">
                                    <p><Link to="tel:+18886797773">1-888-679-7773</Link>, <Link to="tel:+16474966189 ">647-496-6189</Link> <br /><Link to="mailto:info@kinexmedia.com">info@kinexmedia.com</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 flex gap-5 flex-col justify-between mobile:w-full">
                            <div className="relative">
                                <div className="ft_news">
                                    <div className="head_news footer-info">
                                        <h3 className="text-white mobile:mt-8">Join NewsLetter</h3>
                                    </div>
                                    <div className="mt-0">
                                        <form className="relative z-[1] pt-[8px] text-left aos-init aos-animate">
                                            <div className="toast toast-error" x-show="message" x-text="message" ></div>
                                            <div className="relative inline-block w-full">
                                                <div className="form-group relative mb-5 tablet:mb-[15px]">
                                                    <input className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#2c2c2c] leading-[70px] pt-0 text-[20px] font-semibold text-white" id="input_3" placeholder="Your Email Address" type="email" name="input_3" />
                                                    <div className="form-input-hint absolute left-0 text-sm text-red-600" x-show="validationError['input_3']" x-text="validationError['input_3']"></div>
                                                    <button type="submit" className="absolute top-0 h-full  btn-primary rounded items-center gap-[10px] md:px-[12px] px-[12px] py-[12px] text-[18px] text-black justify-center inline-block hover:bg-black hover:text-white font-medium tablet:text-[16px] cutom_news_bt btn_animation no_reletive right-0"><StaticImage loading="lazy" width="27" height="27" src="../images/arrow-r.png" alt="arrow right" /></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex right_menu">
                                <div className="flex w-full text-white gap-10 max-sm:gap-4"> 
                                    <h3 className="font-semibold text-xl">Follow Us</h3>
                                    <ul className="grid grid-cols-2 gap-3 socal_icon">
                                        <li><Link target="_blank" to="#"><svg width="28" height="28" fill="#ffffff" viewBox="0 0 448 512">
                                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                </svg></Link></li>
                                        <li><Link target="_blank" to="#">
                                                <svg width="24" height="24" viewBox="0 0 23 22" fill="currentColor" className="transition hover:scale-110 hover:text-secondary">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z" fill="currentColor"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z" fill="currentColor"></path>
                                                    <circle cx="17.7975" cy="5.08737" r="0.732875" fill="currentColor"></circle>
                                                </svg>
                                            </Link></li>
                                        <li><Link target="_blank" to="#">
                                                <svg width="25" height="25" viewBox="0 0 10 20" fill="none" className="transition hover:scale-110 hover:text-secondary">
                                                    <path d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z" fill="currentColor"></path>
                                                </svg>
                                            </Link></li>
                                        <li><Link target="_blank" to="#">
                                                <svg width="28" height="28" viewBox="0 0 23 18" fill="none" className="transition hover:scale-110 hover:text-secondary">
                                                    <path d="M22.8849 2.11613C22.0668 2.475 21.1951 2.71288 20.2862 2.82838C21.2212 2.27013 21.9348 1.39287 22.2703 0.3355C21.3986 0.85525 20.4361 1.22238 19.4103 1.42725C18.5826 0.545875 17.4028 0 16.1158 0C13.6188 0 11.6086 2.02675 11.6086 4.51137C11.6086 4.86888 11.6388 5.21263 11.7131 5.53988C7.96345 5.357 4.64557 3.55988 2.4167 0.82225C2.02757 1.49738 1.79932 2.27012 1.79932 3.102C1.79932 4.664 2.6037 6.04862 3.8027 6.85025C3.07807 6.8365 2.3672 6.62613 1.76495 6.29475C1.76495 6.3085 1.76495 6.32638 1.76495 6.34425C1.76495 8.536 3.32832 10.3565 5.37845 10.7759C5.01132 10.8763 4.6112 10.9244 4.19595 10.9244C3.9072 10.9244 3.6157 10.9079 3.34207 10.8474C3.92645 12.6335 5.5847 13.9466 7.55645 13.9893C6.02195 15.1896 4.07357 15.9129 1.96432 15.9129C1.59445 15.9129 1.2397 15.8964 0.884949 15.851C2.88282 17.1394 5.25057 17.875 7.80395 17.875C16.1034 17.875 20.6409 11 20.6409 5.04075C20.6409 4.84137 20.6341 4.64887 20.6244 4.45775C21.5196 3.8225 22.2717 3.02913 22.8849 2.11613Z" fill="currentColor"></path>
                                                </svg>
                                            </Link></li>
                                    </ul>
                                </div>
                                <div className="w-1/3">  
                                    <ul className="flex flex-col text-white help-menu">
                                        <li><Link to="#">Help &amp; FAQs</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li> 
                                        <li><Link to="#">Terms of Service</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 

                    </div>
                    

                

            </div>
        </div>
    </div>
</div>
</footer>

     
    </>
  );
};

export default Header;
