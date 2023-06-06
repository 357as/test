<template>
    <div>
{{son}}==={{msg}}
<!-- <button @click="ck">点击传送</button> -->
    </div>
</template>

<script>
import bus from '@/js/bus';
    export default {
        data(){
            return{
                son:'我是子组件',
                arr1:[10,9,8,7,6,5,4,3,2,1]
            }
        },
        props:['msg'],
        methods:{
            ck(){
                this.$emit('cent',this.arr1)
            }
        }
    }
</script>

<style scoped>

</style>