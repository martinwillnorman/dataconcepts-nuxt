<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="Vehicle Inspection Program.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="The administration of the Commonwealth of Virginia’s statewide Motor Vehicle Safety Inspection Program [MVIP] is the responsibility of Virginia State Police."
      >
        <Role>
          <li>Java</li>
          <li>JEE</li>
          <li>Web Services</li>
          <li>JavaScript</li>
          <li>XML</li>
          <li>DB2</li>
          <li>IBM WebSphere</li>
          <li>Oracle</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="As of December 31, 2007, there were 4,388 active inspection stations located throughout the Commonwealth of Virginia. There were over 14,000 licensed safety inspectors who performed approximately 8,000,000 inspections at appointed stations during 2007. Approximately 25% of all vehicles submitted for inspection were rejected for unsafe components. This program was a manual and laborious process which resulted in data discrepancy and slow processes."
      />

      <SolutionHeader content="business process re-engineering and automation"/>

      <Solution>
        <p>The new MVIP web application automated the entire Inspection Safety Program. Data Concepts built a new, state-of-the-art Web Based Application to automate and entirely re-engineer the previous labor intensive and error prone process.</p>
        <ul class="pseudo">
          <li>- Approximately 30-50 Views / Web pages.</li>
          <li>- View customization based on Roles and Group.</li>
          <li>- Web 2.0.</li>
          <li>- Section 508 Compliant.</li>
          <li>- Follows Virginia Information Technology Agency [VITA] Architecture Guidelines.</li>
          <li>- Designed to handle around one million plus transactions a month.</li>
          <li>- Designed to handle approximately 4000+ station users.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts successfully managed, executed and delivered this system into production. The development and deployment of the new system was a huge endeavor and initiative by Virginia State Police to radically improve the efficiency and productivity of the Motor Vehicle Safety Inspections Program. It also involved major Business Process Re-engineering and an automation push. This was a deliverable based, fixed price project."
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
      color: "#EF4C23"
    };
  }
};
</script>

<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/vehicle-inspection.jpg)
  background-position: center

</style>