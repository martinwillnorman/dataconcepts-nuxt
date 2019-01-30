<template>
  <div class="__page-root">
    <Hero title="Courts Of Virginia" kicker="Finance Portal.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="The Supreme Court of Virginia supports the administration of the court system comprised all courts in thirty-one judicial circuits, general district and juvenile and domestic relations district courts, and Magistrates in offices in thirty-two districts across the Commonwealth of Virginia."
      >
        <Role>
          <li>Legacy Modernization</li>
          <li>Drools</li>
          <li>UI/UX</li>
          <li>Java</li>
          <li>Spring</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="Our client wanted to modernize its legacy Financial Accounting System [FAS] with a Java / JEE based custom web portal to significantly improve its shelf life, provide an easy integration with other vital court systems, significantly reduce maintenance costs, enhance its user-friendliness and make it flexible, secure and scalable. Data Concepts was tasked to reengineer, redesign and rewrite the system and provide a single gateway to manage all online payment requirements across the entire court system. The new system provided easy integration with external entities such as the Virginia Department of Motor Vehicles, the Virginia State Police, etc."
      />

      <SolutionHeader content="enterprise portal designed for security and scalabilty"/>

      <Solution>
        <p>Our client required a scalable, extensible, reusable, secure and user-friendly web portal that allows for better productivity and lower maintenance costs. Taking into account the project timelines and the client’s IT investments, Data Concepts proposed the following solution:</p>
        <ul class="pseudo">
          <li>- Implement UI frameworks like AngularJS, Bootstrap, jQuery, and CSS3 backed by Jersey RESTful Web Services framework to develop a light-weight and user-friendly custom web portal where users record financial accounting information to significantly increase operational efficiency and reduce training time.</li>
          <li>- Utilize Drools as Business Rules Management System to develop a configurable business logic component with support for dynamic data and business rule updates for maximum extensibility.</li>
          <li>- Leverage Spring Security and IBM single sign-on solution to secure the portal and provide a seamless mechanism to track any changes made to the data in the form of audit trails..</li>
          <li>- Deploy a lightweight Java Messaging System over secured ESB channels to ensure that qualified internal court systems can share data and access with FAS without fear of threats to data integrity and security.</li>
          <li>- Leverage SOA (Service Oriented Architecture) based application architecture for greater integration flexibility with other court systems and external interfaces.</li>
          <li>- Develop components that conform to industry standard architecture norms and follow best practices to ensure code reusability.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="A re-engineered enterprise portal which reduced the court’s dependency on mainframe systems and eliminated multiple risks related to governance and compliance. Designed for security, the portal advanced the legacy system 30 years and is an extensible and scalable modern solution with reusable components to meet current and future business needs."
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
  background-image: url(~assets/image/work/finance-portal.jpg)
  background-position: center

</style>