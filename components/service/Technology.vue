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
        <div class="column col-12">
          <div data-aos="fade-up" class="content-wrapper technology-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["subtitle"]
};
</script>


<style lang="sass" scoped>

.technology-wrapper
  display: flex
  flex-wrap: wrap

</style>


