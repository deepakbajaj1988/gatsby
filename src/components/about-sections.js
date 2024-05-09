import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HomesliderImg from "../images/about-head-section-img.png";
import Rotating_back from "../images/let_back.png";
import HomeVideoBG from "../images/home-video-section-bg.webp";
import HomeVedio from "../components/Home-vedio";
import HomeTestimonials from "../components/Home-testimonials";
import HomeBlogs from "../components/Home-blogs";
import FooterForm from "../components/Footer-form";
import Hometimeline from "../components/Home-timeline";

const Aboutsection = () => {
  return (
    <>
      <section className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]">
              <h3 className="text-white mb-4">About Kinex</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                We Are Your Business Growth Partner.
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/about-head-section-img.png"
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
              <h2>
                <p>
                  <span className="under_line2">
                    We Do Our Best to Help Your <br /> Businesses Grow
                  </span>
                </p>
              </h2>
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
          <p className="font-semibold text-[30px] leading-[50px] mobile:text-[22px] mobile:leading-8">
            We can help optimize your online strategy.
          </p>
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
              <span className="text-white">Who we Help</span>
            </p>
          </div>
          <div className="justify-center pt-5">
            <div className="mx-auto" x-data="{selected:1}">
              <ul className="shadow-box custom_border_t">
                <li className="relative custom_faq overflow-hidden">
                  <div className="bg-black custom_left_t">
                    <button
                      type="button"
                      className="container mx-auto flex flex-col text-lg font-semibold w-full px-8 text-left relative mt-8 mb-8  "
                    >
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12 after:hidden mobile:pl-[32px] ">
                        <StaticImage
                          src="../images/home_ser1.png"
                          alt="home_ser1-2"
                        />
                        <h2 className="font-bold text-[90px] leading-[160px] text-white">
                          Agency
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-[100%] duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 w-auto mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head w-auto">
                          Agency
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehen
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
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12 mobile:pl-[32px]">
                        <StaticImage
                          src="../images/home_ser2.png"
                          alt="home_ser2-2"
                        />
                        <h2 className="font-bold text-[90px] leading-[160px] text-white">
                          History
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head ">
                          Dicover
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            In 2008, Mississauga witnessed an era-transformative
                            event – The establishment of Kinex Media. We were a
                            startup company co-founded by Mr. Amir Waheed &amp;
                            Karan Sharma. In our early years, we were not
                            concerned about profit-gaining; instead, we aimed at
                            exploring the industry &amp; researching the
                            challenges which might come a long way. With God’s
                            grace &amp; team’s united efforts, there has been no
                            such challenge that we can’t rid off to date.
                          </p>
                          <p>
                            Let’s jump to 2022 – Today, Kinex Media is a brand
                            in the web design &amp; digital marketing industry.
                            We are handling 300+ projects. We have an expert
                            team of 100 members having experience &amp;
                            expertise in different niches. Our primary focus is
                            always to deliver results that bring profits &amp;
                            make the client’s website appear trustworthy in
                            SERP.
                          </p>
                          <p>
                            Because of our quality services, we have never
                            experienced client churn. We have been in
                            long-business-terms with almost all the clients. We
                            feel proud to mention that we have worked with the
                            top brands mentioned in the Fortune-500 list.
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
                      <div className="flex items-center gap-20 pl-[64px] custom_tp tablet:gap-12 mobile:pl-[32px]">
                        <StaticImage
                          src="../images/home_ser3.png"
                          alt="home_ser3-2"
                        />
                        <h2 className="font-bold text-[90px] leading-[160px] text-white">
                          Team
                        </h2>
                      </div>
                    </button>
                  </div>
                  <div className="bg-white content_tab relative overflow-hidden">
                    <div className="relative overflow-hidden container mx-auto flex flex-col transition-all max-h-0 duration-700 px-8">
                      <div className="flex items-start gap-20 pl-[14px] py-16 mobile:block">
                        <p className="relative font-bold text-[20px] leading-[32px] text-primary-color tableft_head ">
                          Team
                        </p>
                        <div className="text-left pl-14 content">
                          <p>
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehen
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

      <section className="row-pad">
        <div className="container mx-auto flex flex-col px-8">
          <div className="flex flex-1 tablet:flex-col-reverse tablet:flex-wrap items-center xl:gap-20 gap-10 py-3">
            <div className="w-[45%] tablet:w-full">
              <h2>Why Choose Us?</h2>
              <h4 className="mb-[20px]">
                SEO is woven into every aspect of our website design and
                development process to ensure your website rolls off the
                assembly line ready to challenge top competitors.
              </h4>
              <ul className="choose_inner">
                <li className="flex">
                  <div className="flex-[0_0_110px]">
                    <StaticImage
                      src="../images/encourage.png"
                      alt="encourage"
                    />
                  </div>
                  <div>
                    <h4 className="text-[25px] font-bold mobile:leading-6 mobile:mb-4">
                      Encourage the culture of feedback
                    </h4>
                    <p>
                      We don’t take shots in the dark. Every website we design
                      is based on loads of data analysis, UX strategy and good
                      old-fashioned experience.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-[0_0_110px]">
                    <StaticImage
                      src="../images/team_icon.png"
                      alt="team_icon"
                    />
                  </div>
                  <div>
                    <h4 className="text-[25px] font-bold mobile:leading-6 mobile:mb-4">
                      Thinking collectively
                    </h4>
                    <p>
                      Not only does your website need to stand out from the
                      crowd and turn heads, but it also has to consistently turn
                      casual browsers into paying customers.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-[0_0_110px]">
                    <StaticImage
                      src="../images/innovation_icon.webp"
                      alt="innovation_icon"
                    />
                  </div>
                  <div>
                    <h4 className="text-[25px] font-bold mobile:leading-6 mobile:mb-4">
                      Go forward
                    </h4>
                    <p>
                      When the dust settles we want to make sure the new website
                      looks fantastic, but the true measurement for success is
                      based on your marketable growth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-[55%] tablet:w-full">
              <div className=" justify-start w-full">
                <StaticImage src="../images/why_ch.jpg" alt="why_ch" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad bg-[#f0f0f0]">
        <div className="container mx-auto relative">
          <div className="mx-auto">
            <div className="w-full">
              <h2 className=" font-bold text-[54px] leading-[64px] text-center text-black mb-10">
                <span className="under_line2 change">The Company We Keep </span>
              </h2>

              <ul className="text-center grid grid-cols-1 mobileLand:grid-cols-1 md:grid-cols-2 tabletPortrait:grid-cols-2 lg:grid-cols-5 smallLaptop:gap-[25px] p-[70px] py-[70px] gap-[50px] m-auto accolades_home_inner items-center FullScreen:p-0 FullScreen:pb-[70px]">
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli1.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli2.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli3.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli4.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli5.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli6.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli8.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli9.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli10.png"
                  />
                </li>
                <li>
                  <StaticImage
                    className="m-auto"
                    alt=""
                    src="../images/home_cli11.png"
                  />
                </li>
              </ul>
              <div className="flex flex-1 tablet:flex-col-reverse tablet:flex-wrap items-center xl:gap-12 gap-10">
                <div className="w-full tablet:w-full">
                  <div className=" text-center">
                    <div className="inline-block">
                      <a
                        href="javascript:void(0);"
                        className="underline h-full items-center gap-[15px] text-[16px] font-semibold text-black justify-center font-medium cutom_news_bt btn_animation no_reletive m-auto flex flex-col"
                      >
                        Load More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeTestimonials />
      <Hometimeline />
      <HomeVedio />
      <HomeBlogs />
      <FooterForm />
    </>
  );
};

export default Aboutsection;
