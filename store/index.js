import Vuex from "vuex";
import axios from "axios";

class WpApi {
  constructor(siteurl) {
    this.apiBase = `${siteurl}/wp-json`;
  }

  works() {
    return axios
      .get(`${this.apiBase}/wp/v2/work`)
      .then(json => {
        console.log(json.data);
        return json.data;
      })
      .catch(e => {
        return { error: e };
      });
  }
}

const wp = new WpApi("http://localhost:8888/wordpress");

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      works: []
    }),
    mutations: {
      addWorks(state, payload) {
        state.works = payload;
      }
    },
    actions: {
      nuxtServerInit({ commit }) {
        return wp.works().then(res => {
          commit("addWorks", res);
        });
      }
    }
  });
};

export default createStore;
