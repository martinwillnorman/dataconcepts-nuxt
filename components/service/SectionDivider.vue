<template>
  <section class="black padded-top">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div data-aos="fade" class="copy-wrapper">
            <h1 class="section-title medium text-white">{{title}}</h1>
            <p class="section-divider-text text-white">{{content}}</p>
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



.section-divider-text 
  font:
    size: 1.2rem
  line-height: 1.8
  position: relative
  z-index: 999
  max-width: 1100px
  margin: 0 auto

</style>


