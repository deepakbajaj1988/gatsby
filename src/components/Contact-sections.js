import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HomesliderImg from "../images/contact-head-img.jpg";
import Rotating_back from "../images/let_back.png";

const HomeSlider = () => {
  return (
    <>
      <section className="bg-black mobile:!bg-none relative bg-no-repeat head-section">
        <div className="container-right-side-full">
          <div className="grid grid-cols-[550px_1fr] gap-[100px] items-center mobile:grid-cols-1 tablet:grid-cols-[1fr_1fr] tablet:gap-[20px] mobile:gap-[0px]">
            <div className="mobile:col-start-auto mobile:order-2 mobile:text-center py-[25px]">
              <h3 className="text-white mb-4">Contact Us</h3>
              <h1 className="text-white mb-8 mobile:w-full mobile:mb-[20px]">
                We are More Than Happy to Help
              </h1>
            </div>
            <div className="mobile:col-end-auto mobile:order-1 mobile:mb-6 h-[100%] -mr-[15px] mobile:-ml-[15px] relative">
              <StaticImage
                className="mobile:opacity-100 h-[100%] head-img"
                src="../images/contact-head-img.jpg"
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

      <section class="row-pad">
        <div class="container mx-auto flex flex-col px-8">
          <div class="flex flex-1 max-mdtab:flex-col-reverse max-mdtab:flex-wrap items-center xl:gap-20 gap-10">
            <div class="w-full max-mdtab:w-full">
              <h2>
                <span class="under_line2">Corporate Offices</span>
              </h2>
            </div>
          </div>
          <p class="font-semibold text-[30px] leading-[50px] text-black max-w-[880px] mobile:text-[20px] mobile:leading-[30px]">
            We’re more than happy to help. Give us a call or just drop a message
            & we’ll get in touch with you soon
          </p>
        </div>
        <div class="container mx-auto px-8 py-20 pb-8 mobile:pt-6 mobile:pb-0">
          <ul class="grid grid-cols-3 text-black gap-5 contact-info mobile:grid-cols-1">
            <li class="relative flex gap-3 align-middle">
              <div class="off_ico mt-2">
                <svg
                  width="30"
                  height="36"
                  viewBox="3 0 19 24"
                  class="fill-current"
                >
                  <path
                    d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                    className="fill-[#c91d61]"
                  ></path>
                </svg>
              </div>
              <div class="off_add">
                <h4 className="text-[25px] font-bold">
                  Mississauga (Head Office)
                </h4>
                <p>
                  25 Watline Avenue, Suite 302, <br />
                  Mississauga, Ontario L4Z 2Z1
                </p>
                <div></div>
              </div>
            </li>
            <li class="relative flex gap-3 align-middle">
              <div class="off_ico mt-2">
                <svg
                  width="30"
                  height="36"
                  viewBox="3 0 19 24"
                  class="fill-current"
                >
                  <path
                    d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
                    className="fill-[#c91d61]"
                  ></path>
                </svg>
              </div>
              <div class="off_add">
                <h4 className="text-[25px] font-bold">Toronto Office</h4>
                <p>
                  25O University Ave. Suite 200
                  <br />
                  Toronto, ON M5H 3E5
                </p>
              </div>
            </li>
            <li class="relative flex gap-3 align-middle">
              <div class="off_ico mt-2">
                <svg
                  version="1.2"
                  xmlns=""
                  viewBox="0 0 19 19"
                  width="28"
                  height="36"
                >
                  <path
                    d="m14.5 11.4q-0.2-0.1-0.3-0.1-0.4 0-0.7 0.3l-1.7 2.1q-4.3-2-6.3-6.2l2.2-1.7q0.3-0.3 0.3-0.7 0-0.2-0.1-0.3l-1.7-4q-0.2-0.5-0.8-0.5-0.1 0-0.1 0l-3.7 0.9q-0.7 0.1-0.7 0.8 0 6.7 4.8 11.5 4.8 4.8 11.6 4.8 0.6 0 0.8-0.7l0.8-3.6q0-0.1 0-0.2 0-0.6-0.5-0.8z"
                    className="fill-[#c91d61]"
                  ></path>
                </svg>
              </div>
              <div class="off_add">
                <h4 className="text-[25px] font-bold">Quick Contact</h4>
                <p>
                  <a href="tel:+18886797773">1-888-679-7773</a>,{" "}
                  <a href="tel:+16474966189 ">647-496-6189</a> <br />
                  info@kinexmedia.com
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.272505047036!2d-79.6719782!3d43.6216869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b40a278c00001%3A0x69d17bcd5e306500!2s25%20Watline%20Ave%2C%20Mississauga%2C%20ON%20L4Z%202Z1%2C%20Canada!5e0!3m2!1sen!2sin!4v1714736191371!5m2!1sen!2sin"
          width="100%"
          height="700"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default HomeSlider;
