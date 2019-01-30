
<template>
  <section class="padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <h6 class="subtitle">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ["subtitle"]
};
</script>

<style lang="sass" scoped>

</style>
