<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Business Intelligence"
        title="What can you do with SharePoint?"
        summary="Upgrade or Migration is a major challenge for organizations who have invested in SharePoint extensively. Each new edition of SharePoint provides new features which has potential to improve your business case."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            title="How We Help With SharePoint"
            content="Upgrade or Migration is a major challenge for organizations who have invested in SharePoint extensively. Each new edition of SharePoint provides new features which has potential to improve your business case. Having built several applications and customized SharePoint as per each business need, it becomes imperative to migrate these functionalities to the future platform. Not to mention the effort, risk and cost involved. The complexity is even higher when you want to migrate from existing solution platform to SharePoint. Data Concepts has helped several clients migrate their SharePoint environment from one version to the next and from on-premise to hosted model or Office 365. Our Upgrade and Migration consulting helps organizations build a systematic, time tested migration strategy and plan."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            content="Data Concepts can help with all aspects of your SharePoint implementation – version selection & licensing, infrastructure planning, document management, taxonomy, governance, workflows, system integration, dashboards, custom add-ins and web parts, training, and ongoing support. We can help you customize SharePoint’s look & feel to make it more inviting and boost user adoption."
          ></SubSection>
          <SubSection
            title="What You Can Do with SharePoint"
            content="- Improve Business Processes."
          ></SubSection>
          <SubSection
            content="Use Workflow Automation and Online Forms to streamline business processes."
          ></SubSection>
          <SubSection content="- Find Documents Fast."></SubSection>
          <SubSection
            content="Search indexes every word in every document you store on your network drive or in SharePoint. DMC's SharePoint OCR Solution indexes the words inside image-only PDF files so they can also be discovered via search."
          ></SubSection>
          <SubSection content="- Manage Critical Documents."></SubSection>
          <SubSection
            content="Document Management features like Version Control, Metadata, Approval Workflow, and Audit Trail allow teams to work together and avoid costly mistakes. Ideal for ISO compliance and contract management."
          ></SubSection>
          <SubSection content="- Establish Best Practices."></SubSection>
          <SubSection
            class="subsection-padding"
            content="Use Wikis to easily create, maintain, and locate best practices and standard operating procedures."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Sharepoint Upgrade or Migration"
            content="Each new edition of SharePoint provides new features which has potential to improve your business case. Having built several applications and customized SharePoint as per each business need, it becomes imperative to migrate these functionalities to the future platform. Not to mention the effort, risk and cost involved. The complexity is even higher when you want to migrate from existing solution platform to SharePoint. Data Concepts has helped several clients migrate their SharePoint environment from one version to the next and from on-premise to hosted model or Office 365. Our Upgrade and Migration consulting helps organizations build a systematic, time tested migration strategy and plan. Having successfully delivered 100+ projects, we bring all the experience, learning's and best practices to ensure smooth & successful transition."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Pre Upgrade Assessment"
            content="This phase aims at understanding your existing SharePoint environment including the applications, documents, workflows, reports, data, etc. to be migrated. The Pre upgrade analysis will help us identify the risks that need to be handled for successful execution of the project. During the assessment phase, if any changes are needed in the implemented Information Architecture, the same is evaluated."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Pre Migration Assessment"
            content="Primary focus is to identify the functionality available in the existing application, classify them based on usage and design the same functionality in SharePoint. During this phase, the existing application is thoroughly reviewed for possible enhancements that add value to the respective business solution and is considered in the new SharePoint design. The migration project can range from simple migration of content from file system or can be as complex as recreating the functionality of an existing ageing solution."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Approach & Roadmap"
            content="Based on findings during the assessment phase, we will create a detailed Upgrade/Migration plan. We will also provide a recommendation if certain applications need to be rebuilt or enhanced to best utilize capabilities of the future platform."
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
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(220deg) saturate(6)
  background-image: url(/insight/lights-7.jpg)
  background-position: center 80%
</style>
