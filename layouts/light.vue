<template>
  <div class="__layout-root">
    <ModalMenu/>
    <LightNav/>
    <nuxt/>
    <MainFooter/>
    <SubFooter/>
  </div>
</template>

<script>
import LightNav from "../components/navigation/LightNav.vue";
import ModalMenu from "../components/navigation/ModalMenu.vue";
import MainFooter from "../components/footer/MainFooter.vue";
import SubFooter from "../components/footer/SubFooter.vue";

export default {
  components: {
    LightNav,
    ModalMenu,
    MainFooter,
    SubFooter
  }
};
</script>