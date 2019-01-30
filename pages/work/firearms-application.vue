<template>
  <div class="__page-root">
    <div class="sections">
      <Hero title="Virginia State Police" kicker="Firearms Application.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        v-bind:color="color"
        content="The administration of the Commonwealth of Virginia’s statewide Motor Vehicle Safety Inspection Program [MVIP] is the responsibility of Virginia State Police."
      >
        <Role>
          <li>Java based Spring framework</li>
          <li>Spring security</li>
          <li>Struts Framework</li>
          <li>HTML 5</li>
          <li>JSP Tag libraries</li>
          <li>Cascaded style sheets (CSS)</li>
          <li>JQuery (JavaScript framework)</li>
          <li>Oracle 12g</li>
          <li>Lead Software Development</li>
          <li>Quality Test and Support</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The Firearms application is used by firearm dealers in Virginia to conduct background checks on potential
          gun buyers. Integrated with major federal systems, the Firearms application is used by more than 2200
          dealers serving 4,000 plus requests per day. The application is of such a scale that fifteen business users
          are continuously monitoring and approving background check requests if intervention is required. This is
          a critical application that must always run on schedule.
          Each background check has very strict SLA of 3 days. The Virginia State Police needed a performance
          measurement tool for business users to better understand how to drive efficiencies during periods
          where high volumes of requests are received, impacting service. To better allocate their users, the State
          Police needed a tool for predictive analysis that could provide on-demand reports to better understand
          users’ efficiency."
      />

      <SolutionHeader content="a re-engineered solution"/>

      <Solution>
        <p>
          Data Concepts started working on designing and architecting the solution, which analyzes user data to
          better predict the efficiency of each user and help make business decisions on the basis of that analysis.
          The application was developed using Java-based Spring framework to control access, handle business
          logic, and integrate with the backend database to retrieve and analyze the data in order to generate
          reports.
          The extensive and detailed report enabled the client to make proactive decisions and utilize their user’s
          skills in more effective ways. This was the huge plus for our client, who gained control over their data
          and also bolstered accident or error prevention.
        </p>
        <ul class="pseudo">
          <li>- Deployable Java Spring Module with data analysis and reporting capability.</li>
          <li>- Integration with real time oracle database for analysis and on demand reporting.</li>
          <li>- Capability to integrate on demand reports with other applications.</li>
          <li>- Project source code and detailed documentation.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The module developed by Data Concepts analyzes the user activity and provides an on-demand report.
          This report helped our client utilize the business users’ hours in an efficient manner and deploy
          additional resources when there was a high request volume.
          Control over data empowers our client to make better and more proactive decisions, resulting in
          efficiency and savings."
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
//   background-image: url(~assets/image/work/firearms-application.jpg)
  background-position: center

</style>