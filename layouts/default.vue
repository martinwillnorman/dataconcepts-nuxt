<template>
  <div class="__layout-root">
    <ModalMenu/>
    <DarkNav/>
    <nuxt/>
    <MainFooter/>
    <SubFooter/>
  </div>
</template>

<script>
import DarkNav from "../components/navigation/DarkNav.vue";
import ModalMenu from "../components/navigation/ModalMenu.vue";
import MainFooter from "../components/footer/MainFooter.vue";
import SubFooter from "../components/footer/SubFooter.vue";

export default {
  components: {
    DarkNav,
    ModalMenu,
    MainFooter,
    SubFooter
  }
};
</script>