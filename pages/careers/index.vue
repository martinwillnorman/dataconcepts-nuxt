<template>
  <div class="__page-root">
    <RootHero title="Together."/>
    <div class="sections">
      <section class="padded-large black">
        <div class="container">
          <div class="row">
            <div class="column col-4">
              <div class="content-wrapper text-white">
                <h6 class="subtitle white">
                  <span>perks</span>
                </h6>
              </div>
            </div>
            <div class="column col-12">
              <div data-aos="fade-up" class="copy-wrapper perks-wrapper text-white">
                <div v-for="perk in perks" v-bind:key="perk.title" class="perk">
                  <h1 class="perk-title">{{perk.title}}</h1>
                  <p class="perk-copy">{{perk.copy}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="padded-large">
        <div class="container">
          <div class="row">
            <div class="column col-3">
              <div class="content-wrapper">
                <h6 class="subtitle">
                  <span>current openings</span>
                </h6>
              </div>
            </div>
            <div class="column col-9">
              <div class="content-wrapper jobs-wrapper">
                <h1 class="city">Richmond, VA.</h1>

                <h1 class="city">Raleigh, NC.</h1>

                <h1 class="city">Denver, CO.</h1>

                <h1 class="city">Salt Lake City, UT.</h1>

                <h1 class="city">Colombia, SC.</h1>

                <h1 class="city">Portland, OR.</h1>

                <h1 class="city">Lansing, MI</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RootHero from "../../components/hero/RootHero.vue";

export default {
  components: {
    RootHero
  },
  data() {
    return {
      perks: [
        {
          title: "Company Benefits",
          copy:
            "Our team’s health and wellness is a top priority. We offer fully paid health benefits for all employees. We also pay half for your spouse."
        },
        {
          title: "Retirement Planning",
          copy:
            "Getting old sucks. We try to make it suck less by offering a 2% retirement match for employees who take advantage of our company’s 401K investment plan."
        },
        {
          title: "Growth",
          copy:
            "We want you to develop and learn. Every employee has the opportunity to grow in their role(s) at Data Concepts through hands-on experience, paid learning and workshops."
        },
        {
          title: "Flexible Hours",
          copy:
            "As a consultancy built on creativity and technology, we want you at your best. That's why we work remotely on select days and even adjust our hours depending on life's impromptu moments."
        },
        {
          title: "Paid Time Off",
          copy:
            "It’s important to relax and recharge. We offer flexible, paid vacation so you can work on that tan. Not to mention team-wide ‘Happy DC Days' where food and fun are on us."
        },
        {
          title: "Food & Drink",
          copy:
            "The way to happy employees is often through their stomach. We keep our kitchen stocked with drink and snack selections as well as craft coffee to keep you going."
        },
        {
          title: "Irresistible Culture",
          copy:
            "At the risk of sounding cliche, we fight for culture at every turn. Come and enjoy our WEDNESDAY BAGEL tradition. Or, join us for happy hour at our favorite craft beer spots."
        },
        {
          title: "Compensation",
          copy:
            "We value the members of our team, and pay competitive wages based on position and experience."
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

.perks-wrapper
  display: flex
  flex-wrap: wrap
  margin-top: 40px

.perk
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%
  padding: 30px

.perk-title
  text-transform: uppercase
  margin-bottom: 20px
  font:
      size: .9rem

.city
  font: 
    size: 80px
    weight: 700
  line-height: 84px
  letter-spacing: -4px
</style>
