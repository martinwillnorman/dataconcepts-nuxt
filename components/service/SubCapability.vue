
<template>
  <div class="column col-6 responsive-12 subcapability-wrapper text-white">
    <div class="subcapability">
      <h1 class="subcapability-title">{{title}}</h1>
      <p class="subcapability-text">{{content}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>

.subcapability-hr
  background-color: transparent
  display: block
  border: 0
  border-top: solid 1px $link-color
  margin: 12px 0 12px auto
  height: 0
  padding: 0

.subcapability-list
  padding: 25px

.subcapability-title
  font-size: 2rem
  font-weight: 400
  letter-spacing: -1px
  margin-bottom: 1.66667rem

.subcapability-text
  font-size: 1rem
  font-weight: 400
  line-height: 1.4

.subcapability-wrapper
  display: flex
  padding: 0 20px 30px

.subcapability
  z-index: 999

.subcapability-list-item
  font:
    size: 1rem
    weight: 400

</style>
