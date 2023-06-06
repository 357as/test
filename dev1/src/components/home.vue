<template>
  <div class="container">
    <div class="left">
      <!-- 用户框 -->
      <div class="show_administrators">
        <div class="administrators">
          <div v-html="$store.state.administrators.image"></div>
          <div>
            <h3>{{ $store.state.administrators.name }}</h3>
            <span>{{ $store.state.administrators.jurisdiction }}</span>
            <div> <el-button @click="loginOut" style="margin-top: 10px;" size="mini" type="warning">退出登录</el-button></div>
          </div>
        </div>
        <div class="loginInformation">
          <div> <span>上次登录时间:</span> <span>{{ $store.state.administrators.lastLoginTime }}</span></div>
          <div> <span>上次登录地点:</span> <span>{{ $store.state.administrators.lastLoginLocation }}</span> </div>
        </div>
        <div></div>
      </div>
      <!-- 数量统计 -->
      <div class="quantityStatistics">
        <template>
          <el-table :data="homedata.mobilePhoneShipmentVolume" style="width: 100%">
            <el-table-column prop="name" label="厂商">
            </el-table-column>
            <el-table-column prop="day" label="日出货量">
            </el-table-column>
            <el-table-column prop="month" label="月出货量">
            </el-table-column>
            <el-table-column prop="total" label="总出货量">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <div class="right">
      <!-- 订单统计 -->
      <div class="orderStatus">
        <div class="paidOrders">
          <div>
            <div class="paidOrders_son">
              <i class="el-icon-success"></i>
            </div>
            <div>
              <div>￥3873</div>
              <div>今日支付订单</div>
            </div>
          </div>
          <div>
            <div class="paidOrders_son">
              <i class="el-icon-success"></i>
            </div>
            <div>
              <div>￥23722</div>
              <div>本月支付订单</div>
            </div>
          </div>
        </div>
        <div class="collectOrders">
          <div>
            <div class="collectOrders_son">
              <i class="el-icon-star-on"></i>
            </div>
            <div>
              <div>143</div>
              <div>今日收藏订单</div>
            </div>
          </div>
          <div>
            <div class="collectOrders_son">
              <i class="el-icon-star-on"></i>
            </div>
            <div>
              <div>3343</div>
              <div>本月收藏订单</div>
            </div>
          </div>
        </div>
        <div class="unpaidOrders">
          <div>
            <div class="unpaidOrders_son">
              <i class="el-icon-s-goods"></i>
            </div>
            <div>
              <div>￥4223</div>
              <div>今日未支付订单</div>
            </div>
          </div>
          <div>
            <div class="unpaidOrders_son">
              <i class="el-icon-s-goods"></i>
            </div>
            <div>
              <div>￥23343</div>
              <div>本月未支付订单</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 折线图 -->
      <div id="lineChart">
      </div>
      <!-- 柱状图 饼图 -->
      <div class="barChart_pieChart-box">
        <div id="barChart"></div>
        <div>
          <div id="pieChart"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import * as echarts from 'echarts';
import homedata from '@/JS/adddata';

export default {
  data() {
    return {
      homedata: {}
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
    //退出登录
    loginOut() {
      this.$store.commit('change_islogin', 0)
      this.$router.push({ name: 'login' })
      this.$message({
        type: 'success',
        message: '退出成功!',
      });
    }

  },
  // 生命周期
  created() {

  },
  mounted() {
    this.homedata = homedata()
    //折线图
    var mylineChart = echarts.init(document.getElementById('lineChart'));
    var option = {
      title: {
        text: "近七天出货量",
        bottom: '10px',
        right: '43%',
        subtextStyle: {
          transform: `translateX(-50 %)`,
        }
      },
      tooltip: {},
      legend: {
        data: this.homedata.mobilePhoneManufacturer
      },
      xAxis: {
        data: this.homedata.lastSevenDays
      },
      yAxis: {},
      series: [
        {
          name: this.homedata.mobilePhoneManufacturer[0],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[0]],
          stack: 'x'
        }, {
          name: this.homedata.mobilePhoneManufacturer[1],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[1]],
          stack: 'x'
        }, {
          name: this.homedata.mobilePhoneManufacturer[2],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[2]],
          stack: 'x'
        }, {
          name: this.homedata.mobilePhoneManufacturer[3],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[3]],
          stack: 'x'
        }, {
          name: this.homedata.mobilePhoneManufacturer[4],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[4]],
          stack: 'x'
        }, {
          name: this.homedata.mobilePhoneManufacturer[5],
          type: 'line',
          data: this.homedata.mylineChart_data[this.homedata.mobilePhoneManufacturer[5]],
          stack: 'x'
        }
      ]
    };
    mylineChart.setOption(option)

    //柱状图
    var mybarChart = echarts.init(document.getElementById('barChart'));
    var option_bar = {
      legend: {
      },
      data: this.homedata.barChart.legend,
      xAxis: {
        // data: ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7']
        type: 'category'
      },
      yAxis: {},
      dataset: {
        // 提供一份数据。
        source: this.homedata.barChart.data
      },
      series: [{ type: 'bar' }, { type: 'bar' }]
    }
    mybarChart.setOption(option_bar)

    //饼状图
    var mypieChart = echarts.init(document.getElementById('pieChart'));
    var option_pie = {
      legend: {
        orient: 'vertical',
        x: 'left',
        data: this.homedata.mobilePhoneManufacturer
      },
      title: {
        left: 'center',
        top: 'bottom',
        text: '最近一月销售占额',
        textStyle: {
          fontSize: 15,
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          data: this.homedata.salesProportionInThePastMonth
        }
      ]

    }
    mypieChart.setOption(option_pie)

    //响应式大小
    window.addEventListener('resize', function () {
      mylineChart.resize();
      mybarChart.resize();
      mypieChart.resize();
    });

  },
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .left {
    width: 33%;
    height: 900px;

    .show_administrators {
      width: 100%;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 10px;
      border-radius: @globalFillets;

      .administrators {
        display: flex;
        justify-content: space-between;

        &>div:last-child {
          width: 49%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &>div {
            width: 100%;
          }

          &>h3 {
            width: 100%;
            font-weight: 600;
          }

          &>span {
            width: 100%;
            font-size: 14px;

          }
        }
      }

      .loginInformation {
        margin-top: 20px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 14px;
        border-top: 1px solid rgba(0, 0, 0, 0.5);

        &>div {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .quantityStatistics {
      margin-top: 20px;
      background-color: white;
      overflow: hidden;
      border-radius: @globalFillets;
    }

  }

  .right {
    width: 65%;
    height: 1000px;
    // background-color: tomato;

    .orderStatus {
      height: 155px;
      display: flex;
      justify-content: space-between;

      &>div {
        width: 32%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &>div {
          width: 100%;
          height: 47%;
          background-color: rgb(255, 255, 255);
          display: flex;
          border-radius: @globalFillets;
          overflow: hidden;

          &>div {
            width: 50%;
            height: 100%;
          }

          .paidOrders_son {
            width: 30%;
            background-color: #2ec7c9;
            display: flex;
            justify-content: center;
            align-items: center;

            &>i {
              color: white;
              transform: scale(2);
            }
          }

          &>div:last-child {
            box-sizing: border-box;
            padding: 10px;

            &>div:first-child {
              font-size: 2vw;
              color: rgb(0, 0, 0);
            }

            &>div:last-child {
              font-size: 1vh;
              color: rgba(0, 0, 0, 0.5);
            }
          }
        }

        .collectOrders_son {
          background-color: #ffb980;
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

          &>i {
            color: white;
            transform: scale(2);
          }
        }

        .unpaidOrders_son {
          background-color: #5ab1ef;
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

          &>i {
            color: white;
            transform: scale(2);
          }
        }


      }


    }


    #lineChart {
      overflow: hidden;
      background-color: white;
      margin-top: 20px;
      border-radius: @globalFillets;
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 10px 10px 0px 10px;
    }

    .barChart_pieChart-box {
      overflow: hidden;
      margin-top: 20px;
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: space-between;

      &>div {
        width: 49%;
        background-color: white;
        border-radius: @globalFillets;
        box-sizing: border-box;
        padding: 10px 10px 0px 10px;
        height: 100%;
      }

      #pieChart {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 10px 10px 10px;
      }
    }



  }
}
</style>