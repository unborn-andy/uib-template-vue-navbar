<template lang="html">
  <b-container fluid class="pr-5">
    <h2 class="ml-4 mt-4">Page4b</h2>
  </b-container>
</template>

<script>
export default {
  name: "page4b",
  data() {
    return {
      // msg: "No Message Received from Node-Red",
    };
  },
  methods: {},

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Page4b:", newMsg);
    });
  },
};
</script>

<style scoped>
</style>
