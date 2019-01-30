<template>
  <div class="__page-root">
    <Hero title="First Union Bank" kicker="Crowd-Sourcing Web Portal.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ banking client is one of the largest community banks headquartered in Virginia. It offers traditional, freestanding banking locations as well as full-service in-store locations in certain grocery stores in Virginia."
      >\
        <Role>
          <li>.Net</li>
          <li>SharePoint</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="Our client’s philosophy is that nobody knows better how to do their job than the employees actually filling the roles. They sought to develop an internal organizational crowdsourcing portal that would provide their associates with the ability to share, foster and receive feedback on insights to drive workplace innovation and keep the organization in alignment with business needs and best-practices."
      />

      <SolutionHeader content="a custom web portal to promote employee engagement"/>

      <Solution>
        <p>Data Concepts built a custom web portal for the client to provide an enterprise platform to promote employee engagement by harnessing employee ideas. The product was built using .Net Framework, SharePoint APIs and Service Applications. The portal offered group- and role-based customizations and features. Data Concepts worked closely with the customer stakeholders to build a system with a very attractive and intuitive UI to ensure maximum participation by the company employees. The portal functional highlights included:</p>
        <ul class="pseudo">
          <li>- Personalized Idea Lab Homepage.</li>
          <li>- Posting an Idea & answering challenges.</li>
          <li>- Search Duplicates.</li>
          <li>- Crowdsourcing by voting & comments.</li>
          <li>- Idea filtering & Search.</li>
          <li>- Configure keywords for matching ideas.</li>
          <li>- Leaderboard.</li>
          <li>- Responsive UI for desktops, tablets & smartphones.</li>
          <li>- Points system & Bonus points.</li>
          <li>- Idea Promotion.</li>
          <li>- Configure departments & Subject Matter Experts.</li>
          <li>- Configure departments & Subject Matter Experts.</li>
          <li>- Manage static content & navigation.</li>
          <li>- Add Challenges.</li>
          <li>- Backup timer job with PowerShell scripts.</li>
          <li>- Web analytics for reporting.</li>
          <li>- Custom reports with download features.</li>
          <li>- Activities and events logging.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The Ideation Crowd Sourcing portal has been deployed in production for over a year and is fully embraced by the user community."
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
  background-image: url(~assets/image/work/first-union.jpg)
  background-position: center

</style>