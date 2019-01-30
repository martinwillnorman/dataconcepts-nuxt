<template>
  <section>
    <div class="container">
      <div class="row">
        <div data-aos="fade-up" class="column insight-column col-11 centered">
          <div class="content-wrapper insight-wrapper">
            <span>{{category}}</span>
            <h1>{{title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["category", "title", "summary"]
};
</script>

<style lang="sass" scoped>

section
  min-height: 250px
  width: 100%
  overflow: hidden

.insight-column
  display: flex
  justify-content: center

.insight-wrapper
  margin-top: 100px
  display: flex
  flex-direction: column
  justify-content: center
  max-width: 1000px
  text-align: center

.insight-wrapper p
  color: $font-color-subfooter

h1
  color: $font-color-section-title
  line-height: 3.37rem
  margin: 0 0 10px
  font:
    size: 2.76rem
    weight: 400

span
  color: $font-color-bluish-grey
  font:
      weight: 700
  letter-spacing: 1px

@media only screen and (max-width: 800px)
  h1
      font-size: 2.5rem

@media only screen and (max-width: 450px)
  h1
      font-size: 2rem
      line-height: 1.2
      
  .insight-wrapper p
      line-height: 1.85

  .insight-column
    padding-top: 20px
    padding-bottom: 20px
    
</style>