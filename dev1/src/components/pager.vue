<template>
    <div>
        <div class="pager">
            <div class="block">
                <el-pagination @current-change="changeindex" layout="prev, pager, next,total" :total="userdata.length"
                    :page-size="page_size">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current_page: 1,//当前页,
            page_size: 7,
        }
    },
    //计算属性   
    computed: {
        // 展示的数据
        showdata() {
            return this.userdata.slice(this.page_size * (this.current_page - 1), this.page_size * this.current_page)
        },
    },
    //监听
    watch: {
        current_page: {
            handler() {
                this.$emit('showdata', this.showdata)
            },
            immediate: true
        },
        userdata: {
            handler() {
                this.$emit('showdata', this.showdata)
            },
            immediate: true
        }
    },
    //方法
    methods: {
        //当前页变化时触发
        changeindex(index) {
            this.current_page = index
        }
    },
    // 生命周期
    created() {
    },
    props: ['userdata']
}
</script>

<style lang="less" scoped ></style>