<template>
  <div class="__page-root">
    <Hero
      title="Business Intelligence"
      kicker="In BI consulting, smart decisions start with your data."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Regardless of where you store your data, we can leverage your existing investments in SQL, SharePoint, Office 365, Dynamics 365, and Microsoft Office to provide cost-effective solutions. With the latest tools and self-service functionality, you don’t have heavy upfront costs or need continuous IT involvement. As a Microsoft Partner, we consult on the use of Microsoft Power BI, SQL Server Reporting Services (SSRS), and custom-developed .NET & SQL tools. We also have a team of developers capable of integrating diverse databases, web services, and third-party platforms."
      />

      <Services subtitle="services">
        <SubService
          title="Data Discovery, Warehousing and ETL"
          content="Mapping out and integrating data sources that are most appropriate for your BI objectives, building up a warehouse, and getting your data ready for analysis."
        />
        <SubService
          title="BI Audit: Data Analytics and Data Systems Review"
          content="The BI Audit provides assurances that our clients are getting the most out of their deployments and are following best practices, ensuring efficiency."
        />
        <SubService
          title="Reporting and Interactive Dashboards"
          content="Delivering customizable, interactive reporting dashboards that will serve as convenient go-to tools with minimum adoption barriers even for non-tech users."
        />
        <SubService
          title="OLAP and Data Visualization"
          content="Translating analy­tical work into an organized, precise format, on robust dashboards with scalable back-ends."
        />
        <SubService
          title="Mobile Business Intelligence"
          content="Bringing the power of business intelligence to mobile platforms of your choice wherever and whenever you need it."
        />
        <SubService
          title="Analytics and Reporting"
          content="Measure business goals through automated reporting,	create ad-hoc or predefined reports and facilitate fast decision making."
        />
        <SubService
          title="Predictive Analysis"
          content="Predict trends through intuitive tools that utilize a historical view of business data. Protect margins through data-driven forecasting."
        />
      </Services>

      <Definition subtitle="definition">
        <SubDefinition
          title="Microsoft Power BI"
          content="Power BI makes it easy to connect your reports and dashboards to disparate data sources. Power BI can natively connect to databases and services on premises or in the cloud such as SQL, Oracle, SharePoint, Dynamics CRM, Dynamics 365, Salesforce, Excel workbooks, and many other third-party systems. There is no need for a developer to configure connection strings or complicated ETL (Extract, Transform, and Load) processes. Power BI is also an integral component of Microsoft's Azure IoT platform. Power BI's utilization of HTML5 and specially-developed phone and tablet apps allow for access from almost any device. Combined with real-time, cloud-based data connections, data is available 24/7 from anywhere."
        >
          <router-link class="regular-link" to="/insights/power-bi">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="SQL/SQL Server Reporting Services (SSRS)"
          content="Whether you have an existing SQL Server Database or are looking to move your data to a centralized location, we can help you use SQL Server Reporting Services (SSRS) to visualize data and create interactive reports using data you have already gathered. We can help guide your database implementation and design reports to your specifications. We can integrate with third-party APIs to retrieve data from any service which can make its data available, including QuickBooks, Google Analytics, and SharePoint."
        ></SubDefinition>
        <SubDefinition
          title="SharePoint"
          content="SharePoint can be configured to display interactive dashboards and reports from a variety of applications and sources, right within your existing web pages. We develop dashboards and custom Web Parts for SharePoint on premises and Office 365. We can also integrate your SharePoint with SQL tools including SSAS and SSRS, and build custom interfaces with specific drilldown capabilities."
        >
          <router-link class="regular-link" to="/insights/sharepoint">Read More</router-link>
        </SubDefinition>
      </Definition>

      <Technology subtitle="technology">
        <SubTechnology
          title="Data Storage"
          content="HDFS, Apache HBase, Apache Kudu, Apache Cassandra, DataStax, Cloudera, Redis, Microsoft Azure, Amazon."
        ></SubTechnology>

        <SubTechnology
          title="ETL & Data Processing"
          content="Hadoop MapReduce, Apache Flume, Apache Sqoop, Apache Spark, Apache Storm, Apache Hive, Apache Kafka, StreamSets Data Collector, ELK."
        ></SubTechnology>
      </Technology>

      <InsightHighlight
        imgsrc="/insight/graffiti.jpg"
        link="/insights/power-bi"
        title="Are You Making the Most of Your Business Data?"
      />

      <Related>
        <InsightContainer
          data-aos="fade-up"
          link="/insights/power-bi"
          category="Business Intelligence"
          title="Are You Making the Most of Your Business Data?"
          summary="Power BI - Business intelligence like never before."
          imgsrc="/insight/graffiti.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/bi-data-warehousing"
          category="BI | Data Warehouse"
          title="Business Intelligence & Data Warehousing"
          summary="We leverage our expertise in architecting large-scale complex BI/DW (Business Intelligence/Data Warehousing) applications and provide EIM (Enterprise Information Management) implementation services."
          imgsrc="/insight/warehouse.jpg"
        />
        <InsightContainer
          data-aos="fade-up"
          link="/insights/sharepoint"
          category="Business Intelligence"
          title="What can you do with SharePoint?"
          summary="Upgrade or Migration is a major challenge for organizations who have invested in SharePoint extensively. Each new edition of SharePoint provides new features which has potential to improve your business case."
          imgsrc="/insight/lights-7.jpg"
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
import Technology from "../../components/service/Technology.vue";
import SubTechnology from "../../components/service/SubTechnology.vue";
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
    Technology,
    SubTechnology,
    Related,
    InsightContainer,
    Subscribe
  }
};
</script>

<style lang="sass" scoped>
.hero-background
  background-image: url(~assets/image/service/bi.jpg)
 
</style>
