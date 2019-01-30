<template>
  <div class="__page-root">
    <Hero
      title="AI"
      kicker="We provide artificial intelligence consulting to help organizations implement this technology today."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Our Data Scientists and Machine Learning Engineers can support your AI initiatives from strategy to implementation to optimization. With systems that can improve their own performance by learning and adapting to new data. Software that understands and interprets unstructured text. Automation that gives your staff time for higher levels of interaction with your customers. And chatbots that deliver consistent, personalized customer service."
      />

      <SectionDivider
        title="Natural Language Processing"
        content="Natural Language Processing (NLP) helps a computer program understand how people communicate and then automatically generates text based on this understanding. NLP can read through and extract meaning from millions of lines of unstructured text data (ex: emails, surveys, social media conversations, online reviews, text documents)."
      />

      <Services subtitle="NLP services">
        <SubService
          title="Semantic Search"
          content="Enable apps to perform deep searches by understanding the searcher’s intent and the context through their search queries using NLP techniques."
        />
        <SubService
          title="Sentiment analysis"
          content="Also known as opinion mining or emotion AI, sentiment analysis allows you to determine whether content is positive, negative or neutral by extracting particular words or phrases."
        />
        <SubService
          title="Speech Recognition"
          content="Identify the textual representation of the speech and provide correct results for search and analytics."
        />
        <SubService
          title="Machine Learning"
          content="Perform NLP tasks like keyword extraction, POS tagging, classification, NER, and topic modeling."
        />
      </Services>

      <Advantages subtitle="NLP Benefits">
        <ul data-aos="fade-up" class="advantages-list pseudo">
          <li class="advantages-list-item">Increase customer engagement, revenue, and retention</li>
          <div class="line"></div>
          <li class="advantages-list-item">Analyze social media comments, online reviews</li>
          <div class="line"></div>

          <li class="advantages-list-item">Decipher employee survey results</li>
          <div class="line"></div>

          <li class="advantages-list-item">Develop smart product strategies</li>
          <div class="line"></div>

          <li class="advantages-list-item">Process, categorize, and index text documents</li>
          <div class="line"></div>

          <li class="advantages-list-item">Drive strategic decision-making</li>
        </ul>
      </Advantages>

      <SectionDivider
        title="Machine Learning"
        content="Machine Learning algorithms help your systems learn by detecting patterns in historical data and outcomes, making predictions and prescriptions based on that data, and adapting to new data for continually improved performance over time. The business value can be profound."
      />

      <Services subtitle="ML services">
        <SubService
          title="Supervised Learning"
          content="Perform NLP tasks like keyword extraction, POS tagging, classification, NER, and topic modeling."
        />
        <SubService
          title="Unsupervised Learning"
          content="Enable apps to perform deep searches by understanding the searcher’s intent and the context through their search queries using NLP techniques."
        />
        <SubService
          title="Reinforced Learning"
          content="Identify the textual representation of the speech and provide correct results for search and analytics."
        />
      </Services>

      <Technology subtitle="advantages">
        <SubTechnology
          title="Scalability"
          content="AI enabled solutions are designed to handle big data. There is also no overtime, or hiring challenges when your machine needs to handle more data."
        />
        <SubTechnology
          title="Consistency & Predictability"
          content="Machines are programmed to perform consistently; they do not bring personal bias into processing. Insights can be traced to the data model design.s"
        />
        <SubTechnology
          title="Quality & Reliability"
          content="Expect reductions in mistakes, accidents, regulatory violations and fraud. When trained properly, AI enabled processes will reduce risk and improve the quality of results."
        />
        <SubTechnology
          title="Employee Satisfaction"
          content="Eliminating mundane and repetitive tasks frees up human talent to innovate and create."
        />
        <SubTechnology
          title="Productivity & Performance"
          content="AI is “on” 24/7, 365 days a year; does not take vacations; and can perform at digital speeds."
        />
      </Technology>

      <SectionDivider
        title="Chatbot"
        content="Chatbots enable businesses to deliver consistent, personalized service using technology to interact with customers through simulated text or verbal communications."
      />

      <Services subtitle="Chatbot services">
        <SubService
          title="Assessment & Roadmap"
          content="We identify repetitive processes that are easy to consume through conversation. We capture and analyze rule complexity, technology compatibility and data availability to develop a roadmap for your chatbots."
        />
        <SubService
          title="Design & Development"
          content="We capture required features and functionality, develop conversational scripting, and build the engineering components. Chatbot intent and entities are created and tested throughout the process."
        />
        <SubService
          title="Deployment & Monitoring"
          content="We deploy your Chatbots in the selected hosting environment and publish them to your platform. We also offer performance monitoring, wherein we monitor actual chatbot conversations and analyze performance."
        />
      </Services>

      <Definition subtitle="roadmap">
        <SubDefinition
          title="Discovery"
          content="Reviewing your current capabilities and defining future goals to make recommendations for tools, technology, and architecture."
        />
        <SubDefinition
          title="Proof of Concept"
          content="Test a small-scale system, proving the viability of the machine learning models for your problem."
        ></SubDefinition>
        <SubDefinition
          title="Improvement"
          content="Improvement of previously built models to continuously raise the quality of insights and to keep up with the changing environment."
        />
        <SubDefinition
          title="Production"
          content="Inserting the machine learning system into production while considering costs of implementation and maintenance during deployment."
        />
      </Definition>

      <InsightHighlight
        title="Harness the Power of Analytics & AI to Predict"
        imgsrc="/insight/lights-15.jpg"
        link="/insights/analytics-power"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          link="/insights/analytics-power"
          category="Artificial Intelligence"
          title="Harness the Power of Analytics & AI to Predict"
          summary="Using your data to realize the benefits of artificial intelligence (AI) sounds good, right? Now you just need to work out how to do it."
          imgsrc="/insight/lights-15.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/azure-machine-learning"
          category="Machine Learning"
          title="5 Reasons Why We Love Azure ML for Machine Learning Solutions"
          summary="From virtual assistants to chatbots and automation to smart homes, Artificial Intelligent (AI) and Machine Learning have become prominent in our daily life."
          imgsrc="/insight/lights-10.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/data-security-bi"
          category="Data Security"
          title="Data Security in the BI & IoT World"
          summary="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer."
          imgsrc="/insight/abstract.jpg"
        />
      </Related>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import Spacer from "../../components/service/Spacer.vue";
import Hero from "../../components/hero/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Technology from "../../components/service/Technology.vue";
import SubTechnology from "../../components/service/SubTechnology.vue";
import Related from "../../components/service/Related.vue";
import InsightContainer from "../../components/insight/InsightContainer.vue";
import SectionDivider from "../../components/service/SectionDivider.vue";
import Advantages from "../../components/service/Advantages.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Spacer,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    InsightHighlight,
    HireUsFooter,
    Technology,
    SubTechnology,
    Related,
    InsightContainer,
    SectionDivider,
    Advantages,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/ai.jpg)

</style>
