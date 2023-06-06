<template>
    <div class="container">
        <form class="loginBox" action="">
            <div>
                <el-input prefix-icon="el-icon-user" placeholder="请输入账号" v-model="fromdata.name" clearable></el-input>
            </div>
            <div>
                <el-input prefix-icon="el-icon-s-order" placeholder="请输入密码" v-model="fromdata.pass" show-password
                    clearable></el-input>
            </div>
            <div class="switch">
                <span>记住我</span>
                <el-switch v-model="fromdata.rememberMe" active-color="#2ba245">
                </el-switch>
            </div>
            <div>
                <div class="btn" @click="reset">重置</div>
                <div class="btn" @click="login">确定</div>
            </div>
        </form>
    </div>
</template>
<script>
import data from '@/JS/adduser';
import timeTransfrom from '../JS/timeTransfrom'
export default {
    data() {
        return {
            fromdata: {
                pass: '',
                name: '',
                rememberMe: false
            },
        };
    },
    methods: {
        //登录的处理函数
        login() {
            if (this.fromdata.name == this.$store.state.administrators.name && this.fromdata.pass == this.$store.state.administrators.password) {
                
                this.fromdata.islogin = 1
                this.$store.commit('push_userinfo', this.fromdata)
                const time = new Date()
                this.$store.commit('change_lastLoginTime', timeTransfrom(time))
                this.$router.push({ name: 'home' })
                this.$message({
                    showClose: true,
                    message: '登录成功',
                    type: 'success'
                });
            } else {
                this.$message.success('账号或密码错误,请重试');
            }
        },
        //重置框的处理函数
        reset() {
            this.fromdata = {
                pass: '',
                name: ''
            }
        }
    },
    mounted() {
        if (this.$store.state.userinfo.rememberMe) {
            this.fromdata = this.$store.state.userinfo
        }

    },
}
</script>

<style lang="less" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: #e9eef2;
    display: flex;
    justify-content: center;

    .loginBox {
        width: 20vw;
        height: fit-content;
        margin-top: 20vh;
        padding: 10px;
        background-color: white;
        border-radius: @globalFillets;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

        /deep/.el-input__inner:focus {
            border: 1px solid @globalThemeColors;
        }

        &>div:last-child {
            display: flex;
            justify-content: center;
        }

        .btn {
            padding: 5px 10px 5px 10px;
            margin: 0px 10px 0px 10px;
            font-size: 14px;
            border: 1px solid @globalThemeColors;
            color: @globalThemeColors;
            border-radius: @globalFillets;

        }

        .btn:hover {
            cursor: pointer;
            color: white;
            background-color: @globalThemeColors;
        }

        .switch {
            font-size: 13.5px;
            display: flex;

            &>span {
                transform: translateY(1px);
                margin-right: 5px;
            }

            .el-switch {
                transform: scale(0.9);
            }
        }

        &>div {
            margin: 10px;
        }
    }
}
</style>