import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Rotating_back from "../images/let_back.png";
import HomeVideoBG from "../images/home-video-section-bg.webp";
import HomeVedio from "./Home-vedio";
import HomeTestimonials from "./Home-testimonials";
import HomeBlogs from "./Home-blogs";
import FooterForm from "./Footer-form";
import Hometimeline from "./Home-timeline";

const Aboutsection = () => {
  return (
    <>
      <section className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]">
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                Catelli
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/Macbook-Pro.jpg"
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

      <section className="row-pad">
        <div className="container">
          <div className="grid grid-cols-[30%_70%] items-center tabletPortrait:grid-cols-[50%_50%]  mobile:grid-cols-1 gap-[100px] tabletPortrait:gap-[20px]">
            <div className="mobile:order-2">
              <h2 className="h2-54">Serving you first.</h2>
              <p>
                Since its founding in 1867, Catelli® pasta has grown and evolved
                with Canadians. Today, they offer all different kinds of pasta
                to suit the changing tastes and needs of Canadian families. With
                a range that covers everything from traditional white pasta to
                options that are gluten-free or fibre-enriched.
              </p>
            </div>
            <div>
              <StaticImage alt="" src="../images/second-cate.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad bg-black text-white">
        <div className="container">
          <div className="grid">
            <div className="mobile:order-2">
              <div className="grid grid-cols-[30%_70%] items-top  tabletPortrait:grid-cols-[50%_50%]  mobile:grid-cols-1 gap-[100px] tabletPortrait:gap-[20px]">
                <div>
                  <h2 className="h2-54 !text-white mobile:mb-0">Challenge</h2>
                </div>
                <div>
                  <p className="text-[25px] mb-6">
                    Custom integrations, and a more streamlined design
                  </p>
                  <p>
                    Our goal was to create one central hub for which Stouse
                    customers could interact with the brand, place orders, check
                    order statuses, and manage their account all in one place.
                    No messy file look-ups. No contacting support for every
                    order. One streamlined order process that could do all the
                    heavy lifting behind the scenes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-20 mobile:mt-0 mobile:pb-10">
                <StaticImage alt="" src="../images/multi-device-catelli.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row-pad !pb-0">
        <div className="container">
          <div className="text-center">
            <h2> Mobile Adaptive Design </h2>
            <p>
              Adaptive web design uses a unique layout for each screen size. The
              layout used depends on the screen size used. For example, there
              could be a specific layout for mobile phones, tablets, and desktop
              computers – each of which are designed in advance. This gave us
              more control over how images and information were visually
              represented on a mobile device.
            </p>
            <StaticImage
              className="mobilemin:mt-20 mobile:mt-10"
              alt=""
              src="../images/catelli-mobile.png"
            />
          </div>
        </div>
      </section>

      <section className="row-pad bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-[30%_70%] items-top  tabletPortrait:grid-cols-[50%_50%]  mobile:grid-cols-1 gap-[100px] tabletPortrait:gap-[20px]">
            <div>
              <h2 className="h2-54 !text-white mobile:mb-0">Outcome</h2>
            </div>
            <div>
              <p className="text-[25px] mb-6 ">
                Seamless. Integrated. Responsive.
              </p>
              <p className="pr-24 tabletPortrait:pr-10 mobile:pr-0">
                The result of months of collaboration with Catelli team of
                business professionals, internal developers, and print designers
                came together in one, clean website that will help them better
                generate revenue and direct customer inquiries for years to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <StaticImage className="" alt="" src="../images/catelli-bg.jpg" />
        <StaticImage className="" alt="" src="../images/catelli_bg2.jpg" />
      </section>

      <section className="row-pad bg-black">
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            <StaticImage className="" alt="" src="../images/catelli-tab.jpg" />
            <StaticImage className="" alt="" src="../images/wp-logo.jpg" />
            <StaticImage className="" alt="" src="../images/catelli-mob.jpg" />
            <StaticImage
              className=""
              alt=""
              src="../images/custom-website.jpg"
            />
          </div>
        </div>
      </section>

      <section className="row-pad">
        <div className="container">
          <h2 className="text-center">More Projects</h2>
          
          <div className="grid grid-cols-2 gap-[50px] mt-20 mobile:mt-6 mobile:grid-cols-1 mobile: gap-[0px]">  
          <div className="inline-block w-full mb-28 mobile:mb-16">
            <Link to="#">
              <StaticImage alt="" src="../images/maholi-img.webp" />
            </Link>
            <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
              <span className="text-black" x-text="item.title">
                Maholi
              </span>
            </h3>
            <p className="text-[#8b8b8b]">
              Molestias dapibus ea quia quam nulla, debitis, ultrices{" "}
            </p>
            <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
              <li>Digital Marketing</li>
              <li>Magento Enterprise</li>
              <li>Web Design</li>
            </ul>
          </div>

          <div className="inline-block w-full mb-28 mobile:mb-16">
            <Link to="#">
              <StaticImage alt="" src="../images/nasco-img.webp" />
            </Link>
            <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
              <span className="text-black" x-text="item.title">
                Nasco
              </span>
            </h3>
            <p className="text-[#8b8b8b]">
              Molestias dapibus ea quia quam nulla, debitis, ultrices{" "}
            </p>
            <ul className="flex text-[12px] gap-2 leading-[10px] mt-4 work_ul flex-wrap">
              <li>Digital Marketing</li>
              <li>Magento Enterprise</li>
              <li>Web Design</li>
            </ul>
          </div>
          </div>


        </div>
      </section>

      <FooterForm />
    </>
  );
};

export default Aboutsection;
