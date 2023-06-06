<template>
  <div>
    <div v-for="item in arr1" :key="item" class="box" @click="ck(item)" :class="{gb:com==item}">{{ item }}</div>
    <!-- 父组件 -->
    <!-- <child2></child2>
    <comchild></comchild> -->
    <!-- 动态组件is改变属性名切换显示 -->
    <component :is="com"></component>
    <!-- 插槽 默认 具名 作用域 可以相当于我们的组件传值 -->
    <!-- 具名插槽当有很多的片段需要传值，可以用template来取名 -->
    <comchild>
      <template slot="name2"><p>我是具名插槽</p>{{obj[0].name}}<h1>我是具名插槽</h1></template>
    </comchild>
    <!-- 作用域插槽 -->
    <!-- scope可以接受全部传过来的值 子组件里面不止一个插槽 -->
    <!-- #名字/v-slot:名字 可以分别接受相对应传过来的值 如果传过来的是数组，就不能[]去拿值，但是可以通过v-for拿 -->
    <comchild>
<template #w1="obj111"><p>作用域1{{obj111.obj1}}</p></template>
<template v-slot:w2="obj"><p>作用域2{{obj.obj2}}</p></template>
    </comchild>
 <!-- <comchild scope="obj"> <p>我是具名插槽{{obj}}</p></comchild> -->
    <!-- <comchild>
      <p>插槽{{name}}</p>
      <h1 slot="name1">具名插槽</h1>
    </comchild> -->
  </div>
</template>

<script>
import child2 from './child2.vue';
import change from './change.vue'
export default {
data(){
    return{
      name:'张三',
      com:'child2',
      obj:[{name:'张三',id:12}],
      // obj:[],
      arr1:['change','child2','comchild']
    }
},
methods:{
ck(item){
this.com = item
}
},
components:{child2,change}
}
</script>
<!-- scoped 只在当前页面起作用 -->
<style scoped>
.box{
  width: 100px;
  height: 50px;
  display: inline-block;
  outline: 1px solid red;
 
}
.gb{
  background-color: black;
  color: white;
}
</style>