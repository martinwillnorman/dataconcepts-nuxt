<template>
  <div class="padded-large black">
    <div class="container">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper text-white">
              <hr class="subtitle white">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
        <div class="column col-12">
          <div class="content-wrapper examples-wrapper text-white">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subtitle"]
};
</script>


<style lang="sass" scoped>

.examples-wrapper
  display: flex
  flex-wrap: wrap

</style>


