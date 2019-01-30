<template>
  <div class="__page-root">
    <RootHero title="Identity."/>
    <div class="sections">
      <section class="padded-large black">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper text-white">
                <h6 class="subtitle white">
                  <span>who we are</span>
                </h6>
              </div>
            </div>
            <div class="column col-8">
              <div data-aos="fade-up" class="content-wrapper text-white">
                <h1 class="about-us-header">We grow businesses by creating experiences people love.</h1>
                <p
                  class="about-us-text"
                >Today, people embrace companies with the customer experiences that best meet their needs. Huge transforms companies by designing these best-in-class experiences, driven by strong creative and rooted in the technology, data, and organizational strategy required for operational excellence. We combine these capabilities into a single solution, creating unified brand experiences that change industries and foster meaningful relationships with users. This user-centric approach has made us the fastest-growing agency of the past decade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-large">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>our people</span>
                </h6>
              </div>
            </div>
            <div class="column col-12">
              <div data-aos="fade-up" class="copy-wrapper">
                <h1 class="staff-header">Technologists, Strategists, Creatives, & Engineers.</h1>
              </div>
            </div>
          </div>
          <div class="row staff-row">
            <div class="column col-12">
              <div data-aos="fade-up" class="content-wrapper staff-wrapper">
                <StaffMember
                  position="Cyber Security Architect"
                  name="Sean"
                  location="Richmond, VA"
                >
                  <img src="~assets/image/staff-members/Sean.jpg" alt="staff member">
                </StaffMember>
                <StaffMember
                  position="Full Stack Developer"
                  name="Zichao Xu"
                  location="Richmond, VA"
                >
                  <img src="~assets/image/staff-members/Zhichao-Xu.jpeg" alt="staff member">
                </StaffMember>
                <StaffMember position="Office Manager" name="Ana James" location="Richmond, VA">
                  <img src="~assets/image/staff-members/Ana-James.jpg" alt="staff member">
                </StaffMember>
                <StaffMember
                  position="Office Manager"
                  name="Claire Jackson"
                  location="Richmond, VA"
                >
                  <img src="~assets/image/staff-members/Claire-Jackson.jpg" alt="staff member">
                </StaffMember>
                <StaffMember
                  position="Managing Director"
                  name="Varun Mehta"
                  location="Richmond, VA"
                >
                  <img src="~assets/image/staff-members/Varun-Mehta.jpg" alt="staff member">
                </StaffMember>
                <StaffMember
                  position="Re-engineering Analyst"
                  name="Barbara Philips"
                  location="Richmond, VA"
                >
                  <img src="~assets/image/staff-members/Barbara-Philips.jpg" alt="staff member">
                </StaffMember>
                <StaffMember position="Project Associate" name="Dan Watson" location="Richmond, VA">
                  <img src="~assets/image/staff-members/Dan-Watson.jpg" alt="staff member">
                </StaffMember>
                <StaffMember position="Managing Director" name="Ken Jeter" location="Richmond, VA">
                  <img src="~assets/image/staff-members/Ken-Jeter.jpg" alt="staff member">
                </StaffMember>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Swiper/>
      </section>
      <section class="padded-large">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>partners</span>
                </h6>
              </div>
            </div>
            <div class="column col-12">
              <div data-aos="fade-up" class="content-wrapper partners-wrapper">
                <div class="partner">
                  <img class="partner-image" src="~assets/image/partner/aws.png" alt="partner logo">
                </div>
                <div class="partner">
                  <img
                    class="partner-image"
                    id="mongodb"
                    src="~assets/image/partner/mongodb.webp"
                    alt="partner logo"
                  >
                </div>
                <div class="partner">
                  <img
                    class="partner-image"
                    id="confluent"
                    src="~assets/image/partner/confluent-logo.png"
                    alt="partner logo"
                  >
                </div>
                <div class="partner">
                  <img
                    class="partner-image"
                    src="~assets/image/partner/microsoft.png"
                    alt="partner logo"
                  >
                </div>
                <div class="partner">
                  <img
                    class="partner-image"
                    src="~assets/image/partner/docker2.png"
                    alt="partner logo"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe/>
      <HireUsFooter/>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";
import StaffMember from "../../components/about/StaffMember.vue";
import Swiper from "../../components/about/Swiper.vue";
import Subscribe from "../../components/form/Subscribe.vue";
import HireUsFooter from "../../components/footer/HireUsFooter.vue";

export default {
  components: {
    RootHero,
    StaffMember,
    Swiper,
    Subscribe,
    HireUsFooter
  }
};
</script>

<style lang="sass" scoped>

.about-us-header
    font:
        size: 3.4rem
        family: $font-family-copy
    margin-bottom: 40px
    line-height: 1.2

.about-us-text
  font:
    size: 1.3rem
  
.staff-header
    font:
        size: 4.5rem
    margin: 40px
    line-height: 1.4
    text-align: center

.staff-wrapper
    padding: 0 1%
    display: flex
    flex-wrap: wrap
    width: 100%
    margin-top: 40px

.staff-row
  margin-bottom: -20px

.partner-image
  object-fit: contain
  max-height: 140px
  max-width: 280px

.partners-wrapper
  display: flex
  flex-wrap: wrap
  padding-top: 40px

.partner
  width: 23%
  max-width: 23%
  flex-basis: 23%
  margin: 0 1%
  box-sizing: border-box
  position: relative
  height: 175px
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 10px

#mongodb
    transform: scale(1.4)


</style>
