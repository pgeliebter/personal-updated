<template>
  <div class="about">
    <Navbar></Navbar>

    <Timeline :timeline="this.$store.state.timeline"></Timeline>
    <button @click="logCount()" class="btn btn-dark">Log the count</button>
    <button @click="increaseCount()" class="btn btn-dark">
      Increase the count
    </button>
  </div>
</template>
<script>
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';

export default {
  components: {
    Navbar: Navbar,
    Timeline: Timeline,
  },
  methods: {
    logCount: function () {
      console.log(this.$store.state.count);
    },
    increaseCount: function () {
      this.$store.commit('increment');
    },
  },
};
</script>
