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
import Kmbg from "../images/gre-kinx.png";

import Rotating_back from "../images/let_back.png";

const Websitedesign = () => {
  return (
    <>
      <section className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]">
              <h3 className="text-white mb-4">Magento 2</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px] tabletmin:text-[60px] tabletmin:leading-[70px] PCScreenmin:!text-[80px] PCScreenmin:!leading-[90px]">
                Magento Developers & Development Toronto
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/Magneto-2-Mockup.png"
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

      <section className="py-[100px] tablet:py-[50px]">
        <div className="container mx-auto flex flex-col px-8 relative">
          <div className="mb-0">
            <p className="text-primary-color font-bold text-xl right_line_b relative">
              <span className="text-black">
                Highly-customized Magento Development Services
              </span>
            </p>
            <h3 className="h3 pt-[70px] mobile:py-[20px] mobile:mb-0">
              <p className="we-create">
                Toronto’s most trusted Magento Development services by certified
                Magento Developers to boost your eCommerce business & drive more
                sales.
              </p>
            </h3>
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
                        Design
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
                        Develop
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
                        Integrate 
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
                        Support 
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

      <section className="row-pad   bg-no-repeat bg-[bottom_right] mobile:bg-none">
        <div className="container">
          <div className="grid grid-cols-[1fr_1fr] gap-[50px] mobile:grid-cols-1 mb-[50px] mobile:mb-[50px] mobile:gap-[0px]">
            <div>
              <h2 className="h2-54">
                <span class="under_line2"> Benefits of Magento</span>
              </h2>
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
                    <StaticImage src="../images/data-driven.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                    Device Optimized
                    </h5>
                    <p>
                    The use of smartphones is increasing at a rapid rate. In order to meet the increasing needs of mobile users, Magento uses the mobile first RWD approach. 
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5   items-center  py-[40px]">
                  <div>
                    <StaticImage src="../images/the-sky.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                    Unlimited Options
                    </h5>
                    <p>
                    Magento is a vast e-commerce platform. It is best known for its flexibility and customization. It provides the best solutions even to the complex problems and has a friendly community.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5 items-center  py-[40px] border border-[#d7d7d7] border-l-0  border-r-0 border-b-0 ">
                  <div>
                    <StaticImage src="../images/the-sky.png" />
                  </div>
                  <div>
                  <h5 className="text-[25px] font-bold mb-2">
                    Resilience
                    </h5>
                    <p>
                    Magento offers voluminous ductile options so that you can create the outstanding user experience. You can follow your choice and select how you want to manage and organize your site and find the strategies that work best for your organization.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5  items-center border border-[#d7d7d7]  border-l-0 border border-r-0 py-[40px]">
                  <div>
                    <StaticImage src="../images/no-recurring.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">
                    SEO Friendly
                    </h5>
                    <p>
                    Magento platform has been developed in alliance with both the search engines and users in mind. This specific thing allows your business to start appearing frequently and prominently in search results without endangering how users are interacting with your site. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-auto mobile:m-auto">
              <div className="mobile:text-center mobile:mb-[30px]">
              <h4>
                Magento is one of the most SEO friendly e-commerce platform. We
                view web design from a creative and strategic perspective. Every
                website we create, every element and feature developed for our
                clients, should not only be stunning – it should also have a
                purpose. See how our results-driven approach to creative and
                responsive website design has transformed brands online.
              </h4>
            </div>
                <StaticImage src="../images/preppy.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0]">
        <OurWork />
        <Homelogos />
      </section>
      <Hometimeline />
      <HomeVedio />
      <HomeTestimonials />
      <HomeBlogs />
      <FooterForm />
    </>
  );
};

export default Websitedesign;
