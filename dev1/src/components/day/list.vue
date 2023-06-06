<template>
  <div class="box">
    <header1></header1>
    <body1></body1>
    <div class="footer1">
        <footer1></footer1>
    </div>
  </div>
</template>

<script>
import header1 from './header1.vue'
import body1 from './body1.vue'
import footer1 from './footer1.vue'
export default {
body(){
    return{
    }
},
created(){

},
components:{
    header1,
    body1,
    footer1
}
}
</script>

<style lang="less" scoped>
.box{
width: 600px;
min-height: 10px;
margin: 0px auto;
padding: 10px;
border-radius: 5px;
position: relative;
border-radius: 5px;
.footer1{
    position: absolute;
    bottom: 0;
    width: 100%;
}
}
</style>