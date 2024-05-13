import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
 


const Hometimeline = () => { 
  return ( 
    <>
    <section className="bg-[#000000] row-pad time-line">
    <div className="container">
        <h2 className="h2-54 !text-white text-center">   
            <p>Few <span className="under_line change">Accolades</span> For Our <br />Enthusiastic Efforts</p>
        </h2> 
        <h4 className="h4 text-white text-center">From complex ecommerce solutions to marketing materials and Wesite design<br /> — you’ll like our collaborative approach.</h4> 

        <div className="journy_company">
        <ul className="grid grid-cols-5 m-auto text-white mt-24 font-bold desktop_journy ">
          <li className="relative">
            <div className="top_j pb-14 text-center text-centerrelative text-center"> 
            <StaticImage 
        alt="timelineimag"  
        src="../images/clutch-award.webp"
      />
         <span className="cert_2 absolute "><i className="font-normal">+</i>2</span>
            </div>
            <div className="border-cen">
              <span className="big_dot"></span> 
              <span className="line_dot">2012</span> 
              <span className="line_mid"></span>
            </div>  
            <div className="bottom_j pt-14">
              <StaticImage   className="object-cover rounded m-auto" src="../images/upcity-badge.webp" alt="" />
            </div> 
            <div className="pt-16 text-center"> 
              <StaticImage   className="object-cover rounded m-auto" src="../images/fwa-logo.webp" alt="" />
            </div>
          </li> 
          <li className="relative"> 
            <div className="  top_j pb-14 text-center text-center"> 
              <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>3</span>
            </div>

            <div className="border-cen">
              <span className="line_dot">2013</span>
              <span className="line_mid"></span>
            </div>
            
            <div className="bottom_j pt-14">
              <StaticImage   className="object-cover rounded m-auto" src="../images/upcity-badge.webp" alt="" />
            </div>
          </li>
          <li className="relative"> 
            <div className=" top_j pb-14 text-center">
              <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>4</span>
            </div>
            <div className="border-cen">
              <span className="line_dot">2015</span>
              <span className="line_mid"></span>
            </div>
            <div className="bottom_j pt-14">
              <StaticImage   className="object-cover rounded m-auto" src="../images/best-rated.webp" alt="" />
            </div>
          </li>
          <li className="relative">
            <div className=" top_j pb-14 text-center">
              <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" />
            </div>
            <div className="border-cen">
              <span className="line_dot">2017</span>
              <span className="line_mid"></span>
            </div>
            <div className="bottom_j pt-14">
              <StaticImage   className="object-cover rounded m-auto" src="../images/best-seo.webp" alt="" />
            </div>
          </li>
          <li className="relative">
            <div className=" top_j pb-14 text-center">
              <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>2</span>
            </div>
            <div className="border-cen">
              <span className="line_dot">2020</span>
              <span className="line_mid"></span>
            </div>
            <div className="border-cen !absolute right-[-18px] mt-[-112px] last_dt">
              <span className="big_dot last"></span>
              <span className="">2022</span>
            </div>
            <div className="bottom_j pt-14">
              <StaticImage   className="object-cover rounded m-auto" src="../images/css-design.webp" alt="" />
            </div>
          </li>
        </ul>
        
        <ul className="grid grid-cols-5 m-auto text-white mt-24 font-bold mobile_journy">
          <li className="relative">
            <div className="border-cen relative"> 
              <span className="mid_center">2012</span>
              <span className="line_mid"></span>
            </div> 

            <div className="flex items-center"> 
              <div className="top_j relative flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /> <span className="cert_2 absolute "><i className="font-normal">+</i>2</span>
              </div>
              <div className="bottom_j flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/upcity-badge.webp" alt="" />
              </div>
            </div>
            <div className="pt-8 flex w-2/4">
              <StaticImage className="object-cover rounded m-auto" src="../images/fwa-logo.webp" alt="" />
            </div>
          </li>
          <li className="relative">
            <div className="border-cen relative">
              <span className="mid_center">2013</span>
              <span className="line_mid"></span>
            </div>
            <div className="flex items-center">
              <div className="top_j relative flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>3</span>
              </div>
              <div className="bottom_j flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/upcity-badge.webp" alt="" />
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="border-cen relative">
              <span className="mid_center">2015</span>
              <span className="line_mid"></span>
            </div>
            <div className="flex items-center">
              <div className="top_j relative flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>4</span>
              </div>
              
              <div className="bottom_j flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/best-rated.webp" alt="" />
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="border-cen relative">
              <span className="mid_center">2017</span>
              <span className="line_mid"></span>
            </div>

            <div className="flex items-center">
              <div className="top_j relative flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" />
              </div>
              <div className="bottom_j flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/best-seo.webp" alt="" />
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="border-cen relative">
              <span className="mid_center">2020</span>
              <span className="line_mid"></span>
            </div>
            <div className="flex items-center">
              <div className="top_j relative flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/clutch-award.webp" alt="" /><span className="cert_2 absolute "><i className="font-normal">+</i>2</span>
              </div>
              
              <div className="bottom_j flex-[50%] text-center">
                <StaticImage   className="object-cover rounded m-auto" src="../images/css-design.webp" alt="" />
              </div>
            </div>
          </li>
        </ul>  
      </div>
    </div>
</section>       
      
    </>
  );
};

export default Hometimeline;
