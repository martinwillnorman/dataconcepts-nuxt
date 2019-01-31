<template>
  <div class="__page-root">
    <Hero
      title="Program Management"
      kicker="Scaleable & flexible methodologies for an innovation-ready & delivery-ready PMO."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Imagine a process which converts unstructured, unreadable pieces of information into something that is extremely valuable for your organization? information that gives you insights about your business, your products, customers and their preferences. Now imagine getting those insights in real time! We are talking about a process that gives you instant information about an active transaction. Such information is always valuable, isn't it? Companies who often deal with Big Data have massive databases and millions or billions of files they are processing. Data streaming, as the name implies, is a stream or flow of raw data that is captured from multiple sources and sent for processing continuously. Analyzing and processing such data streams makes an organization more efficient and opens up new opportunities."
      />

      <Services subtitle="services">
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
      </Services>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    Promise,
    Services,
    SubService,
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/program-management.jpg)

</style>
