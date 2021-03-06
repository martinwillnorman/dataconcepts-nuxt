<template>
  <div class="__page-root">
    <Hero title="Jury Management System" kicker>
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Since its founding 100 years ago, our client has provided insurance and financial services to credit unions and their members around the world. They sought to transform their business model to include direct-to-consumer [DTC] sales."
      >
        <Role>
          <li>Analytics Development</li>
          <li>AWS Platform Migration</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The company turned to Data Concepts to overhaul their entire approach to data, which included migrating their on-premise systems to the cloud and transforming from a B2B to a DTC model. The firm lacked an enterprise-wide data strategy, which hindered their ability to use member and policyholder data to personalize the customer experience. In particular, they suffered from siloed data systems that were difficult to integrate, manage and support. Inconsistent data definitions and the absence of cohesive data governance meant that mission-critical reports were unaligned with business needs."
      />

      <SolutionHeader content="take the headache out of the jury process"/>

      <Solution>
        <p>With Jury Management System (JMS), many of the common pain points when selecting jurists are eliminated.</p>
        <ul class="pseudo">
          <li>- Shorten check-in time when jurors are excused, or deferred online.</li>
          <li>- Reduce telephone calls to the clerk.</li>
          <li>- Streamline judge and juror interaction when the judge disqualifies online.</li>
          <li>- Fewer jurors report absent.</li>
          <li>- Reduces number of clerks requiredReduces number of clerks required.</li>
          <li>- Prospective jurors receive immediate responses to questions online.</li>
          <li>- Customized websites educate jurors about the jury process.</li>
          <li>- Online disqualifications and deferrals reduce jurors reporting absent.</li>
          <li>- Reduces citizen trips to the courthouse.</li>
          <li>- Shortens lines at check-in.</li>
          <li>- Reduces waiting in the courtroom.</li>
          <li>- JMS can handle payroll records for court staff. You can base the payroll on the number of days served. The system generates reports for verification, prints juror checks, and tracks payment history.</li>
          <li>- JMS recognizes prior services of a juror regardless of the jurisdiction, excludes the juror for selection, for the defined number of days.</li>
          <li>- Retain a complete juror history for multiple years.</li>
          <li>- Eliminate the need to pay jurors for services, before loading new juror data.</li>
          <li>- Track the status of jurors.</li>
          <li>- Respond to inquiries, quickly.</li>
          <li>- Determine whether a juror has been summoned, is active on a panel, has been disqualified, transferred, or excused.</li>
          <li>- Store the complete juror biography.</li>
          <li>- Make custom reports.</li>
          <li>- Speed up check-in by scanning bar-coded summons.</li>
          <li>- Generate forms and notices that the court designs.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Faster time to insight. Advanced analytics resulted in a more tailored customer experience. Reports became meaningful guides to organizational decision-making. Better customer identification and targeting of DTC marketing. $1.5 M annual increase in projected revenues. Data Concepts helped drive change from within, transforming the firm into an insights-driven organization. They are now able to operationalize insights and turn them into measurable business outcomes. Analytics maximized the value of each customer, with measurable results in just 60 days."
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
  background-image: url(~assets/image/work/jury-management.jpg)
  background-position: center

</style>