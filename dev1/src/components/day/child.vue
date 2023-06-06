<template>
    <div>
{{comchild}}
<button @click="ck">点击</button>
<!-- <slot></slot>
<hr>
<slot></slot>
<h1 slot="name1">具名插槽</h1> -->
<slot name="name2"></slot>
<hr>
<slot :obj1="data1" name="w1"></slot>
<slot :obj2="obj" name="w2"></slot>
<!-- <slot :obj="obj"></slot> -->
    </div>
</template>

<script>
import bus from '../js/bus'
 export default {
data(){
    return{
        comchild:'全局组件',
        obj:'张三',
        data1:[{name:'王五'},{name:'李四'}],
        arr:[1,2,3,4,5,6,7,8,9,10]
    }
},
methods:{
    ck(){
        bus.$emit('cend',this.arr)
    }
}
 }
</script>

<style scoped>

</style>