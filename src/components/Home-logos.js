import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Homelogos = () => {
  return (
    <>
      <section
        className="pb-32 keepcompany FullScreen:pb-[100px] smallLaptop:pb-[80px] tablet:pb-[70px] tabletPortrait:pb-[60px] mobile:pb-[50px] text-center"
        x-data="LogoloadMore"
      >
        <div className="container mx-auto relative" x-show="items.length > 0">
          <div className="mx-auto">
            <div className="w-full">
              <input type="hidden" id="logo_category" value="24" />
              <ul className="grid grid-cols-1 mobileLand:grid-cols-1 md:grid-cols-2 tabletPortrait:grid-cols-2 lg:grid-cols-5 smallLaptop:gap-[25px] p-[70px] py-[70px] gap-[50px] m-auto accolades_home_inner items-center pt-0 FullScreen:p-0 FullScreen:pb-[70px]">
                <template x-for="(item, index) in items">
                  <li>
                    <StaticImage className="m-auto" alt="" />
                  </li>
                </template>
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
                    src="../images/home_cli9.png"
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
              <div className="max-w-[765px] mx-auto flex flex-col relative before:content-[''] before:bg-[#e0e0e0] before:w-[580px] before:h-[2px] before:absolute before:right-[50%] before:mr-[-290px] before:top-[0] before:z-0 pt-20 full_all_m mobile:before:hidden mobile:border-t-[#f0f2f5] mobile:border-t-2 mobile:pt-10"> 
                <div className="flex flex-1 mobile:flex-col-reverse mobile:flex-wrap items-center xl:gap-12 gap-10 mobile:block mobile:text-center">
                  <div className="w-4/6 mobile:w-full"> 
                  <h2 className="font-bold text-[45px] leading-[64px] mb-0 tablet:text-[35px]">
                      Great Minds Think Alike.
                    </h2>
                  </div>
                  <div className="w-2/6 mobile:w-full">
                    <div className="flex gap-5 justify-end mobile:inline-block mobile:mt-4"> 
                    <a aria-current="page" className="btn-white flex items-center" href="/"> <span>Get In Touch</span>  <svg class="ml-2" width="20" height="10"><path id="Arrow_33_-_www.Shapes4FREE.com1_copy_4" data-name="Arrow 33 - www.Shapes4FREE.com1 copy 4" class="cls-1" d="M1666.77,3469.44l-4.28-4.21a0.791,0.791,0,0,0-1.12,0,0.767,0.767,0,0,0,0,1.1l2.93,2.89h-16.51a0.78,0.78,0,1,0,0,1.56h16.51l-2.93,2.88a0.779,0.779,0,0,0,0,1.11,0.822,0.822,0,0,0,.56.23,0.787,0.787,0,0,0,.56-0.23l4.28-4.22A0.779,0.779,0,0,0,1666.77,3469.44Z" transform="translate(-1647 -3465)"></path></svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homelogos;
