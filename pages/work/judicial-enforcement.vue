<template>
  <div class="__page-root">
    <Hero title="Courts Of Virginia" kicker="Judicial Enforcement Management System.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="The Courts of Virginia is comprised of all courts in thirty-one judicial circuits, general district and juvenile and domestic relations district courts, and Magistrates in offices in thirty-two districts across the Commonwealth of Virginia."
      >
        <Role>
          <li>Java/JEE</li>
          <li>IBM Websphere</li>
          <li>Enterprise Architecture</li>
          <li>Data Warehousing</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The Judicial Enforcement Management System [JEMS] was a siloed case management system which manually handled day to day processes and workflows."
      />

      <SolutionHeader
        content="e-filing system for the courts of virginia - the first in the country"
      />

      <Solution>
        <p>JEMS is a flexible and configurable product, where courts can “set and forget” business rules to remove the human variable from many routine court tasks. With the ability to automate business processes for municipal, county, state and provincial government courts, JEMS is a one-size-fits all tool that benefits all those working in the court.</p>
        <ul class="pseudo">
          <li>- Workflow was streamlined with document management, automatic sequencing of actions, accelerated task performance, docket management, conflict resolution, the ability to set vacation notices, track aging cases, receive payments, issue warrants, generate forms, and print reports directly from JEMS.</li>
          <li>- JEMS simplified the case process with its capability to initiate, maintain, track, dispose, and calendar cases with ease.</li>
          <li>- Judges receive real-time mobile access to cases and calendars and can add secure notes to cases or send off instructions to administrative staff on letters to attorneys and prosecutors.</li>
          <li>- With CSDC’s e-Filing application, attorneys enjoy the convenience of filing cases online, right from their offices – JEMS even collects the payments.</li>
          <li>- With the JEMS docket scheduling system you can: create complex case dockets, schedule dockets using Microsoft Outlook™, and view and update cases in real-time.</li>
          <li>- JEMS allows you to access common data, such as warrants, and party biographies, and set up security levels, restrict access, and edit options for individuals and departments, so everyone can use the same system.</li>
          <li>- JEMS guides court clerks step-by-step through every process, which minimizes training and errors. The result is that you dramatically improve your efficiency and accuracy by using a system that helps workflows and courtroom processing.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Our product, Judicial Enforcement Management System [JEMS] is an integrated case management software that automates all common procedures in the court. JEMS helps the courts automate their processes and workflows while applying the court’s unique business rules, easily share data with other law agencies, manage documents, enable electronic filings, and help citizens pay online."
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
  background-image: url(~assets/image/work/judicial-enforcement.jpg)
  background-position: center

</style>