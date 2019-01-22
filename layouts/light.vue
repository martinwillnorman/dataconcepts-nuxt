<template>
  <div>
    <ModalMenu/>
    <LightNav/>
    <nuxt/>
  </div>
</template>

<script>
import LightNav from "../components/navigation/LightNav.vue";
import ModalMenu from "../components/navigation/ModalMenu.vue";
export default {
  components: {
    LightNav,
    ModalMenu
  }
};
</script>