"use client";

import Link from "next/link";
import ItemCampaign from "../ItemCampaign";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";

export default function SectionCarouselCards({ data }) {
  const { title, subTitle, link, cards, type } = data;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.titleBar}>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <h3 dangerouslySetInnerHTML={{ __html: subTitle }} />
          </div>
          <Link href={link}>Veja mais!</Link>
        </div>
        <div className={styles.swiperContainer}>
          <Swiper
            navigation={{
              prevEl: `.prev-${type}`,
              nextEl: `.next-${type}`,
            }}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={"auto"}
          >
            {cards.map((card, index) => (
              <SwiperSlide className={styles.card} key={index}>
                <ItemCampaign data={card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.navigation}>
            <div className={clsx(styles.prev, `prev-${type}`)}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  transform="matrix(-1 0 0 1 56 0)"
                  fill="currentColor" 
                />
                <path
                  d="M24.9623 22.3433L26.3732 23.7608L23.103 27.0157L36.708 27.0294L36.706 29.0294L23.1382 29.0158L26.3534 32.246L24.9359 33.6569L19.2922 27.9869L24.9623 22.3433Z"
                  fill="#032221"
                />
              </svg>
            </div>
            <div className={clsx(styles.next, `next-${type}`)}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="currentColor" />
                <path
                  d="M31.0377 22.3433L29.6268 23.7608L32.897 27.0157L19.292 27.0294L19.294 29.0294L32.8618 29.0158L29.6466 32.246L31.0641 33.6569L36.7078 27.9869L31.0377 22.3433Z"
                  fill="#032221"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
