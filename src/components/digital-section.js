import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import OurWork from "./Our-work";
import Homelogos from "./Home-logos";
import HomeVedio from "./Home-vedio";
import HomeTestimonials from "./Home-testimonials";
import HomeBlogs from "./Home-blogs";
import FooterForm from "./Footer-form";
import Hometimeline from "./Home-timeline";
import Kmbg from "../images/km-bg.png";

import Rotating_back from "../images/let_back.png";

const Websitedesign = () => {
  return (
    <>
      <section className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]">
              <h3 className="text-white mb-4">Digital Marketing</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                Unique Strategy for Distinctive Clients
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/digital-marketing.png"
                alt=""
                loading="eager"
              />
            </div>
            <div className="absolute right-6 bottom-9 z-[1] mobile:bottom-[70%] mobile:right-[0%]">
              <div
                className="let_content"
                style={{
                  backgroundImage: `url(${Rotating_back})`,
                }}
              >
                <Link to="/contact-us" className="let_content_inner">
                  <StaticImage
                    src="../images/lets_text.png"
                    className="ml-3 lazyloaded eicon-animation-spin"
                    alt=""
                    loading="eager"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad">
        <div className="container mx-auto flex flex-col px-8">
          <div className="flex flex-1 tabletflex-col-reverse tabletflex-wrap items-center xl:gap-20 gap-10 tablet:block">
            <div className="w-2/4 tablet:w-full">
              <h2 className="h2-54">
                <p>
                  <span className="under_line2">
                    You Have a Beautiful Website Design, But No Visitors?
                  </span>
                </p>
              </h2>
              <p className="font-semibold text-[30px] leading-[50px] mobile:text-[22px] mobile:leading-8">
                We can help optimize your online strategy.
              </p>
            </div>
            <div className="w-2/4 tablet:w-full">
              <div className="hidden lg:flex gap-5 justify-end w-full">
                <a
                  aria-current="page"
                  className="btn-white flex items-center"
                  href="/"
                >
                  <span>Send Me A Quote</span>
                  <svg className="ml-2" width="20" height="10">
                    <path
                      id="Arrow_33_-_www.Shapes4FREE.com1_copy_4"
                      data-name="Arrow 33 - www.Shapes4FREE.com1 copy 4"
                      className="cls-1"
                      d="M1666.77,3469.44l-4.28-4.21a0.791,0.791,0,0,0-1.12,0,0.767,0.767,0,0,0,0,1.1l2.93,2.89h-16.51a0.78,0.78,0,1,0,0,1.56h16.51l-2.93,2.88a0.779,0.779,0,0,0,0,1.11,0.822,0.822,0,0,0,.56.23,0.787,0.787,0,0,0,.56-0.23l4.28-4.22A0.779,0.779,0,0,0,1666.77,3469.44Z"
                      transform="translate(-1647 -3465)"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 pt-20 pb-10 ab_sec_gr mobile:block mobile:py-5 ">
            <ul className="grid grid-cols-[70px_1fr] mobile:mb-4">
              <li className="mt-[10px]">
                <StaticImage src="../images/seo_icon.png" alt="seo_icon" />
              </li>
              <li className="pr-[50px] mobile:pr-[0px]">
                <h4 className="text-[25px] font-bold leading-9 mb-2">
                  There is no quick fix
                </h4>
                <p>
                  For years you’ve been comfortable just “getting by” with your
                  ageing site, but the competition has invested in a redesign
                  and is now stealing your traffic.
                </p>
              </li>
            </ul>
            <ul className="grid grid-cols-[70px_1fr]  mobile:mb-4">
              <li className="mt-[10px]">
                <StaticImage src="../images/thumb_icon.png" alt="thumb_icon" />
              </li>
              <li className="pr-[50px] mobile:pr-[0px]">
                <h4 className="text-[25px] font-bold leading-9 mb-2">
                  Poor design and development
                </h4>
                <p>
                  Cheap templates may seem like a good idea at first, but leave
                  your site underperforming looking just like everyone elses
                  which damages your brands credibility.
                </p>
              </li>
            </ul>
            <ul className="grid grid-cols-[70px_1fr]">
              <li className="mt-[10px]">
                <StaticImage
                  src="../images/target_icon.png"
                  alt="target_icon"
                />
              </li>
              <li className="pr-[50px] mobile:pr-[0px]">
                <h4 className="text-[25px] font-bold leading-9 mb-2">
                  Hitting a moving target
                </h4>
                <p>
                  You thought Joe in IT with his extensive networking experience
                  could bring your digital marketing into the 21st century but
                  the results just arent there.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto py-32 pb-20 bg-black who_we_help FullScreen:py-[100px] smallLaptop:py-[80px] tablet:py-[60px] mobile:py-[50px]">
        <div className="mb-0">
          <div className="container mx-auto flex flex-col px-8">
            <p className="text-primary-color font-bold text-xl right_line_w relative">
              <span className="text-white">There Are Four Primary  Areas We Build SEO Strategy Around.</span>
            </p>
          </div>
          <div className="justify-center pt-5">
            <div className="mx-auto" x-data="{selected:1}">
              <ul className="shadow-box custom_border_t small-one"> 
                <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button
                      type="button"
                      className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8  "
                    >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12 after:hidden">                       
                        <h2 className="font-bold text-[90px] leading-[80px] text-white">
                        Responsive Website Design
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-[100%] duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 w-auto mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-auto">
                          Ecommerce
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            We are experts at building &amp; handling
                            ‘Single-Vendor &amp; ‘Multi-Vendor eCommerce
                            Stores’. Our Web Designers are highly trained to
                            build compact and inclusive eCommerce Websites.
                          </p>
                          <div className="flex gap-5 mobile:block">
                            <div className="w-9/12">
                              <ul className="columns-2 list-inside underline underline-offset-[6px] decoration-1 text-xl font-bold space-y-4 ul-hover">
                                <li>
                                  <a href="#">Ecommerce Development</a>
                                </li>
                                <li>
                                  <a href="#">B2B Ecommerce Development</a>
                                </li>
                                <li>
                                  <a href="#">Magento Commerce Development</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Development</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Plus Development</a>
                                </li>
                                <li>
                                  <a href="#">Magento 2 Support</a>
                                </li>
                                <li>
                                  <a href="#">Magento Support</a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-3/12 mobile:w-full">
                              <StaticImage
                                src="../images/adobe_lg.png"
                                className="mb-10"
                              />
                              <br />
                              <StaticImage
                                src="../images/magento_Logo.png"
                                className="mb-10"
                              />
                              <br />
                              <StaticImage src="../images/shopify.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> 
                <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button
                      type="button"
                      className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8 active"
                    >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12">
                        
                        <h2 className="font-bold text-[90px] leading-[80px] text-white">
                        Technical SEO 
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-[200px]">
                          Web Design
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button
                      type="button"
                      className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8 active"
                    >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12">
                        
                        <h2 className="font-bold text-[90px] leading-[80px] text-white">
                        On-page SEO
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-[200px]">
                          Web Design
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button
                      type="button"
                      className="container mx-[auto] flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8 active after:hidden"
                    >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12">
                       
                        <h2 className="font-bold text-[90px] leading-[80px] text-white">
                        Content Strategy
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-[200px]">
                          digital marketing
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris
                          </p>
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

      <section className="row-pad bg-[#f0f0f0] bg-no-repeat bg-[bottom_right] mobile:bg-none">
        <div className="container">
          <div className="grid grid-cols-[1fr_1fr] gap-[50px] mobile:grid-cols-1 mb-[50px] mobile:mb-[50px] mobile:gap-[0px]">
            <div>
              <h2>SEO is an Integral Part of our Web Design Process.</h2>
            </div>
            <div>
              <h4>
                SEO is woven into every aspect of our website design and
                development process to ensure your website rolls off the
                assembly line ready to challenge top competitors.
              </h4>
            </div>
          </div>
        </div>

        <div
          className="bg-no-repeat bg-[center_right] bg-[length:30%] mobile:!bg-none"
          style={{
            backgroundImage: `url(${Kmbg})`,
          }}
        >
          <div className="container">
            <div className="grid grid-cols-[1fr_1fr] gap-[50px] mobile:grid-cols-1">
              <div className="">
                <div className="grid grid-cols-[70px_1fr] gap-5 items-center border border-[#d7d7d7] border-l-0  border-r-0 py-[40px]">
                  <div>
                    <StaticImage src="../images/website-optimization.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                      Website Optimization
                    </h5>
                    <p>
                      We don’t take shots in the dark. Every website we design
                      is based on loads of data analysis, UX strategy and good
                      old-fashioned experience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5   items-center  py-[40px]">
                  <div>
                    <StaticImage src="../images/data-driven.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                      Focused Content Strategy
                    </h5>
                    <p>
                      Not only does your website need to stand out from the
                      crowd and turn heads, but it also has to consistently turn
                      casual browsers into paying customers.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5  items-center border border-[#d7d7d7]  border-l-0 border border-r-0 py-[40px]">
                  <div>
                    <StaticImage src="../images/increase-page-rank.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                      Increase Page Ranks
                    </h5>
                    <p>
                      When the dust settles we want to make sure the new website
                      looks fantastic, but the true measurement for success is
                      based on your marketable growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-auto mobile:m-auto">
                {" "}
                <StaticImage src="../images/seo-integral-part.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurWork />
      <Homelogos />
      <Hometimeline />
      <HomeVedio />
      <HomeTestimonials />
      <HomeBlogs />
      <FooterForm />
    </>
  );
};

export default Websitedesign;