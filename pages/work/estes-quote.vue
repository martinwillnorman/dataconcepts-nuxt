<template>
  <div class="__page-root">
    <Hero title="Estes Trucking" kicker="Quote Generation System.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Our client, one of the top 25 carriers in the transportation industry, provides full-service freight transportation and is the largest privately held less-than-truckload (LTL) company in the United States."
      >
        <Role>
          <li>Application Development</li>
          <li>UI/UX</li>
          <li>Spring</li>
          <li>Jenkins</li>
          <li>Active Directory</li>
          <li>JavaScript</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="To maximize their network of trucks, the client wanted to venture into moving personal household goods for longer distances. This new service was expected to provide cost-effective coast-to-coast moving services that saves individuals money by packing and loading everything onto a moving trailer driven by licensed and experienced truck drivers. The client wanted to provide customers with a responsive and easy to use web application to automatically generate and modify a quote, apply promotions, search moves, reserve a move, track the progress of a move and view any historical quote."
      />

      <SolutionHeader content="a responsive, scalable application to introduce their new service"/>

      <Solution>
        <p>Our client required a highly available, full-featured, immediately responsive and scalable enterprise web application to manage and grow their footprint in this new venture. Taking into account the client’s existing IT skill set, project timelines and IT investments, Data Concepts proposed the following solution:</p>
        <ul class="pseudo">
          <li>- Develop a responsive customer facing web application implementing the critical requirements.</li>
          <li>- Develop an Enterprise web application using Java with the latest technologies like Spring MVC, Bootstrap, Spring Security, Spring Batch, Spring Framework, Maven, OpenJPA, JMS, AJAX, JSP, log4j, PDF and Excel open source frameworks, and WebSphere Distributed Cache.</li>
          <li>- Develop an intranet web application with the same functionality of the web application so the customer service team can aid clients by phone or submit requests on their behalf.</li>
          <li>- For data privacy, deploy the application using database and application server instance installed in an on-premise infrastructure. Implement Spring Security to manage user authentication and authorization using on-premise Active Directory.</li>
          <li>- Provide high availability and scalability by deploying the web application in a clustered WebSphere v8.0 ND environment installed on Red Hat Enterprise Linux. Deploy the outside-facing web application and the intranet web application on separate clusters to maintain high availability.</li>
          <li>- For deployment automation, use Maven to generate enterprise application archive files and integrate it with Jenkins for build automation and automated deployments to the target application server.</li>
          <li>- To quickly serve any static contents for a customer-facing web application like images, videos, JavaScript, html, etc., and deploy and serve static content from Clustered IBM HTTP Server.</li>
          <li>- For rapid expansion and marketing, expose secured APIs to 3PL companies for creating, reserving and tracking a move.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="A new enterprise customer facing web application and intranet support web application was developed by Data Concepts accomplishing all the business requirements and was the key to attract a new line of business. The integration with 3PL companies drove a 100x increase in traffic to the application. The customer support application proved to be extremely useful to quickly resolve customer issues and increase confidence for the new service. The company has recorded exponential increase in the revenue from the new venture and has been able to significantly increase its resource utilization outcomes."
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
  background-image: url(~assets/image/work/estes-quote.jpg)
  background-position: center

</style>