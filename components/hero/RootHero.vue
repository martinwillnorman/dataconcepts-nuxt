<template>
  <div class="container hero">
    <div class="row">
      <div class="column col-12">
        <div class="content-wrapper text-hero-wrapper">
          <h1 data-aos="fade-in" data-aos-duration="800" class="text-hero-title">{{title}}</h1>
        </div>
      </div>
      <HeroArrow fill="#000"/>
    </div>
  </div>
</template>

<script>
import HeroArrow from "../arrow/HeroArrow.vue";

export default {
  props: ["title"],
  components: {
    HeroArrow
  }
};
</script>


<style lang="sass" scoped>

.hero
  height: 100vh

.text-hero-title
  font:
    size: 170px
    family: $font-family-header
    weight: 900
  line-height: .95
  letter-spacing: 4px
  position: absolute
  bottom: 20%

.text-hero-wrapper 
  height: 100%
  position: relative

</style>
