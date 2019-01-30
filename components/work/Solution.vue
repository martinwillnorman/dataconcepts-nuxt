<template>
  <section class="padded-medium">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div data-aos="fade-up" class="content-wrapper solution-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["content"]
};
</script>


<style lang="sass" scoped>

.solution-wrapper
    display: flex
    flex-direction: column
    max-width: 1000px
    margin: 0 auto 0

p
    font:
        size: 1.1rem
    line-height: 1.8

ul
    margin-top: 40px
    max-width: 1000px
    columns: 2
    
li
    font:
        size: 1rem
        weight: 400
    line-height: 1.8
    margin-bottom: 20px
    padding: 0 40px

@media only screen and (max-width: 678px)
  p
    font:
      size: 1.4rem

  ul
    columns: 1

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.1rem
    line-height: 1.8

  li
    font:
        size: .9rem
    line-height: 1.8

</style>