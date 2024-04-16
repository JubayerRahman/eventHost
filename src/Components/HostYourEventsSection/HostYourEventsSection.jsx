import hostYourEvent from "../../assets/hostYourEvent.png"
import { FaCheckCircle } from "react-icons/fa";


const HostYourEventsSection = () => {
  return (
    <div className='navbar mt-[50px] mb-[50px] rounded-xl  text-white flex items-center justify-evenly gap-5 w-full'>
        <div className="w-[40%]">
         <img className="p-[40px]" src={hostYourEvent}/>
        </div>
      <div className="w-[60%] flex flex-col gap-3 eventquality p-[20px] pt-[100px] pb-[100px]">
        <h1 className="font-[600] text-[32px] leading-[48px]">Host Your Event Easily & Automatedly With Us</h1>
        <h1 className="font-[400] text-[24px] leading-[36px]">We Provide The Best Event Ticketing & <br /> Management Solutions</h1>
        <p className="font-[400] text-[16px] leading-[20px] flex gap-3 items-center"><span className="text-[26px]"><FaCheckCircle/></span> Host your event with easy steps!</p>
        <p className="font-[400] text-[16px] leading-[20px] flex gap-3 items-center"><span className="text-[26px]"><FaCheckCircle/></span> Automated payment System & ticket will be sent to mail.</p>
        <p className="font-[400] text-[16px] leading-[20px] flex gap-3 items-center"><span className="text-[26px]"><FaCheckCircle/></span> Access to registration and transaction reports</p>
        <p className="font-[400] text-[16px] leading-[20px] flex gap-3 items-center"><span className="text-[26px]"><FaCheckCircle/></span> Send bulk personalized mail with attachments</p>
      </div>
    </div>
  )
}

export default HostYourEventsSection
