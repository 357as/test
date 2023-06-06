<template>
    <div>
    <div v-for="(item, index) in questionList" :key="index">
         <div v-if="num === index">
           {{ item.subject }}
           <p class="mar10">答：{{ item.answer }}</p>
           <el-row>
             <el-col :span="3"
               ><el-button class="mar10" @click="before" :disabled="befDisabled"
                 >上一题</el-button
               ></el-col
             >
             <el-col :span="6"
               ><el-button class="mar10" @click="next" :disabled="nextDisabled"
                 >下一题</el-button
               ></el-col
             >
           </el-row>
         </div>
       </div>
    </div>
     </template>
   
  
   <script>
    
   export default {
   data() {
       return {
       preDisabled: true, //上禁用按钮
         nextDisabled: false, //下禁用按钮
         num: 0, //第几题
         questionList: [
        {
          subject: `<h3>1、资产、负债和所有者权益是（）。
            </h3>A、表示企业经营成果的会计要素 <br>
            </br> B、表示企业经营状况的会计要素<br>
            </br> &nbspC、表示企业财务状况的会计要素 <br>
            </br> D、表示企业现金流量的会计要素`,
          answer: "C",
        },
        {
          subject: `<h3>2、下列各项中引起资产和权益同时增加的经济业务是（）。</h3> A、购入材料，货款未付  <br></br> B、以银行存款支付采购办公用品款<br><br>&nbspC、以银行存款偿还银行借款<br><br> D、用银行存款购入机器一台`,
          answer: "A",
        },
        {
          subject: `<h3>3、不同形态的资产的流动性不同，其获利能力也就不同，下面说法中正确的是（）。</h3>A、流动性越高，其获利能力可能越高 <br><br>B、流动性越高，其获利能力可能越低 <br><br>C、流动性越低，其获利能力可能越低 <br><br>D、资产的获利能力与流动性成正比
`,
          answer: "B",
        },
        {
          subject: `<h3>4、管理会计的服务对象侧重于（　）。</h3>A、股东 <br><br>B、外部集团<br></br>C、债权人<br></br>D、企业内部的经营管理`,
          answer: "D",
        },
        {
          subject: `<h3>5、下列不需要进行会计处理的业务有（　）。<br></h3>A、用盈余公积转增资本<br><br>B、用资本公积转增资本<br><br>C、用税前利润补亏<br><br>D、用税后利润补亏<br><br>E、发放股票股利`,
          answer: "CDE",
        },
        {
          subject: `<h3>6 、外购资产，必须先通过（　）进行核算，然后再进行转固处理。</h3>`,
          answer: "在建工程",
        },
        {
          subject: `<h3>7、企业出售无形资产发生的净损失，应当计入（　）。<h3/>`,
          answer: "营业外支出",
        },
        {
          subject: `<h3>8、企业对未使用、不需用的固定资产也应计提折旧，计提的折旧计入（　）。</h3>`,
          answer: "管理费用",
        },
        {
          subject: `<h3>9、工资薪金百分八，超过部分可结转。（猜一个政策）</h3>`,
          answer: "职工教育经费",
        },
        {
          subject: `<h3>10、一子每月享一千，多个子女皆可享。（猜一个个税专项附加扣除项目）</h3>`,
          answer: "子女教育",
        },
        {
          subject: `<h3>11、交完房租不吃土，在沪一月一千五。（猜一个税专项附加扣除项目）</h3>`,
          answer: "住房租金",
        },
        {
          subject: `<h3>12、四项服务过半百，进项再抵十个点。（猜一个政策）</h3>`,
          answer: "加计抵减",
        },
      ],
       }
     },
     methods: {
       next() {
         this.preDisabled = false;
         if (this.num < this.questionList.length - 1) {
           this.num += 1;
         }
       },
       before() {
         if (this.num === 0) {
           this.num = 0;
         } else {
           this.num -= 1;
         }
       }
     },
     watch: {
       //第一题和最后一题禁用按钮
       num(now, old) {
         if (now == this.questionList.length - 1) {
           this.nextDisabled = true;
         } else {
           this.nextDisabled = false;
         }
         if (now < 1) {
           this.preDisabled = true;
         }
       }
     }
   }
   </script>
   