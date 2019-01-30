<template>
  <section class="medium-grey padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <h6 class="subtitle">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column special col-12">
          <div class="special">
            <h1 class="additional-header">{{title}}</h1>
            <div class="content-wrapper additional-wrapper">
              <div class="text-wrapper">
                <p class="additional-text">{{paragraphOne}}</p>
              </div>
              <div class="text-wrapper">
                <p class="additional-text">{{paragraphTwo}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column col-12">
          <div class="content-wrapper services-wrapper text-black">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["subtitle", "title", "paragraphTwo", "paragraphOne"]
};
</script>


<style lang="sass" scoped>

.special
  max-width: 1000px

.services-wrapper
  display: flex
  flex-wrap: wrap
  margin-top: 40px

.additional-wrapper
    display: flex

.additional-header
    letter-spacing: -1px
    margin: 20px 0 40px
    max-width: 750px
    font:
        size: 2.4rem

.text-wrapper
    padding-right: 30px

.additional-text
    font: 
        size: 1.2rem   
    line-height: 1.8
    
</style>


