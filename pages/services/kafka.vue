<template>
  <div class="__page-root">
    <Hero title="Kafka" kicker="Utilize real-time insights provided by Kafka data streaming.">
      <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
    </Hero>
    <div class="sections">
      <Promise
        subtitle="the promise"
        content="Imagine a process which converts unstructured, unreadable pieces of information into something that is extremely valuable for your organization? information that gives you insights about your business, your products, customers and their preferences. Now imagine getting those insights in real time! We are talking about a process that gives you instant information about an active transaction. Such information is always valuable, isn't it? Companies who often deal with Big Data have massive databases and millions or billions of files they are processing. Data streaming, as the name implies, is a stream or flow of raw data that is captured from multiple sources and sent for processing continuously. Analyzing and processing such data streams makes an organization more efficient and opens up new opportunities."
      />

      <Services subtitle="services">
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
        <SubService title="d" content="d"/>
      </Services>

      <Technology subtitle="advantages">
        <SubTechnology
          title="Highly Scalable"
          content="Kafka is a distributed data streaming platform that can be horizontally scaled across many clusters of servers thus avoiding any downtime. It is capable of handling terabytes of data within seconds."
        />
        <SubTechnology
          title="Highly Performant"
          content="It is capable of handling huge volumes of data using cheap servers and gives throughput of thousands of messages. It is capable of handling and processing messages within milliseconds thus making it a real-time streaming platform."
        />
        <SubTechnology
          title="Fault Tolerant"
          content="When messages are published to Kafka clusters, they replicate and store them on disks for a limited period of time. If a failure occurs, Kafka is easily able to resist that failure by using replicated data. Thus, it is fault tolerant and highly reliable when compared to other messaging systems."
        />
      </Technology>

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
import Technology from "../../components/service/Technology.vue";
import SubTechnology from "../../components/service/SubTechnology.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";
import Subscribe from "../../components/form/Subscribe.vue";

export default {
  layout: "light",
  components: {
    Hero,
    Promise,
    Services,
    SubService,
    Technology,
    SubTechnology,
    HireUsFooter,
    Subscribe
  }
};
</script>


<style lang="sass" scoped>

.hero-background
  background-image: url(~assets/image/service/kafka.jpg)

</style>
