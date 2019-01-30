<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "/slideshow/staff-1.jpg",
        "/slideshow/Dan-Watson.jpg",
        "/slideshow/Dan-Watson.jpg"
      ],
      swiperOption: {
        loop: false,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {},
          tap() {}
        }
      }
    };
  },
  mounted() {
    this.mySwiper.slideTo(0);
  }
};
</script>


<style lang="sass" scoped>
.swiper-container
  height: 70vh
  min-height: 500px
  width: 100%
  cursor: pointer
  .swiper-slide
    text-align: center
    font-size: 38px
    font-weight: 700
    background-color: #eee
    display: flex
    justify-content: center
    align-items: center
  .swiper-pagination > .swiper-pagination-bullet
    background-color: red

img
    max-width: 100%
    width: 100%
    max-height: 100%
    object-fit: cover

</style>