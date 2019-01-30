<template>
  <div class="__page-root">
    <Hero title="Predictive Modeling for Debt Collection" kicker>
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ client is one of the fastest growing on-demand marketplaces in the burgeoning gig economy. Moonlighting lets everyone participate in the new “on-demand economy” and collaborate to create and fill jobs in every state across United States."
      >
        <Role>
          <li>Python</li>
          <li>SQL</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content=">More than 1500 collection agents across the country deal with approximately 3.5 M debtors per month with nearly 2 M total monthly outreaches. Our client wanted to take steps to reduce the amount collections using predictive analytics."
      />

      <SolutionHeader content="understanding risk through predictive analytics"/>

      <Solution>
        <p>Data Concepts started working on a machine learning model for predicting the probability of promise to pay from verified accounts. Developing the predictive model included construction of a pipeline for data processing and feature creation in SQL Server, training the predictive model based on lightgbm, and establishing a second pipeline for prediction outputs. The prediction enabled strategic targeting of accounts to improve collection rates and reduce costs.</p>
        <ul class="pseudo">
          <li>- Deployable Python Module with Data Processing Engine and Predictive Engine.</li>
          <li>- Python module deployed into MS SQL 2017.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The model delivered by Data Concepts accurately predicted the probability of promise to pay from an account as measured by a ROC_AUC score of ≈0.775, which was a significant improvement. The Client used the information to optimize collection agents’ time by directing them to target the most promising accounts first."
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
  background-image: url(~assets/image/work/predictive-modeling.jpg)
  background-position: center

</style>