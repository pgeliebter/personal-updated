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
            <li
              v-for="item in this.timeline"
              :key="item.id"
              data-aos="fade-left"
            >
              <div class="timeline-icon bg-tint-primary rounded-circle">
                <!--ICON-->
                <i :class="item.icon"></i>
              </div>
              <!--/.timeline-icon-->
              <div class="d-block flex-column">
                <small class="text-muted">{{ item.dates }}</small>
                <h6 class="mt-2">{{ item.description }}</h6>
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
  props: {
    timeline: [],
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
