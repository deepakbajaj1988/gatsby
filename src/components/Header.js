import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image' 
 



const Header = () => {
  return (
    <>
      
        <header className="top-0 w-full bg-black z-[9999] font-semibold">
          <div className="max-w-[1480px] mx-auto px-[15px] py-7  justify-between flex items-center relative">
    
            <div className="logo grid grid-cols-2 items-center gap-5">
              <Link to="/">
                <StaticImage
                  className="flex gap-20 justify-between all_space fter_inner max-lg:block" 
                  src="../images/km-logo.png" alt="" layout="fixed" 
                />
              </Link>
              <StaticImage
                className="cursor-pointer"
                src="../images/menu-icon.png" alt="" layout="fixed"
              />
            </div> 
          

          <div className="navigation-button flex">
            <ul id="menu-main-menu" className="main-nav navbar-nav ml-auto">
              <li
                id="menu-item-25"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25 group relative dropdown hover:text-primary cursor-pointer font-[500] max-xl:text-base px-[20px] inline-block max-lg:px-[8px]"
              >
                <Link
                  className="max-md:text-white max-lg:!text-[14px] text-white font-semibold hover:text-kinex_pink ease-in-out duration-200"
                  to="/our-work/" 
                  itemprop="url"
                >
                  Our Work
                </Link>
              </li>
              <li
                id="menu-item-24"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24 group relative dropdown hover:text-primary cursor-pointer font-[500] max-xl:text-base px-[20px] inline-block max-lg:px-[8px]"
              > 
                <Link
                  className="max-md:text-white max-lg:!text-[14px] text-white font-semibold hover:text-kinex_pink ease-in-out duration-200"
                  to="/website-design"
                  itemprop="url"
                >
                  Website Design
                </Link>
              </li>
              <li
                id="menu-item-23"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 group relative dropdown hover:text-primary cursor-pointer font-[500] max-xl:text-base px-[20px] inline-block max-lg:px-[8px]"
              >
                <Link
                  className="max-md:text-white max-lg:!text-[14px] text-white font-semibold hover:text-kinex_pink ease-in-out duration-200"
                  to="/ecommerce"
                  itemprop="url"
                >
                  Ecommerce
                </Link>
              </li>
              <li
                id="menu-item-22"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22 group relative dropdown hover:text-primary cursor-pointer font-[500] max-xl:text-base px-[20px] inline-block max-lg:px-[8px]"
              >
                <Link
                  className="max-md:text-white max-lg:!text-[14px] text-white font-semibold hover:text-kinex_pink ease-in-out duration-200"
                  to="/magento-commerce"
                  itemprop="url"
                >
                  Magento Commerce
                </Link>
              </li>
              <li
                id="menu-item-21"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21 group relative dropdown hover:text-primary cursor-pointer font-[500] max-xl:text-base px-[20px] inline-block max-lg:px-[8px]"
              >
                <Link
                  className="max-md:text-white max-lg:!text-[14px] text-white font-semibold hover:text-kinex_pink ease-in-out duration-200"
                  to="/digital-marketing"
                  itemprop="url"
                >
                  Digital Marketing
                </Link> 
              </li>
            </ul> 
            <div className="Header-button ml-5">
              <Link to="/get-in-touch" className="btn"> 
                Get in Touch
              </Link>
            </div>
          </div> 
          </div>
          
        </header>
      
    </>
  );
};

export default Header;
