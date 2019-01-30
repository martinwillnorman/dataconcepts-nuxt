<template>
  <section class="padded-large">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <h6 class="subtitle">
              <span>related</span>
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-12">
          <div class="related-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style lang="sass" scoped>

.related-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin-top: 80px

</style>


