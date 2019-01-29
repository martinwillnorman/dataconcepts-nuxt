<template>
  <div class="__page-root">
    <RootHero title="Proficiency."/>
    <div class="sections">
      <section class="padded-medium">
        <div class="content-wrapper services-wrapper"></div>
      </section>
      <section class="padded-medium">
        <div class="container">
          <div class="row">
            <div data-aos="fade-up" class="column col-12 center-content">
              <h1 class="lets-talk">Let's talk data.</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-medium">
        <div class="content-wrapper services-wrapper"></div>
      </section>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";

export default {
  components: {
    RootHero
  }
};
</script>

<style lang="sass" scoped>

.services-wrapper
  display: flex
  flex-wrap: wrap

.lets-talk
  font: 
    size: 8rem
  color: #ff48a6
  background-image: linear-gradient(135deg,#29d5ff 10%,#6c03a8 90%)
  -webkit-text-fill-color: transparent
  -webkit-background-clip: text
  display: inline-block
  text-align: center
  width: 100%

</style>
