
<template>
  <div class="row subdefinition">
    <div class="column col-4">
      <div class="content-wrapper">
        <h1 class="subdefinition-title">{{title}}</h1>
      </div>
    </div>
    <div class="column col-8">
      <div class="content-wrapper">
        <p class="subdefinition-text">{{content}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>

.content-wrapper
  padding: 40px

.subdefinition 
  padding: 100px 0 0
  margin: 0 auto
  max-width: 1160px
  position: relative
  z-index: 999

.subdefinition-title
    font: 
        size: 34px
        weight: 400
        family: $font-family-copy
    position: relative
    z-index: 999
    max-width: 300px
    line-height: 1.3

.subdefinition-text
  max-width: 700px

.example-work-list
  padding: 10px 0
  margin-top: 20px
  display: flex
  justify-content: center
  flex-wrap: wrap
  align-items: center

.example-work-list-item
  display: inline-block
  font:
    weight: 400
    size: .7rem
  line-height: 25px
  text-transform: uppercase

.example-work-list-bullet
  padding: 0 10px
  line-height: 1

</style>
