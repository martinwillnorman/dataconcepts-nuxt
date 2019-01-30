<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Cloud | Application Development"
        title="Cloud Application Development"
        summary="Data Concepts’ cloud application development offerings help you take an advantage of everything Microsoft Azure has to offer – from migrating legacy applications to creating custom solutions which exploit the full value of the platform."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="Why cloud applications"
            content="Enterprises are increasingly embracing the economics, speed and scale of public cloud platforms to drive their digital and growth agenda. At the same time the Microsoft® Azure platform is fast becoming a leading choice for migrating existing applications or building a new generation of applications which take advantage of a global network of datacenters, accelerated deployment times, and increased efficiencies and cost savings. At Data Concepts, we believe the cloud can deliver the speed you need to become a digital business and we bring expertise to help you take full advantage of the cloud and Microsoft® Azure."
          ></SubSection>
          <SubSection
            title="Data Concepts’ offerings include:"
            content="- Cloud roadmap and strategy assessments."
          ></SubSection>
          <SubSection content="- Cloud application migration."></SubSection>
          <SubSection content="- Datacenter extensions."></SubSection>
          <SubSection content="- Cloud services for mobile devices and sensors."></SubSection>
          <SubSection content="- Custom web and cloud scale applications."></SubSection>
          <SubSection
            class="subsection-padding"
            content="Additionally, Data Concepts can help you navigate the security, governance, and integration challenges often associated with a move to the cloud and provide managed services for your cloud applications."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Cloud can accelerate your digital journey"
            content="Successful enterprises today are driving growth with digital experiences which effectively connect systems, people, devices and insight. The ability to respond rapidly to market needs through innovative digital applications is fast becoming a competitive necessary. The cloud can play a crucial role in this journey by providing the speed enterprises need in order to become digital businesses."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="But the cloud often introduces new complexity"
            content="Organizations have heterogeneous IT environments with varying requirements and often face complex tradeoffs in maximizing beneft while minimizing risk – including identity, security, integration, and governance. The cloud can also bring additional complexity by introducing new approaches to development, delivery and management – including refactoring existing applications, faster and more frequent releases, and increased interdependence between development and operations."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Choose a cloud-first approach with Data Concepts"
            content="With a core competency in Application Development on the Microsoft platform and a preferred partnership with Microsoft, Data Concepts is uniquely positioned to help you with your cloud application development needs. We can help you: Identify and prioritize the right applications to migrate or build new for Azure, Deliver skills to build modern business applications that take full advantage of cloud scale and requirements, Provide Managed Services and an agile, continuous delivery model based on rapid iteration using the cloud Cloud Application Development Offerings."
          ></SubSection>
          <SubSection
            title="We provide an end-to-end approach from assess, to build, and to run and we can apply this to a range of scenarios and engagements."
            content="Examples of some of the types of projects we can do for you include:"
          ></SubSection>
          <SubSection
            content="Cloud Strategy – Change approach from a set of technologies and services to an organic and controlled ecosystem."
          ></SubSection>
          <SubSection
            content="Cloud Migration – Assessing, prioritizing, and migrating existing applications in order to beneft from effciencies and economics of the cloud."
          ></SubSection>
          <SubSection
            content="Cloud Mobile Services – Enable secure and reliable data access to a wide range of mobile and connected devices."
          ></SubSection>
          <SubSection
            content="Digital Strategy – Digital Marketing and Collaboration platforms hosted on the Cloud for better scalability and global reach."
          ></SubSection>
          <SubSection
            content="Internet Services – Web based applications leveraging Cloud Platforms in PaaS and SaaS models."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Data Center Extension – Applications hosted on Microsoft Azure with full integration with on premises infrastructure."
          ></SubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Spacer from "../../components/random/Spacer.vue";
import Header from "../../components/insight/Header.vue";
import SubSection from "../../components/insight/SubSection.vue";

export default {
  components: {
    Spacer,
    Header,
    SubSection
  }
};
</script>


<style lang="sass" scoped>

.insight-image
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(120deg) saturate(6)
  background-image: url(/insight/space-7.jpg)

</style>
