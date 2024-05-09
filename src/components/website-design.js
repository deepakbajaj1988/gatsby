import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import OurWork from "../components/Our-work";
import Innerpagelogos from "../components/Inner-page-logos";
import HomeVedio from "../components/Home-vedio";
import HomeTestimonials from "../components/Home-testimonials";
import HomeBlogs from "../components/Home-blogs";
import FooterForm from "../components/Footer-form";
import Hometimeline from "../components/Home-timeline"; 
import Kmbg from "../images/km-bg.png";

import Rotating_back from "../images/let_back.png";

const Websitedesign = () => {
  return (
    <>
      <section
        className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]"> 
              <h3 className="text-white mb-4">Responsive</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                Web Design
              </h1>
              <p className="text-white mb-8">
                We are having a vast experience in designing the ultimate and
                eye-catching websites. We develop cardinal and appealing
                websites that develop higher brand engagement, more advanced
                conversions, and measurable results by integrating expertise,
                technology, and creativity.
              </p>
              <Link
                className="btn mobile:mt-4 mobile:inline-block"
                href="/contact-us/"
              >
                Lets Grow Together
              </Link>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/website-design-head-img.jpg"
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

      <section className="row-pad bg-white !pb-0 right-full"> 
        <div className="container mx-auto flex flex-col px-8">
          <div className="mb-0">
            <h2 className="text-center">
              <p>
                Creative <span className="under_line change">Web Design </span>
                Process
              </p>
            </h2>
            <h4 className="text-center">
              We design custom websites, marketing materials, and brand
              identities that make an impression.
            </h4>
          </div>
        </div>
        <div className="full_creative relative mt-[42px]"> 
          <div className="mx-auto flex flex-col">
            <div className="flex flex-1 mobile:flex-col-reverse mobile:flex-wrap items-center xl:gap-20 gap-10 justify-center ">
              <div className="w-[29%] mobile:w-full  mobile:pl-[15px]">
                <div className="flex">
                  <div className="mx-auto">
                    <ul className="shadow-box pt-[14px]"> 
                      <li className="relative mb-4 rounded-md">
                        <button 
                          type="button"
                          className="w-full pb-1 text-left active"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                01.
                              </i>
                              Promote
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="relative mb-4 rounded-md">
                        <button type="button" className="w-full pb-1 text-left">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                02.
                              </i>
                              Launch
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="relative mb-4 rounded-md">
                        <button type="button" className="w-full pb-1 text-left">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                03.
                              </i>
                              Develop
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="relative mb-4 rounded-md">
                        <button type="button" className="w-full pb-1 text-left">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                04.
                              </i>
                              Plan
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </li>
                      <li className="relative mb-4 rounded-md">
                        <button type="button" className="w-full pb-1 text-left">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                05.
                              </i>
                              Discover
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="relative mb-4 rounded-md">
                        <button type="button" className="w-full pb-1 text-left">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-black leading-10 text-[20px] font-extrabold break_t:text-[18px] border_righthead relative">
                              <i className="not-italic text-primary-color">
                                06.
                              </i>
                              Design
                            </span>
                          </div>
                        </button>
                        <div className="relative overflow-hidden transition-all max-h-0 duration-700">
                          <div className="pt-1 pb-2 text-left leading-[30px] text-[#808080]">
                            <p>
                              Based on your Time &amp; Budget Requirement, we
                              offer Customized and Template-based web designs at
                              your Price Range. No matter what you choose, we
                              assure you of putting 100% effort into turning it
                              into a 'Masterpiece of Web-World'.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[67%] mobile:w-full">
                <div className="flex gap-5 justify-end -mb-3">  <div className="flex h-full max-w-[1154px] full_creative ">
            <StaticImage src="../images/creative-web-design.jpg" alt="layer-4" /> 
          </div></div>
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
                Your Website is Outdated and{" "}
                <span class="under_line change">Underperforming</span>?
              </h2>
              <h4 className="text-white">
                We hear these common pain points all the time.
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

          <div className="grid grid-cols-3 gap-[100px] mobile:grid-cols-1 gap-[35px]">
            <div className="grid grid-cols-[50px_1fr] gap-5">
              <div>
                <StaticImage src="../images/decrease.png" />
              </div>
              <div>
                <h5>Our website is underperforming.</h5>
                <p>
                  For years you’ve been comfortable just “getting by” with your
                  ageing site, but the competition has invested in a redesign
                  and is now stealing your traffic.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[50px_1fr] gap-5">
              <div>
                <StaticImage src="../images/thumb-down.png" />
              </div>
              <div>
                <h5>Our site is hurting our brand.</h5>
                <p>
                  Cheap templates may seem like a good idea at first, but leave
                  your site underperforming looking just like everyone else’s
                  which damages your brands credibility.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[50px_1fr] gap-5">
              <div>
                <StaticImage src="../images/self-service.png" />
              </div>
              <div>
                <h5>We tried to do it ourselves.</h5>
                <p>
                  You thought Joe in IT with his extensive networking experience
                  could bring your digital marketing into the 21st century but
                  the results just arent there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad bg-[#f0f0f0] bg-no-repeat bg-[bottom_right] mobile:bg-none" >
        <div className="container">
          <div className="grid grid-cols-[1fr_1fr] gap-[50px] mobile:grid-cols-1 mb-[50px] mobile:mb-[50px] mobile:gap-[0px]">
            <div>
              <h2>
             
                Successful web design requires creativity, experience and
                technical know-how. 
              </h2>
            </div>
            <div>
              <h4>
                You want your business to grow and want nothing to stand in your
                way. Our creative web designers have decades of experience
                transforming dreams into highly functional marketing machines.
              </h4>
            </div>
          </div>
          </div>

          <div className="bg-no-repeat bg-[center_right] bg-[length:30%] mobile:!bg-none" style={{
          backgroundImage: `url(${Kmbg})`, 
        }}>
          <div className="container">
          <div className="grid grid-cols-[1fr_1fr] gap-[50px] mobile:grid-cols-1">
            <div className="">
              <div className="grid grid-cols-[70px_1fr] gap-5 items-center border border-[#d7d7d7] border-l-0  border-r-0 py-[40px]"> 
                <div> 
                  <StaticImage src="../images/data-driven.png" />
                </div>
                <div>
                  <h5 className="text-[25px] font-bold mb-2">
                    Data-driven strategy
                  </h5>
                  <p>
                    For years you’ve been comfortable just “getting by” with
                    your ageing site, but the competition has invested in a
                    redesign and is now stealing your traffic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[70px_1fr] gap-5   items-center  py-[40px]">
                <div>
                  <StaticImage src="../images/creative-idea.png" />
                </div>
                <div>
                  <h5 className="text-[25px] font-bold mb-2">
                    Data-driven strategy 
                  </h5>
                  <p>
                    For years you’ve been comfortable just “getting by” with
                    your ageing site, but the competition has invested in a
                    redesign and is now stealing your traffic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[70px_1fr] gap-5  items-center border border-[#d7d7d7]  border-l-0 border border-r-0 py-[40px]">
                <div>
                  <StaticImage src="../images/measured-icon.png" />
                </div>
                <div>
                  <h5 className="text-[25px] font-bold mb-2">
                    Data-driven strategy
                  </h5>
                  <p>
                    For years you’ve been comfortable just “getting by” with
                    your ageing site, but the competition has invested in a
                    redesign and is now stealing your traffic.
                  </p>
                </div>
              </div> 
            </div>
            <div className="ml-auto mobile:m-auto"> <StaticImage src="../images/IPad_Pro_12.9_3rd_gen_mockup.png" /></div>
          </div>
          </div>
        </div>
      </section>

      <OurWork />
      <Innerpagelogos />
      <Hometimeline />
      <HomeVedio />
      <HomeTestimonials />
      <HomeBlogs />
      <FooterForm />
    </>
  );
};

export default Websitedesign;
