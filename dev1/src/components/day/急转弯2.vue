15:10<template>
  <div class="box">
    <div class="img1"><img src="./assets/assets/pc/tip.svg" alt="">
    </div>
    <div class="img3">
      <app1 style="width: 80%;height: 90%; color: aliceblue;font-size: 20px;margin-left: 100px;padding-top: 50px;"
        :ab="a">
      </app1>
    </div>
    <!-- 倒计时 -->
    <div class="img2">
      <p>{{ djs }}</p>
    </div>
    <div style="width: 100px;height: 600px;margin-top: -100px;margin-left: 100px;"><img
        src="./assets/assets/pc/anther.png" alt="" style="width: 100%;"></div>
    <div style="width: 150px;height: 80px;margin-top: -110px;margin-left: 480px;"><img
        src="./assets/assets/pc/listname.png" alt="" style="width: 100%;"></div>
    <div style="width: 150px;height: 80px;margin-top: -80px;margin-left: 680px;" @dblclick="ae" @click="ab" :class="d ? 'a1' : ''"><img
        :src="imgb" alt="" style="width: 100%;"></div>
    <div style="width: 150px;height: 80px;margin-top: -80px;margin-left: 880px;" @click="ae"><img src="./assets/assets/pc/answer.png"
        alt="" style="width: 100%;"></div>
    <div class="img4" v-show="e" @click="af">
      <app2 style=" color: aliceblue;font-size: 45px;margin-top: 300px;margin-left: 50%;" :ab="a"></app2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      djs: 10,
      imgb: require("./assets/assets/pc/start.svg"),
      i: 0,
      a: -1,
      b: 1,
      c: '',
      d: false,
      e:false,
      f:1
    }
  },
  methods: {
    ae(){
      this.d = true
    },
    //倒计时
    ab() {
      this.d = true
      if(this.a==-1){
        this.a++
      }
      //开始，下一题切换
      this.imgb = require("./assets/assets/pc/next.svg")
      //倒计时
      this.c = setInterval(() => {
        if (this.djs > 0) {
          this.djs--;
        }
        if (this.djs != 0) {
          this.d = true
        }
        else {
          clearTimeout(this.c)
          this.d = false
          //清除倒计时
          
        }
      }, 1000)
      //控制数据
      if (this.djs == 0) {
        if (this.a <= 12) {
          this.a++
        }
        this.djs = 10
      }

    },
    //显示答案
    ae(){
      if(this.djs==0){
        this.e=true
      }
     
    },
    //关闭答案
    af(){
      this.e=false
    }
  },
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.box {
  height: 710px;
  background: url(./assets/assets/pc/bc.jpg);
  background-size: 100% 100%;
  margin: auto;
  position: relative;
}

.img1 {
  width: 200px;
  margin: auto;

}

.img1>img {
  width: 100%;
  margin-top: 20px;
}

.img2 {
  width: 100px;
  height: 100px;
  margin-top: -600px;
  margin-left: 1200px;
  background: url(./assets/assets/pc/time.png);
  background-size: 100% 100%;
  font-size: 30px;
  text-align: center;
  color: aliceblue;
}
.img2>p{
  padding-top: 25px;
}
.img3 {
  width: 800px;
  height: 600px;
  background: url(./assets/assets/pc/infomation.png);
  background-size: 100% 100%;
  margin: auto;

}

.a1 {
  pointer-events: none;
}
.img4 {
  width: 100%;
  height: 100%;
  background-image: url(./assets/assets/pc/mask.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
}

</style>
