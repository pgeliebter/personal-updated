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
      projects: [
        {
          id: 1,
          images: [
            {
              url: 'https://i.ibb.co/wry6X6m/refer-everyone-1000x750.png',
              type: 'homepage_thumbnail',
              size: '1000x750',
            },
          ],
          title: 'Refer Everyone',
          description: `An app that allows marketers to create and manage viral referral campaigns.`,
          technologies: ['Ruby on Rails', 'Vue 2', 'PostgreSQL', 'Bootstrap 5'],
          links: [
            { name: 'Live App', url: 'https://refer-everyone.netlify.app/' },
            {
              name: 'Repo - Frontend',
              url: 'https://github.com/pgeliebter/refer-everyone-vue',
            },
            {
              name: 'Repo - Backend',
              url: 'https://github.com/pgeliebter/refer-everyone-rails',
            },
            {
              name: 'Wireframes - Lucidchart',
              url: 'https://lucid.app/lucidchart/bf468004-d934-46a4-bb6d-3d065937f369/view#',
            },
            {
              name: 'Agile board - Trello',
              url: 'https://trello.com/b/KMXE3eUl/pinny-g-capstone',
            },
            {
              name: 'Database normalization - Sheets',
              url: 'https://docs.google.com/spreadsheets/d/1eDZaRvh_zbERNaPPWmUIlAoWOr8BZVjpnHUBdtoo6o0/edit?usp=sharing',
            },
          ],
        },
        {
          id: 2,
          images: [
            {
              url: 'https://i.ibb.co/bHYYsBV/crypto-dreams-1000x750.png',
              type: 'homepage_thumbnail',
              size: '1000x750',
            },
          ],
          title: 'Crypto Dreams',
          description: `Track abritrage opotunites across many different crypto exchanges and trading pairs! Also include spot price.`,
          technologies: ['Ruby on Rails', 'Nuxt.js', 'Bootstrap 5'],
          links: [
            { name: 'Live App', url: 'https://crypto-dreams.netlify.app/' },
            {
              name: 'Frontend Repo',
              url: 'https://github.com/pgeliebter/crypto-dreams',
            },
            {
              name: 'Backend Repo',
              url: 'https://github.com/pgeliebter/crypto-dreams-backend',
            },
            {
              name: 'Wireframes',
              link: '',
            },
            {
              name: 'Agile board',
              link: '',
            },
          ],
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
