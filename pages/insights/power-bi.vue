<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Business Intelligence"
        title="Are You Making the Most of Your Business Data?"
        summary="Power BI - Business intelligence like never before."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            title="What is Power BI?"
            content="Power BI is a suite of business analytics tools that deliver insights throughout your organization. Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis."
          ></SubSection>
          <SubSection
            content="Produce beautiful reports, then publish them for your organization to consume on the web and across mobile devices. Everyone can create personalized dashboards with a unique, 360-degree view of their business. And scale across the enterprise, with governance and security built-in. Performing numerous permutations and combinations on spreadsheets is a time consuming task. With visualizations, analysis becomes automatic."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="When data sources are connected in the right way, all you need to do is ask questions. Our visualization services combined with Power BI’s natural language processing, makes it easy to seek insightful information related to every aspect of your business. Data Concepts brings expertise and a proven track record in Power BI implementation consulting and development – including reporting from data marts and data warehouses, as well as integrations with disparate data sources. We can take you from data to game changing insights by using data from any source to provide a unified view of the business!"
          ></SubSection>
          <SubSection
            title="Power BI Services"
            content="We partner with enterprises across the business intelligence lifecycle – - from BI envisioning, needs assessment and proof of concepts, to data model design (logical and physical), platform implementation, data integration development, reporting & visualization design and development, and ongoing data ops."
          ></SubSection>
          <SubSection content="- Data Platform Development"></SubSection>
          <SubSection
            content="Build a data platform to serve data for Power BI or configure Power BI to leverage existing sources such as data marts, operational data stores, and data warehouse."
          ></SubSection>
          <SubSection content="- Analysis & Planning"></SubSection>
          <SubSection
            content="Analyze your business intelligence requirements, data sources, and plan your Power BI deployment architecture, data integration & transformation and reporting & visualization deliverables."
          ></SubSection>
          <SubSection content="- Data Integration & Transformation"></SubSection>
          <SubSection
            content="A key step in Power BI solutioning is the data integration & transformation involving data extraction, cleansing and data preparation using Power Query M language."
          ></SubSection>
          <SubSection content="- Data Modeling"></SubSection>
          <SubSection
            content="Leverage data modeling constructs such a dimensions, facts and snowflakes with advanced DAX to create robust data models that accurately reflect the BI reporting requirements."
          ></SubSection>
          <SubSection content="- Visualization & Reporting"></SubSection>
          <SubSection
            content="Enable data driven decision making with rich and interactive scorecards, dashboards with drill downs to identify emerging trends, gain access to relevant information, and monitor goals and objectives."
          ></SubSection>
          <SubSection content="- Data Ops"></SubSection>
          <SubSection
            class="subsection-padding"
            content="Provide development and support for ongoing data source integration, data quality and performance improvements."
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(220deg) saturate(6)
  background-image: url(/insight/graffiti.jpg)
  background-position: center 100%
</style>
