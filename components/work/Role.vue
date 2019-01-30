<template>
  <div class="row">
    <div class="column col-4">
      <div class="content-wrapper text-white">
        <h6 class="subtitle white">
          <span>role</span>
        </h6>
      </div>
    </div>
    <div class="column col-8 responsive-12">
      <div class="content-wrapper list-wrapper text-white">
        <ul class="pseudo">
          <slot></slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="sass" scoped>

.list-wrapper
  max-width: 400px

h3
    margin-bottom: 15px
    font:
        size: 2rem
    
ul
    columns: 2

li
    margin-bottom: 10px
    line-height: 1.4   
    font:
        size: 1rem
        weight: 400  

</style>


