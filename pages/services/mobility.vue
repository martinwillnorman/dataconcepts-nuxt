<template>
  <div class="__page-root">
    <Hero
      title="Mobility"
      kicker="We build custom consumer mobile applications and enterprise mobility solutions across all major platforms."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Mobile development refers to the creation of apps for use on devices such as tablets, smartphones, automobiles and watches. Mobile development often incorporates features of mobile devices that may not be available on desktop devices. An example of this is the ability to operate a device or play a game simply by moving the smartphone around in space. Another popular example is the augmented reality game Pokémon Go. Mobile apps are designed and built for different operating systems. The Android operating system is the most popular followed by Apple’s iOS."
      />

      <Services subtitle="services">
        <SubService title="Native iOS and Android Applications" content="Description"/>
        <SubService title="Custom Mobile App Development" content="Descriptiond."/>
        <SubService title="Enterprise Mobility Applications" content="Description."/>
        <SubService title="Cross-Platform Mobile Apps" content="Description."/>
        <SubService title="Mobile Games" content="Description."/>
        <SubService title="UI/UX Design" content="Description."/>
      </Services>

      <AsideRight
        subtitle="additional"
        title="Our expertise in mobile solutions."
        content="Mobile development is an integral part of nearly every project. Our teams deliver native, hybrid, and cross-platform mobile products with particular focus on security, usability, and UI / UX. We collaborate with companies across various domains creating mobile applications for smartphones, tablets, and wearables. We dedicate development teams deliver top value for every outsourced mobile development solution. Our teams have over ten years of experience in enterprise mobility, as well as strong expertise in iOS, Android, Unity, and Unreal Engine platforms."
        paragraphTwo="We have over a decade of experience in mobile product development. We have been creating mobile products for companies that operate in multiple industries, including financial services, healthcare, hospitality, communications, and real estate. We cover the complete lifecycle of mobile app development. We help enterprises along the whole process of app creation, including conceptualization, UI/UX, graphic design, prototyping, development, quality assurance, and integration."
      ></AsideRight>

      <Definition subtitle="roadmap">
        <SubDefinition
          title="Discovery and Business Analysis"
          content="Our cross-functional team scrutinizes the app’s initial concept. We study how the application addresses particular business objectives and solves users’ problems. Our mobile experts analyze the client’s business model and collaborate closely with client’s teams to identify the key challenges. We scrutinize the app’s target audiences and outline project development milestones."
        />
        <SubDefinition
          title="UX and Visual Design"
          content="We evaluate customer expectations and use cases of the application. At this stage, we define how user experience of the future app will help achieve project’s business objectives. Our team proceeds to UX concept development, wireframing, user interface mapping, and testing."
        ></SubDefinition>
        <SubDefinition
          title="Product Development"
          content="Our teams use Agile/Scrum methodologies to create an early working application, and then add features and improve the application with every iteration. Our mobile testers are involved at every stage of the development process to help identify improvement areas."
        />
        <SubDefinition
          title="Release and Support"
          content="Once the production version of the enterprise mobility solution is ready, we integrate it with organization’s business processes. As for consumer apps, our engineers launch them in mobile app stores. After the release, we help enterprises support and maintain mobile applications."
        />
      </Definition>

      <InsightHighlight
        title="The Modern Digital Landscape"
        imgsrc="/insight/graffiti-2.jpg"
        link="/insights/digital-landscape"
      />

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
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import AsideRight from "../../components/service/AsideRight.vue";
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
    InsightHighlight,
    HireUsFooter,
    AsideRight,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/mobility.jpg)

</style>
