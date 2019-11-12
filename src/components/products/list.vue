<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key">{{ item.name }}</li>
    </ul>
    <el-row>
      <item 
      v-for="(item, index) in productList" 
      :key="index" :meta="item" />
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
import Item from "./item.vue";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序"
        },
        {
          key: "s-price",
          name: "价格排序"
        },
        {
          key: "s-commentNum",
          name: "人气最高"
        },
        {
          key: "s-score",
          name: "评价最高"
        }
      ],
      productList: []
    };
  },
  created() {
    api.getGoodsList().then( (res) => {
      this.productList = res.data.data;
    })
  },
  components: {
    Item
  }
};
</script>
