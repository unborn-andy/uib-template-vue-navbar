<template>
  <b-container fluid class="pr-5">
    <h2 class="ml-4 mt-4 text-info">Home !!</h2>
  </b-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // msg: "No Message Received from Node-Red",
      obj: {}
    };
  },
  methods: {},

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Home:", newMsg);
    });
  },
};
</script>

<style scoped>
</style>