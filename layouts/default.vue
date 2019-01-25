<template>
  <div id="__layout-root">
    <ModalMenu/>
    <DarkNav/>
    <div class="sections">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import DarkNav from "../components/navigation/DarkNav.vue";
import ModalMenu from "../components/navigation/ModalMenu.vue";
export default {
  components: {
    DarkNav,
    ModalMenu
  }
};
</script>