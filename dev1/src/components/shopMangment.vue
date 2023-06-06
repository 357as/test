<template>
    <div class="container">
        <div class="user_operation">
            <!-- 添加商品 -->
            <!-- 弹出框的触发按钮 -->
            <el-button @click="add_shop" class="add_user" slot="reference">
                新增<i class="el-icon-plus"></i>
            </el-button>
            <!-- 搜索商品 -->
            <div>
                <el-input v-model="search_value" placeholder="请输入需要搜索的信息" clearable></el-input>
                <el-button @click="search_shop" class="add_user" type="success">搜索
                    <i class="el-icon-search"></i>
                </el-button>
            </div>
        </div>
        <div class="table">
            <template>
                <el-table v-loading="loading" :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column label="品牌" width="80">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.brandName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="标题" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.dtitle }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="价格" width="100">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">￥{{ scope.row.actualPrice }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="图片" width="fit-content">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px; display: flex;">
                                <img v-for="(item, index) in scope.row.mainPic" :key="index"
                                    style="width: 100px; height: 100px;" :src="scope.row.mainPic" alt="">
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="pager">
            <pager :userdata="pass_userdata" @showdata="getshowdata"></pager>
        </div>
    </div>
</template>

<script>
import pager from './pager.vue'
import api from '../JS/api'
export default {
    components: {
        pager,
    },
    data() {
        return {
            showdata: [],
            tableData: [],
            search_value: "",
            loading: true,
        }
    },
    //计算属性
    computed: {
        pass_userdata() {
            if (this.search_shop()) {
                return this.search_shop()
            } else {
                return this.showdata
            }
        }
    },
    //方法
    methods: {
        //编辑
        handleEdit(index, row) {
            this.$message({
                message: '功能开发中，待开放',
                type: 'warning'
            });
            console.log(index, row);
        },
        //删除
        handleDelete(index, row) {
            this.$message({
                message: '功能开发中，待开放',
                type: 'warning'
            });
            console.log(index, row);
        },
        //接受子组件传值
        getshowdata(val) {
            this.tableData = val
        },
        //搜索
        search_shop() {
            if (!this.search_value) return
            let search_arr = []
            search_arr = this.showdata.filter((item, index) => {
                return item.dtitle.includes(this.search_value)
            })
            console.log(search_arr);
            return search_arr

        },
        //新增
        add_shop() {
            this.$message({
                message: '功能开发中，待开放',
                type: 'warning'
            });
        },


        //表格单数行高亮显示
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 == 1) {
                return 'warning-row';
            } else {
                return '';
            }
        }
    },
    // 生命周期
    created() {
        api.get1().then((val) => {
            this.showdata = val.list
            this.loading = false

        })
    }
}
</script>

<style lang="less" scoped>
.container {
    // margin-top: 20px;
    border-radius: @globalFillets;
    overflow: hidden;

    &>div {
        margin-top: 20px;
        border-radius: @globalFillets;
        overflow: hidden;
    }

    .pager {
        background-color: white;
        border-radius: @globalFillets;
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
}

/deep/.warning-row {
    background-color: #f0f9eb !important;

}

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
</style>