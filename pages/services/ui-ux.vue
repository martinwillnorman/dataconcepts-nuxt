<template>
  <div class="__page-root">
    <Hero
      title="UI/UX"
      kicker="Scaleable & flexible methodologies for an innovation-ready & delivery-ready PMO."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Our UI/UX  analysts take the emotionally balanced human-centered approach to deliver top-notch design solutions where the primary focus is not just improving usability but make it delicate and elegant as well."
      />

      <Services subtitle="services">
        <SubService
          title="Information Architecture"
          content="Provide structural designs, organize and label websites to support usability & easy navigation, involves modeling of information for complex systems."
        />
        <SubService
          title="User Interface Design"
          content="Structuring the layout and designing the user interface, focusing on maximizing the usability of the site and simplifying the experience of the users."
        />
        <SubService
          title="User Experience Design"
          content="Enhance user satisfaction, provide usability, accessibility and pleasure in the interaction with the product, addressing all aspects of product or service."
        />
        <SubService
          title="Wireframing & Prototyping"
          content="We provide basic layout and structural guidelines of your web products. Molding the basic wireframe to provide more visual detail and interaction."
        />
        <SubService
          title="UI Testing & Validation"
          content="Testing the product’s graphical user interface ensuring that it meets the user specifications, done with the help of various test cases, where designers test overall functionality."
        />
      </Services>

      <Definition subtitle="Strategy">
        <SubDefinition
          title="Research & Analysis"
          content="We audit existing UI/UX experiences, evaluate consumer perception, and uncover opportunities to drive growth, distinction, and value."
        ></SubDefinition>

        <SubDefinition
          title="Trend & Insight"
          content="We analyze social, cultural, and economic factors to identify powerful trends and draw meaningful insights to help our partners shape what’s next."
        ></SubDefinition>

        <SubDefinition
          title="Customer Experience"
          content="Through journeys, personas, and user scenarios, we reveal consumers’ motivations, preferences, and needs to create powerful connections between brands and customers."
        ></SubDefinition>

        <SubDefinition
          title="Brand Platform & Positioning"
          content="Working collaboratively with stakeholders we define powerful brand positions, crafting foundations that deliver against market, consumer, and business insights."
        ></SubDefinition>

        <SubDefinition
          title="Go-to-Market Planning"
          content="We help develop launch and engagement strategies that deliver meaningful experiences at every touchpoint, establishing and growing relationships with the people that matter most."
        ></SubDefinition>

        <SubDefinition
          title="Content & Messaging"
          content="We amplify brand stories by crafting content, messaging frameworks, and editorial calendars that meet the unique needs, motivations and influences of target audiences."
        ></SubDefinition>
      </Definition>

      <InsightHighlight
        title="The 'Culture Step': for Getting a Digital Transformation on Track"
        imgsrc="/insight/art.jpg"
        link="/insights/digital-culture"
      />

      <Related>
        <InsightContainer
          link="/insights/digital-transformation"
          category="Digital"
          title="Digital Transformation: Our Thoughts on Getting Started"
          summary="Our digital strategists and technologists are changing the way our clients think about, assemble, ship, and run digital services."
          imgsrc="/insight/lights.jpg"
        />
        <InsightContainer
          link="/insights/digital-culture"
          category="Digital"
          title="The 'Culture Step': for Getting a Digital Transformation on Track"
          summary="The hardest part of a successful digital transformation is the cultural piece."
          imgsrc="/insight/art.jpg"
        />
        <InsightContainer
          link="/insights/digital-landscape"
          category="Digital"
          title="The Modern Digital Landscape"
          summary="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions."
          imgsrc="/insight/graffiti-2.jpg"
        />
      </Related>

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
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    Promise,
    Services,
    SubService,
    HireUsFooter,
    Definition,
    SubDefinition,
    InsightContainer,
    InsightHighlight,
    Related,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/ui-ux.jpg)

</style>
