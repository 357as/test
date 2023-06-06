<template>
  <div>
    <button @click="add">12</button>
    <button @click="add1">23</button>
  </div>
</template>

<script>
import { axiosApi } from "../js/api";

export default {
  data() {
    return {};
  },
  mounted() {
    axiosApi.get1().then((val) => {
      console.log(val);
    });
    axiosApi.post1(this.form).then((val) => {
      console.log(val);
    });
  },
  methods: {
    add() {
      axiosApi.get1().then((val) => {
        console.log(val);
      });
    },
    add1() {
      axiosApi.post1(this.form).then((val) => {
        console.log(val);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>