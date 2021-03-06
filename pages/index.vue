<template>
  <div class="__page-root">
    <div id="canvas-wrapper" class="full-page">
      <canvas></canvas>
      <div class="container hero-content">
        <div class="row">
          <div class="column center-content col-12">
            <div class="copy-wrapper text-white">
              <h1 class="hero-title" data-aos="fade-up">We are Data Concepts</h1>
              <h2
                class="hero-kicker"
                data-aos="fade-up"
                data-aos-delay="100"
              >Driving Digital Transformation</h2>
            </div>
          </div>
          <HeroArrow fill="#fff"/>
        </div>
      </div>
    </div>
    <div class="sections">
      <section data-aos="fade-up" class="padded-xxlarge">
        <div class="container">
          <div class="row">
            <div class="column col-12 center-content">
              <div class="copy-wrapper">
                <h6 class="section-subtitle">who we are</h6>
                <h1 class="section-title short">Technology is our craft.</h1>
                <p
                  class="section-kicker"
                >We're a team of storytellers, strategists, makers, builders, designers, and engineers working together with key alliances to bring a full slate of offerings and capabilities to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" class="padded-xxlarge black">
        <div class="container">
          <div class="row">
            <div class="column col-12 center-content">
              <div class="copy-wrapper dynamic-text-wrapper text-white">
                <h3>Need help</h3>
                <h3 id="dynamic-text"></h3>
                <h3>We're Here For You.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" class="padded-xlarge" style="display: block">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="copy-wrapper">
                <h6 class="section-subtitle">our services</h6>
                <h1 class="section-title">The things we do best.</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper services-wrapper">
          <div class="service">
            <nuxt-link class="service-link" to="/services/big-data"></nuxt-link>
            <div id="big-data-bround" class="service-background"></div>
            <div class="service-content">
              <h3 class="service-title">Big Data</h3>
            </div>
          </div>
          <div class="service">
            <nuxt-link class="service-link" to="/services/iot"></nuxt-link>
            <div id="iot-bround" class="service-background"></div>
            <div class="service-content">
              <h3 class="service-title">IoT</h3>
            </div>
          </div>
          <div class="service">
            <nuxt-link class="service-link" to="/services/cloud"></nuxt-link>
            <div id="cloud-bround" class="service-background"></div>
            <div class="service-content">
              <h3 class="service-title">Cloud</h3>
            </div>
          </div>
          <div class="service">
            <nuxt-link class="service-link" to="/services/business-intelligence"></nuxt-link>
            <div id="bi-bround" class="service-background"></div>
            <div class="service-content">
              <h3 class="service-title">Business Intelligence</h3>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="copy-wrapper see-more-wrapper">
                <nuxt-link class="see-more-link" to="/services">See More</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" class="padded-large black">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="copy-wrapper text-white">
                <h6 class="section-subtitle">our insights</h6>
                <h1 class="section-title short text-white">Trends that inform the world of tomorrow.</h1>
                <p class="section-kicker">Digital transformation demands new approaches.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper insights-wrapper" style="margin-top: 40px">
                <InsightContainer
                  title="A Quick Peek in to  Data Strategy"
                  summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
                  category="Data Strategy"
                  link="/insights/quick-peek"
                  imgsrc="/insight/dance-2.jpg"
                />
                <InsightContainer
                  link="/insights/blockchain-world"
                  category="Blockchain"
                  title="Our Insights on the World of Blockchain"
                  summary="Blockchain is one of the most dynamic inventions of this century. Though this revolutionary technology is still in its infancy, it has the potential to change how the world works."
                  imgsrc="/insight/bridge.jpg"
                />
                <InsightContainer
                  link="/insights/data-mining"
                  category="Big Data"
                  title="Extracting Actionable Insights from Data"
                  summary="Data mining is the extraction of actionable insights from data."
                  imgsrc="/insight/entry.jpg"
                />
              </div>
            </div>
            <div class="column col-12">
              <div class="copy-wrapper see-more-wrapper">
                <nuxt-link class="white see-more-link" to="/insights">See More</nuxt-link>
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
import HeroArrow from "../components/arrow/HeroArrow.vue";
import Subscribe from "../components/form/Subscribe.vue";
import HireUsFooter from "../components/footer/HireUsFooter.vue";
import InsightContainer from "../components/insight/InsightContainer.vue";

export default {
  layout: "light",
  components: {
    HeroArrow,
    Subscribe,
    HireUsFooter,
    InsightContainer
  },
  data() {
    return {
      phase: 0
    };
  },
  mounted() {
    // Canvas
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    };

    const colors = ["#F8F2F4", "#EAF2F4", "#FFF0FF", "#FFFEF2"];

    // Event Listeners
    addEventListener("mousemove", event => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;

      init();
    });

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Objects
    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = randomIntFromRange(2, 3) / 1000;
      this.distanceFromCenter = randomIntFromRange(
        canvas.width / 8 + 800,
        canvas.width / 8 - 100
      );
      this.lastMouse = { x: x, y: y };

      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.shadowColor = "#E3EAEF";
        c.shadowBlur = 3;
        c.fill();
        c.closePath();
      };

      this.update = function() {
        // Drag
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.03;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.03;

        this.radians += this.velocity;
        this.x =
          this.lastMouse.x +
          Math.cos(this.radians) * this.distanceFromCenter * 2;
        this.y =
          this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        this.draw();
      };
    }

    // Implementation
    let particles;
    function init() {
      particles = [];
      for (let i = 0; i < 200; i++) {
        particles.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            randomIntFromRange(1, 2),
            randomColor(colors)
          )
        );
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
      });
    }

    init();
    animate();

    // Dynamic Text
    let i = 0;
    let phrase;
    const dynamicText = document.getElementById("dynamic-text");

    let backTypeWriter = () => {
      let innerText = dynamicText.innerHTML;
      if (innerText.length > 0) {
        innerText = innerText.substring(0, innerText.length - 1);
        dynamicText.innerHTML = innerText;
        setTimeout(backTypeWriter, 40);
      } else {
        i = 0;
        typeWriter();
      }
    };

    let typeWriter = () => {
      if (this.phase === 0) {
        phrase = "integrating Cloud technology?";
        dynamicText.style.backgroundImage =
          "linear-gradient(135deg,#ff48a6 10%,#520881 90%)";
      } else if (this.phase === 1) {
        dynamicText.style.backgroundImage =
          "linear-gradient(135deg, #29d5ff 10%, #6c03a8 90%)";

        phrase = "implementing Agile strategy?";
      } else {
        dynamicText.style.backgroundImage =
          "linear-gradient(135deg,#93d522 10%,#033e8e 90%)";

        phrase = "developing Mobile solutions?";
      }
      if (i < phrase.length) {
        dynamicText.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      } else if (i === phrase.length) {
        if (this.phase === 0) {
          this.phase = 1;
          setTimeout(backTypeWriter, 2000);
        } else if (this.phase === 1) {
          this.phase = 2;
          setTimeout(backTypeWriter, 2000);
        } else {
          this.phase = 0;
          setTimeout(backTypeWriter, 2000);
        }
      }
    };

    typeWriter();
  }
};
</script>

<style lang="sass" scoped>
canvas 
  width: 100% 
  height: 100% 
  margin: 0
  padding: 0

#canvas-wrapper
  background-color: #000

.hero-title
  font:
    size: 5.5rem
    weight: 700
    family: $font-family-copy
  letter-spacing: 3px
  margin: 0
  line-height: 1.4

.hero-kicker
  font: 
    weight: 400
    family: $font-family-copy
  letter-spacing: 2px

.dynamic-text-wrapper
  display: flex
  flex-direction: column
  justify-content: space-between
  text-align: center
  > h3
    font-size: 4rem
    margin: 0
    color: #fff
    line-height: 2.2
    font-weight: 900

#dynamic-text
    width: 100%
    background-image: linear-gradient(135deg,#ff48a6 10%,#520881 90%)
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    display: inline-block
    min-height: 2.8rem
    margin: 0
    color: #ff48a6
    position: absolute
    top: 50%
    transform: translate(0, -50%)

.see-more-wrapper
  padding: 20px 0 0

.see-more-link
  font: 
    size: 1.2rem
    weight: 700
    family: $font-family-header
  position: relative
  letter-spacing: 2px 
  display: inline-block
  margin-top: 15px
  color: #000

.see-more-link::after
  content: ""
  background: #000
  position: absolute
  top: 100%
  left: 0
  height: 2px
  width: 100%
  -webkit-transform: translatey(10px)
  transform: translatey(10px)
  opacity: 0
  transition: transform 400ms cubic-bezier(0.29, 0.29, 0.42, 1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

.see-more-link:hover:after
  opacity: 1
  transform: translatey(2px)

.see-more-link.white
  color: #fff

.see-more-link.white::after
  background: #fff

#big-data-bround
  background-image: url(~assets/image/service/big-data.jpg)

#iot-bround
  background-image: url(~assets/image/service/iot.jpg)

#cloud-bround
  background-image: url(~assets/image/service/cloud.jpg)

#bi-bround
  background-image: url(~assets/image/service/bi.jpg)
</style>
