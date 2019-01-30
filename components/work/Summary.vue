<template>
  <section class="padded-xlarge" v-bind:style="{ backgroundColor:  `${color}` }">
    <div data-aos="fade-up" class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper text-white">
            <h6 class="subtitle white">
              <span>client summary</span>
            </h6>
          </div>
        </div>
        <div class="column col-8 responsive-12">
          <div class="content-wrapper text-white">
            <p class="promise-text">{{content}}</p>
          </div>
        </div>
      </div>
      <Spacer/>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Spacer from "../random/Spacer.vue";

export default {
  props: ["content", "color"],
  components: {
    Spacer
  }
};
</script>


<style lang="sass" scoped>

.promise-text 
  font:
    size: 1.2rem
  line-height: 1.8

    
</style>


