import * as React from "react";
import { Link } from "gatsby";



const HowWeAre = () => {
  return ( 
    <>
       
<section  className="row-pad  tablet:pt-[100px]">  
  <div  className="container mx-auto flex flex-col px-8 relative">
    <div  className="mb-0"> 
      <p  className="text-primary-color font-bold text-xl right_line_b relative"><span  className="text-black"><span  className="text-kinex_pink">01.</span> Who we are</span></p>
      <h3  className="h3 py-[70px] mobile:py-[20px] mobile:mb-0">
        <p  className="we-create">We create cutting-edge <span  className="under_line">B2B, B2C &amp; D2C</span> experiences<br />  
          that elevate brands, maximize ROI, and generate conversions.<br />
          We’re hard-working creatives who let our work speak for itself.</p> 
      </h3>   
      <Link to="/get-in-touch"  className=" inline-block mt-3"><span  className="under_line_read-more text-[20px] font-semibold">Read More</span></Link> 
    </div>

    <div  className="inline-block absolute right-[30px] top-[-62px] smallLaptop:top-[-52px] tabletPortrait:top-[-72px]">
    <Link to="/get-in-touch"  className="underline h-full items-center gap-[15px] text-[16px] font-semibold text-black justify-center font-medium cutom_news_bt btn_animation no_reletive m-auto flex load-more-posts">View Case Study
        <span  className="arrow_box_inner"> 
          <svg  className="" loading="lazy" version="1.2" viewBox="0 0 21 11" width="21" height="11">
            <style></style>
            <path d="m20.8 5.4l-4.3-4.2c-0.3-0.3-0.8-0.3-1.1 0-0.3 0.3-0.3 0.8 0 1.1l2.9 2.9h-16.5c-0.4 0-0.8 0.4-0.8 0.8 0 0.4 0.4 0.8 0.8 0.8h16.5l-2.9 2.9c-0.3 0.3-0.3 0.8 0 1.1q0.2 0.2 0.5 0.2 0.3 0 0.6-0.2l4.3-4.3c0.3-0.3 0.3-0.8 0-1.1z"></path>
          </svg>
        </span>
      </Link>

    </div>
  </div>
</section>

    
      
    </>
  );
};

export default HowWeAre;
