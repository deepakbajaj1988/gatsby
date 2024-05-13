import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header"
import Footer from "../components/Footer"  
import ContactHeadsection from "../components/Contact-sections" 


const ContactUs = () => {   
  return (  
     <>     
    <Layout pageTitle="Get in Touch"></Layout>
    <Header/>    
    <section className="get-in-touch" id="form1">
        <div width="100%">
          <div
            className="peralex_image relative md:py-[100px] smallLaptop:py-[80px] tabletPortrait:py-[50px] mobile:py-[50px] overflow-hidden bg-cover bg-center bg-no-repeat home_imge lozad break_t:pb-[60px]"
            id="contact-us"
          >
            <div className="container laptop:max-w-full px-8 m-auto smallLaptop:max-w-full">
              <div className="relative md:w-full w-full m-auto">
                <div className="grid m-auto grid-cols-1">
                  <div className="relative">
                    <div className="text-left flex flex-col justify-center h-full">
                      <div className="top_head_content">
                        <h2 className="mb-0">                    
                          <span className=" block stroke-0">
                          Got a Project? Let’s Talk!
                          </span>
                        </h2>
                        <h3 className="mb-[50px] md:text-[50px] mobile:text-[28px] mobilePortrait:text-[27px] leading-[1] font-bold smallLaptop:text-[46px] tablet:text-[38px] boder_green_md left_custom  mt-5 break_t:text-[34px] break_t:mt-3 mobile:mb-[0px]">
                        Give us a call, write an email or fill out the form below.
                        </h3>
                      </div>

                      <div className="mt-10" x-data="wpForm()">
                        <div className="divider"></div>

                        <form
                          className="all_fr_main rounded-2xl"
                          action="http://localhost/kinex/wp-json/gf/v2/forms/1/submissions"
                          method="post"
                          autocomplete="off"
                          x-ref="form"
                        >
                          <div className="all_fr">
                            <div className="grid gap-[50px] gap-y-10 sm:grid-cols-2 form_inn">
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                                <input
                                  id="input_11"
                                  type="text"
                                  name="input_11"
                                  placeholder="First name"
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                />
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_11']"
                                  x-text="validationError['input_11']"
                                  x-cloak=""
                                ></div>
                              </div>
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                                <input
                                  type="text"
                                  name="input_14"
                                  id="input_14"
                                  placeholder="Last name"
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                /> 
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_14']"
                                  x-text="validationError['input_14']"
                                  x-cloak=""
                                ></div>
                              </div>
                            </div>
                            <div className="grid gap-[50px] gap-y-10 sm:grid-cols-2 form_inn">
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                                <input
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                  id="input_3"
                                  placeholder="Email"
                                  type="email"
                                  name="input_3"
                                />
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_3']"
                                  x-text="validationError['input_3']"
                                  x-cloak=""
                                ></div>
                              </div>
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                                <input
                                  type="tel"
                                  name="input_13"
                                  id="input_13"
                                  placeholder="Phone"
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                />
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_13']"
                                  x-text="validationError['input_13']"
                                  x-cloak=""
                                ></div>
                              </div>
                            </div>
                            <div className="grid gap-[50px] gap-y-10 sm:grid-cols-2 form_inn">
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                                <input
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                  id="input_17"
                                  placeholder="Company Name"
                                  type="text"
                                  name="input_17"
                                />
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_17']"
                                  x-text="validationError['input_17']"
                                  x-cloak=""
                                ></div>
                              </div>
                              <div className="form-group relative mb-8 tablet:mb-[15px]">
                              <input
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light "
                                  id="input_17"
                                  placeholder="Company URL (Optional)"
                                  type="text"
                                  name="input_17"
                                />
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_20']"
                                  x-text="validationError['input_20']"
                                  x-cloak=""
                                ></div>
                              </div>
                            </div>
                            <div className="grid gap-[50px] gap-y-10 sm:grid-cols-2 form_inn items-end">
                              <div className="form-group relative tablet:mb-[15px]">
                                <textarea
                                  type="text"
                                  name="input_15"
                                  id="input_15"
                                  placeholder="Project Brief"
                                  className="w-full border-gray/20 bg-transparent py-[12px] pr-4 outline-none transition focus:border-secondary border-b-2 border-[#dadada] text-[16px] font-light  min-h-[60px]"
                                ></textarea>
                                <div
                                  className="form-input-hint absolute text-left mt-2 left-0 text-sm text-red-600"
                                  x-show="validationError['input_15']"
                                  x-text="validationError['input_15']"
                                  x-cloak=""
                                ></div>
                              </div>

                              <div className="form-group mt-8 text-left lg:text-left tablet:mb-[15px] mobile:mt-0"> 
                                <button
                                  type="submit"
                                  id="submit"
                                  className="rounded-full min-h-[46px] xl:flex justify-center items-center relative transition-all  pr-[40px] font-bold text-[25px]"
                                >
                                  <span className="under_line_fr1">
                                    Submit
                                  </span>
                                  <img
                                    className="absolute right-0 top-2/4 -translate-y-2/4"
                                    loading="lazy"
                                    width="25"
                                    height="25"
                                    src="http://localhost/kinex/wp-content/uploads/2024/04/arrow_rt.png"
                                    alt="arrow right"
                                  />
                                </button>
                              </div>
                            </div>
                            <span className="absolute right-0 text-xs leading-[18px] text-[#808080] bottom-[54px] font-normal line_fr_c  ">
                              This site is protected by reCAPTCHA and the Google
                              Privacy Policy and Terms of Service apply.
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </> 
  )
}

 
export default ContactUs




 
