<template>
    <div class="container">
        <div class="user_operation">
            <!-- 添加用户 -->
            <el-popover placement="left" width="700" v-model="visible">
                <p><!-- 弹出框里面的html内容 -->
                    <el-form ref="form" v-model="form" label-width="80px">
                        <el-form-item label="入职日期">
                            <el-calendar data="yyyy-MM-dd" v-model="form.date">
                            </el-calendar>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄">
                            <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="form.gender">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="地址" placeholder="请输入地址">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.address">
                            </el-input>
                        </el-form-item>
                    </el-form>

                </p><!-- 弹出框的确定与取消 -->
                <div style="text-align: right; margin: 0">
                    <el-button class="add_user" size="mini" type="success" @click="get_adduser(false)">取消
                        <i class="el-icon-close"></i>
                    </el-button>
                    <el-button class="add_user" type="success" size="mini" @click="get_adduser(true)">确定
                        <i class="el-icon-upload2"></i></el-button>


                </div>
                <!-- 弹出框的触发按钮 -->
                <el-button class="add_user" slot="reference">新增<i class="el-icon-plus"></i></el-button>
            </el-popover>
            <!-- 搜索用户 -->
            <div>
                <el-input v-model="search_value" placeholder="请输入需要搜索的信息" clearable></el-input>
                <el-button class="add_user" type="success">搜索
                    <i @click="search_user" class="el-icon-search"></i>
                </el-button>
            </div>
        </div>
        <!-- 表格 -->
        <div class="tableBox">
            <el-table :data="showdata" style="width: 100%">
                <el-table-column label="id" prop="id" width="200">
                </el-table-column>
                <el-table-column label="Date" prop="date" width="120">
                </el-table-column>
                <el-table-column label="Name" prop="name" width="80">
                </el-table-column>
                <el-table-column label="age" prop="age" width="50">
                </el-table-column>
                <el-table-column label="sex" prop="gender" width="50">
                </el-table-column>
                <el-table-column label="address" prop="address">
                </el-table-column>
                <el-table-column align="center">
                    <template slot-scope="scope">
                        <!-- 编辑弹出框 -->
                        <el-popover placement="right" width="1000" trigger="click">
                            <div class="edit_popover">
                                <el-tooltip class="item" effect="dark" content="date日期" placement="top">
                                    <el-input placeholder="请输入date" v-model="edit_obj.date" clearable>
                                    </el-input>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="用户名字" placement="top">
                                    <el-input placeholder="请输入名字" v-model="edit_obj.name" clearable>
                                    </el-input>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="用户年龄" placement="top">
                                    <el-input placeholder="请输年龄" v-model="edit_obj.age" clearable>
                                    </el-input>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="用户性别" placement="top">
                                    <el-radio-group v-model="edit_obj.gender">
                                        <el-radio label="男"></el-radio>
                                        <el-radio label="女"></el-radio>
                                    </el-radio-group>
                                </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="用户地址" placement="top">
                                    <el-input placeholder="请输入内容" v-model="edit_obj.address" clearable>
                                    </el-input>
                                </el-tooltip>
                                <div>
                                    <el-button @click="edit_user_preservation" type="success" plain>保存</el-button>
                                </div>
                            </div>
                            <el-button size="mini" class="add_user" @click="edit_user(scope.$index, scope.row)"
                                slot="reference">编辑</el-button>
                        </el-popover>
                        <el-button size="mini" class="delete_user" @click="delete_user(scope.$index, scope.row)">
                            删除<i class="el-icon-circle-close"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页器 -->
        <div class="pagerBox">
            <my-pager :userdata="pass_userdata" @showdata="getshowdata"></my-pager>
        </div>
    </div>
</template>

<script>
import timeTranfrom from '../JS/timeTransfrom'
import addueer from '../JS/adduser'
import pager from './pager.vue'
export default {
    data() {
        return {
            data: [
            ],
            id: 1,
            showdata: [],
            search_value: '',
            visible: false,//新增用户按钮
            form: { //表单用户信息
                name: '',
                gender: '',
                age: '',
                date: '',
                address: ''
            },
            edit_obj: {},
            visible_edit: false,
        }
    },
    //计算属性
    computed: {
        pass_userdata: {
            get() {
                if (this.search_user()) {
                    return this.search_user()
                } else {
                    return this.data
                }
            },
            set(val) {
                return val
            }

        }
    },
    //方法
    methods: {

        getid(str) {
            var id = []
            str = str.split('')
            str.map((item, index) => {
                id[index] = item.charCodeAt(0)
            })
            return id.join('')
        },
        //接收子组件传值
        getshowdata(val) {
            console.log('1', val);
            this.showdata = val
        },
        //添加用户 
        get_adduser(bool) {
            this.visible = bool
            if (!bool) return
            if (this.form.date == '') {
                this.$message({
                    message: 'date输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.form.name == '') {
                this.$message({
                    message: '姓名输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.form.age == '' || Number(this.form.age) < 18) {
                this.$message({
                    message: '年龄输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.form.gender == '') {
                this.$message({
                    message: '性别输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.form.address == '') {
                this.$message({
                    message: '地址输入错误，请重试',
                    type: 'warning'
                });
            } else {
                //入职时间转化,唯一值id赋值
                this.form.date = timeTranfrom(this.form.date).slice(0, 10)
                this.form.id = (this.data.length + 1) + String(this.getid(this.form.name + this.form.gender + this.form.age))
                console.log(this.form);

                // 存入vuex
                this.$store.dispatch('actions_push_userdata_singe', this.form)
                this.data = this.$store.state.userdata

                //重置表单
                this.visible = false
                this.form = {
                    name: '',
                    gender: '',
                    age: '',
                    date: '',
                    address: ''
                }
                //消息提示
                this.$message({
                    message: '用户添加成功',
                    type: 'success'
                });
            }
        },
        //搜索用户
        search_user() {
            if (!this.search_value) return
            let search_arr = []
            search_arr = this.data.filter((item, index) => {
                return item.name.includes(this.search_value)
            })
            console.log(search_arr);
            return search_arr
        },
        //删除用户 
        delete_user(index, row) {
            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('actions_delete_user', row.id)
                this.data = this.$store.state.userdata
                this.$message({
                    type: 'success',
                    message: '删除成功!',
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },
        // 编辑用户
        edit_user(index, row) {
            this.visible_edit = true
            console.log(this.visible_edit);
            for (let i = 0; i < this.$store.state.userdata.length; i++) {
                if (this.$store.state.userdata[i].id == row.id) {
                    this.edit_obj = this.$store.state.userdata[i]
                }
            }
        },
        //编辑用户保存
        edit_user_preservation() {
            if (this.edit_obj.date == '') {
                this.$message({
                    message: 'date输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.edit_obj.name == '') {
                this.$message({
                    message: '姓名输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.edit_obj.age == '' || Number(this.edit_obj.age) < 18) {
                this.$message({
                    message: '年龄输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.edit_obj.gender == '') {
                this.$message({
                    message: '性别输入错误，请重试',
                    type: 'warning'
                });
            } else if (this.edit_obj.address == '') {
                this.$message({
                    message: '地址输入错误，请重试',
                    type: 'warning'
                });
            } else {
                this.$store.dispatch('actions_edit_user', this.edit_obj)
                this.$message({
                    message: '编辑修改成功',
                    type: 'success'
                });
                this.visible_edit = false
                console.log(this.visible_edit);
            }

        },

    },
    // 生命周期
    created() {
        //将vuex的值取出
        this.data = this.$store.state.userdata
    },
    components: {
        'my-pager': pager,
    }
}
</script>

<style lang="less" scoped>
.container {

    .el-form {
        background-color: #fff;
        padding: 10px;
        width: fit-content;

        .el-form-item {
            width: 200px;
        }
    }

    margin-top: 20px;

    &>div {
        // outline: 1px solid red;
        margin-top: 10px;
    }

    .user_operation {
        display: flex;
        justify-content: space-between;


        .el-input {
            width: 200px;
            margin-right: 10px;

            /deep/.el-input__inner:focus {
                border: 1px solid @globalThemeColors;
            }
        }
    }

    .pagerBox {
        background-color: #ffffff;
        position: relative;
        top: 0px;
    }
}

// 弹出框作为body子元素复用样式,故放在最外层
//多处复用add_user ,故放在最外层
.add_user {
    background-color: @globalThemeColors;
    color: white;
}

.add_user:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.add_user i {
    transition: all 0.25s;
    margin-left: 10px;
}

.add_user:hover i {
    transform: scale(1.3);
}

.delete_user {
    background-color: #f45454;
    color: white;
}

.delete_user:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.delete_user i {
    transition: all 0.25s;
    margin-left: 10px;
}

.delete_user:hover i {
    transform: scale(1.3);
}

/* 输入框获取交点的颜色 */
.el-input {
    width: 200px;
    margin-right: 10px;

    /deep/.el-input__inner:focus {
        border: 1px solid @globalThemeColors;
    }

}

/* 富文本获取焦点 */
/deep/.el-textarea__inner:focus {
    border: 1px solid @globalThemeColors;
}

/* 单选框选中后的字体颜色 */
/deep/ .el-radio__input.is-checked+.el-radio__label {

    color: @globalThemeColors !important;

}

/* 单选框选中后圆圈的背景颜色 */

/deep/ .el-radio__input.is-checked .el-radio__inner {

    background: @globalThemeColors !important;

    border-color: @globalThemeColors !important;

}

/* 日历样式 */
.el-calendar {
    outline: 1px solid rgba(0, 0, 0, 0.493);
}

/deep/ .el-calendar-table .el-calendar-day {
    height: 40px;
}

/* 编辑弹出框 */
.edit_popover {
    display: flex;

    .el-radio-group {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &>div {
        width: fit-content;
        margin: 0px 10px 0px 10px;
    }

    .el-button--success.is-plain:hover {
        background-color: @globalThemeColors;
    }
}
</style>