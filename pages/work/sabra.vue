<template>
  <div class="__page-root">
    <Hero title="Sabra" kicker="Excel to .Net Conversion">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts client is a leading snacks manufacturer most famous for their hummus and ethical business model."
      >
        <Role>
          <li>Asp.Net & C#</li>
          <li>Visual Studio 2015</li>
          <li>SQL Server 2008 R2</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="Our client needed to convert their Physical Chem Excel application written in a VBA code into a .Net application with a SQL Server database."
      />

      <SolutionHeader content="legacy modernization and re-architecture"/>

      <Solution>
        <p>Data Concepts delivered a fully-tested, redesigned architecture blueprint and application system to host historical and future data.</p>
        <ul class="pseudo">
          <li>- Requirements Elicitation.</li>
          <li>- Requirements Documentation.</li>
          <li>- Analysis & Design.</li>
          <li>- Code Architecture Setup.</li>
          <li>- Database Design.</li>
          <li>- Security Implementation & Network Authentication.</li>
          <li>- Development of Admin Screens.</li>
          <li>- Development of User Screens.</li>
          <li>- Deployment to QA and Prod.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Our client was able to leave their less-functional and cumbersome Spreadsheet behind and harness the power of a SQL server for their Physical Chem Data Capture, increasing the usefulness of their data."
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
      color: "#426EFF"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/scala-architecture.jpg)
  background-position: center

</style>