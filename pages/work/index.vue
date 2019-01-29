<template>
  <div class="__page-root">
    <RootHero title="Pride."/>
    <div class="sections">
      <section class="padded-medium">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper work-wrapper"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-medium">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="copy-wrapper">
                <h1 class="section-title short">Clientele</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div data-aos="fade-up" class="content-wrapper clientele-wrapper">
                <div class="clientele">
                  <img src="~assets/image/client/nike.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/nordstrom.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/cdot.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/colorado-state.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/advanced-auto.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/allianz.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/dcr.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/dominion.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/estes.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/federal-reserve.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/fidelity.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/hughes.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/learning-tree.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/magellan.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/pfg.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/red-cross.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/reuters.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/virginia-police.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/union.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/vdh.svg" alt="logo">
                </div>
                <div class="clientele">
                  <img src="~assets/image/client/virginia-credit.svg" alt="logo">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";
import Subscribe from "../../components/form/Subscribe.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";

export default {
  components: {
    RootHero,
    Subscribe,
    HireUsFooter
  }
};
</script>

<style lang="sass" scoped>

.clientele-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center

img
  object-fit: contain
  max-height: 70px
  max-width: 150px

.clientele
  width: 23%
  max-width: 23%
  flex-basis: 23%
  margin: 0 1%
  box-sizing: border-box
  position: relative
  height: 175px
  display: flex
  justify-content: center
  align-items: center
  border-bottom: solid 0.05555rem $spacer-color

@media only screen and (max-width: 1080px)
  .clientele
    width: 31%
    max-width: 31%
    flex-basis: 31%

@media only screen and (max-width: 800px)
  .clientele
    width: 48%
    max-width: 48%
    flex-basis: 48%

@media only screen and (max-width: 450px)
  .clientele
    width: 98%
    max-width: 98%
    flex-basis: 98%
</style>
