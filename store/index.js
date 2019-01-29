// import Vuex from "vuex";
// import axios from "axios";

// class WpApi {
//   constructor(siteurl) {
//     this.apiBase = `${siteurl}/wp-json`;
//   }

//   works() {
//     return axios
//       .get(`${this.apiBase}/wp/v2/work`)
//       .then(json => {
//         console.log(json.data);
//         return json.data;
//       })
//       .catch(e => {
//         return { error: e };
//       });
//   }

//   insights() {
//     return axios
//       .get(`${this.apiBase}/wp/v2/insights`)
//       .then(json => {
//         console.log(json.data);
//         return json.data;
//       })
//       .catch(e => {
//         return { error: e };
//       });
//   }

//   services() {
//     return axios
//       .get(`${this.apiBase}/wp/v2/services`)
//       .then(json => {
//         console.log(json.data);
//         return json.data;
//       })
//       .catch(e => {
//         return { error: e };
//       });
//   }

//   jobs() {
//     return axios
//       .get(`${this.apiBase}/wp/v2/jobs`)
//       .then(json => {
//         console.log(json.data);
//         return json.data;
//       })
//       .catch(e => {
//         return { error: e };
//       });
//   }
// }

// const wp = new WpApi("http://localhost:8888/");

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       works: [],
//       insights: [],
//       services: [],
//       jobs: []
//     }),
//     mutations: {
//       addWorks(state, payload) {
//         state.works = payload;
//       },
//       addInsights(state, payload) {
//         state.insights = payload;
//       },
//       addServices(state, payload) {
//         state.insights = payload;
//       },
//       addJobs(state, payload) {
//         state.insights = payload;
//       }
//     },
//     actions: {
//       nuxtServerInit({ commit }) {
//         const works = wp.works().then(res => {
//           commit("addWorks", res);
//         });
//       }
//     }
//   });
// };

// export default createStore;
