<template>
    <div>
        <el-container>
            <!-- 左栏 -->
            <el-aside width="200px">
                <h3>后台管理系统</h3>
                <el-menu class="el-menu-vertical-demo">
                    <el-menu-item :class="selected_head == '首页' ? 'menu-item-active' : ''" @click="changeTitle('首页')">
                        <i class="el-icon-house"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item :class="selected_head == '用户管理' ? 'menu-item-active' : ''" @click="changeTitle('用户管理')">
                        <i class="el-icon-user"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item :class="selected_head == '商品管理' ? 'menu-item-active' : ''" @click="changeTitle('商品管理')">
                        <i class="el-icon-goods"></i>
                        <span slot="title">商品管理</span>
                    </el-menu-item>
                    <el-menu-item class="other" :class="selected_head == '其他' ? 'menu-item-active' : ''"
                        @click="changeTitle('其他')">
                        <i class="el-icon-goods"></i>
                        <span slot="title">
                            其他
                        </span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右栏 -->
            <el-container>
                <!-- 头部标题 -->
                <el-header>
                    <h4><span v-for="item, index in head" :key="index" :class="selected_head == item ? 'selected_head' : ''"
                            @click="changeTitle(item)">/{{ item }}</span></h4>
                </el-header>
                <!-- 主题内容组件 -->
                <!-- 主体内容 -->
                <el-main>
                    <div class="selected_title_main">
                        <button type="primary" v-for="item, index in head" :key="index" @click="changeTitle(item)"
                            :class="selected_head == item ? 'selected_title_main_active' : ''">
                            {{ item }}
                            <i class="el-icon-circle-close" v-on:click.stop="deleteTitle(index, item)"></i>
                        </button>
                    </div>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            islogin: true,
            head: ['首页'],
            selected_head: '首页',
            other: false,
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
        //切换大标题
        changeTitle(val) {
            if (val == '首页') {
                this.$router.push({ name: 'home' })

                this.selected_head = '首页'
                if (this.head.includes('首页')) return
                this.head.push('首页')

            } else if (val == '用户管理') {
                this.$router.push({ name: 'user' })

                this.selected_head = '用户管理'
                if (this.head.includes('用户管理')) return
                this.head.push('用户管理')

            } else if (val == '商品管理') {
                this.$router.push({ name: 'shop' })

                this.selected_head = '商品管理'
                if (this.head.includes('商品管理')) return
                this.head.push('商品管理')
            } else if (val == '其他') {
                this.$router.push({ name: 'other' })

                this.selected_head = '其他'
                if (this.head.includes('其他')) return
                this.head.push('其他')
            }
        },
        //主体区域删除标题
        deleteTitle(index, item) {
            this.head.splice(index, 1)
            if (this.head.length == 0) {
                this.head.push('首页')
                this.selected_head = '首页'
                this.$router.push({ name: 'home' })
            } else if (this.head.length != 0) {
                if (item == this.selected_head) {
                    this.$router.go(-1)
                    this.selected_head = this.head[index - 1]
                }
            }

        }
    },
    // 生命周期
    created() {
        this.$router.push({ name: 'home' })
    },
}
</script>
  
<style lang="less" scoped>
.el-header {
    background-color: #B3C0D1;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;

    &>h4>span:hover {
        cursor: pointer;
    }

    .selected_head {
        color: rgba(0, 0, 0);
    }
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 30px;



    .menu-item-active {
        color: @globalThemeColors;
    }

    h3 {
        border-radius: 3px;
        padding: 10px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        background-color: @globalThemeColors;
        color: white;

    }

    .el-menu {
        background-color: #33333300;
        font-weight: 500;
        border: none;
        margin-top: 30px;

        .el-menu-item,
        .el-submenu {
            border-radius: 10px;
            font-size: 15px;
            margin-top: 10px;
            transition: all 0.5s;
            overflow: hidden;
        }

        .el-menu-item>i {
            transition: all 0.25s;
            transform: scale(0.8) translateY(-1px);
        }

        .el-menu-item.is-active {
            color: @globalThemeColors;
        }

        .el-menu-item:hover {
            background-color: #ecf5ff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
        }

        .el-menu-item:hover>i {
            color: @globalThemeColors;
            transform: translateX(33px) scale(1.3);
        }

        .el-menu-item:hover>span span {
            font-size: 0px;
        }

        .el-menu-item>span i {
            // outline: 1px solid black;
            width: 100%;
            transition: all 0.25s;
        }

        .el-menu-item:hover>span i {
            transform: translateX(40px) scale(1.3);
        }

        .el-menu-item:hover>span {
            font-size: 0px;
        }

        .el-submenu:hover {
            background-color: black;

            .el-submenu__title {
                background-color: red;
            }
        }
    }
}

.el-main {
    background-color: #E9EEF3;
    color: #333;

    .selected_title_main {
        & i {
            margin-left: 10px;
            margin-right: -10px;
            transition: all 0.25s;
            border-radius: 50%;
        }

        &>button {
            overflow: hidden;
            padding: 5px 15px 5px 10px;
            width: fit-content;
            color: @globalThemeColors;
            border: 0.5px solid @globalThemeColors;
            font-size: 16px;
            border-radius: 3px;
            margin: 0px 10px 0px 0px;
        }

        & i:hover {
            transform: scale(1.3);
            color: red;
        }

        .selected_title_main_active {
            background-color: @globalThemeColors;
            color: white;
        }
    }

    .selected_mian {
        color: red;
    }
}
</style>