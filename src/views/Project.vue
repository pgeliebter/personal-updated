<template>
  <body>
    <!--Preloader Spinner-->
    <div class="spinner-loader bg-gradient-secondary text-white">
      <div class="spinner-border text-primary" role="status"></div>
      <span class="small d-block ms-2">Loading...</span>
    </div>
    <Navbar></Navbar>
    <!--Main content-->
    <main>
      <section class="position-relative">
        <div class="container pt-9 pb-7 py-lg-12">
          <div class="row">
            <div class="col-md-5 col-lg-4 mb-5 mb-lg-0">
              <div class="sticky-top pt-lg-3">
                <h1 class="mb-3 display-4">{{ this.project.title }}</h1>
                <p class="mb-0">
                  {{ this.project.description }}
                </p>
                <hr class="my-4" />
                <h3 class="h5">Links</h3>
                <ul class="list-unstyled mb-0">
                  <li
                    class="mb-2"
                    v-for="link in this.project.links"
                    :key="link"
                  >
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-boundary="window"
                      :title="link.url"
                      class="nav-link-style ms-2 fw-semibold"
                      :href="link.url"
                      >{{ link.name }}</a
                    >
                  </li>
                </ul>
                <hr class="my-4" />
                <h5 class="mb-3">Tools &amp; Technologies</h5>
                <div class="mb-4 d-flex flex-wrap align-items-center">
                  <p
                    v-for="technology in this.project.technologies"
                    :key="technology"
                    class="badge badge-pill bg-light text-muted me-2 mb-2"
                  >
                    {{ technology }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-7 ms-auto">
              <img
                src="assets/img/projects/case6.jpg"
                class="img-fluid mb-3"
                alt=""
                data-aos="fade-up"
                data-aos-once="false"
              />
              <img
                src="assets/img/projects/case2.jpg"
                class="img-fluid mb-3"
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              />
              <img
                src="assets/img/projects/case3.jpg"
                class="img-fluid mb-3"
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              />
              <img
                src="assets/img/projects/case4.jpg"
                class="img-fluid mb-3"
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              />
              <img
                src="assets/img/projects/case5.jpg"
                class="img-fluid mb-3"
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              />
              <img
                src="assets/img/projects/case1.jpg"
                class="img-fluid"
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="false"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        class="position-relative overflow-hidden position-relative text-white"
      >
        <svg
          class="position-absolute start-50 bottom-0 translate-middle-x text-dark"
          xmlns="http://www.w3.org/2000/svg"
          width="150%"
          height="130%"
          preserveAspectRatio="none"
          viewBox="0 0 189 105"
          fill="none"
        >
          <path
            fill-opacity="1"
            d="M180.928 83.1476C151.384 111.424 35.6911 112.547 7.27525 84.8329C-20.9151 57.1185 37.9464 0.566018 95.9058 0.004238C153.64 -0.557542 210.471 54.8714 180.928 83.1476Z"
            fill="currentColor"
          />
        </svg>
        <div class="container py-7 py-lg-12 position-relative">
          <div class="row mb-5 justify-content-center text-center">
            <div class="col-xl-9 col-lg-10">
              <h3 class="display-6 mb-0">Related projects</h3>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-md-6 col-lg-5 mb-4 mb-md-0">
              <a
                href="#!"
                class="card-over card-split-hover d-block card-hover overflow-hidden"
              >
                <img
                  src="assets/img/projects/lg5.jpg"
                  alt=""
                  class="img-fluid img-zoom"
                />
                <div
                  class="card-overlay p-4 p-lg-5 d-flex align-items-end text-white"
                >
                  <ul class="list-unstyled overlay-items">
                    <li>
                      <h5 class="mb-2 fs-4 splitting-up" data-splitting>
                        Awesome title
                      </h5>
                    </li>
                    <li>
                      <span class="splitting-up" data-splitting
                        >Awesome Subtitle</span
                      >
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-5">
              <a
                href="#!"
                class="card-over card-split-hover d-block card-hover overflow-hidden"
              >
                <img
                  src="assets/img/projects/lg4.jpg"
                  alt=""
                  class="img-fluid img-zoom"
                />
                <div
                  class="card-overlay p-4 p-lg-5 d-flex align-items-end text-white"
                >
                  <ul class="list-unstyled overlay-items">
                    <li>
                      <h5 class="mb-2 fs-4 splitting-up" data-splitting>
                        Awesome title
                      </h5>
                    </li>
                    <li>
                      <span class="splitting-up" data-splitting
                        >Awesome Subtitle</span
                      >
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- begin Back to Top button -->
    <a href="#" class="toTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 9"
        class="align-middle rotate-180"
        width="13"
        height="9"
      >
        <path
          fill="currentColor"
          d="M12.25 2.30062L10.8988 0.949371L6.5 5.33854L2.10125 0.949371L0.75 2.30062L6.5 8.05062L12.25 2.30062Z"
        ></path>
      </svg>
    </a>
  </body>
</template>
<script>
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar: Navbar,
  },
  data: function () {
    return {
      project: {},

      id: parseInt(this.$route.params.id),
    };
  },
  mounted() {
    this.project = this.$store.state.projects.find(
      (project) => project.id === this.id
    );
  },
};
</script>
