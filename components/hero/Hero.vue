<template>
  <section class="full-page">
    <slot></slot>
    <div class="container">
      <div class="row">
        <div class="column column-12 center-content">
          <div class="content-wrapper hero-wrapper text-white">
            <h3 data-aos="fade-up">{{ title}}</h3>
            <p data-aos="fade-up" data-aos-delay="100">{{kicker}}</p>
          </div>
        </div>
        <HeroArrow fill="#fff"/>
      </div>
    </div>
  </section>
</template>

<script>
import HeroArrow from "../arrow/HeroArrow.vue";

export default {
  props: ["title", "kicker"],
  components: {
    HeroArrow
  }
};
</script>

<style lang="sass" scoped>

.hero-wrapper
  padding-top: 250px

h3
    font:
        size: 4rem
    line-height: 1
    max-width: 800px
    margin-bottom: 10px
    letter-spacing: 2px

p
    font:
        size: 1.8rem
    line-height: 1.2
    letter-spacing: 1px
    max-width: 600px

@media only screen and (max-width: 679px)
  .hero-wrapper
    padding-top: 100px
    max-width: 400px

  h3
    font:
      size: 3rem

  p
    font: 
      size: 1.5rem

@media only screen and (max-width: 450px)
  .hero-wrapper
    padding-top: 0
    text-align: center

</style>
