import { createStore } from "vuex";

export default createStore({
  state: {
    abouts: [],
    data: [],
  },
  getters: {
    abouts(state) {
      return state.abouts;
    },
    data(state) {
      return state.data;
    },
  },
  mutations: {
    setAbout(state, payload) {
      state.abouts = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async loadData(context) {
      const response = await fetch(
        `https://unitonecompan-default-rtdb.firebaseio.com/data.json`
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "Faild to fetch data");
        throw error;
      }
      const datas = [];
      for (const key in responseData) {
        const data = {
          id: key,
          imgUrl: responseData[key].imgUrl,
          title: responseData[key].title,
        };
        datas.push(data);
      }
      context.commit("setData", datas);
    },

    async loadAbout(context) {
      const response = await fetch(
        `https://unitonecompan-default-rtdb.firebaseio.com/about`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Faild i fetching data!"
        );
        throw error;
      }

      const abouts = [];
      for (const key in responseData) {
        const about = {
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
        };
        abouts.push(about);
      }
      context.commit("setAbout", abouts);
    },
  },
});
