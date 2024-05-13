import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HomeVideoBG from "../images/home-video-section-bg.webp";

const HomeVideo = () => {
  return (
    <>
      <section
        className="bg-home-video-section-bg py-[350px] bg-no-repeat bg-cover tablet:py-[200px] mobile:tablet:py-[100px]"
        style={{
          backgroundImage: `url(${HomeVideoBG})`,
        }} 
      >
        <div className="container">
          <h2 className="h2-54 !text-white text-center">Badboy Furniture</h2>
          <p className=" text-white max-w-[750px] m-auto text-center text-[20px]">
            BadBoy’s alliance with Magento 2 sets it well beyond consumer
            standards and has given a new perspective to success and customer
            delight.
          </p>
          <div className="flex items-center justify-center mt-[50px]">
            <p className="text-[25px] text-white font-bold mr-[25px]">
              Watch Video
            </p>
            <Link to="#">
              <StaticImage src="../images/play-btn.webp" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeVideo;
