<template>
  <div @click="scrollTo" class="arrow-wrapper">
    <svg
      data-aos="fade-down"
      data-aos-duration="1000"
      :fill="fill"
      version="1.1"
      id="Ebene_2_1_"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="53px"
      height="20px"
      viewBox="0 0 53 20"
      enable-background="new 0 0 53 20"
      xml:space="preserve"
    >
      <g>
        <polygon
          points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
        ></polygon>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["fill"],
  methods: {
    scrollTo() {
      document.querySelector(".sections").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style lang="sass" scoped>

.arrow-wrapper
  cursor: pointer
  position: absolute
  bottom: 2px
  width: 100%
  z-index: 105
  display: flex
  justify-content: center
  padding: 30px 0

.arrow-wrapper:hover
  animation: upDown 2s infinite

@keyframes upDown
  0%
   tranform: translate(0, 0)
  25%
   transform: translate(0, 6px)
  75%
   transform: translate(0, -6px)
  100%
   transform: translate(0, 0)
</style>
