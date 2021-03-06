<template>
  <div class="__page-root">
    <Hero title="Blockchain" kicker="The Next Generation of Digital Commerce.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="As blockchain strategies gain traction and the technology matures, organizations are becoming increasingly aware of the fundamental way that business transactions will change. This smart, decentralized, trusted and highly-encrypted network of computing nodes is poised to be the next disruptive wave in digital business. Organizations that engage early—to explore strategies, test use cases and hone their skills—increase the likelihood that they will reap benefits."
      />

      <Services subtitle="services">
        <SubService
          title="Enterprise Blockchain Consulting and Evaluation"
          content="We can help you determine the right enterprise blockchain strategy for your business. Data Concepts focuses on providing scalable and sector-specific blockchain applications that directly support our clients, working together to build better solutions."
        />
        <SubService
          title="Industry-specific Application Creation"
          content="Our expertise is at your disposal as you develop blockchain applications to improve the efficiency in the way you do business. While blockchain can seem complex, we simplify the technology and clearly articulate how it can support your business."
        />
        <SubService
          title="Comprehensive Technical Ability"
          content="We specialize in Smart Business Contracts, Customer Loyalty & Rewards Systems, Blockchain Data Storage Solutions, Distributed Ledgers for Financial Transparency, and other focused applications."
        />
        <SubService
          title="Customized Enterprise Blockchain Solutions"
          content="We build blockchain applications for finance, real estate, and the supply-chain industry."
        />
        <SubService
          title="Developer Training"
          content="We will train your existing staff to develop a practical understanding of blockchain technology and its core function in your business."
        />
        <SubService
          title="Executive Training"
          content="Our executive training covers enterprise blockchain, major and side chains and non-disruptive deployment techniques."
        />
      </Services>

      <AsideRight
        title="Blockchain: The Future of Data"
        content="We provide our clients with a complete view of the blockchain-based technology landscape and its potential business implications. We work with each client to help build smart strategies around effective use-cases, investment and implementation. Blockchain has the potential to drive profound, positive change."
      />

      <Definition subtitle="benefits of blockchain">
        <SubDefinition
          title="Cut the Cost of Business Transactions"
          content="With distributed ledger technology, there’s no need to engage costly intermediary services, such as lawyers, brokers and bankers, to ensure legitimacy and security for your transactions. By eliminating the third-party intervention, we can significantly lower transaction fees and optimise efficiency."
        />
        <SubDefinition
          title="Optimize Your Financial Operations"
          content="Сash transactions can take hours or a few days in a row, especially during holidays or weekends, affecting overall company performance and stopping critical business processes. Blockchain-based technology will allow you to avoid the wait time as you can easily carry out financial operations in minutes at any place round-the-clock."
        ></SubDefinition>
        <SubDefinition
          title="Secure Your Financial Operations"
          content="Administrative control is a crucial structure of any business. But its maintenance and regulation take a lot of efforts and resources; thus it can be optimised with Smart Contracts. This technology will provide transparency between all the parties and guarantee no data was altered or deleted, even if you operate in the semi-trusted environment."
        />
        <SubDefinition
          title="Reinforce your asset management"
          content="Distributed ledger technology enables tracking any product-related information, such as price, location, date, quality etc. over the whole product lifecycle, allowing businesses to address such supply chain issues as lack of transparency, reliability, traceability and security."
        />
      </Definition>

      <Capabilities subtitle="capabilities">
        <SubCapability
          title="Technology Research & Prototyping"
          content="We make a comprehensive assessment of your business infrastructure, together with the market research, to gauge the opportunities and define what blockchain solution will help to optimize company operations and boost its productivity. Before the idea launch, we always make a rapid prototype that allows you to measure its efficiency and make appropriate adjustments, if needed."
        ></SubCapability>
        <SubCapability
          title="Architecture & Environment Setup"
          content="The reliability of the technology solution highly depends on the quality of the environment. Our team will set up a trusted environment and establish the communication architecture, ensuring a secure and bug-free technology deployment."
        ></SubCapability>
        <SubCapability
          title="User Experience Design"
          content="Our team of UI/UX experts will help you create a blockchain-based solution that offers a meaningful and valuable experience to the end-users. We apply design thinking techniques to carefully analyse your business needs and come up with a best-fit solution."
        ></SubCapability>
        <SubCapability
          title="Deployment & Monitoring"
          content="Our ultimate goal is to ensure the smooth process of technology development followed by quality testing. We validate and adjust blockchain parameters and eliminate any possible risks that may occur."
        ></SubCapability>
      </Capabilities>

      <InsightHighlight
        title="Our Insights on the World of Blockchain"
        imgsrc="/insight/bridge.jpg"
        link="/insights/blockchain-world"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          title="A Quick Peek in to  Data Strategy"
          summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
          category="Data Strategy"
          link="/insights/quick-peek"
          imgsrc="/insight/dance-2.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-mining"
          category="Big Data"
          title="Extracting Actionable Insights from Data"
          summary="Data mining is the extraction of actionable insights from data."
          imgsrc="/insight/entry.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/analytics-is-popular"
          category="Data & Analytics"
          title="The Popularity of Analytics"
          summary="Ten imperatives for successfully developing an analytics capability."
          imgsrc="/insight/model.jpg"
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
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import Capabilities from "../../components/service/Capabilities.vue";
import SubCapability from "../../components/service/SubCapability.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import AsideRight from "../../components/service/AsideRight.vue";
import Related from "../../components/service/Related.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
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
    Capabilities,
    SubCapability,
    InsightHighlight,
    HireUsFooter,
    AsideRight,
    Related,
    InsightContainer,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/blockchain.jpg)

</style>
