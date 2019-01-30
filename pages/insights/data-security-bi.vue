<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Data Security"
        title="Data Security in the BI & IoT World"
        summary="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="The danger of unsecure data"
            content="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer. These examples are just some of the most recent and noteworthy data breaches in the news. But data security issues can occur on a far smaller scale and these security issues can ultimately lead to big data losses for organizations if not properly addressed."
          ></SubSection>
          <SubSection
            title="At Data Concepts we partner with organizations to develop data security solutions for both BI and IoT needs by designing, developing and implementing:"
            content="- Robust data management and governance practices."
          ></SubSection>
          <SubSection
            content="- BI and IoT architecture solutions that meet the specific needs of your organization."
          ></SubSection>
          <SubSection
            content="- Solutions to address accessibility, usability, storage and data in motion needs."
          ></SubSection>
          <SubSection content="- Robust and secure IoT API solutions."></SubSection>
          <SubSection
            content="- BI and data analytical solutions with your data security needs in mind."
          ></SubSection>
          <SubSection content="- IoT data analytical strategies for securing data."></SubSection>s
          <SubSection
            content="Today organizations are more than ever utilizing the power of Business Intelligence (BI) to meet both internal and customer’s needs. At the same time organizations are rapidly developing and adopting the Internet of Things (IoT) strategies in order to be competitive in the marketplace. Both BI and IoT are seeing tremendous growth in almost every industry. According to Forbes, Cloud BI adoption levels doubled between 2016 and 2018. Forbes also estimates that global IoT market growth will go from $157B in 2016 to an estimated $457B by 2020."
          ></SubSection>
          <SubSection
            content="These BI and IoT solutions present data security challenges for any organization. Going above and beyond the cloud providers solutions for network, database, and firewall security; which are of critical importance, organizations must also address security concerns around accessibility, usability, storage and movement of data. Those data security concerns must be a top priority."
          ></SubSection>
          <SubSection
            content="Furthermore, IoT solutions offer new sources of data which organizations must contend with. While the uses of this data can be invaluable, organizations must also address issues around security, privacy and accessibility of the data collected. Organizations must demonstrate that they can operate responsibly when using customer, employee, and company IoT-sourced data."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Come talk to us about data security solutions for your BI and IoT needs."
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
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(340deg) saturate(6)
  background-image: url(/insight/abstract.jpg)
</style>
