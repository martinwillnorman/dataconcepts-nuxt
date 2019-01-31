<template>
  <div class="__page-root">
    <Hero
      title="Data Warehouse"
      kicker="Create a key infrastructure for data reporting and analysis."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Data warehousing is the process of taking data from legacy and transactional database systems and transforming it into organized information in a user-friendly format to encourage data analysis and support fact-based business decision making."
      />

      <Services subtitle="services">
        <SubService
          title="Data Governance"
          content="We will reduce data complexity through a standardized and structured framework."
        />
        <SubService
          title="Data Quality"
          content="We clean data in your database downstream and minimize the problem of poor data."
        />
        <SubService
          title="Data Migration"
          content="We accelerate the data migration process while ensuring clean data is loaded to the new system."
        />
        <SubService
          title="Master Data Management"
          content="We take control of your core business information and ensure it is accurate and trusted by your collaborators."
        />
        <SubService
          title="Metadata Management"
          content="We ensure that business data is clearly understood and consistently used across your company."
        />
        <SubService title="Data Masking" content="We deploy data masking across the enterprise."/>
      </Services>

      <AsideRight
        title="Thinking about moving your company’s data to the cloud?"
        content="There is more to it than selecting a cloud data warehouse – you’ll also need tools to make your migration manageable. Data Concepts can help you to build and rebuild your ETL processes and to populate your data warehouse."
      />

      <Definition subtitle="definition">
        <SubDefinition
          title="What is a Data Warehouse?"
          content="A data warehouse is a system that extracts, cleans, conforms, and delivers source data into a dimensional data store and then supports and implements querying and analysis for the purpose of decision making."
        />
        <SubDefinition
          title="Data Warehouse Architecture and Design Services"
          content="Opting for Data Concepts for your data warehouse design needs implies choosing a business-driven data warehouse for your company. Our tools save you time and money and provide your staff with an accessible, easy-to-use data analysis platform. "
        >
          <router-link class="regular-link" to="/insights">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Data Warehouse Implementation"
          content="Our highly skilled network of data warehouse consultants are experts in data warehouse architecture. They enrich your environment with world-class data warehouse knowledge that enables staff members to stop wasting huge amounts of time manually gathering data whenever a decision has to be made. Our goal is to reduce or eliminate expensive, error prone processes by standing-up automated, systematic data collection, reporting and analysis."
        />
      </Definition>

      <AdditionalServices
        subtitle="technology"
        title="Modern Data Warehousing."
        paragraphOne="A data warehouse is a data storage system designed specifically for query and analysis, enabling businesses to transform data into actionable insight. To solve for the growing challenges of conventional on-premises data warehousing, many organizations are moving to a cloud data warehouse model. We can help you embark upon four major cloud data warehouse players:"
      >
        <SubService
          title="Amazon Redshift"
          content="Amazon Redshift is an Amazon Web Services product that runs complex queries against petabytes of structured data. Redshift Spectrum runs SQL queries on structured or unstructured objects stored in S3."
        />
        <SubService
          title="Google BigQuery"
          content="BigQuery is a RESTful web service that works in conjunction with Google Storage. It is used for managing and querying data and can be used from any language built with the REST API."
        />
        <SubService
          title="Microsoft Azure"
          content="Microsoft’s cloud computing solution is for building, testing, deploying, and managing applications and services through Microsoft’s network of data centers."
        />
        <SubService
          title="SnowflakeDB"
          content="This cloud SQL data warehouse supports all types of data as well as ETL and BI tools."
        />
      </AdditionalServices>

      <InsightHighlight
        title="Business Intelligence & Data Warehousing"
        imgsrc="/insight/warehouse.jpg"
        link="/insights/bi-data-warehousing"
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
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import AsideRight from "../../components/service/AsideRight.vue";
import AdditionalServices from "../../components/service/AdditionalServices.vue";
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
    InsightHighlight,
    HireUsFooter,
    AsideRight,
    AdditionalServices,
    Related,
    InsightContainer,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/data-warehouse.jpg)

</style>
