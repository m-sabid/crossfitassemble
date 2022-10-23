import React from "react";
import userImage from "../../../assets/reviewer.png";
import quote from "../../../assets/Image/HomeReview/coma.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import AuthUser from "../../../hooks/AuthUser/AuthUser";
import { useQuery } from "react-query";
import Loading from "../../../hooks/Loading/Loading";

export default function App() {
    const { token } = AuthUser()


    const { data: review, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://crossfitassemble.xyz/api/feedback?page=1&limit=10`, {
            method: 'GET',
        }).then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }



    return (<div className="mid-container">
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            {
                review?.data?.map((item, index) => (
                    <SwiperSlide  key={index}>
                        <div className="image-slide-bgOne relative md:px-10 md:py-24 px-5 py-16 md:flex items-center justify-between">
                            <div className="md:w-[70%] flex">
                                <img className="quote_image relative top-[-35px]  quote_image_one inline-block" src={quote} alt="" />
                                <div>
                                    <span className="text-white italic mx-auto">{item?.message}</span>
                                    <h2 className="text-gray-300 text-sm italic mx-auto">{item?.days_ago} ago</h2>
                                </div>
                                <img className="quote_image quote_image_two inline-block align-bottom -mb-5" src={quote} alt="" />
                            </div>
                            <div className="md:w-[25%] lg:mr-[-35px] mt-8 md:mt-0 flex flex-col items-center justify-center">
                                <div className="md:w-32 md:h-32 w-20 h-20 rounded-full overflow-hidden ring ring-warning ring-offset-base-100 ring-offset-2">
                                    {
                                        item?.user?.profile_image ? <img className=" w-full h-full" src={item?.user?.profile_image} alt="" /> : <img className=" w-full h-full" src='https://i.ibb.co/vHfKc6X/blank-profile-picture-g3bbbf5065-1280.png' alt="" />
                                    }
                                </div>
                                <h1 className="text-white md:text-2xl sm:text-xl font-bold pt-4">{item?.user?.name}</h1>
                                <p className="text-white text-xs">{item?.days_ago} ago</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </div >
    );
}
