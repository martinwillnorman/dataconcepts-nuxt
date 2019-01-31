<template>
  <div class="__page-root">
    <Hero
      title="Master Data Management"
      kicker="Create and define the critical point of reference for all your data."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Implementing a master data management strategy is key to improving your data. Proper master data management architecture is crucial for businesses that face data quality and consistency issues. A solid data management strategy will ensure that business-critical data is error-free and streamlined."
      />

      <Services subtitle="services">
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
      </Services>

      <Definition subtitle="definition">
        <SubDefinition
          title="What is MDM?"
          content="Master Data Management (MDM) refers to the process of creating and managing data that an organization must have as a single master copy, called the master data. Poor Master Data Management Can Lead to Major Quality Issues A range of applications within a business uses a company’s master data. Failing to manage data can have a detrimental chain-reaction effect on a business’s general operations. An error in customer master data, for example, could lead to bills or deliveries being sent to the wrong organization, impacting your business reputation and negatively effecting your bottom-line."
        />
        <SubDefinition
          title="How to Implement MDM?"
          content="Our precise master data management strategy and roadmap ensures that data is consistent, complete and contextual. Master data management benefits include improved accessibility of accurate business data for systems and stakeholders across the enterprise. Holistic Approach to Master Data Management We take a holistic view of master data management. It is a framework of people, processes and technology that help to manage the information that is deeply embedded in our businesses. "
        ></SubDefinition>
        <SubDefinition
          title="How to Get Started?"
          content="Whether your business requires a single master data management system to master your customers or products, or a complete enterprise MDM solution using SAP, Oracle we will craft a solution to address the specific needs of your organization."
        />
      </Definition>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/mdm.jpg)

</style>
