"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";
import ItemNews from "../ItemNews";

export default function SectionNews({ data }) {
  const { title, subTitle, link, cards, type } = data;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.titleBar}>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <h3 dangerouslySetInnerHTML={{ __html: subTitle }} />
          </div>
          <Link href={link}>
            Ler todas as notícias
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
                fill="currentColor"
              />
            </svg>
          </Link>
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
                <ItemNews data={card} />
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
                  fill="#fff"
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
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
