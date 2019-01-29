<template>
  <div class="row">
    <div data-aos="fade-in" class="column col-12">
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.spacer
  height: 0.05555rem
  background-color: $spacer-color
  width: 100%
  margin: 100px 0
  position: relative
  z-index: 999

@media only screen and (max-width: 450px)
  .spacer
    margin: 60px 0 

</style>