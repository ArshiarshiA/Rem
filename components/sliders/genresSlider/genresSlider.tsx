'use client'
import GameGenre from "@/components/gameGenre/gameGenre";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GenresGameSlider() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
        >
            <SwiperSlide><GameGenre title="horror" background="https://image.api.playstation.com/vulcan/img/rnd/202010/2818/Taj3SgG4QznNZMP62lkhMrNs.jpg" /></SwiperSlide>
            <SwiperSlide><GameGenre title="shooter" background="https://assetsio.gnwcdn.com/halo-infinite-photo-1382120.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" /></SwiperSlide>
            <SwiperSlide><GameGenre title="survival" background="https://newxboxone.ru/wp-content/uploads/2023/03/sons-of-the-forest-.jpg" /></SwiperSlide>
            <SwiperSlide><GameGenre title="Action-adventure" background="https://image.api.playstation.com/vulcan/ap/rnd/202010/0205/dyvo9eGUf7WTZx49eTpQyDuL.png" /></SwiperSlide>
            <SwiperSlide><GameGenre title="Survival horror" background="https://theeliteinstitute.net/wp-content/uploads/2023/04/image_2023-04-17_111607059-1200x640.png" /></SwiperSlide>
        </Swiper>
    )
}