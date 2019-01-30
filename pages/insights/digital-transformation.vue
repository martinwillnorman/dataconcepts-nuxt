<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Digital"
        title="Digital Transformation: Our Thoughts on Getting Started"
        summary="Our digital strategists and technologists are changing the way our clients think about, assemble, ship, and run digital services."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            title="The evolution of digital services"
            content="From cloud platform experts and data scientists, to Ruby and Hadoop developers, security engineers, and user experience designers, it's a community with license to open new perspectives and with freedom to explore new partnerships and the reuse of code and ideas."
          ></SubSection>
          <SubSection
            content="While your business grows and shifts in response to changing market conditions, your data is evolving at an even faster pace. That data holds the key to many opportunities, but to capitalize on them you must be able to manage your escalating volume of data, extract it from the right places, and turn it into real business insight. If your organization is struggling with how to tap into actionable data, you’re far from alone. Few companies make full use of the rich data available to them."
          ></SubSection>
          <SubSection
            content="“Getting it right” requires not only strong technology and advanced analytic skills, but also industry best practices and organizational change experience --- a unique blend of experience that we bring to the table. We help you navigate the rapidly evolving landscape of tools and capabilities and translate complex business requirements into a practical technology-based data platform that suits your business."
          ></SubSection>
          <SubSection
            content="In many cases, we have found it effective to start by targeting a particular business problem. From there, we can help you establish the elements of a robust data platform that are right for your business and information “consumers”: data marts and warehouses that store, protect, and govern your data; predictive/prescriptive modeling capabilities that enable you to anticipate outcomes and define actions based on observation or behavior; big data solutions that analyze extremely large volumes of structured and unstructured data and improve speed to market; and visualization capabilities that highlight trends and insights."
          ></SubSection>
          <SubSection
            content="Our solutions leverage modern cloud technology, data science, machine learning, and accelerators—that generate insights faster, better, and cost effectively and adapt easily to your continuously evolving data sources."
          ></SubSection>
          <SubSection
            class="padded-bottom"
            content="Even better, we support you every step of the way toward becoming a data-driven organization—from creating an information management strategy, to delivering new capabilities, to using insight effectively, to running and refining solutions on an ongoing. The result is a more knowledgeable, efficient, productive, agile, and best of all, competitive, organization—one able to make data-driven decisions you never thought possible."
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
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(25deg) saturate(6)
  background-image: url(/insight/lights.jpg)
  
</style>
