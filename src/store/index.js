import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 1,
      timeline: [
        {
          dates: 'November 2017 - December 2018',
          description: 'Operations Analyst @ Comprehensive',
          icon: 'bi bi-briefcase-fill',
          id: 1,
        },
        {
          dates: 'January 2019 - February 2020',
          description: 'Senior Operations Analyst @ Comprehensive',
          icon: 'bi bi-building',
          id: 2,
        },
        {
          dates: 'September 2019 - Current',
          description: 'Start MBA @ Baruch Zicklin',
          icon: 'bi bi-eyeglasses',
          id: 3,
        },
        {
          dates: 'March 2020 - April 2021',
          description: 'Product Manager @ Comprehensive',
          icon: 'bi bi-phone',
          id: 4,
        },
        {
          dates: 'May 2021 - August 2021',
          description: 'Coding Bootcamp @ Actualize',
          icon: 'bi bi-journal-code',
          id: 5,
        },
        {
          dates: 'Septemeber 2021 - December 2021',
          description: 'Practicing Coding and Working on Projects!',
          icon: 'bi bi-menu-button-wide-fill',
          id: 6,
        },
        {
          dates: 'January 2022 - March 2022',
          description: 'Business Development Consultant @ Drizip in Chile',
          icon: 'bi bi-pin-map-fill',
          id: 7,
        },
      ],
      date: new Date(),
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
