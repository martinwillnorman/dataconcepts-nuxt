<template>
  <div class="__page-root">
    <Hero title="Scala Architecture Migration" kicker>
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Our Client, a Credit Union, was invested in Legacy systems with zero test coverage, in a tightly coupled Microsoft infrastructure which was difficult to scale and maintain. Its web interface was buggy and not mobile enabled."
      >
        <Role>
          <li>Scala</li>
          <li>Akka</li>
          <li>Docker</li>
          <li>Ansible</li>
          <li>AWS</li>
          <li>ElasticSearch</li>
          <li>CI/CD</li>
          <li>Mobility</li>
          <li>UI/UX/li></li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="Data Concepts’ mission was to deliver high quality, scalable code and architecture that was easy to extend and maintain. Test coverage and infrastructure automation were two of the most important goals."
      />

      <SolutionHeader content="seamless migration to scala microservices"/>

      <Solution>
        <p>We developed the client’s vision for a beautiful web interface by first resolving the underlying issues. Data concepts identified Scala Micro Services as the best platform, and the migration to Scala served as the foundation for an architectural transformation that solidly supported test coverage and automated deployment.</p>
        <ul class="pseudo">
          <li>- New responsive web front-end, developed in a “mobile-first” spirit.</li>
          <li>- Highly scalable API bridge that provides consistent and uniform REST API and makes further migration to Scala micro services fully transparent.</li>
          <li>- Mobile-aware, WYSIWYG CMS.</li>
          <li>- Automated deployment.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="To ensure our client was able to maximize their investment, the system was set up to avoid “vendor lock-in” and our consultants collaborated to train the client’s in-house dev team. Due to automated tests coverage and zero-downtime Continuous Delivery, coupled with the advantages of applying git-flow patterns, deployments became a matter of formality."
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