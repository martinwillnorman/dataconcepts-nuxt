import AOS from "aos";

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
    mirror: true,
    duration: 800,
    once: true
  });
};
