<template>
  <section class="medium-grey padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div class="content-wrapper wrapper">
            <h1 class="section-header">{{title}}</h1>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "paragraphTwo", "paragraphOne"]
};
</script>


<style lang="sass" scoped>

.section-header
  font:
    size: 2.4rem
    weight: 400
  margin-bottom: 20px 

.wrapper
  max-width: 1180px

.block
  display: flex

.block-wrapper
  padding: 25px 20px

p
  margin: 0

</style>


