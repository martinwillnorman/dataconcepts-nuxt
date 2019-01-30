
<template>
  <section class="black padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper text-white">
            <h6 class="subtitle white">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="row marg">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["subtitle"]
};
</script>

<style lang="sass" scoped>

.marg
  margin-top: 40px
</style>
