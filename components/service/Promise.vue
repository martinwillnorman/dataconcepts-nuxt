<template>
  <section class="padded-xxlarge">
    <div class="container">
      <div data-aos="fade-up" class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <h6 class="subtitle">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
        <div class="column col-8">
          <div class="content-wrapper">
            <!-- <h1 class="promise-header">{{title}}</h1> -->
            <p class="promise-text">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "content", "subtitle"]
};
</script>


<style lang="sass" scoped>

.promise-header
    font:
        size: 3rem
        weight: 400
    margin-bottom: 30px

.promise-text 
  font:
    size: 1.2rem
  line-height: 1.8

</style>


