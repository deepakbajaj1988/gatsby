import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
 
 


const OurWork = () => { 
  return ( 
    <>
 <section className="row-pad">
  <div className="container mx-auto flex flex-col px-8 pb-12 tabletPortrait:pt-0">
    <div className="grid grid-cols-[1fr_400px] mobile:grid-cols-1 smallLaptop:grid-cols-[1fr_200px]">
      <div className="">
        <h2 className="h2-54 mobile:mb-0"> 
          <p>Decade of Our Fine work and <br /> <span className="under_line2">Award Winning</span> Web Designs.</p>
        </h2>
        <h3 className="font-semibold text-[30px] leading-[45px] my-16 mt-2 tablet:mb-4 mobile:text-[20px] mobile:leading-[25px]">
          <p className="mobile:py-[20px]">From complex ecommerce solutions to marketing materials and Wesite design — you’ll like our collaborative approach.</p> 
        </h3> 
      </div> 
      <div className="">
        <div className="flex gap-5 justify-end mobile:justify-start">
            <Link className="btn-white flex items-center" to="#"> <span>All Work</span>  <svg className="ml-2" width="20" height="10"  >
   <path id="Arrow_33_-_www.Shapes4FREE.com1_copy_4" data-name="Arrow 33 - www.Shapes4FREE.com1 copy 4" class="cls-1" d="M1666.77,3469.44l-4.28-4.21a0.791,0.791,0,0,0-1.12,0,0.767,0.767,0,0,0,0,1.1l2.93,2.89h-16.51a0.78,0.78,0,1,0,0,1.56h16.51l-2.93,2.88a0.779,0.779,0,0,0,0,1.11,0.822,0.822,0,0,0,.56.23,0.787,0.787,0,0,0,.56-0.23l4.28-4.22A0.779,0.779,0,0,0,1666.77,3469.44Z" transform="translate(-1647 -3465)"/>
</svg>
</Link>
        </div>
      </div>
    </div>
    <p className="font-semibold text-[30px] leading-[50px] text-black tablet:mt-12"></p>
  </div>
  <div className="container mx-auto px-8 aw_ser">
    <div className="columns-2 xl:gap-[138px] gap-10 port_st mobile:columns-1"> 
      <div className="inline-block w-full mb-28 mobile:mb-16"> 
        <Link to="#"><StaticImage alt="" src="../images/maholi-img.webp" /></Link>
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">Maholi</span>
        </h3>
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>     

      <div className="inline-block w-full mb-28 mobile:mb-16">
        <Link to="#"><StaticImage  alt="" src="../images/nasco-img.webp" /></Link> 
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">Nasco</span>
        </h3> 
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>

      <div className="inline-block w-full mb-28 mobile:mb-16">
        <Link to="#"><StaticImage alt="" src="../images/master-img.webp" /></Link>
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">Master</span>
        </h3>
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>

      <div className="inline-block w-full mb-28 mobile:mb-16">
        <Link to="#"><StaticImage  alt="" src="../images/staple.webp" /></Link>
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">Staple</span>
        </h3>
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>

      <div className="inline-block w-full mb-28 mobile:mb-16">
        <Link to="#"><StaticImage  alt="" src="../images/b-heming.webp" /></Link>
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">B Hemming</span> 
        </h3>
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>

      <div className="inline-block w-full mb-28 mobile:mb-16">
        <Link to="#"><StaticImage alt="" src="../images/catelli.webp" /></Link>
        <h3 className="text-primary-color font-bold text-xl my-5 mb-3"><span className="text-black" x-text="item.title">Catelli</span>
        </h3>
        <p className="text-[#8b8b8b]">Molestias dapibus ea quia quam nulla, debitis, ultrices </p>
        <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
          <li>Digital Marketing</li>
          <li>Magento Enterprise</li>
          <li>Web Design</li>
        </ul>
      </div>

    </div>
    <div className="text-center">
      <div className="inline-block">
        <Link to="javascript:void(0);" className="underline h-full items-center gap-[15px] text-[16px] font-semibold text-black justify-center font-medium cutom_news_bt btn_animation no_reletive m-auto flex flex-col load-more-posts" >Load More<StaticImage loading="lazy"  src="../images/arrow_dd.svg" alt="arrow right" /></Link>
      </div>
    </div> 
  </div>
</section>
     
    </> 
  );
};

export default OurWork;
