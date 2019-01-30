<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="Legacy Modernization.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Javat</li>
          <li>JEE</li>
          <li>Spring</li>
          <li>Struts</li>
          <li>Hibernate</li>
          <li>DB2</li>
          <li>IBM WebSphere</li>
          <li>Angular</li>
          <li>React</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The Legacy Mainframe System needed to be converted into a Web-Based Case Management Application that would allow judicial users to manage all phases of case documents."
      />

      <SolutionHeader content="an intricate legacy modernization into java/jee"/>

      <Solution>
        <p>This was a high complexity, high risk large engagement completely managed and implemented by Data Concepts. It involved replacing a stable 20-year legacy system with a new web solution across the state.</p>
        <ul class="pseudo">
          <li>- The Re-engineered system provided all business functions of the current legacy system while implementing additional improvements to increase productivity in courts.</li>
          <li>- Multilevel security controls for accessing non-public information such as Sealed Indictments.</li>
          <li>- Granular role-based security that scales to manage small, medium and large volume courts.</li>
          <li>- On-Demand Interactive Docket creation along other ad-hoc reporting capabilities.</li>
          <li>- Replace home grown services infrastructure with an industry solution based on open standards that provides both agility and flexibility.</li>
          <li>- Customizable reports that support a variety of document formats.</li>
          <li>- Comprehensive auditing capabilities to track any and all case inquiries and updates.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts managed and executed this complex, highly sensitive and critical modernization and successfully deployed the new web-based system."
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
  background-image: url(~assets/image/work/circuit-courts.jpg)
  background-position: center

</style>