<template>
  <div class="row">
    <div class="column col-12">
      <div class="content-wrapper section-wrapper">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
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

.section-wrapper
  margin: 0 auto
  max-width: 800px

h1
    font:
        size: 27px
        weight: 400
    margin-bottom: 1.66667rem
    color: #292a2c

p 
  color: #bbbbbbb
  font: 
    size: 1rem
    weight: 400 
  line-height: 30px
  margin: 0


@media only screen and (max-width: 450px)
  h1
    font:
      size: 2rem

</style>