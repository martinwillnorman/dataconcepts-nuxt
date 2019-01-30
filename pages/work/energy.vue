<template>
  <div class="__page-root">
    <Hero title="Energy" kicker="Mobile business solution.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ client is one of the nation’s largest producers and transporters of 
energy, with a portfolio of approximately 26,000 megawatts of electric generation. It also
operates one of the largest natural gas storage systems in the U.S. with 1 trillion cubic 
feet of capacity, and serve more than 6 million utility and retail energy customers."
      >
        <Role>
          <li>Microsoft Web Stack (Asp.Net MVC, WebAPI)</li>
          <li>jQuery/Bootstrap</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="With more than 2 million customers trying to make monthly bill payments, the company
          wanted to reduce the amount of people walking into physical locations. Although online
          bill payment was an option, there was no mobile solution."
      />

      <SolutionHeader content="a re-engineered solution"/>

      <Solution>
        <p>
          Data Concepts started working on a mobile solution with the client’s preferred payment
          provider. Developing this feature involved evaluating between the two choice of using
          SOAP services exposed by the provider with custom built UI or embedding HTML
          content from provider. Once it was decided, security was implemented using SSL
          handshake through exchange of valid digital certificates. This resulted in every
          consumer having the choice of easily and securely complete bill payments through
          mobile devices.
        </p>
        <ul class="pseudo">
          <li>- Deployable .Net assemblies to IIS web servers and databases in Oracle.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The solution deployed by Data Concepts enabled client to expand of base of users
          using online payment system thereby cutting down on expense of having physical bill
          collection centers as well as increasing secure and fast payments."
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
      color: "#FF2828"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
//   background-image: url(~assets/image/work/energy.jpg)
  background-position: center

</style>