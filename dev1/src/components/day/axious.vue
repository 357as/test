<template></template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    // 第一种写法
    axios
      .get("https://sr.ffquan.cn/cms_pic/20210813/c4b0drf6vrkdtgsh7q100.gif")
      .then((res) => {
        console.log(res);
      });
    //   第二种写法
    axios({
      url: "https://sr.ffquan.cn/cms_pic/20210813/c4b0drf6vrkdtgsh7q100.gif",
      method: "GET",
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
</style>