<template>
  <div class="__page-root">
    <Hero
      title="Machine Learning"
      kicker="Leverage machine learning capabilities to enhance your business."
    >
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="We build maching learning models with great predictive accuracy but help clients to leverage  predictive analytics and insights  for business efficiency and growth. We provide end-to-end services from data science ideation, to proof of concept (POS), to data science strategy, and solution design and development."
      />

      <Services subtitle="services">
        <SubService
          title="Customer Segmentation"
          content="We can build a customer segmentaiton model to group them along different dimensions. This would allow your business to do targeted marketing, maximize cross- and up-selling, improve customer service & much more."
        />
        <SubService
          title="Customer Churn Analysis & Modeling"
          content="We analyze different satisfaction levels of your customers, and also build a predictive model to predict customers who might be cancelling your service or subscription in near-future."
        />
        <SubService
          title="Price Optimization"
          content="We build a price optimization models for your business. This model would try to maximize business revenue by factoring in demand, special events, competitor's prices, stock, expiry dates, seasonality and other related aspects."
        />
        <SubService
          title="Anomaly Detection"
          content="For your business, we can build you state-of-the-art anomaly detection model which would monitor a real-time stream of business events such as clicks, pageviews, service access etc. You will be able to learn about spike or outage in real-time, saving hundreds of dashboarding work-hours to track events."
        />
        <SubService
          title="Recommender Systems"
          content="If your business has a wide range of services, cases or products, we can build you a recommender stystem which would help your customers to pick appropriate service or product. Such systems help businesses to increase both sales and customer satisfaction."
        />
        <SubService
          title="Predictive Analytics"
          content="We apply data mining, statstical and machine learning techniques to learn trends from historical business data, and make prediction about future events. Such predictive analytics help business to make informed decisions in terms of marketing, sales, customer service and much more."
        />
      </Services>

      <InsightHighlight
        title="5 Reasons Why We Love Azure ML for Machine Learning Solutions"
        imagesource="/insight/lights-10.jpg"
        link="/insights/azure-machine-learning"
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
import InsightHighlight from "../../components/service/InsightHighlight.vue";
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
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/machine-learning.jpg)

</style>
