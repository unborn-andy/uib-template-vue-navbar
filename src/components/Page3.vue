<template>
  <b-container fluid class="pr-5">
    <h2 class="ml-4 mt-4">Page3</h2>
  </b-container>
</template>

<script>
export default {
  name: "page3",
  data() {
    return {
      // msg: "No Message Received from Node-Red",
    };
  },
  methods: {},

  mounted() {
    uibuilder.onChange("msg", (newMsg) => {
      console.info("Msg received from Node-RED server in Page3:", newMsg);
    });
  },
};
</script>

<style scoped>
</style>
