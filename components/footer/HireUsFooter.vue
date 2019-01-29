<template>
  <section class="light-grey">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div class="content-wrapper hire-us-wrapper">
            <nuxt-link class="hire-us" to="/hire-us">
              <h4>PLAN A PROJECT</h4>
              <h1>Hire Us</h1>

              <span class="arrow-wrapper">
                <svg
                  class="arrow-thin-right__svg"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="26.005px"
                  viewBox="286.5 382.498 39.002 26.005"
                  enable-background="new 286.5 382.498 39.002 26.005"
                  title="Next"
                >
                  <g>
                    <polygon
                      fill="#FFFFFF"
                      points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                    ></polygon>
                  </g>
                </svg>
              </span>
            </nuxt-link>
            <nuxt-link class="hire-us" to="/careers">
              <h4>JOIN THE TEAM</h4>
              <h1>Work With Us</h1>
              <span class="arrow-wrapper">
                <svg
                  class="arrow-thin-right__svg"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="26.005px"
                  viewBox="286.5 382.498 39.002 26.005"
                  enable-background="new 286.5 382.498 39.002 26.005"
                  title="Next"
                >
                  <g>
                    <polygon
                      fill="#FFFFFF"
                      points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                    ></polygon>
                  </g>
                </svg>
              </span>
            </nuxt-link>
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

.hire-us-wrapper
    display: flex

.hire-us
    position: relative
    flex: 1
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    transition: 2s cubic-bezier(.18,1,.21,1)
    height: 225px
    &:first-child
        background-color: #121212
    &:nth-child(2)
        background-color: #191919
    &:hover
        background-color: $link-color
    &:hover h4
        color: #000

h4
    font:
        size: 12px
        weight: 400
    line-height: 26px
    transition: 2s cubic-bezier(.18,1,.21,1)
    margin: 0 0 10px
    letter-spacing: 3px
    color: $link-color

h1
    color: #fff
    margin: 0
    font:
        size: 32.5px
        weight: 700
    line-height: 45px
    letter-spacing: 1px

.arrow-wrapper 
    position: absolute
    bottom: 15px
    right: 25px
    left: unset
    opacity: 1

</style>
