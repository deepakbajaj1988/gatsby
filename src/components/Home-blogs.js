import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HomeBlogs = () => {
  return (
    <>
      <section className="row-pad relative universal-blogs">
        <div className="container">
          <div className="flex justify-between mb-[70px] items-center mobile:block tablet:mb-[50px]">
            <div>
              <h2 className="h2-54 !mb-0 mobile:text-center">
                Know what is happening
              </h2>
            </div>
            <div className="mobile:absolute mobile:bottom-[50px] mobile:left-0 mobile:right-0 mobile:m-auto mobile:text-center mobile:flex mobile:items-center mobile:justify-center">
              <p className="text-[25px] font-bold ">
                <Link
                  to="#"
                  className="underline flex items-center gap-[25px] group"
                >
                  <span>View All</span>
                  <span>
                    <svg className="group-hover:fill-[#c91d61] h-[17px] w-[30px] relative top-[2px]">
                      <path
                        id="Arrow_33_-_www.Shapes4FREE.com1_copy"
                        data-name="Arrow 33 - www.Shapes4FREE.com1 copy"
                        className="cls-1"
                        d="M1693.74,10229.3l-6.3-6.2a1.149,1.149,0,0,0-1.65,1.6l4.31,4.2h-24.34a1.158,1.158,0,0,0-1.16,1.2,1.137,1.137,0,0,0,1.16,1.1h24.34l-4.31,4.3a1.1,1.1,0,0,0,0,1.6,1.051,1.051,0,0,0,1.65,0l6.3-6.2A1.1,1.1,0,0,0,1693.74,10229.3Z"
                        transform="translate(-1664.59 -10222.7)"
                      ></path>
                    </svg>{" "}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          </div>


          <div className="container-right-side-full mobile:pr-[15px]">
          <div className="blog-slider grid grid-cols-3 gap-[70px] tablet:grid-cols-2 mobile:grid-cols-1 tablet:gap-[20px] mobile:mb-[50px]">
            <div className="">
              <Link to="#">
                <StaticImage className="w-full" src="../images/blog-img.webp" />
              </Link>
              <h3 className="text-[30px] font-semibold pl-[20px] pt-[20px] mobile:text-[20px]">
                <Link to="#">
                  Kinex Wins Four Top Agency Clutch Awards 2021{" "}
                </Link>
              </h3>
              <p className="pl-[20px] pt-[15px]">March 10, 2021</p>
            </div>
            <div className="">
              <Link to="#">
                <StaticImage
                  className="w-full"
                  src="../images/blog-img2.webp"
                />
              </Link>
              <h3 className="text-[30px] font-semibold pl-[20px] pt-[20px] mobile:text-[20px]">
                <Link to="#">
                  Kinex Wins Four Top Agency Clutch Awards 2021{" "}
                </Link>
              </h3>
              <p className="pl-[20px] pt-[15px]">March 10, 2021</p>
            </div>
            <div className="">
              <Link to="#">
                <StaticImage
                  className="w-full"
                  src="../images/blog-img3.webp"
                />
              </Link>
              <h3 className="text-[30px] font-semibold pl-[20px] pt-[20px] mobile:text-[20px]">
                <Link to="#">
                  Kinex Wins Four Top Agency Clutch Awards 2021{" "}
                </Link>
              </h3>
              <p className="pl-[20px] pt-[15px]">March 10, 2021</p>
            </div>
          </div>
          </div>
         
      </section>
    </>
  );
};

export default HomeBlogs;
