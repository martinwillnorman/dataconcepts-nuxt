<template>
  <section class="padded-large black">
    <div class="container">
      <div class="row padded">
        <div class="column col-12">
          <div class="copy-wrapper outcome-wrapper">
            <h1 class="section-title medium" v-bind:style="{ color:  `${color}` }">OUTCOME</h1>
            <p>{{content}}</p>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["color", "content"]
};
</script>


<style lang="sass" scoped>

.outcome-wrapper
  max-width: 1100px
  margin: 0 auto

h1
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px

p
    font:
      size: 1.6rem
    line-height: 1.6  
    text-align: center  
    color: #fff

.outcome-list
    padding-left: 20px
    columns: 2
    margin-top: 40px

.outcome-list li
    line-height: 2
    font:   
        size: 1rem
        weight: 400
        family: $font-family-copy
    
@media only screen and (max-width: 500px)
  p
      font:
          size: 1.2rem
</style>