<template>
  <div class="__page-root">
    <RootHero title="Expertise."/>
    <div class="sections">
      <section class="padded-small black">
        <div class="container">
          <Spacer/>
          <div class="row">
            <div class="column col-12">
              <div data-aos="fade-up" class="copy-wrapper text-white">
                <p
                  class="insights-kicker"
                >We think it's important to provide our clients with key insights into the solutions that could help your business succeed.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper insights-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";
import Spacer from "../../components/random/Spacer.vue";

export default {
  components: {
    RootHero,
    Spacer
  }
};
</script>

<style lang="sass" scoped>
.insights-kicker
  font: 
    family: $font-family-header
    size: 32px
    weight: 300
  line-height: 1.4
  max-width: 800px
  margin: 0 auto

</style>
