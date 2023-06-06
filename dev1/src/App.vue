<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  //计算属性
  computed: {

  },
  //监听
  watch: {

  },
  //方法
  methods: {

  },
  // 生命周期
  created() {
    if (this.$store.state.islogin) {
      this.$router.push({ name: 'content' })
    } else {
      this.$router.push({ name: 'login' })
    }
  },
}
</script>

<style scoped></style>