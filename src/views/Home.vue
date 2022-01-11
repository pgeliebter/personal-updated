<template>
  <body ref="scrollSections" class="bg-light">
    <!--Preloader Spinner-->
    <div class="spinner-loader bg-gradient-secondary text-white">
      <div class="spinner-border text-primary" role="status"></div>
      <span class="small d-block ms-2">Loading...</span>
    </div>

    <div data-scroll-container>
      <!--Header Start-->

      <Navbar></Navbar>
      <!--Main content-->
      <main>
        <!--page-hero-->
        <section class="position-relative overflow-hidden" data-scroll-section>
          <!--Blur background-->
          <svg
            class="position-absolute end-0 top-0 text-primary opacity-25"
            width="729"
            height="729"
            viewBox="0 0 729 729"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_Hero)">
              <path
                d="M182 182C182 229.932 191.441 277.396 209.784 321.679C228.127 365.963 255.013 406.201 288.906 440.094C322.799 473.987 363.037 500.873 407.321 519.216C451.604 537.559 499.068 547 547 547L547 182H182Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <filter
                id="filter0_Hero"
                x="0"
                y="0"
                width="729"
                height="729"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="91"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>

          <div class="container position-relative z-index-1">
            <div class="row vh-100 align-items-center">
              <div class="col-xl-10">
                <div class="d-inline-flex">
                  <ul class="js-hover-img">
                    <li class="js-hover-img-item">
                      <h1 class="js-hover-img-link display-3 mb-0">
                        <small class="fs-4 ls-1 fw-normal"
                          >👋 Hi, I Am Pinny Geliebter</small
                        >
                        <br />A Software And <br />Business Developer
                      </h1>
                      <img
                        src="/assets/img/team/3.jpg"
                        alt="Image"
                        class="img height-300 w-auto"
                      />
                    </li>
                  </ul>
                </div>
                <div class="scrollBtn">
                  <a href="#" class="small">Scroll Down</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="position-relative" id="projects" data-scroll-section>
          <div
            class="size-280 position-absolute end-0 bottom-0 me-3 mt-n4 bg-primary d-none d-md-block rounded-circle"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="6"
          ></div>
          <div class="py-7 py-lg-12 container position-relative z-index-1">
            <div class="row mb-7">
              <div class="col-lg-6">
                <h1 class="display-3">Featured work</h1>
                <p class="lead">
                  We’re a digital design studio connecting brands to people
                  through craft and culture.
                </p>
              </div>
            </div>
            <div class="row">
              <!--Card-->

              <div
                class="col-sm-6 mb-5"
                v-for="project in this.projects"
                :key="project.id"
                data-scroll
              >
                <a
                  :href="`#/project/${project.id}`"
                  class="d-block overflow-hidden position-relative card-hover"
                >
                  <div class="overflow-hidden card-reveal-effect">
                    <img
                      :src="
                        project.images.find(
                          (image) => image.type === 'homepage_thumbnail'
                        ).url
                      "
                      :alt="project.title"
                      class="img-fluid img-zoom"
                    />
                  </div>
                  <div class="card-body pt-4 pb-0">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <h5 class="fs-4 mb-1">{{ project.title }}</h5>
                      </li>
                      <li>
                        <span class="text-muted">{{
                          project.description
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="position-relative overflow-hidden" data-scroll-section>
          <div
            class="size-280 position-absolute start-0 bottom-0 me-3 mt-n4 bg-info d-none d-md-block rounded-circle"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="6"
          ></div>
          <div class="container py-7 py-lg-12 position-relative z-index-1">
            <div class="row justify-content-around">
              <div class="col-md-5 col-xl-4 mb-5 mb-md-0">
                <h4
                  class="display-3 mb-0"
                  data-scroll
                  data-scroll-direction="vertical"
                  data-scroll-speed="3"
                >
                  My Github Stats
                  <small class="text-muted"
                    >(from a custom backend scraper!)</small
                  >
                </h4>
              </div>
              <div class="col-md-7">
                <ul class="list-unstyled">
                  <li
                    class="d-flex align-items-center justify-content-between py-3 border-bottom"
                  >
                    <div class="d-flex align-items-center fw-semibold fs-6">
                      <span class="d-block me-3">
                        <i class="bi bi-github"></i>
                      </span>
                      Github commits today:
                    </div>
                    <p class="mb-0 h2">
                      {{ this.githubCommitInfo.todays_commits }}
                    </p>
                  </li>
                  <li
                    class="d-flex align-items-center justify-content-between py-3 border-bottom"
                  >
                    <div class="d-flex align-items-center fw-semibold fs-6">
                      <span class="d-block me-3">
                        <i class="bi bi-github"></i>
                      </span>
                      Github commits this week:
                    </div>
                    <p class="mb-0 h2">
                      {{ this.githubCommitInfo.this_week_commits }}
                    </p>
                  </li>
                  <li
                    class="d-flex align-items-center justify-content-between py-3 border-bottom"
                  >
                    <div class="d-flex align-items-center fw-semibold fs-6">
                      <span class="d-block me-3">
                        <i class="bi bi-github"></i>
                      </span>
                      Github commits last week:
                    </div>
                    <p class="mb-0 h2">
                      {{ this.githubCommitInfo.last_week_commits }}
                    </p>
                  </li>
                  <li
                    class="d-flex align-items-center justify-content-between py-3 border-bottom"
                  >
                    <div class="d-flex align-items-center fw-semibold fs-6">
                      <span class="d-block me-3">
                        <i class="bi bi-github"></i>
                      </span>
                      Github commits this year:
                    </div>
                    <p class="mb-0 h2">
                      {{ this.githubCommitInfo.this_year_commits }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!--Footer Start-->
      <footer class="position-relative" data-scroll-section>
        <!--Blur background-->
        <svg
          class="position-absolute end-0 top-0 text-info opacity-25"
          width="729"
          height="729"
          viewBox="0 0 729 729"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_alt)">
            <path
              d="M182 182C182 229.932 191.441 277.396 209.784 321.679C228.127 365.963 255.013 406.201 288.906 440.094C322.799 473.987 363.037 500.873 407.321 519.216C451.604 537.559 499.068 547 547 547L547 182H182Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_alt"
              x="0"
              y="0"
              width="729"
              height="729"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="91"
                result="effect1_foregroundBlur"
              />
            </filter>
          </defs>
        </svg>
        <div class="container py-7 py-lg-12 position-relative">
          <div class="row">
            <div class="col-12 col-md-7 h-100 me-auto mb-7 mb-md-0">
              <h2 class="display-3 mb-4 position-relative">
                Have a project? Let's work togethor
              </h2>
              <p class="lead mb-5">
                Write to me if you feel like a beer, want to place an order,
                want to offer me a job or have a million to give away.
              </p>
              <div class="d-flex align-items-center">
                pgeliebter [at] gmail [dot] com
              </div>
            </div>
            <div class="col-md-5">
              <div class="d-flex flex-column h-100 justify-content-between">
                <div class="text-lg-end">
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Facebook</a>
                  </div>
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Twitter</a>
                  </div>
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Linkedin</a>
                  </div>
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Behance</a>
                  </div>
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Instagram</a>
                  </div>
                  <div class="mb-3">
                    <a href="#!" class="link-hover-underline">Dribbble</a>
                  </div>
                </div>
                <div>
                  <p class="small text-muted text-md-end mb-0">
                    © Copyright. Pinny Geliebter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .container -->
      </footer>
    </div>
    <!--Cursor-->
    <div class="is-cursor">
      <div class="v-cursor"></div>
    </div>
  </body>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from '../components/Navbar.vue';
// import cheerio from 'cheerio';
import axios from 'axios';

export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      scrollIns: null,
      projects: this.$store.state.projects,
      githubCommitInfo: {},
    };
  },
  mounted() {
    const _self = this;
    this.$nextTick(function () {
      _self.initLocoScroll();
    });

    axios
      .get('http://localhost:3000/profiles')
      .then((res) => {
        console.log(res.data);
        this.githubCommitInfo = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new LocomotiveScroll({
        el: _self.$refs['scrollSections'],
        smooth: true,
        repeat: true,
        getSpeed: true,
        lerp: 0.08,
        smoothMobile: false,
      });
    },
  },
};
</script>
