<template>
  <div class="__page-root">
    <Hero title="Magellan Health" kicker="Single Sign On.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Our client provides innovative, integrated healthcare to one out of every ten Americans by delivering behavioral health and employee assistance program services; specialty health, including musculoskeletal, cardiac, advanced imaging management and physical medicine; and integrated care management to health plans, employers, Medicaid, Medicare and the Federal government."
      >
        <Role>
          <li>Java</li>
          <li>JEE</li>
          <li>OpenIG</li>
          <li>ADFS</li>
          <li>Oauth</li>
          <li>SSO</li>
          <li>SAML</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="Magellan was in the process of replacing its existing authentication solutions that were implemented using CAS, F5 authentication and WebLogic authentication with a Microsoft AEGIS solution. Magellan was also in the process of replacing its identity repository – Novell eDirectory with the Active Directory platform. The migration of users from eDirectory to Active Directory as well as the replacement of its authentication solution with AEGIS, required modifications and enhancements to the existing Java applications that were currently reliant on the legacy platform."
      />

      <SolutionHeader content="a seamlessly designed single sign on"/>

      <Solution>
        <p>
          Data Concepts implemented an Enterprise Single Sign On [SSO] and Centralized Identity Management and Governance solution for all existing Java/JEE based applications in production.
          Data Concepts migrated over 33 Java web applications to the new platform based on Microsoft AEGIS solution. The team designed, developed and tested to integrate a multitude of web applications on the new platform.
        </p>
        <ul class="pseudo">
          <li>- Migration of existing authentication solution.</li>
          <li>- Replacing identity repository with Active Directorys.</li>
          <li>- Enhanced existing Java-based applications in a production environment.</li>
          <li>- Implementation of an enterprise-wise SSO with strict Governance rules.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Data Concepts replaced Magellan Health’s authentication solution and successfully replaced its identity repository. Data Concepts enhanced and rewrote many Java-based applications. This was a deliverable based, fixed price project."
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
      color: "#ca0853"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/magellan-health.jpg)
  background-position: center

</style>