import click1 from "../../assets/icons/click1.png"
import click2 from "../../assets/icons/click2.png"
import click3 from "../../assets/icons/click3.png"
import click4 from "../../assets/icons/click4.png"

const QrScanner = () => {
  return (
    <div className='text-center mb-[50px]'>
      <h1 className='font-[600] text-[48px] lading-[58px] text-center'>Automated QR Scanner</h1>
      <p className='font-[400] text-[24px] leading-[29px] scannergradient'>Scan & Verify The Attendees Directly By Our QR Scanning <br /> Solution.</p>
      <div className="grid grid-cols-4 gap-5 mt-[25px] text-left">
      <div className="box1 bg-[#F1F3FF] border-2 border-[#DBD3FE] rounded-[20px] p-[20px] flex flex-col items-start gap-3">
        <div className="w-[65px] h-[65px] bg-white flex items-center justify-center rounded-full">
            <img className="w-[60px] h-[60px]  p-[10px] object-contain" src={click1} alt="" />
        </div>
        <h1 className="font-[700] text-[32px] lading-[38.39px]">One Click</h1>
        <p  className="font-[400] text-[16px] lading-[19.36px]">QR verification System</p>
      </div>
      <div className="box2 bg-[#F1F3FF] border-2 border-[#DBD3FE] rounded-[20px] p-[20px] flex flex-col items-start gap-3">
        <div className="w-[65px] h-[65px] bg-white flex items-center justify-center rounded-full">
            <img className="w-[60px] h-[60px]  p-[10px] object-contain" src={click2} alt="" />
        </div>
        <h1 className="font-[700] text-[32px] lading-[38.39px]">One time</h1>
        <p  className="font-[400] text-[16px] lading-[19.36px]">QR Code</p>
      </div>
      <div className="box3 bg-[#F1F3FF] border-2 border-[#DBD3FE] rounded-[20px] p-[20px] flex flex-col items-start gap-3">
        <div className="w-[65px] h-[65px] bg-white flex items-center justify-center rounded-full">
            <img className="w-[60px] h-[60px]  p-[10px] object-contain" src={click3} alt="" />
        </div>
        <h1 className="font-[700] text-[32px] lading-[38.39px]">Easy Access</h1>
        <p  className="font-[400] text-[16px] lading-[19.36px]">lorem ispum access</p>
      </div>
      <div className="box4 bg-[#F1F3FF] border-2 border-[#DBD3FE] rounded-[20px] p-[20px] flex flex-col items-start gap-3">
        <div className="w-[65px] h-[65px] bg-white flex items-center justify-center rounded-full">
            <img className="w-[60px] h-[60px]  p-[10px] object-contain" src={click4} alt="" />
        </div>
        <h1 className="font-[700] text-[32px] lading-[38.39px]">mail</h1>
        <p  className="font-[400] text-[16px] lading-[19.36px]">Send bulk personalized mail with attachments</p>
      </div>
      </div>
    </div>
  )
}

export default QrScanner
