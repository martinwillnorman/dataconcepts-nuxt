<template>
  <div class="person">
    <slot></slot>
    <div class="person-info">
      <h5 class="person-position">{{position}}</h5>
      <h4 class="person-name">{{name}}</h4>
      <span>{{location}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["position", "name", "location"]
};
</script>

<style lang="sass" scoped>

.person
  width: 33.3333%
  max-width: 33.3333%
  flex-basis: 33.3333%
  position: relative
  margin-bottom: 40px

img
  width: 80%
  margin: 0 auto
  height: 400px
  display: block
  object-fit: cover

.person-info
  border: solid 2px $link-color
  padding: 20px
  width: 60%
  box-sizing: border-box
  text-align: center
  margin: 20px auto 0

.person-position
  text-transform: uppercase
  font:
    size: .8rem
    weight: 600
  margin-bottom: 12px

.person-name
  font:
      size: 1.6rem   
  line-height: 1.4

</style>
