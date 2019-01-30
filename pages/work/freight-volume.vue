<template>
  <div class="__page-root">
    <Hero title="Estes Trucking" kicker="Freight Volume Planning System.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Summary
        v-bind:color="color"
        content="Our client, one of the top 25 carriers in the transportation industry, provides full-service freight transportation and is the largest privately held less-than-truckload (LTL) company in the United States."
      >
        <Role>
          <li>Angular</li>
          <li>Application Development</li>
          <li>Optimization</li>
          <li>Spring</li>
          <li>WebMethods ESB</li>
        </Role>
      </Summary>

      <Challenge
        v-bind:color="color"
        content="The client has been using an in-house route optimization tool that divided its terminal’s area into regions based on zip codes and then customer accounts within the zip codes. It builds the basic routes and then asks City Planners to apply local knowledge to balance the workload. Since the tool relies on the local knowledge of the city planner, it has related challenges, inaccuracies, and scalability limitations. To effectively handle a continuous increase in freight volume and provide better delivery service to customers, the client was looking for a long-term solution to continually maximize efficiencies in Pickup and Delivery [P&D] routing and more effectively utilize their resources."
      />

      <SolutionHeader content="route optimization application for ltl trucking industry"/>

      <Solution>
        <p>Our client required a scalable solution with increased automation for P&D routing process and provide better shipment delivery estimates to their customers. They wanted to apply the Tommy Thompson model and build optimal routes without depending on local knowledge. They needed real-time visibility to actual P&D performance versus after-the-fact reports. The primary benefits desired were fuel and labor savings and increased customer satisfaction, as well as the ability to plan and change routes from a central location based on near-real time alerts of shipments arriving at the distribution terminal.</p>
        <ul class="pseudo">
          <li>- Implement the business needs through a new enterprise web application using Java and latest technologies like Spring MVC, Spring Security, Spring Framework, Maven, OpenJPA, JMS, AJAX, JSP, log4j, PDF and Excel open source frameworks, and WebSphere Distributed Cache.</li>
          <li>- Develop a responsive UI application for route planners using latest Angular 2, HTML5, Bootstrap, CSS3 and extensively using middle tier Restful API services.</li>
          <li>- Use HERE Maps Trucking API to optimize routes based on various shipment delivery constraints, geocoding of delivery address and provide accurate ETA for truck arrivals at the terminal.</li>
          <li>- Use WebMethods ESB to capture real time ETA updates from 3rd party providers and publish JMS messages. Use Restful APIs to consume the JMS messages and push real time alerts to planner’s console. Planner can view these alerts and take appropriate action to optimize the route.</li>
          <li>- Provide high availability and scalability by deploying the web application in a clustered Websphere v8.0 ND environment installed on Red Hat Enterprise Linux. Use WebMethods Universal Messaging for high-performance, high throughput, low-latency messaging across a wide array of delivery channels.</li>
          <li>- For data privacy, deploy the application using database and application server instance installed in an on premise infrastructure. Implement Spring Security to manage user authentication and authorization using on premise Active Directory.</li>
          <li>- For deployment automation, use Maven to generate enterprise application archive files and integrate it with Jenkins for build automation and automated deployments to the target application server.</li>
        </ul>
      </Solution>

      <Outcome
        v-bind:color="color"
        content="The solution has been in production and has resulted in increased route optimization. The benefits have been so great, that other trucking companies have clamored to purchase or emulate the program."
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
      color: "#cb3694"
    };
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/work/freight-volume.jpg)
  background-position: center

</style>