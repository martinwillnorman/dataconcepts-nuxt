<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="Web Portal.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Dashboard Development</li>
          <li>Portal Development</li>
          <li>Legal Compliance</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="VSP’s existing Firearms Transaction Program provided a point-of-sale approval or disapproval decision regarding the sale or transfer of all firearms in the State of Virginia. VSP wanted to replace the existing application with a more scalable, extensible and robust web architecture and add major new features and functionalities including enhancements based on new laws enacted by the State General Assembly after the Virginia Tech incident. In addition to improving the UI for external users including firearms dealers and sellers, most importantly VSP wanted to provide a custom portal to its internal team of users that were tasked with conducting the background checks and hence, enable them to be more productive, efficient and to minimize the probability of any lapses in processing of background checks."
      />

      <SolutionHeader content="legal compliance assured, public safety promoted"/>

      <Solution>
        <p>Data Concepts was awarded by VSP the work to completely redesign, rewrite and replace the current Firearms system in web technologies. This system developed by Data Concepts is used statewide by VSP personnel, firearm dealers and sellers. Every firearm sold or bought in the Commonwealth of Virginia is processed through this portal. Major Custom Web Portal features:</p>
        <ul class="pseudo">
          <li>- Allows each VSP team member take a case/request from a queue.</li>
          <li>- Each team member has a personalized Dashboard.</li>
          <li>- For each firearm request, users can do a study, take notes, approve or disapprove, or escalate to a supervisor directly from their personal homepage.</li>
          <li>- Portal interfaces with State and Federal Law Enforcement Databases/systems including National Instant Criminal Background Check System (NICS), Interstate Identification Index (III), and National Crime Information Center (NCIC).</li>
          <li>- Allows supervisors to view performance reports for VSP team members.</li>
          <li>- Role-based Security.</li>
          <li>- Integration with VSP Single Sign on.</li>
          <li>- Approximately 60-70 Web Pages for Dealers and Firearms Transaction Center (VSP) Users.</li>
          <li>- Instant Background Check decision processing.</li>
          <li>- Supports approximately 300,000 transactions per year.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts successfully managed, executed and deployed the Firearms Application in production for the Virginia State Police and continues to maintain and support it."
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
      color: "#cb3694"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/web-portal.jpg)
  background-position: center

</style>