import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'




const HomeTestimonials = () => {
  return ( 
    <>
       <section className="bg-[#141414] row-pad">
    <div className="container">

        <div className="testimonial-container-upper grid grid-cols-[170px_1fr] gap-[70px] mobile:grid-cols-1 mobile:gap-[0px]">
            <div className=""></div>
            <div><StaticImage src="../images/cargo-cabbie-white-logo.webp" />
        

                <hr className="border-[#252525] max-w-full border-1 m-auto mt-[40px] mb-[80px] mobile:mb-[40px]" />
            </div>
        </div>

        <div className="testimonial-container grid grid-cols-[170px_1fr] gap-[70px] mobile:grid-cols-1 mobile:gap-[20px] mobile:text-center">
            <div>
                <p className="text-white">Javier</p>
                <p className="text-[#808080] text-[16px]">Owner at Cargo Cabbie</p>
                <div className="relative pt-[50px] mobile:max-w-[140px] mobile:m-auto"> 
                    <StaticImage className="absolute top-[33px] -left-[8px] z-10" src="../images/tes_icon.webp" />
                    <StaticImage src="../images/customer-img.webp"  />

                
                </div>
            </div>
            <div className="text-[40px] text-white tablet:text-[25px]">
                We started working with Kinex about one year ago for our corporate website. From design services to their client relations they have been fantastic throughout, and we would highly recommend them to anyone looking for professional web design services!
            </div>
        </div>

    </div>
</section>
      
      
    </>
  );
};

export default HomeTestimonials;
