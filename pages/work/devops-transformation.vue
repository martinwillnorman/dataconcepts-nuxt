<template>
  <div class="__page-root">
    <Hero title="DevOps Transformation" kicker="Strategy & Roadmap.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ client was mired in organizational change and needed help improving their processes due to a failed Agile approach and a lack of communication across the twelve teams in their eCommerce division."
      >
        <Role>
          <li>Agile Reengineering</li>
          <li>DevOps</li>
          <li>CI/CD</li>
          <li>Automation</li>
          <li>Organizational Transformation</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The workforce used Agile methodologies, however, automation was limited and organizational redundancies resulted in duplicate effort and waste. A culture centered on delivery deadlines had tattered morale and communication while simultaneously ignoring individual and team growth. A new corporate vice president mandated the group transition to a DevOps model, a significant transformation melding development, operations, and support by extending Agile principles and test automation through the deployment process to increase software quality and reliability while reducing waste. DevOps would also empower the teams by promoting a culture of cooperation, accountability, continuous improvement, and growth."
      />

      <SolutionHeader content="a tailored devops solution designed for collaboration"/>

      <Solution>
        <p>Data Concepts crafted and implemented a detailed roadmap for the eCommerce division to reach full DevOps maturity with predictable stability in all environments. The project entailed several steps:</p>
        <ul class="pseudo">
          <li>- Establish a new Continuous Integration / Continuous Delivery [CI/CD] pipeline.</li>
          <li>- Streamline roles and responsibilities.</li>
          <li>- Make quality the focus throughout the development cycle, starting with improving the format for user stories with rigorous Definitions of Done, as well as employing better automation.</li>
          <li>- Build team morale.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="Ultimately, Data Concepts delivered tangible, immediate value through a DevOps strategy and roadmap tailored to the exact needs of the eCommerce group, complete with vision, measurable goals and recommendations that were immediately actionable. Successful execution excited leadership, as it meant a transition from DevOps to NoOps, where optimization is built into testing and automation to such an extent that operations is “hands off” in the deployment process. The realized transformation in the software development process and the capacity of each employee resulted in a better product, significant efficiency gains, and a culture of improved teamwork and communication."
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
      color: "#ffc200"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/devops-transformation.jpg)
  background-position: center

</style>