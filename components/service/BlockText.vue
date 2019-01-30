<template>
  <section class="medium-grey">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-9 centered">
          <div class="content-wrapper">
            <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">{{title}}</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <slot></slot>
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

</style>


