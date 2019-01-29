<template>
  <div class="__page-root">
    <div class="sections">
      <section class="black">
        <div class="fullpage">
          <div class="content-wrapper form-wrapper">
            <form class="text-white" id="my-form" v-on:submit="validateBeforeSubmit">
              <label for="name">Hello, my name is</label>
              <span class="input-wrapper">
                <input
                  v-model="name"
                  v-validate="'required|alpha_spaces'"
                  data-vv-validate-on="none"
                  type="text"
                  name="name"
                  placeholder="first & last"
                >
              </span>
              <span>.</span>
              <label for="address">I'm from</label>
              <span class="input-wrapper">
                <input
                  v-model="address"
                  v-validate="'required'"
                  type="text"
                  name="address"
                  placeholder="city, st"
                >
              </span>
              <span>.</span>
              <label for="phone number">You can reach me on my phone at</label>
              <span class="input-wrapper">
                <input
                  v-model="phone"
                  v-validate="{ required: true, regex: ^[\d\s]+$}"
                  data-vv-validate-on="none"
                  type="text"
                  name="phone number"
                  placeholder="xxxxxxxxxx"
                >
              </span>
              <label for="email">or via email at</label>
              <span class="input-wrapper">
                <input
                  v-model="email"
                  v-validate="'required|email'"
                  data-vv-validate-on="none"
                  type="text"
                  name="email"
                  placeholder="your@email.com"
                >
              </span>
              <span>.</span>
            </form>
            <button v-on:click="validateBeforeSubmit">
              <span class="work-arrow">
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
                      fill="#000"
                      points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                    ></polygon>
                  </g>
                </svg>
              </span>
            </button>
            <ul class="pseudo errors-list text-white">
              <li class="error" v-for="error in errors.all()" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  data() {
    return {
      name: "",
      address: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    validateBeforeSubmit(e) {
      e.preventDefault();

      this.$validator.validateAll().then(res => {
        if (res) {
          return this.submitForm();
        }
        console.log("incorrect!");
      });
    },
    async submitForm() {
      try {
        await this.$axios.$post("", {
          name: this.name,
          address: this.address,
          email: this.email,
          phone: this.phone
        });
        await new Promise(
          resolve => console.log(resolve),
          setTimeout(resolve, 2500)
        );
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style lang="sass" scoped>

.fullpage
  min-height: 100vh
  width: 100%
  overflow: hidden

.form-wrapper
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    position: relative
    font-size: 50px
    line-height: 65px
    max-width: 1380px
    margin: 0 auto
    text-align: center
    font: 
        family: $font-family-header

span
    display: inline-block
    position: relative
    font-size: 50px
    line-height: 65px
    margin-right: 10px

form
    padding: 0 10px

input
  background: 0 0
  border: none
  vertical-align: baseline
  border-bottom: 1.5px solid #fff
  color: $link-color
  min-width: 300px
  max-width: 500px
  text-align: center
  word-break: break-word
  white-space: pre-wrap
  transition: all 150ms cubic-bezier(0.645, 0.045, 0.355, 1)
  font:
    size: 50px
  line-height: 50px
  min-height: 50px
  height: 100%
  margin: 0 0 10px
  outline: 0 !important
  padding-left: 10px
  padding-right: 10px
  &::placeholder
    text-transform: uppercase
    line-height: 65px
    font:
        size: 14px
    letter-spacing: 1px

label
    margin-right: 10px

button
    position: absolute
    bottom: 0
    left: 50%
    transform: translate(-50%, 0)
    background: #fff
    border: 0 !important
    cursor: pointer
    transition: 2s cubic-bezier(.18,1,.21,1)
    width: 175px
    height: 100px
    background-color: #fff
    &:hover
        background-color: $link-color

.errors-list 
  position: absolute
  bottom: 120px
  padding: 0
  
.error
  font:
    size: 1rem
  line-height: 18px
  margin-bottom: 15px

</style>
