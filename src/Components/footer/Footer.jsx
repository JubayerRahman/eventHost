import icon from "../../assets/EventHost.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import bkashLogo from "../../assets/icons/bkashlogo.png"
import nogodLogo from "../../assets/icons/nogodLogo.png"
import roketlogo from "../../assets/icons/roketlogo.png"


const Footer = () => {
  return (
    <div className='navbar p-[40px] text-white mt-[100px]'>
      <div className="flex justify-between pt-[50px] pb-[50px]">
        <div className="logoSection flex flex-col gap-3">
            <img className="w-[189px] h-[45px] object-contain" src={icon} alt="" />
            <p className="font-[400] text-[16px] leading-[24px]">IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon, Dhaka - 1207 <br /> 02222-222222, 01111111111</p>
        </div>
        <div className="navlinks flex flex-col items-start gap-3">
        <p className='text-[16px] font-[400] leading-[20px]'>Home</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Events</p>
        <p className='text-[16px] font-[400] leading-[20px]'>About us</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Contacts</p>
      </div>
        <div className="moreLinks flex flex-col items-start gap-3">
        <p className='text-[16px] font-[400] leading-[20px]'>Event Dashboard</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Terms & Condition</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Privacy & Refund Policy</p>
      </div>
        <div>
        <p className='text-[16px] font-[400] leading-[20px]'>Follow us</p>
        <div className="icons flex gap-3 items-center mt-[20px]">
           <p className="text-[23px]"><FaFacebook/></p> 
           <p className="text-[23px]"><FaInstagram/></p> 
           <p className="text-[23px]"><FaLinkedin/></p> 
           <p className="text-[23px]"><FaYoutube/></p> 
        </div>
        </div>
        <div></div>
      </div>
      <div className="w-full border-t-2 border-white">
        <div className="flex justify-between items-center">
           <div className="flex items-center gap-4 mt-[20px]">
                <h1 className="font-[400] text-[16px] leading-[19px]">Pay With</h1>
                <img className="w-[62px] h-[28px] object-contain" src={bkashLogo} alt="" />
                <img className="w-[62px] h-[28px] object-contain" src={nogodLogo} alt="" />
                <img className="w-[62px] h-[28px] object-contain" src={roketlogo} alt="" />
           </div>
           <h1 className="font-[400] text-[16px] leading-[52px]">©2023 TickHost & <a className="underline" href="https://uvtrbd.com" target="_blank">UVTR.</a> All right reserved</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
