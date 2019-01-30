<template>
  <div class="__page-root">
    <Hero title="Virginia State Police" kicker="Computerized Criminal History.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Migration Vision from Legacy to Open system.</li>
          <li>Solutions Architect.</li>
          <li>Lead Software Development.</li>
          <li>Documentation and Source Code.</li>
          <li>Core Java 1.8.</li>
          <li>Java based Spring Boot framework.</li>
          <li>Java based Spring Batch framework.</li>
          <li>Java based Spring Security framework.</li>
          <li>Atomikos for Distributed transaction management.</li>
          <li>Angular Js.</li>
          <li>Jquery.</li>
          <li>Bootstrap 3.x.</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The legacy Computerized Criminal History (CCH) application uses proprietary technology and multiple
          software products, thus creating complicated and costly enhancements and maintenance efforts.
          Additionally, support for the proprietary technology is offered by only one small vendor which places the
          Virginia State Police at risk. The risk to the Agency is further exacerbated by the difficulty of finding
          qualified resources with the skill sets required to maintain the legacy CCH application . The impact of this
          is difficulty implementing new features, legislative mandates or architecture changes.
          The system is capable of handling more than a million transaction per day, providing data transfer and
          interaction across different legacy and federal systems.
          Total of 12 Daily, weekly and monthly job processes make up to approximately 1.3 million transactions in
          a month."
      />

      <SolutionHeader content="re-architecture of a legacy application"/>

      <Solution>
        <p>
          Data Concepts teamed up to strategize the complete migration of the existing legacy system to an open
          architecture-based system. A replacement CCH application offers productivity improvements for VSP
          business users, creating satisfied customers owing to reduced decision-making turnaround times.
        </p>
        <ul class="pseudo">
          <li>
            - Web browser User Interface designed using HTML 5, advanced Javascript frameworks like
            Angular Js and CSS technology.
          </li>
          <li>- Java Middleware module to process Name Search, Search Results and fingerprint data response.</li>
          <li>
            - Total of 12 deployable Spring batch Module for processing court dispositions and different
            external queries from federal systems against criminal history records.
          </li>
          <li>
            - JMS queue processing modules to integrate and communicate between interdependent systems
            to store the accurate response.
          </li>
          <li>- Project source code and documentation.</li>
          <li>- Customizable reports that support a variety of document formats.</li>
          <li>- Comprehensive auditing capabilities to track any and all case inquiries and updates.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="In terms of the technology stack and approach, this system was built from scratch, putting open source
          technology at the front. This gives immense cost savings, provides more control over technology and
          makes it secure as never before."
      >
        <br>
        <p>
          The successful solution provided by Data Concepts was an application built on open standards using
          industry-wide, Virginia State Police best-practices which provide the following benefits:
        </p>
        <ul class="pseudo text-white outcome-list">
          <li>- Enhanced usability (screen design and workflows).</li>
          <li>- Well defined workflows.</li>
          <li>- Reduce maintenance costs.</li>
          <li>- Open/independent architecture.</li>
          <li>- Federation with VSP Sign-On.</li>
          <li>- Reusability.</li>
          <li>- Scalability.</li>
          <li>- Service Oriented Architecture.</li>
          <li>- Enhanced failover capabilities.</li>
          <li>- Better scalability and extensibility, allowing for better maintainability in the years ahead.</li>
          <li>- An open architecture that is compliant with industry and VITA standards.</li>
        </ul>
      </Outcome>
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
      color: "#ffc200"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/police.jpg)
  background-position: center 0%

</style>