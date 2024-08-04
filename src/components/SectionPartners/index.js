"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function SectionPartners({ data }) {

  return (
    <section className={styles.section}>
      <div className={styles.titleBar}>
        <h2>Nossos <strong>Parceiros</strong> e <strong>Ongs</strong></h2>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          freeMode={true}
          allowTouchMove={false}
          speed={1200}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          {data.map((card, index) => (
            <SwiperSlide className={styles.card} key={index}>
              <Link
                href={
                  "https://doar.acnur.org/page/ACNURBR/doe/enchentes-no-sul-do-brasil"
                }
              >
                <Image src={card.image} alt={card.name} width={130} height={56} />
              </Link>
            </SwiperSlide> 
          ))}
        </Swiper>
      </div>
    </section>
  );
}
