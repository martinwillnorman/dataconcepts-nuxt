<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div class="copy-wrapper solution-wrapper">
            <h1 class="section-title">SOLUTION</h1>
            <p>{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["content"]
};
</script>


<style lang="sass" scoped>

.solution-wrapper
  max-width: 900px
  margin: 100px auto 0

h1
  font:
    size: 1.2rem
  letter-spacing: 6px

p
    text-transform: uppercase
    font:
        size: 3.6rem
        weight: 400
    line-height: 1.1    
    text-align: center
    margin: 0

@media only screen and (max-width: 800px)
  p
    font:
      size: 2.8rem

@media only screen and (max-width: 678px)
  p
    font:
      size: 2.4rem

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.8rem
      
</style>