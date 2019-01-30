<template>
  <section class="padded-xxlarge gradient-2">
    <div class="container">
      <div class="row right">
        <div class="column col-8">
          <div data-aos="fade-up" class="content-wrapper aside-right-wrapper text-white">
            <h1 class="aside-right-header section-title left text-white medium">{{title}}</h1>
            <p class="aside-right-text">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>


section::before
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  top: -5.555vw
  background: #000
  transform: rotate(-6deg)

section::after
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  bottom: -5.555vw
  background: #fff
  transform: rotate(-6deg)

.aside-right-header
  max-width: 600px

</style>


