import avatar from "../../assets/avatar.jpeg"
import cart from "../../assets/icons/cartIcon.png"
import logo from "../../assets/EventHost.png"

const Navbar = () => {
  return (
    <div className='navbar p-[20px] rounded-[20px] text-white flex justify-between items-center'>
      <div className='flex justify-evenly w-fit items-center'>
        <img className="w-[112px] h-[27px] object-contain" src={logo} alt="" />
        <div className='ticktCutter flex flex-col items-center mt-[-40px]'>
        <div className='bg-white h-[20px] w-[20px] rounded-full'></div>
        <div className='border-dashed h-[50px] border-white border-l-2'></div>
        <div className='bg-white h-[20px] w-[20px] rounded-full mb-[-40px]'></div>
        </div>
      </div>
      <div className="navlinks flex items-start justify-evenly gap-5">
        <p className='text-[16px] font-[400] leading-[20px]'>Home</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Events</p>
        <p className='text-[16px] font-[400] leading-[20px]'>About us</p>
        <p className='text-[16px] font-[400] leading-[20px]'>Contacts</p>
      </div>
      <div className='flex justify-around w-[15%] items-center gap-4'>
      <div className='ticktCutter flex flex-col items-center mt-[-40px]'>
      <div className='bg-white h-[20px] w-[20px] rounded-full'></div>
      <div className='border-dashed h-[50px] border-white border-l-2'></div>
      <div className='bg-white h-[20px] w-[20px] rounded-full mb-[-40px]'></div>
      </div>
      <div className="flex items-center gap-5">
        <img className="h-[30px] w-[30px] rounded-full " src={avatar} alt="" />
        <img className="h-[30px] w-[30px]" src={cart} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Navbar
