
<template>
  <section class="full-page">
    <nuxt-link class="insight-highlight-link" :to="link">
      <div
        class="insight-highlight-background"
        v-bind:style="{ backgroundImage:  `url('${imgsrc}')` }"
      ></div>
      <div class="container insight-highlight-container">
        <div class="row">
          <div class="column col-12 center-content">
            <div class="content-wrapper insight-highlight-wrapper">
              <h6 class="subtitle white">
                <span>insight</span>
              </h6>
              <h1 class="insight-highlight-title">{{title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ["title", "imgsrc", "link"]
};
</script>

<style lang="sass" scoped>

.insight-highlight-link
    position: relative
    min-height: 600px
    width: 100%

.insight-highlight-background
    background-size: cover
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%

.insight-highlight-wrapper
  z-index: 999

.insight-highlight-container
    height: 100%

.insight-highlight-background:before
  background-color: rgba(0,0,0,0.15)
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 11
  content: ' '
  transition: all ease-in-out 50ms

.insight-highlight-link:hover .insight-highlight-background:before
  background-color: rgba(0,0,0,0)

.insight-highlight-title
    color: #fff
    font: 
        size: 7rem
        weight: 400
    line-height: 1.05

h6
  color: #fff

.subtitle-wrapper
  width: 25%

</style>
