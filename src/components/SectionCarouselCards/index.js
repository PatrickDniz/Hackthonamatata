"use client";

import Link from "next/link";
import ItemCampaign from "../ItemCampaign";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import clsx from "clsx";

function CardItem({ type, info }) {
  if (type == "campaign") return <ItemCampaign data={info} />;
}

export default function SectionCarouselCards({ data }) {
  const { title, link, cards, type } = data;

  const catalog = ["campaign", "properties"].includes(type);

  return (
    <section className={styles.section}>
      <div className={styles.titleBar}>
        <h2>{title}</h2>
        {catalog && <Link href={link}>Veja mais!</Link>}
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]} 
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {cards.map((card, index) => (
            <SwiperSlide className={styles.card} key={index}>
              <CardItem type={type} info={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={clsx(styles.prev, "prev")}>
          <IoIosArrowBack fontSize={40}/>
        </div>
        <div className={clsx(styles.next, "next")}>
          <IoIosArrowForward fontSize={40} />
        </div>
      </div>
    </section>
  );
}
