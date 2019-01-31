<template>
  <div class="__page-root">
    <Hero
      title="Data Governance"
      kicker="Define a sound data governance program to manage the availability, usability, and security of your data."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Data governance is the ability of an organization to manage its information knowledge and to answer questions such as What do we know about our information? Where did this data come from?, and Does this data adhere to company policies and rules? Data governance practices provide a holistic approach to managing, improving and leveraging information to help you gain insight and build confidence in business decisions and operations. Our data governance solutions let you locate and retrieve information about data objects, their meaning, physical location, characteristics, and usage. This helps improve IT productivity while meeting regulatory requirements."
      />

      <Services subtitle="services">
        <SubService
          title="Flexible Data Governance Strategy"
          content="With multiple entry points, adopt a data governance strategy to suit your organizational objectives while shaping business information in unique ways as per your needs."
        />
        <SubService
          title="Archive and Streamline Applications"
          content="By consolidating applications, retiring outdated databases and modernizing existing systems, focus on important projects, thus reducing risk and enhancing application quality."
        />
        <SubService
          title="Confidence in Big Data Analytics"
          content="Obtain clean, consolidated, consistent and current information. Use this information to drive big data projects and applications while aligning with governance objectives."
        />
        <SubService
          title="Privacy and Protection"
          content="Identify data with meaning, assess data value and risk, secure PII, PCI, and PHI, and get ready for GDPR."
        />
      </Services>

      <InsightHighlight
        title="Data & Analytics Governance: Change is Happening, are You Ready?"
        imgsrc="/insight/light-bulbs.jpg"
        link="/insights/data-analytics-change"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-governance-journey"
          category="Data Governance"
          title="Data Governance is a Journey, not a Destination"
          summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
          imgsrc="/insight/lights-2.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-governance-path"
          category="Data Governance"
          title="Let's Put You on the Path to Data Governance Excellence"
          summary="In the rush to get exciting, advanced analytics projects off the ground, don't overlook the importance of data governance. Data governance practices can sink any analytics initiative before it really has a chance to take shape."
          imgsrc="/insight/capital-one.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-analytics-change"
          category="Data & Analytics"
          title="Data & Analytics Governance: Change is Happening, are You Ready?"
          summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
          imgsrc="/insight/light-bulbs.jpg"
        />
      </Related>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import Hero from "../../components/hero/Hero.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    SubService,
    Promise,
    Services,
    InsightHighlight,
    Related,
    InsightContainer,
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/data-governance.jpg)

</style>
