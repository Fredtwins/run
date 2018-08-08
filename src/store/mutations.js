export default {
  changcity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {}
  },
  changlist(state, list) {
    state.city = list;
  }
}
