import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ticketIcon from "../../assets/icons/ticketIcon.png"

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Carousel 
    className='slider rounded-3xl mt-[50px]' 
    responsive={responsive}
    swipeable={true}
    draggable={true}
    showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      <div className='text-white p-[40px] h-[450px] flex flex-col gap-3 justify-center'>
        <h1 className='font-[700] text-[40px] leading-[48.41px]'>CMA Fest</h1>
        <h1 className='font-[400] text-[20px] leading-[30px]'>Make memories that will last a lifetime. See your favorite
        <br />
        artists live at CMA Fest!</h1>
        <div className="buttons flex gap-2">
            <button className='bg-[#7342F9] rounded-xl flex items-center p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '><img src={ticketIcon} alt="" /> Get Ticket</button>
            <button className=' border-2 border-white rounded-xl p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '>Explore All Events</button>
        </div>
      </div>
      <div className='text-white p-[40px] h-[450px] flex flex-col gap-3 justify-center'>
        <h1 className='font-[700] text-[40px] leading-[48.41px]'>CMA Fest</h1>
        <h1 className='font-[400] text-[20px] leading-[30px]'>Make memories that will last a lifetime. See your favorite
        <br />
        artists live at CMA Fest!</h1>
        <div className="buttons flex gap-2">
            <button className='bg-[#7342F9] rounded-xl flex items-center p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '><img src={ticketIcon} alt="" /> Get Ticket</button>
            <button className=' border-2 border-white rounded-xl p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '>Explore All Events</button>
        </div>
      </div>
      <div className='text-white p-[40px] h-[450px] flex flex-col gap-3 justify-center'>
        <h1 className='font-[700] text-[40px] leading-[48.41px]'>CMA Fest</h1>
        <h1 className='font-[400] text-[20px] leading-[30px]'>Make memories that will last a lifetime. See your favorite
        <br />
        artists live at CMA Fest!</h1>
        <div className="buttons flex gap-2">
            <button className='bg-[#7342F9] rounded-xl flex items-center p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '><img src={ticketIcon} alt="" /> Get Ticket</button>
            <button className=' border-2 border-white rounded-xl p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '>Explore All Events</button>
        </div>
      </div>
      <div className='text-white p-[40px] h-[450px] flex flex-col gap-3 justify-center'>
        <h1 className='font-[700] text-[40px] leading-[48.41px]'>CMA Fest</h1>
        <h1 className='font-[400] text-[20px] leading-[30px]'>Make memories that will last a lifetime. See your favorite
        <br />
        artists live at CMA Fest!</h1>
        <div className="buttons flex gap-2">
            <button className='bg-[#7342F9] rounded-xl flex items-center p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '><img src={ticketIcon} alt="" /> Get Ticket</button>
            <button className=' border-2 border-white rounded-xl p-[10px] gap-3 font-[400] text-[16px] leading-[20px] '>Explore All Events</button>
        </div>
      </div>
    </Carousel>
  )
}

export default Slider
