<template>
  <section class="black padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper text-white">
            <h6 class="subtitle white">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
        <div class="column col-12">
          <div data-aos="fade-up" class="content-wrapper services-wrapper text-white">
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

.services-wrapper
  display: flex
  flex-wrap: wrap

</style>


