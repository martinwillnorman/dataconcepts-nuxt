<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Big Data"
        title="Extracting Actionable Insights from Data"
        summary="Data mining is the extraction of actionable insights from data."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="Data mining uses"
            content="Leading organizations use data mining techniques target profitable customers and likely prospects, reduce consumer fraud, identify loyal customers, improve customer service, and increase customer retention. Data mining often involves predictive analytics, using sophisticated tools to present large volumes of data within statistical and visual models such as decision trees and three-dimensional graphics."
          ></SubSection>
          <SubSection
            title="Assess model performance and business impacts"
            content="Data mining is best executed as part of an integrated business intelligence (BI) effort. An organization’s BI strategy will identify questions appropriate for data mining, data marts, data warehouses, or analytical applications. Data Concepts experts can conduct a data mining Proof-of-Value early in the BI life cycle to help identify which data (and combinations of data) will provide new insights and have predictive value."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="A Proof-of-Value helps the organization construct data warehouses or data marts that will support future data mining efforts. Such initiatives can reduce future costs and project life-cycles by as much as 75 percent by dramatically reducing the time necessary for ongoing data collection and preparation."
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(290deg) saturate(6)
  background-image: url(/insight/entry.jpg)
</style>
