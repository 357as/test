<template>
  <div class="box">
    <input type="text" @keyup.enter="ck" v-model="val" placeholder="请输入" />
  </div>
</template>

<script>
import bus from "../js/bus";
export default {
  data() {
    return {
      val: "",
    };
  },
  methods: {
    ck() {
      bus.$emit("hdata", this.val);
    },
  },
};
</script>

<style lang="less" scoped>
input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #eadedeee;
  border-radius: 4px;
  padding: 4px 7px;
  margin-left: -17px;
  background-color: rgba(234, 212, 222, 0.544);
  &:focus {
    outline: none;
    border-color: rgba(80, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(82 168 236 / 60%);
  }
}
</style>