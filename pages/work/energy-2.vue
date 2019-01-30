<template>
  <div class="__page-root">
    <Hero title="Energy" kicker="Mobile business solution.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Data Concepts’ client is one of the nation’s largest producers and transporters of 
energy, with a portfolio of approximately 26,000 megawatts of electric generation. It also
operates one of the largest natural gas storage systems in the U.S. with 1 trillion cubic 
feet of capacity, and serve more than 6 million utility and retail energy customers."
      >
        <Role>
          <li>Microsoft Web Stack (Asp.Net MVC, WebAPI)</li>
          <li>jQuery/Bootstrap</li>
          <li>WPF</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="There was a number of tool and disconnected/old systems that enabled more than 200
          servicers with more than 100 service trucks to run down the areas serviced by the client
          with work orders. There were problems is streamlining the process and maintaining
          timely information flow between so many small systems."
      />

      <SolutionHeader content="a re-engineered solution"/>

      <Solution>
        <p>
          Data Concepts started working on a solution by starting to understand the data flows
          from and to each of the systems involved. Once data is identified, it was transformed,
          normalized and loaded into a single data store. A single responsive web application was
          developed for management team to assign and manage work orders in the office. A
          windows application was developed for the services to use inside the truck on the field
          to collect and manipulate data from the field. And an intelligent sync process was
          developed to merge data from both ends understanding precedence based on complex
          business logic.
        </p>
        <ul class="pseudo">
          <li>- Deployable .Net assemblies to IIS web servers.</li>
          <li>- Deployable WPF application pushed through to all servicers tough-books.</li>
          <li>- Database setup in SQL Server 2016.</li>
          <li>- Reports in COGNOS.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The solution deployed by Data Concepts enabled clients easily manage and service
          consumer work orders using a single streamlined system that aesthetically provides
          similar experience irrespective of whether it is used inside business premises or on the
          field; also cutting down cost of managing several different systems and complete data
          flow mechanisms."
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
//   background-image: url(~assets/image/work/energy.jpg)
  background-position: center

</style>