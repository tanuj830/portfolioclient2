import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { Div1, NavLink, SocialIcons } from './HeaderStyles';
import Link from "next/link";
import React from "react";
// import {  FaHamburger } from 'react-icons/fa';
// import { GiCrossedBones } from 'react-icons/gi';


// import { DiCssdeck } from 'react-icons/di';
// import { GiBurningMeteor } from 'react-icons/gi';
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import { FaYoutube, FaFacebook } from "react-icons/fa";
// import {
  // BsAirplaneEngines,
  // BsFillCarFrontFill,
  // BsTelegram,
// } from "react-icons/bs";
// import SearchBar from "./SearchBar";
// import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
// import { GiMountains } from "react-icons/gi";
// import { BsGithub } from "react-icons/bs";
// import { BsSearch } from "react-icons/bs";
import { RxCross2, RxHamburgerMenu} from "react-icons/rx";
// import { GrChannel } from "react-icons/gr";
// import { FaRegKeyboard } from "react-icons/fa";
// import { TbBrandBlogger } from "react-icons/tb";
// import axios from "axios";
// import { MdCall, MdModeOfTravel, MdOutlineLocalOffer } from "react-icons/md";
// import { RiWhatsappFill } from "react-icons/ri";
// import { BsWhatsapp } from "react-icons/bs";
// import { FiPhoneCall } from "react-icons/fi";
// import { Container, Div3, NavLink, NavLinkLogo, Link, div } from './HeaderStyles';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className=" inline md:hidden  z-50 relative ">
        {/* for mobile */}
        <div  className="container mt-3 w-full bg-white text-black">
          <div className="  flex justify-between items-center gap-4 px-4 md:gap-44">
            <div className="flex items-center  py-4">
              <Link className="" href="/">
                <img
                  className="w-32"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-e0b16.appspot.com/o/ezgif.com-crop%20(6).gif?alt=media&token=635329e6-5e38-400b-b393-cd39ffaf39cd&_gl=1*9dwgq6*_ga*MTE5MDAxODIzMC4xNjU4NTQ4MzQ0*_ga_CW55HF8NVT*MTY4NTgxNDg4My4yOS4xLjE2ODU4MTU3OTYuMC4wLjA."
                />
              </Link>
            </div>

            <div className="ml-2 transition-all hover:animate-spin duration-1000">
              {!showMenu ? (
                <button
                  className="text-3xl text-stone-700 font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RxHamburgerMenu />
                </button>
              ) : (
                <button
                  className="text-3xl text-stone-700 font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RxCross2 />
                </button>
              )}
            </div>
          </div>
          <div className="mb-2 transition-all duration-1000 flex  items-center justify-between">
            {/* <div> */}
            {showMenu === true ? (
              <div className="relative  w-full   py-1">
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.1)", backdropFilter: "blur(7px)"}} className="absolute   rounded-b-3xl  text-black h-[80vh] w-full  p-10">
                  <div className="flex justify-evenly  w-full h-full flex-col">
                    <div className='text-center'>
                    <Link className="brightness-200" href="/project">
            <NavLink>Projects</NavLink>
          </Link>
                    </div>
                    <div className='text-center'>
                    <Link className="brightness-200" href="/blog">
            <NavLink>Blog</NavLink>
          </Link>
                    </div>
                    <div className='text-center'>
                    <Link className="brightness-200" href="/services">
            <NavLink>Services</NavLink>
          </Link>
                    </div>
                    <div className='text-center'>
                    <Link className="brightness-200" href="/fun">
            <NavLink>ChillZone</NavLink>
          </Link>
                    </div>
                    {/* icons */}
                    <div className='flex items-center justify-center sm:gap-3 md:gap-4'>
        <SocialIcons className='hover:bg-neutral-200 text-4xl' href="https://github.com/tanuj830">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-4xl' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-4xl' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-4xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </SocialIcons>
      </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="hidden md:inline z-50 relative">
        {/* for pc */}

        <div className='py-5 container'>
    <div  className=' flex justify-between'>
      <Div1>
      <Link className="" href="/">
                <img
                  className="w-64"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-e0b16.appspot.com/o/ezgif.com-crop%20(6).gif?alt=media&token=635329e6-5e38-400b-b393-cd39ffaf39cd&_gl=1*9dwgq6*_ga*MTE5MDAxODIzMC4xNjU4NTQ4MzQ0*_ga_CW55HF8NVT*MTY4NTgxNDg4My4yOS4xLjE2ODU4MTU3OTYuMC4wLjA."
                />
              </Link>
      </Div1>
      <div className='flex items-center md:gap-7'>
        {/* <li>
          <Link href="/">
            <NavLink>About</NavLink>
          </Link>
        </li> */}
        <li>
          <Link className="brightness-200" href="/project">
            <NavLink className='text-black'>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link className="brightness-200" href="/blog">
            <NavLink className='text-black'>Blog</NavLink>
          </Link>
        </li>
        <li>
          <Link className="brightness-200" href="/services">
            <NavLink className='text-black'>Services</NavLink>
          </Link>
        </li>
        <li>
          <Link className="brightness-200" href="/fun">
            <NavLink className='text-black'>ChillZone</NavLink>
          </Link>
        </li>
      </div>
      <div className='flex items-center md:gap-3'>
        <SocialIcons className='hover:bg-neutral-200 text-black text-3xl' href="https://github.com/tanuj830">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-black text-3xl' href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-black text-3xl' href="https://leetcode.com/tanujdotcpp/">
          <SiLeetcode />
        </SocialIcons>
        <SocialIcons className='hover:bg-neutral-200 text-black text-3xl' href="https://www.instagram.com/aka_tanuj/">
          <AiFillInstagram />
        </SocialIcons>
      </div>
  </div>
  </div>
      </div>
    </>
  );
};

export default Header;












