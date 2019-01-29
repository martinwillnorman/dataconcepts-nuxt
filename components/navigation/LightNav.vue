<template>
  <header id="header" v-bind:class="{hidden: scrolled}">
    <div class="container">
      <nav data-aos="fade-down" data-aos-duration="500">
        <nuxt-link class="logo" v-bind:class="{ active: showMobileMenu }" to="/">dataconcepts</nuxt-link>
        <div class="menu-wrap">
          <ul class="menu pseudo">
            <li class="menu-item">
              <nuxt-link class="nav-link" v-on:click.native="myFilter" to="/work">Work</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/services">Services</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/insights">Insights</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/careers">Careers</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
          <a class="target-burger" v-on="{ click: myFilter}">
            <ul class="buns">
              <li class="bun" v-bind:class="{ active: showMobileMenu}"></li>
              <li class="bun" v-bind:class="{ active: showMobileMenu}"></li>
            </ul>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      scrolled: false
    };
  },
  methods: {
    myFilter() {
      this.showMobileMenu = !this.showMobileMenu;
      const el1 = document.body;
      const el2 = document.querySelector(".modal-menu");

      if (this.showMobileMenu) {
        el1.classList.add("hide-overflow");
        el2.classList.add("show");
      } else {
        el1.classList.remove("hide-overflow");
        el2.classList.remove("show");
      }
    },
    handleScroll(event) {
      this.scrolled = window.scrollY > 0;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="sass">

header
  width: 100%
  position: fixed
  z-index: 2000
  background-color: transparent
  display: flex
  transition: transform .4s ease

nav
  width: 100%
  height: 80px
  margin: 0 auto
  display: flex
  align-items: center

.hidden 
  transform: translate(0, -80px)
  
.logo 
  color: #fff
  font:
    size: 1.3rem
    weight: 400
    family: $font-family-header
  letter-spacing: 4px 
  padding-top: 4px

.logo.active
  color: #000

.nav-link
  color: #fff !important
  text-transform: uppercase
  font: 
    size: .8rem
    weight: 700
    family: $font-family-header
  position: relative
  letter-spacing: 2px 

.nav-link::after
  content: ""
  position: absolute
  top: 100%
  left: 0
  height: 1px
  width: 100%
  transform: translatey(10px)
  background: #fff
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

.nav-link:hover:after 
  opacity: 1
  transform: translatey(2px)

.target-burger
  width: 30px
  height: 30px
  align-items: center
  transition: all 0.5s ease
  cursor: pointer

.target-burger:hover .bun 

.buns
  flex: auto
  list-style: none
  margin: 0
  padding: 0
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1)
  transform: translateZ(0)
  color: #fff

.bun
  width: 100%
  height: 2px
  background-color: #fff
  position: absolute
  top: 50%
  margin-top: -0.75px
  transform: translateY(-3.75px) translateZ(0)
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1)

.bun:last-child
  transform: translateY(3.75px) translateZ(0)

.bun:first-child.active
  transform: rotate(45deg) translateZ(0)
  background-color: #000

.bun:last-child.active
  transform: rotate(-45deg) translateZ(0)
  background-color: #000
    
@media only screen and (min-width: 0) 
  .menu
    display: none

  .target-burger
    display: flex

@media only screen and (min-width: 1000px) 
  .target-burger
    display: none

  .menu
    display: flex

</style>
