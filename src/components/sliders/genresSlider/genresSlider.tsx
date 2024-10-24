'use client'
import GameGenre from "@/src/components/gameGenre/gameGenre";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GenresGameSlider() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                728:{
                    slidesPerView: 4
                },
                500:{
                    slidesPerView: 2
                }
            }}
        >
            <SwiperSlide><GameGenre title="horror" background="https://image.api.playstation.com/vulcan/img/rnd/202010/2818/Taj3SgG4QznNZMP62lkhMrNs.jpg" /></SwiperSlide>
            <SwiperSlide><GameGenre title="shooter" background="https://assetsio.gnwcdn.com/halo-infinite-photo-1382120.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" /></SwiperSlide>
            <SwiperSlide><GameGenre title="survival" background="https://newxboxone.ru/wp-content/uploads/2023/03/sons-of-the-forest-.jpg" /></SwiperSlide>
            <SwiperSlide><GameGenre title="Action-adventure" background="https://image.api.playstation.com/vulcan/ap/rnd/202010/0205/dyvo9eGUf7WTZx49eTpQyDuL.png" /></SwiperSlide>
            <SwiperSlide><GameGenre title="Survival-horror" background="https://theeliteinstitute.net/wp-content/uploads/2023/04/image_2023-04-17_111607059-1200x640.png" /></SwiperSlide>
            <SwiperSlide><GameGenre title="adventure" background="https://images.gog-statics.com/ca20a040b7e7dbf11f954b4fa85e1ecdcf8f95eeba8ebf71f89455794eec80f2.jpg" /></SwiperSlide>
            <SwiperSlide><GameGenre title="fantasy" background="https://www.theaureview.com/wp-content/uploads/2023/10/Baldurs-gate-3-chatacter-creation-guide-703x395.jpeg" /></SwiperSlide>
        </Swiper>
    )
}