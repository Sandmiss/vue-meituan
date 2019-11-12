<template>
  <div class="page-index">
    <el-row>
        <el-col :span="5">
          <my-menu />
        </el-col>
        <el-col :span="19">
          <life />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
          <container :nav="istyle"/>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
          <container :nav="recomment"/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from '../components/index/menu.vue'
import Life from '../components/index/life.vue'
import Container from '../components/index/container.vue'

export default {
  data () {
    return {
      istyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
          tab: 'all',
          text: '全部'
        }, {
          tab: 'food',
          text: '约会聚餐'
        }, {
          tab: 'spa',
          text: '丽人SPA'
        }, {
          tab: 'movie',
          text: '电影演出'
        }, {
          tab: 'travel',
          text: '品质出游'
        }]
      },
      recomment: {
        class: 'youhui',
        title: '很优惠',
        list: [{
          tab: 'all',
          text: '全部'
        }, {
          tab: 'food',
          text: '约会聚餐'
        }, {
          tab: 'xiuxian',
          text: '休闲'
        }]
      }
    }
  },
  components: {
    MyMenu,
    Life,
    Container
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/index/index.scss'
</style>
