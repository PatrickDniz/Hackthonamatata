"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function SectionHero() {
  const images = [
    "/fullbanner01.png",
    "/fullbanner02.png",
    "/fullbanner03.png",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.swiperContainer}>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          speed={1500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}  
          freeMode={true}
          allowTouchMove={false}
        >
          {images.map((image, index) => (
            <SwiperSlide
              className={styles.fullbanner}
              key={index}
            >
              <Link
                href={
                  "https://doar.acnur.org/page/ACNURBR/doe/enchentes-no-sul-do-brasil"
                }
              >
                <Image
                  src={image}
                  alt={"fullbanner"}
                  width={1320}
                  height={640}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.titleBar}>
        <h2>{"Juntos, podemos fazer a diferença!"}</h2>
        <h3>{"Apoie nossa causa e ajude a transformar vidas."}</h3>
      </div>
      <div className={styles.buttonsBar}>
        <Link href={"/seja-um-voluntario"} className={styles.buttonPrimary}>
          Seja um voluntário
        </Link>
        <Link href={"/campanhas/cadastro"} className={styles.buttonSecondary}>
          Seja um parceiro
        </Link>
      </div>
    </section>
  );
}
