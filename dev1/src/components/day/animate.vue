<template>
  <div class="anima">
    <button type="button" @click="isShow = !isShow">TOGGLE</button>
    <transition
      enter-to-class="animate__rubberBand"
      leave-active-class="animate__swing"
    >
      <h1
        v-show="isShow"
        class="animate__animated animate__rubberBand animate__swing"
      >
        Hello, world！
      </h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "anima",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
  <style lang="less" scoped>
</style>