'use client'

import { HomeContainer, Product } from "./styles";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from 'next/image';
import camiseta1 from '../assets/Ignite/Type1.png'
import camiseta2 from '../assets/Ignite/Type2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home() {


  return (
    <>
       <HomeContainer>
       <Swiper
       spaceBetween={50}
       slidesPerView={3}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)} > 
       <SwiperSlide>
         <Product>
             <Image src={camiseta1.src} alt={""} width={540} height={480} />

             <footer>
               <strong>camiseta x</strong>
               <span>R$ 79.90</span>
             </footer>
         </Product>
       </SwiperSlide>
       <SwiperSlide>
         <Product>
             <Image src={camiseta1.src} alt={""} width={540} height={480} />

             <footer>
               <strong>camiseta x</strong>
               <span>R$ 79.90</span>
             </footer>
         </Product>
       </SwiperSlide>
       <SwiperSlide>
         <Product>
             <Image src={camiseta1.src} alt={""} width={540} height={480} />

             <footer>
               <strong>camiseta x</strong>
               <span>R$ 79.90</span>
             </footer>
         </Product>
       </SwiperSlide>
       <SwiperSlide>
         <Product>
             <Image src={camiseta1.src} alt={""} width={540} height={480} />

             <footer>
               <strong>camiseta x</strong>
               <span>R$ 79.90</span>
             </footer>
         </Product>
       </SwiperSlide>
       </Swiper>
   </HomeContainer>
    </>
    
  );
}
