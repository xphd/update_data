<template>
  <div>
    <h1>Data View</h1>
    <p>{{myName}}</p>
    <button @click="requestData">Request Data</button>
    <li v-for="(person,index) in persons" :key="index">{{person}}</li>
  </div>
</template>

<script>
export default {
  name: "data-view",
  data() {
    return {
      myName: "alex",
      persons: ["a", "b", "c"]
    };
  },
  sockets: {
    responseData(persons) {
      //   console.log("responseData");
      this.persons = persons;
    }
  },
  methods: {
    requestData() {
      this.$socket.emit("requestData");
    }
  },
  mounted() {
    // this.$socket.emit("requestData");
  }
};
</script>

<style lang="scss" scoped>
</style>