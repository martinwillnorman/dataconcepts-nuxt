<template>
  <div class="__page-root">
    <div class="sections">
      <Header
        category="Agile"
        title="How Business Teams can Embrace Agile"
        summary="As the agile methodology becomes more and more popular, business teams are adopting certain aspects of the approach in order to benefit from the speed and flexibility provided by agile."
      />

      <section class="full-page">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section>
        <div class="container">
          <Spacer/>
          <SubSection
            class="subsection-padding"
            title="The core concepts of Agile"
            content="While certain aspects of agile project management, like sprints and scrums, may not have wide application outside the world of software development, the core concepts of responsiveness, speed and communication can help any organization become more efficient and effective. Here’s a look at how agile for business is transforming the way teams work in areas as diverse as accounting, human resources, sales and customer service."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Find the right model for communication"
            content="Face-to-face communication is one of the basic principles of agile software development. Software teams using agile project management often get together for short meetings at the beginning of the day to discuss each person’s tasks, goals and challenges. While this specific approach may not work for every business team, there’s a lesson to be learned in the agile focus on direct communication. Setting aside a short segment of time—even just 15 minutes—for face-to-face meetings, phone conversations, video conferences or even IM chats can keep an entire team engaged and informed throughout the course of the project."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Enable visibility"
            content="In addition to regular meetings, the agile approach puts an emphasis on sharing information across the entire team. Business teams can learn to work more effectively as a whole by implementing tools that allow each team member to see what other team members are working on day by day. Whether it’s a Kanban board or a collaborative project management platform, technological tools that display tasks and priorities in real-time are essential for facilitating rapid responses to changing conditions."
          ></SubSection>
          <SubSection
            class="subsection-padding"
            title="Align team goals with organizational goals"
            content="Most agile development teams maintain an extensive product backlog, listing all enhancements or changes that have been planned for the team’s product. As priorities change, the team can move specific items out of the backlog and begin work in order to meet organizational goals. Business teams outside of IT can use a similar strategy by creating lists of all possible projects and initiatives that the team might undertake. Items in this business backlog can then be ranked by priority, and moved into active project status when the time is right."
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(3500deg) saturate(6)
  background-image: url(/insight/people.jpg)
  background-position: center 40%

</style>
