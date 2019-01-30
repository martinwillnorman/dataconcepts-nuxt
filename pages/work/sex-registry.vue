<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="Sex Offender Registry.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Portal Development</li>
          <li>Web Services</li>
          <li>JavaScript</li>
          <li>XML</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="VSP owns and maintains the Sex Offender Registry [SOR] public website for the Commonwealth of Virginia. VSP awarded Data Concepts the entire project to redesign, rewrite and replace the Sex Offender Registry application with an elegant, flexible and user-friendly custom web portal for the citizens of the Commonwealth, so that they can have better control of searches, and develop their own customized views of information."
      />

      <SolutionHeader content="a vital public resource made user-friendly"/>

      <Solution>
        <p>Data Concepts redesigned and developed the new Sex Offender [SOR] Registry portal website based on VSP’s Requirements and integrated it with the existing SOR backend applications. Major functional additions in the portal included:</p>
        <ul class="pseudo">
          <li>- Statewide Sex-Offender Notification.</li>
          <li>- Radius Offender Search.</li>
          <li>- Interface with Google Maps.</li>
          <li>- Map View.</li>
          <li>- Captcha.</li>
          <li>- Supports approximately 284 hits per second.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The SOR application was dramatically enhanced in usability, features and sophistication, and was successfully deployed in production by Data Concepts."
      />
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import Summary from "../../components/work/Summary.vue";
import Challenge from "../../components/work/Challenge.vue";
import Role from "../../components/work/Role.vue";
import SolutionHeader from "../../components/work/SolutionHeader.vue";
import Solution from "../../components/work/Solution.vue";
import Outcome from "../../components/work/Outcome.vue";

export default {
  layout: "light",
  components: {
    Hero,
    Summary,
    Challenge,
    Role,
    SolutionHeader,
    Solution,
    Outcome
  },
  data() {
    return {
      color: "#ffc200"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/sex-registry.jpg)
  background-position: center

</style>