import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../assets/Illustration.png';


export const Home = () => {
    return (
        <div className="bg-neutralSilver">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Swiper className='w-full mx-auto'
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    <SwiperSlide>
                        <div className='mt-28 md:my-28 py-12 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                            <div className='md:w-1/3'>
                                <img src={banner1} alt="" />
                            </div>
                            <div className='md:w-2/3'>
                                <h1 className='text-xl md:text-5xl font-semibold text-neutralDGrey md:w-3/4 leading-snug'>
                                    Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span>
                                </h1>
                                <p className='text-neutralGrey text-base md-8'>Where to grow your business as a photographer: site or social media?</p>
                                <button className='mt-6 btn-primary'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-28 py-12 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                            <div className='md:w-1/3'>
                                <img src={banner1} alt="" />
                            </div>
                            <div className='md:w-2/3'>
                                <h1 className='text-2xl md:text-5xl font-semibold text-neutralDGrey md:w-3/4 leading-snug'>
                                    Learn and Earn <span className='text-brandPrimary leading-snug'>in 4 Months</span>
                                </h1>
                                <p className='text-neutralGrey text-base md-8'>Where to grow your business as a photographer: site or social media?</p>
                                <button className='mt-6 btn-primary'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-28 py-12 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                            <div className='md:w-1/3'>
                                <img src={banner1} alt="" />
                            </div>
                            <div className='md:w-2/3'>
                                <h1 className='text-2xl md:text-5xl font-semibold text-neutralDGrey md:w-3/4 leading-snug'>
                                    Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span>
                                </h1>
                                <p className='text-neutralGrey text-base md-8'>Where to grow your business as a photographer: site or social media?</p>
                                <button className='mt-6 btn-primary'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}
