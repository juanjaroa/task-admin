<template>
  <div class="about">
    <swiper-container
      class="mySwiper"
      grab-cursor="true"
      rewind="true"
      effect="cards"
      slideToClickedSlide="true"
      :cardsEffect="{
        slideShadows: false,
        perSlideOffset: 8,
        perSlideRotate: 0,
        rotate: true
      }"
    >
      <swiper-slide v-for="(card, index) in 4" :key="index"
        ><BasicCard :text="'Card ' + (index + 1)"
      /></swiper-slide>
    </swiper-container>
  </div>
</template>
<script lang="ts" setup>
import BasicCard from '@/components/BasicCard.vue'
import { register } from 'swiper/element/bundle'

register()

/* const onProgress = (e: any) => {
  const [swiper, progress] = e.detail
  console.log(progress)
} */
</script>
<style lang="scss">
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
swiper-container {
  min-height: 8vh;
  min-width: 300px;
  max-width: 600px;
}

swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  &:not(.swiper-slide-active) {
    opacity: 0.15;
    div {
      .content {
        display: none;
      }
    }
  }
}
/* .swiper-slide-shadow {
  display: none;
} */

/* swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
} */
</style>
