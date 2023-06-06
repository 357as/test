<template>
  <div id="box">
    <!-- 导航栏 -->
    <div class="head">
        <img src="../assets/题目.png" alt="">
    </div>
    <div class="middle">
        <div class="left">
            <img src="../assets/anther.png" alt="">
        </div>
        <div class="center"> </div>
        <div class="right">
            <img src="../assets/time.png" alt="">
        </div>
    </div>
    
    <div class="foot">  
        <div class="nameList">
            <button @click="ck1"></button>
        </div>
        <div class="start" @click="ck2"></div>
        <div class="answer" >
           
        </div>
</div>
<div class="ewm">
    <img src="../assets/二维码.png" alt="">
</div>
  </div>
</template>

<script>
new Vue({
    el:'#box',
    data(){

    },
    methods:{
        ck1(){}
    }
})
</script>

<style>
img{
    width: 100%;
    height: 100%;
}
#box{
    width: 88rem;
    height: 48rem;
   background-image: url(../assets/bc.jpg);
   

}
.head{
    margin: auto;
    width: 20%;
    height: 8%;
    border-radius: 20%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
font-size: 20px;
}
.middle{
    width: 100%;
    height: 70%;
   display: flex;
   justify-content: space-between;
  
}
.left{
    width: 12%;
    height: 90%;
   
    border-radius: 10%;
}
.center{
    width: 70%;
    height: 100%;
    background-image: url(../assets/infomation.png);
}
.right{
    width: 10%;
    height: 24%;
   
}


.foot{
    margin: auto;
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
 
}
.nameList{
    width: 26%;
    height: 64%;
    background-image: url(../assets/listname.png);
}
.start{
    width: 26%;
    height: 70%;
    background-image: url(../assets/start.svg);
}
.answer{
    width: 26%;
    height: 64%;
    background-image: url(../assets/answer.png);
}
.ewm{
    outline: 1px solid red;
    width: 10%;
    height: 17%;
    margin-top: -120px;
}
</style>