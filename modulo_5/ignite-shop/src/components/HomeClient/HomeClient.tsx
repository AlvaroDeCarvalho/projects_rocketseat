"use client"
import { HomeContainer, SwiperStyles, Product } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getProducts } from "@/lib/getProducts";


interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface HomeClientProps {
  products: Product[];
}
//SSR
const products = await getProducts();

export default function HomeClient() {
  return (
      <HomeContainer>
    <SwiperStyles>
        <Swiper
          spaceBetween={50} 
          slidesPerView={3} 
          navigation={false}
          pagination={{ clickable: true }}
          
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <footer>
                  <strong>{product.name}</strong>
                  <span>R$ {product.price}</span>
                </footer>
              </Product>
            </SwiperSlide>
          ))}
        </Swiper>
    </SwiperStyles>
      </HomeContainer>
  );
}
