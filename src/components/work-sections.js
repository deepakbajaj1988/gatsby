import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
              <h3 className="text-white mb-4">Our Work</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                Results Are Everything, It’s That Simple.
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/our-work.jpg"
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
        <div className="container mx-auto flex flex-col px-8 pb-12 tabletPortrait:pt-0">
          <h2 className="text-center"> Our Work </h2>
          <div className="work-filter">
            <ul>
              <li>
                <Link to="#">All</Link>
              </li>
              <li>
                <Link to="#">ADOBE COMMERCE</Link>
              </li>
              <li>
                <Link to="#">SHOPIFY PLUS</Link>
              </li>
              <li>
                <Link to="#">PWA & HEADLESS</Link>
              </li>
              <li>
                <Link to="#">B2C</Link>
              </li>
              <li>
                <Link to="#">TOTALCARE</Link>
              </li>
              <li>
                <Link to="#">BACK-END INTEGRATIONS</Link>
              </li>
              <li>
                <Link to="#">CUSTOM DEVELOPMENT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-8 aw_ser">
          <div className="columns-2 xl:gap-[138px] gap-10 port_st mobile:columns-1">
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

            <div className="inline-block w-full mb-28 mobile:mb-16">
              <Link to="#">
                <StaticImage alt="" src="../images/master-img.webp" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Master
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
                <StaticImage alt="" src="../images/staple.webp" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Staple
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
                <StaticImage alt="" src="../images/b-heming.webp" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  B Hemming
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
                <StaticImage alt="" src="../images/catelli.webp" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Catelli
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
            {/* ========================== */}
            <div className="inline-block w-full mb-28 mobile:mb-16">
              <Link to="#">
                <StaticImage alt="" src="../images/rumina-aturals.png" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Rumina Naturals
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
                <StaticImage alt="" src="../images/baker-shoes.png" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Becker Shoe
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
                <StaticImage alt="" src="../images/force-3.png" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Force 3
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
                <StaticImage alt="" src="../images/cosmetic-allience.png" />
              </Link>
              <h3 className="text-primary-color font-bold text-xl my-5 mb-3">
                <span className="text-black" x-text="item.title">
                  Cosmetic Alliance
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
          <div className="text-center">
            <div className="inline-block">
              <Link
                to="javascript:void(0);"
                className="underline h-full items-center gap-[15px] text-[16px] font-semibold text-black justify-center font-medium cutom_news_bt btn_animation no_reletive m-auto flex flex-col load-more-posts"
              >
                Load More
                <StaticImage
                  loading="lazy"
                  src="../images/arrow_dd.svg"
                  alt="arrow right"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Hometimeline />
      <HomeVedio />
      <HomeTestimonials />
      <HomeBlogs />
      <FooterForm />
    </>
  );
};

export default Aboutsection;
