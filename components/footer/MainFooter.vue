<template>
  <section class="light-black footer">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper footer-logo-wrapper">
            <nuxt-link class="footer-logo" to="/">dataconcepts</nuxt-link>
            <p class="footer-description">
              We are an IT Consultancy that blends strategy, process
              & technology to meet business objectives.
            </p>
          </div>
        </div>

        <div class="column col-8">
          <div class="content-wrapper footer-wrapper">
            <div class="footer-menu-wrapper">
              <ul class="footer-menu pseudo">
                <span>
                  <nuxt-link class="footer-link-header" to="/services">Services</nuxt-link>
                </span>
                <li class="footer-menu-item">
                  <nuxt-link
                    class="footer-link"
                    to="/services/application-development"
                  >App Development</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link
                    class="footer-link"
                    to="/services/business-intelligence"
                  >Business Intelligence</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link
                    class="footer-link"
                    to="/services/program-management"
                  >Program Management</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/machine-learning">ML & IoT</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/predictive-modeling">Predictive Modeling</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/ui-ux">UI / UX</nuxt-link>
                </li>
              </ul>
              <ul class="footer-menu pseudo">
                <span>
                  <nuxt-link class="footer-link-header" to="/services">Data</nuxt-link>
                </span>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-analytics">Data & Analytics</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-strategy">Data Strategy</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/big-data">Big Data</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-governance">Governance</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-warehouse">Warehousing</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-science">Data Science</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/services/data-visualization">Visualization</nuxt-link>
                </li>
              </ul>
            </div>

            <div class="footer-menu-wrapper">
              <ul class="footer-menu pseudo">
                <span>
                  <nuxt-link class="footer-link-header" to="/work">Work</nuxt-link>
                </span>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/estes-improvement">Trucking</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/jury-management">Judiciary</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/sex-registry">Public Safety</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/capital-one">Energy</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link" to="/work/capital-one">Non-Profit</nuxt-link>
                </li>
              </ul>

              <ul class="footer-menu pseudo">
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link-header" to="/about">About</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link-header" to="/careers">Careers</nuxt-link>
                </li>
                <li class="footer-menu-item">
                  <nuxt-link class="footer-link-header" to="/contact">Contact</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.footer
  padding: 100px 0 200px

.footer-logo
    color: #fff
    transition: .18s
    transition-property: color
    margin-bottom: 15px
    display: inline-block
    font:
        size: 1.3rem
        weight: 400
        family: $font-family-header
    letter-spacing: 4px   

.footer-logo:hover
  color: $link-color

.footer-description
  color: #fff
  max-width: 350px

.footer-link-header
  color: $link-color
  text-transform: uppercase
  font:
    size: 15px
    weight: 700
    family: $font-family-header
  line-height: 23px
  margin: 0 0 25px
  display: inline-block
  letter-spacing: 2px
  transition: color .18s

.footer-link-header:hover
  color: #fff

.footer-wrapper
  display: flex

.footer-menu-wrapper
  display: flex
  flex: 1
  border-top: 1px solid #292929
  padding-top: 46px

.footer-menu
  padding: 0 15px
  width: 50%

.footer-link
  display: block
  color: inherit
  margin: 0 0 8px
  color: #fff
  font: 
    size: 16px
    family: $font-family-copy
    weight: 400
  line-height: 24px
  transition: color .18s

.footer-link:hover
  color: $link-color

</style>