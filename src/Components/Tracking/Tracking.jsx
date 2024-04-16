import paymentIcon from "../../assets/icons/paymentIcon.png"
import rocket from "../../assets/rocket.png"
import bkash from "../../assets/bkash.png"
import nogod from "../../assets/nogod.png"

const Tracking = () => {
  return (
    <div className='mb-[50px] text-center flex flex-col items-center gap-5 trackingBg rounded-3xl'>
      <h1 className='font-[700] text-[48px] lading-[58px] text-center'>Simplify Ticketing</h1>
      <p className='font-[400] text-[24px] leading-[29px] scannergradient'>First Ever Unique  QR Ticketing <br /> Platform For Event Registration & Booking</p>
      <button className="navbar text-white flex gap-2 p-[10px] rounded-md"> <img src={paymentIcon} alt="" />Secure Payment with</button>
      <div className="flex items-end mt-[50px]">
        <img className="w-[400px] h-[500px] object-fill mr-[-50px]" src={rocket} alt="" />
        <img className="w-[400px] h-[600px] object-fill z-10" src={bkash} alt="" />
        <img className="w-[400px] h-[500px] object-fill ml-[-50px] z-0" src={nogod} alt="" />
      </div>
    </div>
  )
}

export default Tracking
