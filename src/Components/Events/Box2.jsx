import image from "../../assets/box1Image.png"
import { FaLocationDot } from "react-icons/fa6";
import ticketIcon from "../../assets/icons/ticketIcon.png"
import { FaRegHeart } from "react-icons/fa";



const Box2 = () => {
  return (
    <div className="overflow-hidden">
      <div className='bg-[#F1F3FF] border-2 border-b-0 border-[#DBD3FE] rounded-[20px] overflow-hidden p-[20px] '>
        <div className="box2Image rounded-[8px] flex justify-between p-[20px]">
          <p className="bg-[#591BFF] text-white h-fit font-[400] text-[17px] leading-[20.57px] p-[10px] rounded-lg">Online</p>
          <p className="bg-[#591BFF] text-white h-fit font-[400] text-[17px] leading-[20.57px] p-[10px] rounded-lg flex gap-2 items-center">
            <span className="font-[600]"><FaRegHeart/></span>Favorite</p>
        </div>
    </div>
        <div className='ticktCutter flex  justify-center items-center mt-[-20px] mb-[-20px] scale-[1.07] '>
        <div className='bg-white h-[30px] w-[30px] rounded-full border-[#DBD3FE] border-2'></div>
        <div className='border-dashed h-[2px] w-full border-[#591BFF] border-b-2'></div>
        <div className='bg-white h-[30px] w-[30px] rounded-full border-[#DBD3FE] border-2'></div>
        </div>
        <div className='bg-[#F1F3FF] border-2 border-t-0 border-[#DBD3FE] rounded-[20px] overflow-hidden p-[20px]'>
        <div className="flex gap-3 h-fit items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-[16px] font-[400] leading-[17px] navbar w-fit text-white p-[10px] rounded-lg">music</h1>
            <h1 className="flex gap-3 items-center font-[400] text-[14px] leading-[17px]"> <span className="text-[#591BFF]"> <FaLocationDot/> </span> Celebrity Convention Hall</h1>
            <h1 className="font-[600] text-[22px] leading-[36px]">ROUFIAN’S HSC-24 RAG DAy</h1>
          </div>
          <div className="bg-white p-[10px] rounded-[15px] flex flex-col gap-2 items-center w-[30%]">
            <h1 className="font-[400] text-[16px] leading-[17px]">Apr</h1>
            <h1 className="font-[600] text-[32px] leading-[39px] text-[#591BFF]">20</h1>
            <h1 className="font-[400] text-[16px] leading-[17px] ">10:00 PM</h1>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-4">
          <button className="navbar p-[10px] rounded-md text-white flex items-center gap-2 font-[400] text-[16px] leading-[19px] h-[43px]"><img src={ticketIcon} alt="" /> See Ticket</button>
          <div className="bg-white p-[10px] rounded-[8px] flex gap-2 items-center h-[43px] w-[86px]">
            <h1 className="font-[600] text-[24px] leading-[29px] text-[#591BFF]">20</h1>
            <h1 className="font-[400] text-[10px] leading-[12px]">Seat left</h1>
          </div>
          <div className="p-[10px] rounded-[8px] flex gap-2 items-center h-[43px]">
            <h1 className="font-[400] text-[16px] leading-[19.36px] text-[#591BFF]">See More</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Box2
