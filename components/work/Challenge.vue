<template>
  <section class="padded-medium black">
    <div class="container">
      <div class="row padded">
        <div class="column col-12">
          <div class="content-wrapper">
            <h1 class="challenge-header" v-bind:style="{ color:  `${color}` }">CHALLENGE</h1>
            <p class="text-white">{{content}}</p>
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

.challenge-header
    font:
        size: 1.8rem
    margin-bottom: 30px

p
    font:
        size: 2.5rem
    line-height: 1.6    

@media only screen and (max-width: 678px)
  p
    font:
      size: 1.8rem

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.2rem
    line-height: 1.8
    
</style>