<template>
  <section class="padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div class="copy-wrapper">
            <h6 class="subtitle center">
              <span>{{subtitle}}</span>
            </h6>
          </div>
        </div>
        <div class="column col-12">
          <div class="copy-wrapper advantages-wrapper">
            <slot></slot>
          </div>
        </div>
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

.advantages-list-item
  font:
      size: 1.6rem
      weight: 400
      family: $font-family-copy
  line-height: 1.6
  letter-spacing: 1px

.advantages-wrapper
  margin-top: 40px

</style>