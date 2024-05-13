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
                <Link to="/get-in-touch" className="let_content_inner">
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
            <h3 className="h3 pt-[70px] mobile:py-[20px] mobile:mb-0 tablet:pt-[30px]">
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
              <span className="text-white">
                There Are Four Primary Areas We Build SEO Strategy Around.
              </span>
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
                      The use of smartphones is increasing at a rapid rate. In
                      order to meet the increasing needs of mobile users,
                      Magento uses the mobile first RWD approach.
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
                      Magento is a vast e-commerce platform. It is best known
                      for its flexibility and customization. It provides the
                      best solutions even to the complex problems and has a
                      friendly community.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5 items-center  py-[40px] border border-[#d7d7d7] border-l-0  border-r-0 border-b-0 ">
                  <div>
                    <StaticImage src="../images/the-sky.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">Resilience</h5>
                    <p>
                      Magento offers voluminous ductile options so that you can
                      create the outstanding user experience. You can follow
                      your choice and select how you want to manage and organize
                      your site and find the strategies that work best for your
                      organization.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[70px_1fr] gap-5  items-center border border-[#d7d7d7]  border-l-0 border border-r-0 py-[40px]">
                  <div>
                    <StaticImage src="../images/no-recurring.png" />
                  </div>
                  <div>
                    <h5 className="text-[25px] font-bold mb-2">SEO Friendly</h5>
                    <p>
                      Magento platform has been developed in alliance with both
                      the search engines and users in mind. This specific thing
                      allows your business to start appearing frequently and
                      prominently in search results without endangering how
                      users are interacting with your site.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-auto mobile:m-auto">
                <div className="mobile:text-center mobile:mb-[30px]">
                  <h4>
                    Magento is one of the most SEO friendly e-commerce platform.
                    We view web design from a creative and strategic
                    perspective. Every website we create, every element and
                    feature developed for our clients, should not only be
                    stunning – it should also have a purpose. See how our
                    results-driven approach to creative and responsive website
                    design has transformed brands online.
                  </h4>
                </div>
                <StaticImage src="../images/preppy.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white row-pad">
        <div className="container">
          <div className="grid grid-cols-[70%_30%] mb-[100px] tablet:grid-cols-[60%_40%] mobile:mb-[50px] mobile:grid-cols-1">
            <div>
              <h2 className="text-white">
                Our
                <span class="under_line2 change"> Magento Services</span>?
              </h2>
              <h4 className="text-white">
                B2B or B2C, Magento serves all with its powerful open-source
                platform.
              </h4>
            </div>
            <div className="ml-auto mobile:ml-0 mobile:flex mobile:mt-10">
              <Link
                aria-current="page"
                className="btn-bg-black flex items-center inline-block w-auto"
                href="/"
              >
                <span>Send Me A Quote</span>
                <svg class="ml-2" width="20" height="10">
                  <path
                    id="Arrow_33_-_www.Shapes4FREE.com1_copy_4"
                    data-name="Arrow 33 - www.Shapes4FREE.com1 copy 4"
                    class="cls-1"
                    d="M1666.77,3469.44l-4.28-4.21a0.791,0.791,0,0,0-1.12,0,0.767,0.767,0,0,0,0,1.1l2.93,2.89h-16.51a0.78,0.78,0,1,0,0,1.56h16.51l-2.93,2.88a0.779,0.779,0,0,0,0,1.11,0.822,0.822,0,0,0,.56.23,0.787,0.787,0,0,0,.56-0.23l4.28-4.22A0.779,0.779,0,0,0,1666.77,3469.44Z"
                    transform="translate(-1647 -3465)"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[100px] tablet:grid-cols-2  mobile:grid-cols-1 gap-[35px]">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">01.</span>
                  Ecommerce Design
                </h5>
                <p>
                  Together with our clients, we create user experiences that
                  enhance the brand and convert shoppers into customers . Our
                  creative team go beyond it’s imagination to create
                  customer-centric custom design, capturing businesss essence
                  and vision that’s akin to the business goals. Our
                  device-optimised web design display elegantly across
                  smartphones, tablets, laptops and desktops.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">02.</span>
                  Product Management
                </h5>
                <p>
                  Consumers spend more time researching for the products before
                  making the decision to purchase online. This makes quality
                  product information on your ecommerce store more important
                  than ever. An easy to use product management tool in Magento
                  helps manage your product data and categories quickly and
                  easily which enhance customer’s experience, hence boosting the
                  efficiency of your ecommerce operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">03.</span>
                  Customer Management
                </h5>
                <p>
                  It’s imperative to gain a full understanding of your
                  customers’ behaviour and preferences for growing your
                  business. A detailed 360-degree view of each customer in
                  magento allows you to take important decisions and deliver
                  personalized customer experience. This provide an engaging
                  shopping experience and build customer loyalty with your
                  brand.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">04.</span>
                  Order Management
                </h5>
                <p>
                  A powerful Order Management tool coordinates your customers’
                  experience across all sales channels. It manages and automates
                  the order lifecycle to ensure your orders are completed
                  successfully which includes capturing order and validation,
                  order shipment and confirmation, customer communications and
                  settlements. It ensures swift and smooth order management
                  which increases customers satisfaction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">05.</span>
                  Inventory Management
                </h5>
                <p>
                  Managing stock is all about having the right inventory in
                  accordance with the right quantity, place, time and cost. With
                  the comprehensive inventory reports, an effective supply chain
                  is ensured, a low stock notification is updated and a handful
                  time is too saved in managing inventory and warehouses at
                  multiple locations. With the objective of uninterrupted order
                  management, Inventory Management provides customer-service
                  levels at a considerable low cost.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">06.</span>{" "}
                  Marketing & Promotions
                </h5>
                <p>
                  E-commerce marketing is one of the most powerful tactic to
                  persuade the online shoppers to a website and sway them to
                  make purchases. A strategic E-commerce marketing blueprint
                  underlines the key features such as coupons & discounts,
                  abandoned cart campaigns, loyalty programs, cross-sells and
                  up-sells, post-purchase surveys, helpful towards engaging and
                  influencing visitors to transact on a grand-scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">06.</span>{" "}
                  Search Engine Optimisation (SEO)
                </h5>
                <p>
                  SEO is a designed methodology that scrutinises the data driven
                  customer survey and the competitor research for earning a
                  definite traffic towards the website and help in climbing the
                  next step towards the niche. With 250 million of websites on
                  web, SEO makes you stand out. Right keywords and
                  well-structured crafted content ensures a significant
                  improvement in your search engine placement/ranking and yield
                  a better return on investment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div>
                <h5>
                  <span className="text-kinex_pink mr-2 font-bold">07.</span>
                  Analytics & Reporting
                </h5>
                <p>
                  Analyzing the behavior of your online visitors and scaling it
                  with every possibility are essential ingredients for growth of
                  an online business. The dynamic ecommerce environment adds up
                  the necessity to monitor and measure the traffic, page views,
                  conversion rate and goals in order to maximise the progress.
                  Probing the insights available and tracking the pattern, helps
                  effectively in achieving the business targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad">
        <div className="container">
          <div className="grid grid-cols-2 items-center tabletPortrait:grid-cols-1 gap-[100px] tabletPortrait:gap-[20px]">
            <div className="tabletPortrait:order-2">
              <h2 className="h2-54">
                Canada’s Most Trusted Magento 
                <span class="under_line change"> Development</span> Company
              </h2>
              <p>
                We are Canada’s most credible Magento Development firm and
                magento hosting provider. We work on developing strong loyal
                relationships rather than just building Magento stores. It is
                because of your allegiance to us that we are able to achieve
                this level today. We provide eye-catching and awe-inspiring
                Magento solutions by combining the innovative technologies with
                the thinking level of our most creative experts. We have united
               with more than 2000 E-commerce businesses over the years and
                helped them in their global expansion with our high-performance
                Magento solutions and world-class online marketing strategies by
                our Digital Marketing experts. We perceive your business goals,
                expectations, target market and your competitors by doing an
                in-depth research on your business.
              </p>
            </div>
            <div className="tabletPortrait:order-1">
              <StaticImage
                src="../images/becker-project-screen.png"
                alt=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white row-pad">
        <div className="container">
          <div className=" ">
            <div className="text-center">
              <h2 className="text-white">
                Technology
                <span class="under_line2 change"> Partners</span>?
              </h2>
              <h4 className="text-white max-w-[1150px] m-auto">
                The premier E-commerce experience comes from association with
                our highly experienced team of strategists, developers and
                designers. We are experts in the world’ s best E-commerce and
                CMS platforms.
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-5 align-middle items-center justify-center gap-[80px] mt-[100px] tablet:grid-cols-3 mobile:grid-cols-2 mobile:gap-[50px] mobile:mt-[50px] filter-img">
            <div><StaticImage src="../images/Adobe-logo.png" /> </div>            
            <div> <StaticImage src="../images/BLE-Logo.png" /></div>  
            <div> <StaticImage src="../images/klaviyo-logo-optim.png" /></div>
            <div> <StaticImage src="../images/Paypal.png" /></div> 
            <div> <StaticImage src="../images/klevu.png" /></div>
            <div> <StaticImage src="../images/amasty.png" /></div>
            <div> <StaticImage src="../images/nexcess.png" /></div>
            <div> <StaticImage src="../images/dotdigital.png" /></div>
            <div> <StaticImage src="../images/shipperHQ.png" /></div>
            <div> <StaticImage src="../images/kount.png" /></div>
            <div> <StaticImage src="../images/mageplaza.png" /></div>
            <div> <StaticImage src="../images/bridge.png" /> </div>
            <div> <StaticImage src="../images/mailchimp.png" /></div>
            <div> <StaticImage src="../images/sap.png" /></div>
            <div> <StaticImage src="../images/HubSpot-Logo.wine-2.png" /> </div>
            

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
