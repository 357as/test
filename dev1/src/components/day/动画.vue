<template>
  <div>
    <!-- 动画 -->
    <transition>
      <h1 v-show="isshow">你好</h1>
    </transition>
    <button @click="isshow = !isshow">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
h1 {
  width: 300px;
  background-color: red;
}
.v-enter,
.v-leave-to {
  transform: translateX(-300px);
}
.v-enter-active,
.v-leave-active {
  transition: transform 3s;
}
</style>