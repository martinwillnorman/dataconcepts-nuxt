<template>
  <div class="__page-root">
    <Hero title="Capital One" kicker="Salesforce Data Load Automation.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Our client is a major credit card company recognized around the world that holds a coveted spot on the Fortune 500 list."
      >
        <Role>
          <li>Spring</li>
          <li>Spring Boot</li>
          <li>REST</li>
          <li>Gradle</li>
          <li>JIRA</li>
          <li>CICD</li>
          <li>Eclipse</li>
          <li>Chef</li>
          <li>Jenkins</li>
          <li>Amazon Lambda</li>
          <li>AWS SWF, EC2, S3, RDS, CloudFormation</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="To automate data load into Salesforce using Java/JEE and replace the legacy manual process."
      />

      <SolutionHeader content="microservices architecture solution with salesforce"/>

      <Solution>
        <p>Data Concepts built a solution for the Investments Line Of Business to automate data load into the Salesforce instance using Java/JEE as the underlying programming language. This solution automates the loading of referral data from Touchpoint application into their Salesforce instance, and replaces the current manual process. The solution has been developed as a framework so that it can be extended for other business use cases. Data Concepts stood up the AWS Cloud environment from scratch. The technology stack for the solution includes AWS Cloud – Lambda, SWF, S3, RDS, & EC2 Services; Spring Boot Microservices Architecture, Java/JEE along with Jenkins/Gradle for the CICD piece.</p>
        <ul class="pseudo">
          <li>- Data Concepts built a microservices architecture solution to automate data load into the Salesforce instance on an AWS environment designed and architected from scratch.</li>
          <li>- The solution automates the loading of referral data from Touchpoint application into the Salesforce instance replacing the current manual process.</li>
          <li>- The solution has been developed as a framework that can be extended for other business use cases.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts developed an automation process into Salesforce, using JEE technologies for Capital One Investments; we stood up the AWS Cloud Environment from scratch."
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
      color: "#0e414c"
    };
  }
};
</script>

<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/capital-one.jpg)
  background-position: center

</style>