<template>
  <section class="position-relative" id="next">
    <div class="container py-6 py-lg-12">
      <div class="row">
        <div class="col col-lg-10 col-xl-8 mx-lg-auto">
          <div class="d-flex align-items-center mb-5 mb-lg-9">
            <div class="flex-grow-1 border-bottom"></div>
            <h3 class="mb-0 flex-grow-0 px-3">My Pro Timeline</h3>
            <div class="flex-grow-1 border-bottom"></div>
          </div>
          <ol class="list-timeline-v list-unstyled">
            <!--/.Timeline-list-->
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">November 2017 - December 2018</small>
                <h6 class="mt-2">Operations Analyst @ Comprehensive</h6>
              </div>
            </li>
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-bag"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">January 2019 - February 2020</small>
                <h6 class="mt-2">Senior Operations Analyst @ Comprehensive</h6>
              </div>
            </li>
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">September 2019 - Current</small>
                <h6 class="mt-2">Start MBA @ Baruch Zicklin</h6>
              </div>
            </li>
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-vector-pen"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">March 2020 - May 2021</small>
                <h6 class="mt-2">Product Manager @ Comprehensive</h6>
              </div>
            </li>
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-bezier"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">May 2021 - August 2021</small>
                <h6 class="mt-2">Coding Bootcamp @ Actualize</h6>
              </div>
            </li>
            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-bezier"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted"
                  >Septemeber 2021 - December 2021
                </small>
                <h6 class="mt-2">Working on Projects!</h6>
              </div>
            </li>

            <!--/.timeline-item-->
            <li data-aos="fade-left">
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i class="bi bi-bezier"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">January 2022 - March 2022 </small>
                <h6 class="mt-2">Business Development Consultant @ Drizip</h6>
              </div>
            </li>
          </ol>
          <!--/.timeline-list-->
        </div>
      </div>
    </div>
    <!--/.container-full-width-->
  </section>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      lastMonth: new Date(),
    };
  },
  mounted() {
    this.lastMonthMethod();
  },
  methods: {
    lastMonthMethod() {
      let date = new Date();
      date.setMonth(this.date.getMonth() - 1);
      date.setFullYear(this.date.getFullYear());
      date.setDate(this.date.getDate());
      this.lastMonth = date;
    },
  },
};
</script>
