<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input
          type="checkbox"
          :checked="item.status"
          @change="chang(index, $event)"
        />
        {{ item.name }}
        <button @click="delet(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "../js/bus";
export default {
  data() {
    return {
      list: [],
    };
  },
  watch: {
    list: {
      handler(val) {
        let checkleng = val.filter((item) => {
          return item.staus == true;
        });
        console.log(222);
        bus.$emit("sendLength", val.length, checkleng.length);
      },
      deep: true,
    },
  },
  created() {
    // 接收尾部,清除所有
    // 1.for
    bus.$on("clearAll", () => {
      console.log(1111);
      // for (let index = 0; index < this.list.length; index++) {
      //   this.list[index];
      //   if (this.list[index].staus == true) {
      //     this.list.splice(index, 1);
      //     index--;
      //   }
      // }
      this.list = this.list.filter((item) => {
        return item.staus !== true;
      });
    });

    // 2.filter
    // this.list = this.list.filter((item) => {
    //   return item.status !== true;
    // });

    bus.$on("hdata", (val) => {
      console.log("bdy", val);
      let a = {
        name: val,
        staus: null,
      };
      this.list.push(a);
    });
  },
  methods: {
    delet(index) {
      this.list.splice(index, 1);
    },
    chang(index, el) {
      this.list[index].staus = el.target.checked;
    },
  },
};
</script>

<style lang="less" scoped>
.body1 {
  padding-bottom: 40px;
}
ul {
  padding-inline-start: 0px;
  width: 560px;
  li {
    border-bottom: 1px solid #ddd;
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    button {
      float: right;
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: crnter;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%), 0 1px 2px rgb(0 0 0 /5%);
      border-radius: 4px;
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
  }
}
</style>