import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'


const HomeTabber = () => {
  return ( 
    <>
       
       <section className="mx-auto py-32 pb-20 bg-black who_we_help FullScreen:py-[100px] smallLaptop:py-[80px] tablet:py-[60px] mobile:py-[50px]">
    <div className="mb-0">
      <div className="container mx-auto flex flex-col px-8">
                  <p className="text-primary-color font-bold text-xl right_line_w relative"><span className="text-white">Who we Help</span></p>
              </div>
      <div className="justify-center pt-5">
        <div className="mx-auto" x-data="{selected:1}">
          <ul className="shadow-box custom_border_t">
                            <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button type="button" className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8  ">
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12 after:hidden" >
                                                  <StaticImage src="../images/home_ser1.png" alt="home_ser1-2"/>
                                                <h2 className="font-bold text-[90px] leading-[160px] text-white">Ecommerce</h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-[100%] duration-700 px-8" >
                      <div className="flex items-start gap-20 pl-[14px] py-16 w-auto mobile:block">
                                                  <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-auto">Ecommerce</p>
                                                <div className="text-left pl-14 content"><p>We are experts at building &amp; handling ‘Single-Vendor &amp; ‘Multi-Vendor eCommerce Stores’. Our Web Designers are highly trained to build compact and inclusive eCommerce Websites.</p>
<div className="flex gap-5 mobile:block">
<div className="w-9/12">
<ul className="columns-2 list-inside underline underline-offset-[6px] decoration-1 text-xl font-bold space-y-4 ul-hover">
<li><a href="#">Ecommerce Development</a></li>
<li><a href="#">B2B Ecommerce Development</a></li>
<li><a href="#">Magento Commerce Development</a></li>
<li><a href="#">Shopify Development</a></li>
<li><a href="#">Shopify Plus Development</a></li>
<li><a href="#">Magento 2 Support</a></li>
<li><a href="#">Magento Support</a></li>  
</ul>
</div>
<div className="w-3/12 mobile:w-full">
<StaticImage src="../images/adobe_lg.png" className="mb-10" /><br/>
<StaticImage src="../images/magento_Logo.png" className="mb-10" /><br/> 
<StaticImage src="../images/shopify.png"/></div>
</div>
</div>
                      </div>
                    </div>
                  </div>
                </li>
                            <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button type="button" className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8 active"  >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12">
                                                  <StaticImage src="../images/home_ser2.png" alt="home_ser2-2" /> 
                                                <h2 className="font-bold text-[90px] leading-[160px] text-white">Web Design</h2>
                      </div>
                    </button>
                  </div>  
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                                                  <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-[200px]">Web Design</p>
                                                <div className="text-left pl-14 content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
                      </div>
                    </div>
                  </div>
                </li>
                            <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button type="button" className="container mx-[auto] flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8 active after:hidden">
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12">
                                                  <StaticImage src="../images/home_ser3.png" alt="home_ser3-2"/>  
                                                <h2 className="font-bold text-[90px] leading-[160px] text-white">Digital Marketing</h2> 
                      </div> 
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                                                  <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-[200px]">digital marketing</p>
                                                <div className="text-left pl-14 content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
</div>
                      </div>
                    </div>
                  </div>
                </li>
                      </ul>
        </div>
      </div>
    </div>
  </section>
      
    </> 
  );
};

export default HomeTabber;
