import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    sladesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        sladesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        sladesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        sladesPerGroup: 3,
      }
    }
  });

  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    sladesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        sladesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        sladesPerGroup: 2,
      },
      1280: {
        slidesPerView: 3,
        sladesPerGroup: 3,
      }
    }
  });

  var swiper = new Swiper(".categorySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

