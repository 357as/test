<template>
  <div class="box1">
    <input type="checkbox" @change="changs" :checked="check" />
    <span>已完成:{{ cklength }}/全部:{{ alllength }}</span>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
import bus from "../js/bus";
export default {
  data() {
    return {
      alllength: 0,
      cklength: 0,
      check: false,
    };
  },
  created() {
    // 接收整个数组长度
    bus.$on("sendLength", (val, val1) => {
      console.log(val, val1);
      this.alllength = val;
      this.cklength = val1;
      if (val == val1 && val1 != 0) {
        this.check = true;
      } else {
        this.check = false;
      }
    });
  },

  methods: {
    changs(a) {
      bus.$emit("footstatus", a.target.checked);
      console.log(a.target.checked);
    },
    // 清除所有
    clearAll() {
      bus.$emit("clearAll");
      this.cklength = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.box1 {
  width: 560px;
  background-color: rgba(205, 215, 234, 0.658);

  button {
    float: right;
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%), 0 1px 2px rgb(0 0 0 /5%);
    border-radius: 4px;
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
}
</style>