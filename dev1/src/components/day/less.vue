<template>
  <div>
    <h1>as</h1>
    <div class="father">
        <div class="child">child</div>
        <div class="bil">222</div>
    </div>
    <div class="fal father">333</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@maincolor: #000;
h1{ 
    background: @maincolor;
}
// .father{
//     .child{
//         color: aquamarine;
//     }
//     .bil{
//         color: blue;
//     }
// }
.father{
    // &代表的是紧邻的上一层元素
    &>div:nth-child(1){
        background: yellow;
    }
    &.fal{
        background: @red;
    }
}
// .father.fal{
// background: yellowgreen;
// } 
</style>